// profiles.jsx — multi-user profiles + export/import

// ─────────── storage core ───────────
const PROFILES_KEY = 'biolearn:profiles:v5';

function _read(key, fallback){
  try{ const r = localStorage.getItem(key); return r==null ? fallback : JSON.parse(r); }
  catch(e){ return fallback; }
}
function _write(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} }

function uk(id, base){ return `biolearn:u:${id}:${base}`; }
const DATA_BASES = ['bookmarks', 'srs'];

function _migrateOld(id){
  const map = { 'biolearn:bookmarks:v1':'bookmarks', 'biolearn:srs:v1':'srs' };
  for(const [oldK, base] of Object.entries(map)){
    const v = localStorage.getItem(oldK);
    if(v!=null && localStorage.getItem(uk(id, base))==null){
      try{ localStorage.setItem(uk(id, base), v); }catch(e){}
    }
  }
}

// Seed the starter profile with a little demo progress so badges/stats feel alive.
// Only writes when the user has no data yet (won't clobber migrated legacy data).
function _seedDefault(id){
  const cards = ['central dogma','codon','E-value','BLAST','phylogeny','GC content','FASTA','ORF','SNP','VCF','TPM','UMAP'];
  const lessons = ['dna:0','dna:1','dna:2','aln:0','protein:1','rnaseq:3'];
  if(localStorage.getItem(uk(id,'bookmarks'))==null){
    _write(uk(id,'bookmarks'), { cards, lessons });
  }
  if(localStorage.getItem(uk(id,'srs'))==null){
    const terms = [...cards, 'reverse complement','transcription','translation','splicing','SBS4','MSI','Kraken2','GSEA','Docker','conda','PCA','t-SNE','bootstrap','Neighbor Joining','pLDDT','Fst','CRISPR','Cas9','log2FoldChange','padj','DESeq2','volcano plot','16S rRNA','ASV','scRNA-seq','one-hot encoding','AUROC','HWE','VCF','reading frame'];
    const srs = {};
    const now = Date.now();
    terms.forEach((t,i)=>{
      srs[t] = { interval: 3, ease: 2.5, reps: 1 + (i % 4), due: now + ((i % 6) - 2) * 86400000, lastRating: 2 };
    });
    _write(uk(id,'srs'), srs);
  }
}

function ensureProfiles(){
  let p = _read(PROFILES_KEY, null);
  if(!p || !Array.isArray(p.users) || p.users.length===0){
    const id = 'u' + Date.now().toString(36);
    p = { users:[{ id, name:'我的學習', emoji:'🧬', createdAt: Date.now(), streak: 12, lastActive: _dayStr(Date.now()) }], activeId: id };
    _write(PROFILES_KEY, p);
    _migrateOld(id);
    _seedDefault(id);
  }
  if(!p.activeId || !p.users.find(u=>u.id===p.activeId)){
    p.activeId = p.users[0].id;
    _write(PROFILES_KEY, p);
  }
  return p;
}

function activeUserId(){ return ensureProfiles().activeId; }
function activeUser(){ const p = ensureProfiles(); return p.users.find(u=>u.id===p.activeId); }
function userKey(base){ return uk(activeUserId(), base); }

function _emit(){ try{ window.dispatchEvent(new Event('biolearn:userchange')); }catch(e){} }

function listUsers(){ return ensureProfiles().users.slice(); }

function addUser(name, emoji){
  const p = ensureProfiles();
  const id = 'u' + Date.now().toString(36) + Math.floor(Math.random()*99);
  p.users.push({ id, name: (name||'').trim() || '新使用者', emoji: emoji || '🧪', createdAt: Date.now() });
  p.activeId = id;
  _write(PROFILES_KEY, p);
  _emit();
  return id;
}

function switchUser(id){
  const p = ensureProfiles();
  if(p.users.find(u=>u.id===id)){ p.activeId = id; _write(PROFILES_KEY, p); _emit(); }
}

function renameUser(id, name, emoji){
  const p = ensureProfiles();
  const u = p.users.find(x=>x.id===id);
  if(u){ if(name!=null) u.name = name.trim()||u.name; if(emoji!=null) u.emoji = emoji; _write(PROFILES_KEY, p); _emit(); }
}

