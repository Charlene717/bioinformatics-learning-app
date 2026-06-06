// widgets.jsx — shared atoms + interactive widgets

// ─────────── Tokens helpers ───────────
const ACCENTS = {
  teal:   { name:'青松石', accent:'#0E9384', soft:'#DCF1ED', deep:'#064E47', grad:'linear-gradient(135deg,#0E9384,#6CD0A5)' },
  indigo: { name:'靛藍',   accent:'#4F46E5', soft:'#E0E1FB', deep:'#221F66', grad:'linear-gradient(135deg,#4F46E5,#7EA1FF)' },
  coral:  { name:'珊瑚',   accent:'#D9594C', soft:'#FAE0DC', deep:'#5E1F18', grad:'linear-gradient(135deg,#D9594C,#F2A488)' },
  magenta:{ name:'品紅',   accent:'#A5318D', soft:'#F5DCED', deep:'#4A1640', grad:'linear-gradient(135deg,#A5318D,#E08EC6)' },
};
const BASE_COLORS = { A:'#E25858', T:'#4F94D8', G:'#EAA532', C:'#4FB37E', U:'#9C77C7', N:'#A8A89B', '-':'#C8C4B6' };
const AA_GROUPS = {
  hydrophobic:{ color:'#E0B848', aas:'AVILMFWPGY' },
  polar:      { color:'#4FB37E', aas:'STCNQ' },
  pos:        { color:'#4F94D8', aas:'KRH' },
  neg:        { color:'#E25858', aas:'DE' },
};

// ─────────── BaseChip ───────────
function BaseChip({ b, size=22, dim=false, match=null, dark=false }) {
  const col = BASE_COLORS[b] || BASE_COLORS.N;
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', justifyContent:'center',
      width: size, height: size, borderRadius: 5,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: size*0.55, fontWeight: 700,
      background: dim ? (dark?'rgba(255,255,255,.05)':'rgba(0,0,0,.04)') : col + (match===false?'':''),
      color: dim ? (dark?'#7C7E78':'#94928A') : '#fff',
      opacity: match===false ? .35 : 1,
      letterSpacing:0,
    }}>{b}</span>
  );
}

// ─────────── SequenceStrip ───────────
function SequenceStrip({ seq, highlight=null, size=22, gap=2, label=null, dark=false }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
      {label && <div style={{
        fontFamily:"'JetBrains Mono',monospace", fontSize:11,
        color: dark?'#C9C5B6':'#707974', width:34,
      }}>{label}</div>}
      <div style={{ display:'flex', gap }}>
        {seq.split('').map((b,i)=>(
          <BaseChip key={i} b={b} size={size}
            dim={highlight && !highlight[i]} dark={dark}/>
        ))}
      </div>
    </div>
  );
}

// ─────────── ProgressRing ───────────
function ProgressRing({ pct=0, size=44, stroke=4, color='var(--accent)', track='rgba(0,0,0,.08)' }) {
  const r = (size-stroke)/2;
  const C = 2*Math.PI*r;
  return (
    <svg width={size} height={size}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={track} strokeWidth={stroke}/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color}
        strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={`${C*pct} ${C}`}
        transform={`rotate(-90 ${size/2} ${size/2})`}/>
    </svg>
  );
}

// ─────────── ProgressBar ───────────
function ProgressBar({ pct=0, color='var(--accent)', height=6, track='rgba(0,0,0,.08)' }) {
  return (
    <div style={{ width:'100%', height, background:track, borderRadius:99, overflow:'hidden' }}>
      <div style={{
        width:`${Math.round(pct*100)}%`, height:'100%',
        background:color, borderRadius:99,
        transition:'width .6s cubic-bezier(.2,.7,.2,1)',
      }}/>
    </div>
  );
}

// ─────────── DnaIcon (used in cards) ───────────
function DnaIcon({ size=20, color='currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 3c0 5 14 5 14 10s-14 5-14 10" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M19 3c0 5-14 5-14 10s14 5 14 10" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M7 6h10M7 18h10M8.5 10h7M8.5 14h7" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity=".5"/>
    </svg>
  );
}

// ─────────── BLOSUM62-ish simple scoring for AA, identity for DNA ───────────
function alignScore(a, b, type='dna'){
  if(a===b) return type==='dna'? 1 : 2;
  if(a==='-'||b==='-') return -1;
  return -1;
}

