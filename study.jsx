// study.jsx — Bookmarks + Spaced Repetition System

// ─────────── Storage keys (per active user) ───────────
const BOOKMARK_KEY = 'biolearn:bookmarks:v1'; // legacy fallback
const SRS_KEY = 'biolearn:srs:v1';            // legacy fallback

function bmKey(){ return window.BioProfiles ? window.BioProfiles.userKey('bookmarks') : BOOKMARK_KEY; }
function srsKey(){ return window.BioProfiles ? window.BioProfiles.userKey('srs') : SRS_KEY; }

// ─────────── useBookmarks ───────────
function useBookmarks(){
  const load = ()=>{
    try{ const raw = localStorage.getItem(bmKey()); return raw ? JSON.parse(raw) : { cards:[], lessons:[] }; }
    catch(e){ return { cards:[], lessons:[] }; }
  };
  const [marks, setMarks] = React.useState(load);

  // reload when the active user changes
  React.useEffect(()=>{
    const h = ()=> setMarks(load());
    window.addEventListener('biolearn:userchange', h);
    return ()=> window.removeEventListener('biolearn:userchange', h);
  }, []);

  const save = (next)=>{
    setMarks(next);
    try{ localStorage.setItem(bmKey(), JSON.stringify(next)); }catch(e){}
  };

  const toggleCard = (term)=>{
    const has = marks.cards.includes(term);
    save({ ...marks, cards: has ? marks.cards.filter(c=>c!==term) : [...marks.cards, term] });
  };
  const toggleLesson = (courseId, unitIdx)=>{
    const key = `${courseId}:${unitIdx}`;
    const has = marks.lessons.includes(key);
    save({ ...marks, lessons: has ? marks.lessons.filter(l=>l!==key) : [...marks.lessons, key] });
  };
  const hasCard = (term)=>marks.cards.includes(term);
  const hasLesson = (courseId, unitIdx)=>marks.lessons.includes(`${courseId}:${unitIdx}`);

  return { marks, toggleCard, toggleLesson, hasCard, hasLesson };
}

// ─────────── useSRS — simple spaced repetition ───────────
// Intervals (in days) by rating: 0=forgot → 0 (tomorrow), 1=hard → 1, 2=good → 3, 3=easy → 7
// Subsequent successful reviews multiply interval by ease factor.
const SRS_INTERVALS = [0, 1, 3, 7];

function useSRS(){
  const load = ()=>{
    try{ const raw = localStorage.getItem(srsKey()); return raw ? JSON.parse(raw) : {}; }
    catch(e){ return {}; }
  };
  const [state, setState] = React.useState(load);

  // reload when the active user changes
  React.useEffect(()=>{
    const h = ()=> setState(load());
    window.addEventListener('biolearn:userchange', h);
    return ()=> window.removeEventListener('biolearn:userchange', h);
  }, []);

  const save = (next)=>{
    setState(next);
    try{ localStorage.setItem(srsKey(), JSON.stringify(next)); }catch(e){}
  };

  const now = Date.now();
  const DAY = 86400000;

  const rate = (term, rating)=>{
    // rating: 0=forgot, 1=hard, 2=good, 3=easy
    const prev = state[term] || { interval: 1, ease: 2.5, reps: 0 };
    let nextInterval, nextEase = prev.ease;
    if(rating === 0){
      // reset
      nextInterval = 1;
      nextEase = Math.max(1.3, prev.ease - 0.2);
    } else {
      const base = SRS_INTERVALS[rating];
      // bump multiplicatively
      nextInterval = Math.max(base, Math.round(prev.interval * (rating===3 ? prev.ease : rating===2 ? 2 : 1.2)));
      if(rating===3) nextEase = Math.min(3.0, prev.ease + 0.15);
    }
    save({
      ...state,
      [term]: {
        interval: nextInterval,
        ease: nextEase,
        reps: prev.reps + 1,
        due: now + nextInterval * DAY,
        lastRating: rating,
      }
    });
  };

  // Cards that are due now
  const dueCards = React.useMemo(()=>{
    const due = [];
    for(const [term, info] of Object.entries(state)){
      if((info.due||0) <= now) due.push(term);
    }
    return due;
  }, [state]);

  // Cards seen at all
  const seen = Object.keys(state);

  return { state, rate, dueCards, seen, now };
}