function deleteUser(id){
  const p = ensureProfiles();
  if(p.users.length<=1) return false; // keep at least one
  p.users = p.users.filter(u=>u.id!==id);
  DATA_BASES.forEach(b=>{ try{ localStorage.removeItem(uk(id,b)); }catch(e){} });
  if(p.activeId===id) p.activeId = p.users[0].id;
  _write(PROFILES_KEY, p);
  _emit();
  return true;
}

// progress summary for a user
function userStats(id){
  const bm = _read(uk(id,'bookmarks'), { cards:[], lessons:[] }) || { cards:[], lessons:[] };
  const srs = _read(uk(id,'srs'), {}) || {};
  const now = Date.now();
  const due = Object.values(srs).filter(v => (v.due||0) <= now).length;
  return {
    cards: (bm.cards||[]).length,
    lessons: (bm.lessons||[]).length,
    reviewed: Object.keys(srs).length,
    due,
  };
}

// derived progress (XP etc.) — all zero for a brand-new user
function progressFor(id){
  const s = userStats(id);
  const xp = s.reviewed * 8 + (s.cards + s.lessons) * 4;
  const u = ensureProfiles().users.find(x=>x.id===id);
  return { ...s, xp, streak: (u && u.streak) || 0 };
}

// daily streak — counts consecutive active days for the active user
function _dayStr(ts){ const d = new Date(ts); return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`; }
function touchStreak(){
  const p = ensureProfiles();
  const u = p.users.find(x=>x.id===p.activeId);
  if(!u) return 0;
  const today = _dayStr(Date.now());
  if(u.lastActive === today) return u.streak || 1;
  const yest = _dayStr(Date.now() - 86400000);
  u.streak = (u.lastActive === yest) ? ((u.streak||0) + 1) : 1;
  u.lastActive = today;
  _write(PROFILES_KEY, p);
  return u.streak;
}

// ─────────── export / import ───────────
function exportUser(id){
  const p = ensureProfiles();
  const u = p.users.find(x=>x.id===(id||p.activeId));
  if(!u) return;
  const payload = {
    app: 'biolearn',
    schema: 1,
    exportedAt: new Date().toISOString(),
    user: { name: u.name, emoji: u.emoji },
    data: {
      bookmarks: _read(uk(u.id,'bookmarks'), null),
      srs: _read(uk(u.id,'srs'), null),
    },
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type:'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const safe = (u.name||'biolearn').replace(/[^\w\u4e00-\u9fff-]+/g,'_');
  a.download = `biolearn-${safe}-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}

// import payload: create new user (default) or merge into active
function importPayload(payload, { asNew = true } = {}){
  if(!payload || payload.app !== 'biolearn' || !payload.data){
    throw new Error('這不是有效的 BioLearn 進度檔');
  }
  const p = ensureProfiles();
  let id;
  if(asNew){
    id = 'u' + Date.now().toString(36) + Math.floor(Math.random()*99);
    p.users.push({
      id,
      name: (payload.user && payload.user.name) || '匯入的紀錄',
      emoji: (payload.user && payload.user.emoji) || '📥',
      createdAt: Date.now(),
    });
  } else {
    id = p.activeId;
  }
  if(payload.data.bookmarks != null) _write(uk(id,'bookmarks'), payload.data.bookmarks);
  if(payload.data.srs != null) _write(uk(id,'srs'), payload.data.srs);
  p.activeId = id;
  _write(PROFILES_KEY, p);
  _emit();
  return id;
}

function importFromFile(file, opts){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onload = ()=>{
      try{ resolve(importPayload(JSON.parse(reader.result), opts)); }
      catch(e){ reject(e); }
    };
    reader.onerror = ()=>reject(new Error('讀取檔案失敗'));
    reader.readAsText(file);
  });
}

window.BioProfiles = {
  ensureProfiles, activeUserId, activeUser, userKey,
  listUsers, addUser, switchUser, renameUser, deleteUser, userStats, progressFor, touchStreak,
  exportUser, importPayload, importFromFile, uk,
};