// Quick global alignment (Needleman-Wunsch) for short demo
function nwAlign(s1, s2, type='dna'){
  const m=s1.length, n=s2.length;
  const M = Array.from({length:m+1},()=>new Array(n+1).fill(0));
  const T = Array.from({length:m+1},()=>new Array(n+1).fill(0));
  const gap=-1;
  for(let i=0;i<=m;i++){ M[i][0]=i*gap; T[i][0]=1; }
  for(let j=0;j<=n;j++){ M[0][j]=j*gap; T[0][j]=2; }
  T[0][0]=0;
  for(let i=1;i<=m;i++)for(let j=1;j<=n;j++){
    const d = M[i-1][j-1] + alignScore(s1[i-1], s2[j-1], type);
    const u = M[i-1][j] + gap;
    const l = M[i][j-1] + gap;
    const mx = Math.max(d,u,l);
    M[i][j]=mx;
    T[i][j] = mx===d ? 0 : mx===u ? 1 : 2;
  }
  let a1='', a2='', i=m, j=n;
  while(i>0||j>0){
    const t=T[i][j];
    if(t===0){ a1=s1[i-1]+a1; a2=s2[j-1]+a2; i--; j--; }
    else if(t===1){ a1=s1[i-1]+a1; a2='-'+a2; i--; }
    else { a1='-'+a1; a2=s2[j-1]+a2; j--; }
  }
  return { a1, a2, score: M[m][n] };
}