// ─────────── Heart / Bookmark Icon ───────────
function BookmarkButton({ active, onClick, color='#D9594C' }){
  return (
    <button onClick={(e)=>{ e.stopPropagation(); onClick && onClick(); }}
      title={active ? '取消收藏' : '加入收藏'}
      style={{
        width:36, height:36, borderRadius:99, padding:0,
        background:active ? color+'22' : 'transparent',
        border:`1px solid ${active ? color+'55' : 'transparent'}`,
        cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
      }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill={active ? color : 'none'} stroke={active ? color : '#9C9C8F'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c-1.5 1.5-3 3-7 7-4-4-5.5-5.5-7-7-2-2-2-5 0-7 2-2 5-2 7 0 2-2 5-2 7 0 2 2 2 5 0 7z"/>
      </svg>
    </button>
  );
}

// ─────────── Bookmarks Screen ───────────
function BookmarksScreen({ dark, onBack, openReading, openTool }){
  const { marks, toggleCard, toggleLesson } = useBookmarks();
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';

  const bookmarkedCards = (FLASHCARDS_FULL || []).filter(c=>marks.cards.includes(c.q));
  const bookmarkedLessons = marks.lessons.map(key=>{
    const [cid, idx] = key.split(':');
    const course = COURSES.find(c=>c.id===cid);
    const unit = LESSON_CONTENT[cid]?.units?.[parseInt(idx)];
    return { courseId: cid, unitIdx: parseInt(idx), course, unit };
  }).filter(b=>b.course && b.unit);

  return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark}
        subtitle={`${bookmarkedCards.length + bookmarkedLessons.length} ITEMS`}
        title="我的收藏" onBack={onBack}/>

      <div style={{ padding:'0 20px' }}>
        {bookmarkedCards.length===0 && bookmarkedLessons.length===0 && (
          <div style={{
            background:surf, borderRadius:18, padding:24, border:`1px solid ${line}`, textAlign:'center',
          }}>
            <div style={{ fontSize:36, marginBottom:10 }}>📌</div>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:16, fontWeight:600, color:fg }}>
              還沒有收藏
            </div>
            <div style={{ fontSize:13, color:muted, marginTop:6, fontFamily:'Noto Sans TC', lineHeight:1.6 }}>
              在單字卡或教材閱讀畫面點 ♥ 加入收藏，<br/>之後可以快速回來複習。
            </div>
            <button onClick={()=>openTool('cards')} style={{
              marginTop:14, padding:'10px 18px', borderRadius:10, border:'none',
              background:'var(--accent)', color:'#fff', fontWeight:600, fontSize:13,
              fontFamily:'Manrope, system-ui', cursor:'pointer',
            }}>瀏覽單字卡</button>
          </div>
        )}

        {/* Bookmarked lessons */}
        {bookmarkedLessons.length>0 && (
          <div style={{ marginBottom:20 }}>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>
              收藏的小節 <span style={{ color:muted, fontWeight:500, fontSize:13 }}>{bookmarkedLessons.length}</span>
            </div>
            <div style={{ background:surf, borderRadius:16, border:`1px solid ${line}`, overflow:'hidden' }}>
              {bookmarkedLessons.map((b, i)=>(
                <div key={i} onClick={()=>openReading(b.courseId, b.unitIdx)}
                  style={{
                    display:'flex', alignItems:'center', padding:'12px 14px', gap:12,
                    borderBottom: i<bookmarkedLessons.length-1?`1px solid ${line}`:'none',
                    cursor:'pointer',
                  }}>
                  <div style={{
                    width:8, height:32, borderRadius:99, background:b.course.color, flexShrink:0,
                  }}/>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:13.5, fontWeight:600, color:fg, lineHeight:1.3 }}>
                      {b.unit.title}
                    </div>
                    <div style={{ fontSize:10.5, color:muted, marginTop:2, fontFamily:"'JetBrains Mono',monospace", letterSpacing:.4 }}>
                      {b.course.title.toUpperCase()}
                    </div>
                  </div>
                  <BookmarkButton active={true} onClick={()=>toggleLesson(b.courseId, b.unitIdx)}/>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bookmarked cards */}
        {bookmarkedCards.length>0 && (
          <div>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>
              收藏的單字卡 <span style={{ color:muted, fontWeight:500, fontSize:13 }}>{bookmarkedCards.length}</span>
            </div>
            <div style={{ background:surf, borderRadius:16, border:`1px solid ${line}`, overflow:'hidden' }}>
              {bookmarkedCards.map((c, i)=>(
                <div key={c.q} onClick={()=>c.course && openReading && openReading(c.course, c.unit||0)}
                  style={{
                    display:'flex', alignItems:'flex-start', padding:'12px 14px', gap:12,
                    borderBottom: i<bookmarkedCards.length-1?`1px solid ${line}`:'none',
                    cursor: c.course ? 'pointer' : 'default',
                  }}>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:'flex', gap:6, alignItems:'baseline' }}>
                      <span style={{ fontFamily:'Space Grotesk', fontSize:14, fontWeight:600, color:fg }}>{c.q}</span>
                      <span style={{ fontFamily:'Noto Sans TC', fontSize:11, color:muted }}>{c.zh}</span>
                    </div>
                    <div style={{ fontSize:11.5, color:muted, marginTop:3, fontFamily:'Noto Sans TC', lineHeight:1.5 }}>
                      {c.a}
                    </div>
                  </div>
                  <BookmarkButton active={true} onClick={()=>toggleCard(c.q)}/>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────── Review Screen (spaced repetition queue) ───────────
function ReviewScreen({ dark, onBack, openTool }){
  const { state: srsState, rate, dueCards, seen, now } = useSRS();
  const allCards = FLASHCARDS_FULL || [];
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';
  const DAY = 86400000;

  // Build today's queue: due cards + a few new cards (up to 5 new) if user has < 10 due
  const dueQueueTerms = React.useMemo(()=>{
    let q = [...dueCards];
    // Add new cards (never seen) up to fill to 10 total
    if(q.length < 10){
      const unseen = allCards.filter(c=>!seen.includes(c.q)).slice(0, 10 - q.length);
      q = q.concat(unseen.map(c=>c.q));
    }
    return q;
  }, [dueCards, seen]);

  const queue = dueQueueTerms.map(term => allCards.find(c=>c.q===term)).filter(Boolean);
  const [idx, setIdx] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [doneCount, setDoneCount] = React.useState(0);

  // Reset when queue length changes (e.g. on first mount)
  React.useEffect(()=>{ setIdx(0); setFlipped(false); setDoneCount(0); }, []);

  // Stats
  const totalSeen = seen.length;
  const dueNow = dueCards.length;
  const upcoming7d = Object.entries(srsState).filter(([t, info])=>{
    const d = info.due - now;
    return d > 0 && d <= 7*DAY;
  }).length;

  // Empty state
  if(queue.length===0){
    return (
      <div style={{ padding:'0 0 100px' }}>
        <AppHeader dark={dark} subtitle="SPACED REPETITION" title="今日複習" onBack={onBack}/>
        <div style={{ padding:'0 20px' }}>
          <div style={{ background:surf, borderRadius:18, padding:24, border:`1px solid ${line}`, textAlign:'center' }}>
            <div style={{ fontSize:36, marginBottom:10 }}>🎉</div>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:16, fontWeight:600, color:fg }}>
              今天沒有要複習的卡片
            </div>
            <div style={{ fontSize:13, color:muted, marginTop:6, fontFamily:'Noto Sans TC', lineHeight:1.6 }}>
              繼續學新內容或明天再來檢查。
            </div>
            <button onClick={()=>openTool('cards')} style={{
              marginTop:14, padding:'10px 18px', borderRadius:10, border:'none',
              background:'var(--accent)', color:'#fff', fontWeight:600, fontSize:13,
              fontFamily:'Manrope, system-ui', cursor:'pointer',
            }}>學新單字卡</button>
          </div>
        </div>
      </div>
    );
  }

  // Done state
  if(idx >= queue.length){
    return (
      <div style={{ padding:'0 0 100px' }}>
        <AppHeader dark={dark} subtitle="SPACED REPETITION" title="複習完成" onBack={onBack}/>
        <div style={{ padding:'0 20px' }}>
          <div style={{ background:surf, borderRadius:18, padding:24, border:`1px solid ${line}`, textAlign:'center' }}>
            <div style={{ fontSize:36, marginBottom:10 }}>✓</div>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:18, fontWeight:600, color:fg }}>
              太棒了！完成 {doneCount} 張卡片
            </div>
            <div style={{ fontSize:13, color:muted, marginTop:6, fontFamily:'Noto Sans TC' }}>
              明天再回來，系統會自動排出新的複習隊列。
            </div>
            <button onClick={onBack} style={{
              marginTop:14, padding:'10px 18px', borderRadius:10, border:'none',
              background:'var(--accent)', color:'#fff', fontWeight:600, fontSize:13,
              fontFamily:'Manrope, system-ui', cursor:'pointer',
            }}>回到練習頁</button>
          </div>

          <Stats dark={dark} totalSeen={totalSeen + doneCount} dueNow={Math.max(0, dueNow - doneCount)} upcoming7d={upcoming7d}/>
        </div>
      </div>
    );
  }

  const card = queue[idx];
  const onRate = (rating)=>{
    rate(card.q, rating);
    setFlipped(false);
    setIdx(i=>i+1);
    setDoneCount(c=>c+1);
  };

  return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark}
        subtitle={`SPACED REPETITION · ${idx+1}/${queue.length}`}
        title="今日複習" onBack={onBack}/>

      <div style={{ padding:'0 20px' }}>
        {/* Progress */}
        <div style={{ marginBottom:14 }}>
          <ProgressBar pct={(idx)/queue.length} color="var(--accent)"
            track={dark?'rgba(255,255,255,.08)':'rgba(0,0,0,.06)'} height={4}/>
        </div>

        {/* Card */}
        <div onClick={()=>setFlipped(f=>!f)}
          style={{ position:'relative', height:240, perspective:1200, cursor:'pointer', marginBottom:14 }}>
          <div style={{
            position:'absolute', inset:0, transformStyle:'preserve-3d',
            transition:'transform .6s cubic-bezier(.2,.7,.2,1)',
            transform: flipped ? 'rotateY(180deg)':'rotateY(0)',
          }}>
            {/* FRONT */}
            <div style={{
              position:'absolute', inset:0, backfaceVisibility:'hidden',
              background:surf, border:`1px solid ${line}`, borderRadius:20,
              padding:22, display:'flex', flexDirection:'column', justifyContent:'space-between',
            }}>
              <div style={{
                fontFamily:"'JetBrains Mono',monospace", fontSize:10.5,
                color:'var(--accent)', letterSpacing:1.3,
              }}>
                {(card.tag||'').toUpperCase()} · 點擊翻面
              </div>
              <div>
                <div style={{ fontFamily:'Space Grotesk', fontSize:28, fontWeight:600, color:fg, letterSpacing:-.5, lineHeight:1.15 }}>
                  {card.q}
                </div>
                <div style={{ fontFamily:'Noto Sans TC', fontSize:16, color:muted, marginTop:4 }}>
                  {card.zh}
                </div>
              </div>
              <div style={{
                fontSize:10.5, color:muted, fontFamily:"'JetBrains Mono',monospace", letterSpacing:.5,
              }}>
                {seen.includes(card.q) ? '複習' : '新卡 · NEW'}
              </div>
            </div>
            {/* BACK */}
            <div style={{
              position:'absolute', inset:0, backfaceVisibility:'hidden',
              transform:'rotateY(180deg)',
              background:'var(--accent)', borderRadius:20,
              padding:'20px 22px', display:'flex', flexDirection:'column', justifyContent:'space-between',
              color:'#fff',
            }}>
              <div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10.5, opacity:.75, letterSpacing:1.3 }}>
                  DETAIL
                </div>
                <div style={{
                  fontFamily:'Noto Sans TC, Manrope', fontSize:14.5, lineHeight:1.65, fontWeight:500, marginTop:8,
                }}>{card.detail || card.a}</div>
              </div>
              <div style={{ fontSize:10.5, opacity:.7, fontFamily:"'JetBrains Mono',monospace" }}>
                記得程度 → 選下方按鈕
              </div>
            </div>
          </div>
        </div>

        {/* Rating buttons */}
        {flipped ? (
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:6 }}>
            {[
              { label:'不熟', sub:'明天', rating:0, col:'#D9594C' },
              { label:'勉強', sub:'1 天', rating:1, col:'#EAA532' },
              { label:'會了', sub:'3 天', rating:2, col:'#4F94D8' },
              { label:'熟練', sub:'7+ 天', rating:3, col:'#0E9384' },
            ].map(b=>(
              <button key={b.rating} onClick={()=>onRate(b.rating)} style={{
                padding:'10px 4px', borderRadius:12, border:'none',
                background:b.col, color:'#fff', cursor:'pointer',
                fontFamily:'Manrope, Noto Sans TC',
                display:'flex', flexDirection:'column', alignItems:'center', gap:2,
              }}>
                <span style={{ fontWeight:700, fontSize:13 }}>{b.label}</span>
                <span style={{ fontSize:10, opacity:.85, fontFamily:"'JetBrains Mono',monospace" }}>{b.sub}</span>
              </button>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign:'center', fontSize:12, color:muted, fontFamily:'Noto Sans TC',
            padding:'12px 0',
          }}>
            點卡片翻面看詳解，然後評定記得程度
          </div>
        )}

        <Stats dark={dark} totalSeen={totalSeen + doneCount} dueNow={Math.max(0, dueNow - doneCount)} upcoming7d={upcoming7d}/>
      </div>
    </div>
  );
}

function Stats({ dark, totalSeen, dueNow, upcoming7d }){
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';
  return (
    <div style={{
      marginTop:16, padding:14, borderRadius:16, background:surf, border:`1px solid ${line}`,
      display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8,
    }}>
      {[
        { label:'已學', val:totalSeen },
        { label:'今日待複習', val:dueNow },
        { label:'7 天內到期', val:upcoming7d },
      ].map(s=>(
        <div key={s.label} style={{ textAlign:'center' }}>
          <div style={{ fontFamily:'Space Grotesk', fontSize:20, fontWeight:700, color:fg }}>{s.val}</div>
          <div style={{ fontSize:10, color:muted, marginTop:2, fontFamily:'Noto Sans TC' }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  useBookmarks, useSRS, BookmarkButton,
  BookmarksScreen, ReviewScreen, Stats,
  BOOKMARK_KEY, SRS_KEY,
});