// ─────────── useProfiles hook ───────────
function useProfiles(){
  const [tick, setTick] = React.useState(0);
  React.useEffect(()=>{
    const h = ()=>setTick(t=>t+1);
    window.addEventListener('biolearn:userchange', h);
    return ()=>window.removeEventListener('biolearn:userchange', h);
  }, []);
  const p = ensureProfiles();
  return { users: p.users, activeId: p.activeId, active: p.users.find(u=>u.id===p.activeId), _tick:tick };
}

// ─────────── Emoji picker presets ───────────
const PROFILE_EMOJI = ['🧬','🔬','🧪','🦠','🧫','🌱','🐭','🐟','📊','💡','🎓','⭐'];

// ─────────── AccountScreen ───────────
function AccountScreen({ dark, onBack }){
  const { users, activeId, active } = useProfiles();
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';
  const soft = dark?'#14160E':'#F6F4EC';

  const [adding, setAdding] = React.useState(false);
  const [newName, setNewName] = React.useState('');
  const [newEmoji, setNewEmoji] = React.useState('🧪');
  const [edit, setEdit] = React.useState(null); // { id, name, emoji }
  const [msg, setMsg] = React.useState(null);
  const fileRef = React.useRef(null);

  const flash = (text, ok=true)=>{ setMsg({ text, ok }); setTimeout(()=>setMsg(null), 2600); };

  const doAdd = ()=>{
    window.BioProfiles.addUser(newName, newEmoji);
    setNewName(''); setNewEmoji('🧪'); setAdding(false);
    flash('已新增並切換到新使用者');
  };
  const doDelete = (id, name)=>{
    if(!window.confirm(`確定刪除「${name}」？此使用者的收藏與複習進度將一併移除，無法復原。`)) return;
    const ok = window.BioProfiles.deleteUser(id);
    if(!ok) flash('至少需保留一個使用者', false);
    else flash('已刪除');
  };
  const onPickFile = (e)=>{
    const f = e.target.files && e.target.files[0];
    if(!f) return;
    window.BioProfiles.importFromFile(f, { asNew:true })
      .then(()=>flash('匯入成功，已建立新使用者'))
      .catch(err=>flash(err.message || '匯入失敗', false));
    e.target.value = '';
  };

  return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark} subtitle="PROFILES · 帳號與進度" title="帳號 / 進度" onBack={onBack}/>

      <div style={{ padding:'0 20px' }}>
        {/* toast */}
        {msg && (
          <div style={{
            marginBottom:12, padding:'10px 14px', borderRadius:12,
            background: msg.ok ? 'var(--accent-soft)' : '#FAE0DC',
            color: msg.ok ? 'var(--accent-ink)' : '#5E1F18',
            fontSize:13, fontFamily:'Noto Sans TC, Manrope', fontWeight:500,
          }}>{msg.text}</div>
        )}

        {/* current user */}
        <div style={{
          background:surf, borderRadius:18, padding:18, border:`1px solid ${line}`,
          display:'flex', alignItems:'center', gap:14, marginBottom:18,
        }}>
          <div style={{
            width:56, height:56, borderRadius:16, flexShrink:0,
            background:'var(--accent-soft)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:28,
          }}>{active?.emoji || '🧬'}</div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'var(--accent)', letterSpacing:1.2 }}>使用中</div>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:18, color:fg, lineHeight:1.2 }}>{active?.name}</div>
            {(()=>{ const s = window.BioProfiles.userStats(activeId); return (
              <div style={{ fontSize:11, color:muted, marginTop:3, fontFamily:"'JetBrains Mono',monospace", letterSpacing:.3 }}>
                收藏 {s.cards+s.lessons} · 複習 {s.reviewed} · 待複習 {s.due}
              </div>
            ); })()}
          </div>
        </div>

        {/* users list */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:10 }}>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg }}>切換使用者</div>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, letterSpacing:1 }}>{users.length} 位</div>
        </div>

        <div style={{ background:surf, borderRadius:16, border:`1px solid ${line}`, overflow:'hidden', marginBottom:12 }}>
          {users.map((u, i)=>{
            const on = u.id===activeId;
            const s = window.BioProfiles.userStats(u.id);
            return (
              <div key={u.id} style={{
                display:'flex', alignItems:'center', gap:12, padding:'12px 14px',
                borderBottom: i<users.length-1?`1px solid ${line}`:'none',
                background: on ? (dark?'rgba(14,147,132,.08)':'var(--accent-soft)') : 'transparent',
              }}>
                <button onClick={()=>window.BioProfiles.switchUser(u.id)}
                  style={{
                    flex:1, minWidth:0, display:'flex', alignItems:'center', gap:12,
                    background:'transparent', border:'none', cursor:'pointer', textAlign:'left', padding:0,
                  }}>
                  <div style={{
                    width:40, height:40, borderRadius:12, flexShrink:0,
                    background: soft, display:'flex', alignItems:'center', justifyContent:'center', fontSize:21,
                  }}>{u.emoji}</div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                      <span style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:14, color:fg, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{u.name}</span>
                      {on && <span style={{ fontSize:9, fontFamily:"'JetBrains Mono',monospace", padding:'1px 6px', borderRadius:4, background:'var(--accent)', color:'#fff', letterSpacing:.5, flexShrink:0 }}>使用中</span>}
                    </div>
                    <div style={{ fontSize:10.5, color:muted, marginTop:2, fontFamily:"'JetBrains Mono',monospace", letterSpacing:.3 }}>
                      收藏 {s.cards+s.lessons} · 複習 {s.reviewed}
                    </div>
                  </div>
                </button>
                <button onClick={()=>setEdit({ id:u.id, name:u.name, emoji:u.emoji })} title="改名稱"
                  style={{ width:32, height:32, borderRadius:9, border:`1px solid ${line}`, background:'transparent', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 20h4l10-10-4-4L4 16v4z" stroke={muted} strokeWidth="1.7" strokeLinejoin="round"/><path d="M13.5 6.5l4 4" stroke={muted} strokeWidth="1.7"/></svg>
                </button>
                <button onClick={()=>window.BioProfiles.exportUser(u.id)} title="匯出此使用者進度"
                  style={{ width:32, height:32, borderRadius:9, border:`1px solid ${line}`, background:'transparent', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 15l-4-4M12 15l4-4M5 19h14" stroke={muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                {users.length>1 && (
                  <button onClick={()=>doDelete(u.id, u.name)} title="刪除"
                    style={{ width:32, height:32, borderRadius:9, border:`1px solid ${line}`, background:'transparent', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 7h14M10 7V5h4v2M6 7l1 13h10l1-13" stroke="#C8504A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* rename form */}
        {edit && (
          <div style={{ background:surf, borderRadius:16, border:`1px solid var(--accent)`, padding:14, marginBottom:14 }}>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:14, color:fg, marginBottom:10 }}>編輯使用者</div>
            <input value={edit.name} onChange={e=>setEdit({ ...edit, name:e.target.value })} placeholder="輸入名稱" maxLength={20}
              style={{ width:'100%', padding:'10px 12px', borderRadius:10, border:`1px solid ${line}`, background:soft, color:fg, fontFamily:'Noto Sans TC, Manrope', fontSize:14, outline:'none', boxSizing:'border-box' }}/>
            <div style={{ display:'flex', flexWrap:'wrap', gap:6, margin:'10px 0' }}>
              {PROFILE_EMOJI.map(em=>(
                <button key={em} onClick={()=>setEdit({ ...edit, emoji:em })} style={{
                  width:36, height:36, borderRadius:10, fontSize:19, cursor:'pointer',
                  border:`1.5px solid ${edit.emoji===em?'var(--accent)':line}`,
                  background: edit.emoji===em?'var(--accent-soft)':soft,
                }}>{em}</button>
              ))}
            </div>
            <div style={{ display:'flex', gap:8 }}>
              <button onClick={()=>setEdit(null)} style={{
                flex:1, padding:'11px', borderRadius:11, border:`1px solid ${line}`, background:'transparent',
                color:fg, fontWeight:600, fontSize:13, fontFamily:'Manrope, Noto Sans TC', cursor:'pointer',
              }}>取消</button>
              <button onClick={()=>{
                  window.BioProfiles.renameUser(edit.id, edit.name, edit.emoji);
                  setEdit(null); flash('已更新名稱');
                }} style={{
                flex:2, padding:'11px', borderRadius:11, border:'none', background:'var(--accent)',
                color:'#fff', fontWeight:600, fontSize:13, fontFamily:'Manrope, Noto Sans TC', cursor:'pointer',
              }}>儲存</button>
            </div>
          </div>
        )}

        {/* add user */}
        {adding ? (
          <div style={{ background:surf, borderRadius:16, border:`1px solid ${line}`, padding:14, marginBottom:18 }}>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:14, color:fg, marginBottom:10 }}>新增使用者</div>
            <input value={newName} onChange={e=>setNewName(e.target.value)} placeholder="輸入名稱" maxLength={20}
              style={{ width:'100%', padding:'10px 12px', borderRadius:10, border:`1px solid ${line}`, background:soft, color:fg, fontFamily:'Noto Sans TC, Manrope', fontSize:14, outline:'none', boxSizing:'border-box' }}/>
            <div style={{ display:'flex', flexWrap:'wrap', gap:6, margin:'10px 0' }}>
              {PROFILE_EMOJI.map(em=>(
                <button key={em} onClick={()=>setNewEmoji(em)} style={{
                  width:36, height:36, borderRadius:10, fontSize:19, cursor:'pointer',
                  border:`1.5px solid ${newEmoji===em?'var(--accent)':line}`,
                  background: newEmoji===em?'var(--accent-soft)':soft,
                }}>{em}</button>
              ))}
            </div>
            <div style={{ display:'flex', gap:8 }}>
              <button onClick={()=>{ setAdding(false); setNewName(''); }} style={{
                flex:1, padding:'11px', borderRadius:11, border:`1px solid ${line}`, background:'transparent',
                color:fg, fontWeight:600, fontSize:13, fontFamily:'Manrope, Noto Sans TC', cursor:'pointer',
              }}>取消</button>
              <button onClick={doAdd} style={{
                flex:2, padding:'11px', borderRadius:11, border:'none', background:'var(--accent)',
                color:'#fff', fontWeight:600, fontSize:13, fontFamily:'Manrope, Noto Sans TC', cursor:'pointer',
              }}>建立</button>
            </div>
          </div>
        ) : (
          <button onClick={()=>setAdding(true)} style={{
            width:'100%', padding:'13px', borderRadius:14, marginBottom:18,
            border:`1.5px dashed ${dark?'#3A3D39':'#CDC9BD'}`, background:'transparent',
            color:'var(--accent)', fontWeight:600, fontSize:14, fontFamily:'Manrope, Noto Sans TC', cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center', gap:8,
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            新增使用者
          </button>
        )}

        {/* export / import */}
        <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>備份與還原</div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
          <button onClick={()=>window.BioProfiles.exportUser(activeId)} style={{
            padding:'14px 12px', borderRadius:14, background:surf, border:`1px solid ${line}`,
            cursor:'pointer', textAlign:'left', display:'flex', flexDirection:'column', gap:8,
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 15l-4-4M12 15l4-4M5 19h14" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div>
              <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:13.5, color:fg }}>匯出進度</div>
              <div style={{ fontSize:10.5, color:muted, marginTop:2, fontFamily:'Noto Sans TC' }}>下載目前使用者 JSON</div>
            </div>
          </button>
          <button onClick={()=>fileRef.current && fileRef.current.click()} style={{
            padding:'14px 12px', borderRadius:14, background:surf, border:`1px solid ${line}`,
            cursor:'pointer', textAlign:'left', display:'flex', flexDirection:'column', gap:8,
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 15V3M12 3l-4 4M12 3l4 4M5 19h14" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div>
              <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:13.5, color:fg }}>匯入紀錄</div>
              <div style={{ fontSize:10.5, color:muted, marginTop:2, fontFamily:'Noto Sans TC' }}>從 JSON 建立新使用者</div>
            </div>
          </button>
        </div>
        <input ref={fileRef} type="file" accept="application/json,.json" onChange={onPickFile} style={{ display:'none' }}/>

        <div style={{
          marginTop:14, padding:'12px 14px', borderRadius:12,
          background:soft, border:`1px dashed ${line}`,
          fontSize:11.5, color:muted, fontFamily:'Noto Sans TC', lineHeight:1.6,
        }}>
          進度（收藏、間隔重複複習紀錄）儲存在這台裝置的瀏覽器中。換裝置或清除瀏覽器資料前，記得先「匯出進度」，到新裝置再「匯入紀錄」。
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { useProfiles, AccountScreen, PROFILE_EMOJI });