// ─────────── SequenceAligner widget ───────────
function SequenceAligner({ dark=false }){
  const [s1, setS1] = React.useState('ATGCGTACG');
  const [s2, setS2] = React.useState('ATGCTACG');
  const [running, setRunning] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const result = React.useMemo(()=>nwAlign(s1.toUpperCase().slice(0,12), s2.toUpperCase().slice(0,12)), [s1,s2]);
  const len = result.a1.length;

  React.useEffect(()=>{
    if(!running) return;
    if(step>=len){ setRunning(false); return; }
    const t = setTimeout(()=>setStep(step+1), 280);
    return ()=>clearTimeout(t);
  }, [running, step, len]);

  const reset = ()=>{ setStep(0); setRunning(true); };

  const match = (i)=> i<step && result.a1[i]===result.a2[i] && result.a1[i]!=='-';
  const gap   = (i)=> i<step && (result.a1[i]==='-'||result.a2[i]==='-');
  const mismatch = (i)=> i<step && !match(i) && !gap(i);

  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';

  const matches = [...Array(len).keys()].filter(i=>i<step && match(i)).length;
  const identity = step ? Math.round(matches/step*100) : 0;

  return (
    <div style={{ background:surf, borderRadius:18, padding:14, border:`1px solid ${line}` }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:8 }}>
        <div style={{ fontFamily:'Space Grotesk', fontWeight:600, fontSize:14, color:fg }}>
          Pairwise Alignment
        </div>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:muted, letterSpacing:.5 }}>
          NEEDLEMAN-WUNSCH
        </div>
      </div>

      <div style={{ display:'grid', gap:6, marginBottom:10 }}>
        <label style={{ fontSize:11, color:muted, fontFamily:"'JetBrains Mono',monospace", letterSpacing:.5 }}>SEQ 1</label>
        <input value={s1} maxLength={12}
          onChange={e=>{ setS1(e.target.value.replace(/[^acgtACGT]/g,'')); setStep(0); setRunning(false); }}
          style={{
            background: dark?'#14160E':'#F6F4EC', border:`1px solid ${line}`,
            borderRadius:10, padding:'8px 10px',
            fontFamily:"'JetBrains Mono',monospace", fontSize:13, color:fg, outline:'none',
            letterSpacing:1.5,
          }}/>
        <label style={{ fontSize:11, color:muted, fontFamily:"'JetBrains Mono',monospace", letterSpacing:.5 }}>SEQ 2</label>
        <input value={s2} maxLength={12}
          onChange={e=>{ setS2(e.target.value.replace(/[^acgtACGT]/g,'')); setStep(0); setRunning(false); }}
          style={{
            background: dark?'#14160E':'#F6F4EC', border:`1px solid ${line}`,
            borderRadius:10, padding:'8px 10px',
            fontFamily:"'JetBrains Mono',monospace", fontSize:13, color:fg, outline:'none',
            letterSpacing:1.5,
          }}/>
      </div>

      {/* alignment viz */}
      <div style={{
        background: dark?'#14160E':'#F6F4EC', borderRadius:12,
        padding:'12px 12px 10px', marginBottom:10,
        border: `1px dashed ${line}`,
      }}>
        <div style={{ display:'flex', flexDirection:'column', gap:6, alignItems:'center' }}>
          {/* row 1 */}
          <div style={{ display:'flex', gap:3 }}>
            {result.a1.split('').map((b,i)=>(
              <BaseChip key={i} b={b} size={22} dim={i>=step} dark={dark}/>
            ))}
          </div>
          {/* match bar */}
          <div style={{ display:'flex', gap:3 }}>
            {result.a1.split('').map((_,i)=>{
              const isMatch = match(i), isMis = mismatch(i), isGap = gap(i);
              return (
                <div key={i} style={{
                  width:22, height:8, display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  {isMatch && <div style={{ width:2, height:8, background:'#0E9384', borderRadius:2 }}/>}
                  {isMis && <div style={{ width:4, height:4, borderRadius:99, background:'#D9594C' }}/>}
                  {isGap && <div style={{ width:8, height:2, background:'#9E9C90', borderRadius:2 }}/>}
                </div>
              );
            })}
          </div>
          {/* row 2 */}
          <div style={{ display:'flex', gap:3 }}>
            {result.a2.split('').map((b,i)=>(
              <BaseChip key={i} b={b} size={22} dim={i>=step} dark={dark}/>
            ))}
          </div>
        </div>

        <div style={{
          display:'flex', justifyContent:'space-between',
          marginTop:12, paddingTop:10, borderTop:`1px dashed ${line}`,
          fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:muted,
        }}>
          <span>SCORE <b style={{ color:fg }}>{step>=len?result.score:'—'}</b></span>
          <span>IDENTITY <b style={{ color:fg }}>{identity}%</b></span>
          <span>LEN <b style={{ color:fg }}>{len}</b></span>
        </div>
      </div>

      <button onClick={reset}
        style={{
          width:'100%', padding:'11px 14px', borderRadius:12, border:'none',
          background:'var(--accent)', color:'#fff', fontWeight:600, fontSize:14,
          fontFamily:'Manrope, system-ui',
          cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8,
        }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7z" fill="#fff"/></svg>
        {step>=len ? '重播動畫' : running ? '對齊中⋯' : '開始比對'}
      </button>
    </div>
  );
}

// ─────────── Flashcards ───────────
const FLASHCARDS = [
  { q:'central dogma', zh:'中心法則', a:'DNA → RNA → 蛋白質：遺傳資訊在細胞內的標準流向。', tag:'分子生物' },
  { q:'codon', zh:'密碼子', a:'mRNA 上三個連續核苷酸的組合，決定一個胺基酸。共 64 種，編碼 20 種胺基酸。', tag:'轉譯' },
  { q:'E-value', zh:'期望值', a:'BLAST 中代表「在隨機資料庫中得到此分數或更高的次數期望值」，越小越顯著。', tag:'序列比對' },
  { q:'FASTA', zh:'FASTA 格式', a:'以 > 開頭為標題列，下面接序列字串。生物資訊最常見的序列檔格式。', tag:'資料格式' },
  { q:'phylogeny', zh:'系統發生', a:'用序列差異推論物種或基因的演化關係，常用方法有 NJ、ML、Bayesian。', tag:'演化' },
  { q:'GC content', zh:'GC 含量', a:'DNA 中 G 與 C 的比例。影響熔解溫度 Tm 與基因結構。', tag:'序列特性' },
  { q:'reading frame', zh:'閱讀框', a:'核苷酸序列每三個碼讀一次，會有 3 種正向 + 3 種反向共 6 種閱讀框。', tag:'轉譯' },
  { q:'ORF', zh:'開放閱讀框', a:'Open Reading Frame，從起始碼 ATG 到終止碼之間的潛在編碼區段。', tag:'註解' },
  { q:'SNP', zh:'單核苷酸多型性', a:'群體中某位點上單一核苷酸的變異。常用於關聯研究 GWAS。', tag:'變異' },
  { q:'CDS', zh:'編碼序列', a:'Coding Sequence，從起始碼到終止碼真正編碼蛋白質的部分（不含 UTR）。', tag:'註解' },
  { q:'read depth', zh:'讀取深度', a:'某位置上被定序 reads 覆蓋的次數，例如 30× 表示平均覆蓋 30 次。', tag:'NGS' },
  { q:'VCF', zh:'變異呼叫格式', a:'Variant Call Format，記錄樣本變異的標準格式，每列一個變異位點。', tag:'資料格式' },
  { q:'log2FC', zh:'log₂ 倍數變化', a:'差異表現分析中以 log₂ 表示處理 vs 對照的倍數變化，方便對稱判斷上下調。', tag:'RNA-seq' },
  { q:'UMAP', zh:'均勻流形近似', a:'非線性降維方法，常用於將高維單細胞資料壓到 2D 視覺化。', tag:'單細胞' },
];

function FlashCardDeck({ dark=false, onComplete, openReading }){
  // Use the expanded deck if available; fall back to the inline default.
  const allCards = (typeof FLASHCARDS_FULL !== 'undefined' ? FLASHCARDS_FULL : FLASHCARDS);
  const bookmarks = (typeof useBookmarks === 'function') ? useBookmarks() : null;

  // Build tag filter list (+ 收藏 if any cards bookmarked)
  const hasBookmarks = bookmarks && bookmarks.marks.cards.length > 0;
  const allTags = [
    '全部',
    ...(hasBookmarks ? ['★ 收藏'] : []),
    ...Array.from(new Set(allCards.map(c=>c.tag))),
  ];
  const [filterTag, setFilterTag] = React.useState('全部');
  const cards = React.useMemo(()=>{
    if(filterTag==='全部') return allCards;
    if(filterTag==='★ 收藏' && bookmarks) return allCards.filter(c=>bookmarks.marks.cards.includes(c.q));
    return allCards.filter(c=>c.tag===filterTag);
  }, [allCards, filterTag, bookmarks?.marks.cards]);

  const [idx, setIdx] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  // Reset when filter changes
  React.useEffect(()=>{ setIdx(0); setFlipped(false); }, [filterTag]);

  const card = cards[idx] || cards[0];
  if(!card) return null;

  const next = ()=>{
    setFlipped(false);
    if(idx+1>=cards.length){
      onComplete && onComplete();
      setIdx(0);
    } else {
      setIdx(idx+1);
    }
  };
  const prev = ()=>{
    setFlipped(false);
    setIdx(i => i===0 ? cards.length-1 : i-1);
  };

  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';

  // Find the linked course (for nav button label)
  let courseTitle = '相關章節';
  if(card.course && typeof COURSES !== 'undefined'){
    const c = COURSES.find(x=>x.id===card.course);
    if(c) courseTitle = c.title;
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
      {/* Filter chips */}
      <div style={{ display:'flex', gap:6, overflowX:'auto', paddingBottom:2, marginRight:-4 }}>
        {allTags.map(t=>{
          const on = t===filterTag;
          const count = t==='全部' ? allCards.length : allCards.filter(c=>c.tag===t).length;
          return (
            <button key={t} onClick={()=>setFilterTag(t)} style={{
              flexShrink:0, padding:'5px 11px', borderRadius:99,
              border:`1px solid ${on?'var(--accent)':line}`,
              background: on?'var(--accent-soft)':dark?'#14160E':'#F6F4EC',
              color: on?'var(--accent-ink)':fg,
              fontSize:11.5, fontWeight:600, fontFamily:'Manrope, Noto Sans TC',
              cursor:'pointer', whiteSpace:'nowrap',
              display:'flex', alignItems:'center', gap:5,
            }}>
              {t}
              <span style={{
                fontFamily:"'JetBrains Mono',monospace", fontSize:9.5,
                color: on?'var(--accent)':muted, fontWeight:700,
              }}>{count}</span>
            </button>
          );
        })}
      </div>

      <div style={{
        display:'flex', justifyContent:'space-between', alignItems:'center',
        fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:muted, letterSpacing:.5,
      }}>
        <span>{String(idx+1).padStart(2,'0')} / {String(cards.length).padStart(2,'0')}</span>
        <span>{(card.tag||'').toUpperCase()}</span>
      </div>

      <div onClick={()=>setFlipped(f=>!f)}
        style={{
          position:'relative', height: 300, perspective: 1200, cursor:'pointer',
        }}>
        <div style={{
          position:'absolute', inset:0, transformStyle:'preserve-3d',
          transition:'transform .6s cubic-bezier(.2,.7,.2,1)',
          transform: flipped ? 'rotateY(180deg)':'rotateY(0)',
        }}>
          {/* FRONT */}
          <div style={{
            position:'absolute', inset:0, backfaceVisibility:'hidden',
            background:surf, border:`1px solid ${line}`, borderRadius:22,
            padding:24, display:'flex', flexDirection:'column', justifyContent:'space-between',
          }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
              <div style={{
                fontFamily:"'JetBrains Mono',monospace", fontSize:11,
                color:'var(--accent)', letterSpacing:1.4,
              }}>TERM · 點擊翻面看詳解</div>
              {bookmarks && (
                <BookmarkButton
                  active={bookmarks.hasCard(card.q)}
                  onClick={()=>bookmarks.toggleCard(card.q)}
                />
              )}
            </div>
            <div>
              <div style={{ fontFamily:'Space Grotesk', fontSize:30, fontWeight:600, color:fg, letterSpacing:-.5, lineHeight:1.15 }}>
                {card.q}
              </div>
              <div style={{ fontFamily:'Noto Sans TC', fontSize:17, color:muted, marginTop:6 }}>
                {card.zh}
              </div>
              {card.a && (
                <div style={{
                  marginTop:14, padding:'10px 12px', borderRadius:10,
                  background: dark?'#14160E':'#F6F4EC',
                  fontSize:13.5, lineHeight:1.55,
                  color:fg, fontFamily:'Noto Sans TC, Manrope',
                  borderLeft:'2px solid var(--accent)',
                }}>{card.a}</div>
              )}
            </div>
            <div style={{ display:'flex', gap:4 }}>
              {cards.slice(0, Math.min(cards.length, 30)).map((_,i)=>(
                <div key={i} style={{
                  flex:1, height:3, borderRadius:99,
                  background: i===idx ? 'var(--accent)' : i<idx ? 'var(--accent)' : line,
                  opacity: i===idx ? 1 : i<idx ? .55 : 1,
                }}/>
              ))}
            </div>
          </div>
          {/* BACK */}
          <div style={{
            position:'absolute', inset:0, backfaceVisibility:'hidden',
            transform:'rotateY(180deg)',
            background:'var(--accent)', borderRadius:22,
            padding:'20px 22px', display:'flex', flexDirection:'column', justifyContent:'space-between',
            color:'#fff', overflow:'hidden',
          }}>
            <div>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, opacity:.7, letterSpacing:1.4 }}>
                DETAIL · 深入解說
              </div>
              <div style={{
                fontFamily:'Noto Sans TC, Manrope', fontSize:15, lineHeight:1.65, fontWeight:500,
                marginTop:8,
              }}>{card.detail || card.a}</div>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              {card.course && openReading && (
                <button onClick={(e)=>{
                    e.stopPropagation();
                    openReading(card.course, card.unit || 0);
                  }}
                  style={{
                    flex:1, padding:'10px 12px', borderRadius:10,
                    background:'rgba(255,255,255,.18)', border:'1px solid rgba(255,255,255,.3)',
                    color:'#fff', fontWeight:600, fontSize:12.5,
                    fontFamily:'Manrope, Noto Sans TC', cursor:'pointer',
                    backdropFilter:'blur(8px)',
                    display:'flex', alignItems:'center', justifyContent:'center', gap:6,
                  }}>
                  前往「{courseTitle}」
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4 2l4 4-4 4" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* nav buttons */}
      <div style={{ display:'flex', gap:8 }}>
        <button onClick={(e)=>{ e.stopPropagation(); prev(); }}
          style={{
            flex:1, padding:'12px 14px', borderRadius:12,
            border:`1px solid ${line}`, background:'transparent',
            color: dark?'#F0EEE5':fg, fontWeight:600, fontSize:13,
            fontFamily:'Manrope, system-ui', cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center', gap:6,
          }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          上一張
        </button>
        <button onClick={(e)=>{ e.stopPropagation(); next(); }}
          style={{
            flex:2, padding:'12px 14px', borderRadius:12, border:'none',
            background: dark?'#F0EEE5':'#0F1614',
            color: dark?'#0F1614':'#fff', fontWeight:600, fontSize:13,
            fontFamily:'Manrope, system-ui', cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center', gap:6,
          }}>
          下一張
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}

// ─────────── Quiz ───────────
const QUIZ = [
  {
    q:'下列哪一個 mRNA 密碼子代表「起始」？',
    opts:['AUG', 'UAA', 'UGA', 'GCC'],
    correct:0,
    note:'AUG (Methionine) 是真核生物的起始密碼子；UAA / UGA 是終止密碼子。',
  },
  {
    q:'BLAST 結果中 E-value = 1e-50 與 E-value = 0.1 相比，哪個比較顯著？',
    opts:['E-value 較大者', 'E-value = 0.1', 'E-value = 1e-50', '兩者相同'],
    correct:2,
    note:'E-value 越小代表偶然出現的機率越低，因此 1e-50 遠比 0.1 顯著。',
  },
  {
    q:'若一段 DNA 的 GC 含量為 60%，則 A 約佔多少？',
    opts:['10%', '20%', '30%', '40%'],
    correct:1,
    note:'GC=60% 表示 AT=40%；A 與 T 各約一半，所以 A ≈ 20%。',
  },
  {
    q:'下列何者「不是」NGS 平台？',
    opts:['Illumina NovaSeq', 'PacBio Sequel', 'Sanger ABI 3730', 'Oxford Nanopore'],
    correct:2,
    note:'Sanger 是第一代 (毛細管電泳) 定序，不屬於次世代。其餘三者皆為 NGS / long-read NGS。',
  },
  {
    q:'RNA-seq 火山圖中，「右上角」的點通常代表？',
    opts:['顯著上調的基因', '顯著下調的基因', '不顯著的基因', '低表達雜訊'],
    correct:0,
    note:'橫軸 log₂FC 為正、縱軸 −log₁₀(p) 大 → 顯著上調。負側為下調。',
  },
  {
    q:'多序列比對 (MSA) 在系統發生分析中的角色為？',
    opts:[
      '把序列依長度排序',
      '把同源位點對齊以估計演化距離',
      '只是讓圖好看',
      '直接畫出演化樹',
    ],
    correct:1,
    note:'MSA 把同源位點對齊後，才能逐欄比較差異並計算演化距離 → 進而建樹。',
  },
];

function QuizCard({ dark=false, courseId=null, onDone }){
  // Pick question source: full bank filtered by chapter, or fallback to original QUIZ
  const bank = (typeof QUIZ_BANK !== 'undefined') ? QUIZ_BANK : null;
  const questions = React.useMemo(()=>{
    if(bank){
      if(courseId === 'final'){
        // Final exam: 20 random questions from all
        const shuffled = [...bank].sort(()=>Math.random()-0.5);
        return shuffled.slice(0, 20);
      }
      if(courseId && courseId!=='all'){
        return bank.filter(q=>q.course===courseId);
      }
      // mixed mode: pick first question from each chapter (max 8) for daily quiz
      const byCourse = {};
      for(const q of bank){ if(!byCourse[q.course]) byCourse[q.course]=q; }
      const mix = Object.values(byCourse).slice(0, 8);
      return mix.length>0 ? mix : QUIZ;
    }
    return QUIZ;
  }, [bank, courseId]);

  const [idx, setIdx] = React.useState(0);
  const [picked, setPicked] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [finished, setFinished] = React.useState(false);

  // Reset on course change
  React.useEffect(()=>{
    setIdx(0); setPicked(null); setScore(0); setFinished(false);
  }, [courseId]);

  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';

  if(questions.length===0){
    return (
      <div style={{ background:surf, borderRadius:18, padding:20, border:`1px solid ${line}`, textAlign:'center' }}>
        <div style={{ fontFamily:'Noto Sans TC', fontSize:14, color:muted }}>本章題目編寫中</div>
      </div>
    );
  }

  const q = questions[idx];

  const pick = (i)=>{
    if(picked!==null) return;
    setPicked(i);
    if(i===q.correct) setScore(s=>s+1);
  };
  const next = ()=>{
    if(idx+1>=questions.length){
      setFinished(true);
      onDone && onDone(score + (picked===q.correct?0:0));
      return;
    }
    setIdx(idx+1); setPicked(null);
  };
  const restart = ()=>{ setIdx(0); setPicked(null); setScore(0); setFinished(false); };

  if(finished){
    const pct = score/questions.length;
    const msg = pct===1 ? '滿分！明天繼續保持' : pct>=0.7 ? '不錯！再接再厲' : '再多複習一次教材，下次會更好';
    return (
      <div style={{ background:surf, borderRadius:18, padding:24, border:`1px solid ${line}`, textAlign:'center' }}>
        <div style={{
          width:72, height:72, borderRadius:'50%',
          background:'var(--accent-soft)', color:'var(--accent)',
          display:'flex', alignItems:'center', justifyContent:'center',
          margin:'0 auto 16px', fontFamily:'Space Grotesk', fontWeight:700, fontSize:28,
        }}>{score}/{questions.length}</div>
        <div style={{ fontFamily:'Space Grotesk', fontWeight:600, fontSize:18, color:fg }}>
          完成 · 得 {Math.round(pct*100)} 分
        </div>
        <div style={{ fontSize:13, color:muted, marginTop:6, fontFamily:'Noto Sans TC, Manrope' }}>
          {msg}
        </div>
        <button onClick={restart} style={{
          marginTop:16, padding:'10px 16px', borderRadius:10,
          border:`1px solid ${line}`, background:'transparent',
          color:fg, fontWeight:600, fontSize:13, cursor:'pointer',
          fontFamily:'Manrope, system-ui',
        }}>再做一次</button>
      </div>
    );
  }

  return (
    <div style={{ background:surf, borderRadius:18, padding:18, border:`1px solid ${line}` }}>
      <div style={{
        display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10,
        fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:muted, letterSpacing:.5,
      }}>
        <span>Q{idx+1} / {questions.length}</span>
        <span>SCORE {score}</span>
      </div>
      <ProgressBar pct={(idx + (picked!==null?1:0))/questions.length} color="var(--accent)"
        track={dark?'rgba(255,255,255,.08)':'rgba(0,0,0,.06)'} />

      <div style={{
        fontFamily:'Noto Sans TC, Manrope', fontWeight:600, fontSize:16,
        color:fg, marginTop:14, marginBottom:14, lineHeight:1.5,
      }}>{q.q}</div>

      <div style={{ display:'grid', gap:8 }}>
        {q.opts.map((o,i)=>{
          const isPicked = picked===i;
          const isCorrect = picked!==null && i===q.correct;
          const isWrong = isPicked && i!==q.correct;
          let bg = dark?'#14160E':'#F6F4EC', bd = line, col = fg;
          if(isCorrect){ bg='var(--accent-soft)'; bd='var(--accent)'; col='var(--accent-ink, #064E47)'; }
          else if(isWrong){ bg='#FAE0DC'; bd='#D9594C'; col='#5E1F18'; }
          return (
            <button key={i} onClick={()=>pick(i)} disabled={picked!==null}
              style={{
                textAlign:'left', padding:'12px 14px',
                background:bg, border:`1.5px solid ${bd}`,
                borderRadius:12, color:col,
                fontFamily:'Manrope, Noto Sans TC',
                fontSize:14, fontWeight:500,
                cursor: picked!==null?'default':'pointer',
                display:'flex', alignItems:'center', gap:10,
                transition:'all .2s',
              }}>
              <span style={{
                width:22, height:22, borderRadius:6, flexShrink:0,
                background: isCorrect?'var(--accent)':isWrong?'#D9594C':dark?'#2A2D29':'#fff',
                border: `1px solid ${isCorrect||isWrong?bd:line}`,
                fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700,
                color: isCorrect||isWrong?'#fff':col,
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>{String.fromCharCode(65+i)}</span>
              {o}
            </button>
          );
        })}
      </div>

      {picked!==null && (
        <div style={{
          marginTop:14, padding:'12px 14px', borderRadius:12,
          background: dark?'#14160E':'#F6F4EC',
          border:`1px dashed ${line}`,
          fontSize:13, color:muted, lineHeight:1.55,
          fontFamily:'Noto Sans TC, Manrope',
        }}>
          <span style={{ color:'var(--accent)', fontWeight:600 }}>解析 · </span>{q.note}
        </div>
      )}

      {picked!==null && (
        <button onClick={next} style={{
          width:'100%', marginTop:12, padding:'12px 14px', borderRadius:12, border:'none',
          background:'var(--accent)', color:'#fff', fontWeight:600, fontSize:14,
          fontFamily:'Manrope, system-ui', cursor:'pointer',
        }}>
          {idx+1>=questions.length?'查看結果':'下一題 →'}
        </button>
      )}
    </div>
  );
}

// expose
Object.assign(window, {
  ACCENTS, BASE_COLORS, AA_GROUPS,
  BaseChip, SequenceStrip, ProgressRing, ProgressBar, DnaIcon,
  SequenceAligner, FlashCardDeck, QuizCard,
  FLASHCARDS, QUIZ,
});
