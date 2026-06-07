// app-web.jsx — desktop / web shell (sidebar layout)

function WebSidebar({ tab, setTab, dark }){
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#171A16':'#FAFAF7';
  const line = dark?'#2A2D29':'#E5E2D9';

  const items = [
    { id:'home', no:'01', label:'首頁', en:'Home',
      icon:(c)=>(<svg width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M3 10l8-7 8 7v8a2 2 0 01-2 2h-3v-6H8v6H5a2 2 0 01-2-2v-8z" stroke={c} strokeWidth="1.7" strokeLinejoin="round"/></svg>) },
    { id:'courses', no:'02', label:'課程', en:'Courses',
      icon:(c)=>(<svg width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M3 5a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke={c} strokeWidth="1.7"/><path d="M7 8h8M7 11h8M7 14h5" stroke={c} strokeWidth="1.7" strokeLinecap="round"/></svg>) },
    { id:'practice', no:'03', label:'練習', en:'Practice',
      icon:(c)=>(<svg width="20" height="20" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke={c} strokeWidth="1.7"/><path d="M11 6v5l3 2" stroke={c} strokeWidth="1.7" strokeLinecap="round"/></svg>) },
    { id:'me', no:'04', label:'我的', en:'Profile',
      icon:(c)=>(<svg width="20" height="20" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.5" stroke={c} strokeWidth="1.7"/><path d="M4 19c0-3.5 3.5-6 7-6s7 2.5 7 6" stroke={c} strokeWidth="1.7" strokeLinecap="round"/></svg>) },
  ];

  return (
    <aside className="web-sidebar" style={{ background:surf, borderRight:`1px solid ${line}` }}>
      <div className="web-brand">
        <div className="web-brand-mark">B</div>
        <div>
          <div style={{ fontFamily:'Space Grotesk', fontWeight:600, fontSize:18, color:fg, letterSpacing:-.4, lineHeight:1.1 }}>BioLearn</div>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9.5, color:muted, letterSpacing:1.5, marginTop:2 }}>生資學堂</div>
        </div>
      </div>

      <nav className="web-nav">
        {items.map(it=>{
          const on = tab===it.id;
          return (
            <button key={it.id} onClick={()=>setTab(it.id)}
              className={`web-nav-item${on?' on':''}`}
              data-screen-label={it.label}
              style={{
                color: on?'var(--accent)':muted,
                background: on?'var(--accent-soft)':'transparent',
              }}>
              <span className="web-nav-icon">{it.icon(on?'var(--accent)':muted)}</span>
              <span className="web-nav-label" style={{ color: on?'var(--accent-ink)':fg }}>{it.label}</span>
              <span className="web-nav-no" style={{ color: on?'var(--accent)':muted }}>{it.no}</span>
            </button>
          );
        })}
      </nav>

      <div className="web-side-foot" style={{ borderTop:`1px solid ${line}` }}>
        <a href="mobile.html" className="web-mobile-link" style={{ color:muted, border:`1px solid ${line}` }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M10 18h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          手機版
        </a>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:muted, letterSpacing:.5, marginTop:10, lineHeight:1.6 }}>
          18 章 · 90+ 節<br/>110+ 題 · 90+ 卡
        </div>
      </div>
    </aside>
  );
}

function WebApp(){
  const defaults = window.__BIOLEARN_TWEAKS || { accent:'teal', dark:false, fontScale:1, showStreak:true };
  const [t, setTweak] = useTweaks(defaults);

  const [tab, setTab] = React.useState('home');
  const [stack, setStack] = React.useState([]);
  const [streak, setStreak] = React.useState(()=> window.BioProfiles ? window.BioProfiles.touchStreak() : 0);

  React.useEffect(()=>{
    const h = ()=> setStreak(window.BioProfiles ? window.BioProfiles.touchStreak() : 0);
    window.addEventListener('biolearn:userchange', h);
    return ()=> window.removeEventListener('biolearn:userchange', h);
  }, []);

  const dark = t.dark;
  const acc = ACCENTS[t.accent] || ACCENTS.teal;
  const cssVars = {
    '--accent': acc.accent,
    '--accent-soft': acc.soft,
    '--accent-ink': acc.deep,
  };

  React.useEffect(()=>{
    document.body.style.background = dark ? '#0F1410' : '#EFEDE6';
  }, [dark]);

  const push = (screen) => setStack(s=>[...s, screen]);
  const pop = () => setStack(s=>s.slice(0,-1));
  const openCourse = (id)=> push({ kind:'course', id });
  const openTool = (id)=> push({ kind:'tool', id });
  const openReading = (courseId, unitIdx)=> push({ kind:'reading', courseId, unitIdx });

  const cur = stack[stack.length-1];
  React.useEffect(()=>{ setStack([]); }, [tab]);

  // scroll main to top on screen change
  const mainRef = React.useRef(null);
  React.useEffect(()=>{ if(mainRef.current) mainRef.current.scrollTop = 0; }, [tab, stack.length]);

  const screen = (() => {
    if(cur){
      if(cur.kind==='course') return <LessonDetailScreen dark={dark} courseId={cur.id} onBack={pop} openTool={openTool} openReading={openReading}/>;
      if(cur.kind==='tool') return <ToolScreen dark={dark} tool={cur.id} onBack={pop} openReading={openReading}/>;
      if(cur.kind==='reading') {
        const total = (LESSON_CONTENT[cur.courseId]?.units?.length) || 0;
        return <LessonReader
          dark={dark}
          courseId={cur.courseId}
          unitIdx={cur.unitIdx}
          onBack={pop}
          onPrev={cur.unitIdx>0 ? (()=>setStack(s=>[...s.slice(0,-1), { ...cur, unitIdx: cur.unitIdx-1 }])) : null}
          onNext={cur.unitIdx<total-1
            ? (()=>setStack(s=>[...s.slice(0,-1), { ...cur, unitIdx: cur.unitIdx+1 }]))
            : pop}
        />;
      }
    }
    if(tab==='home') return <HomeScreen dark={dark} openCourse={openCourse} openTool={openTool} streak={streak} showStreak={t.showStreak}/>;
    if(tab==='courses') return <CoursesScreen dark={dark} openCourse={openCourse}/>;
    if(tab==='practice') return <PracticeScreen dark={dark} openTool={openTool}/>;
    if(tab==='me') return <ProfileScreen dark={dark} streak={streak} openTool={openTool}/>;
    return null;
  })();

  const tabLabels = { home:'01 Home', courses:'02 Courses', practice:'03 Practice', me:'04 Profile' };
  const currentLabel = cur
    ? (cur.kind==='course' ? `Lesson · ${cur.id}` : cur.kind==='reading' ? `Reading · ${cur.courseId}` : `Tool · ${cur.id}`)
    : tabLabels[tab];

  // when a sub-screen (course/tool/reading) is open, allow wider reading column
  const wide = cur && (cur.kind==='reading');

  return (
    <>
      <div className="web-shell" style={{ ...cssVars, background: dark?'#0F1410':'#EFEDE6', fontSize: 16*t.fontScale }} data-screen-label={currentLabel}>
        <WebSidebar tab={tab} setTab={(id)=>{ setTab(id); setStack([]); }} dark={dark}/>
        <main className="web-main" ref={mainRef} style={{ background: dark?'#0F1410':'#EFEDE6' }}>
          <div className="web-col" style={{ maxWidth: wide?760:880 }}>
            {screen}
          </div>
        </main>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="主題 Theme">
          <TweakColor
            label="主色"
            value={ACCENTS[t.accent].accent}
            onChange={(hex)=>{
              const k = Object.keys(ACCENTS).find(k=>ACCENTS[k].accent===hex) || 'teal';
              setTweak('accent', k);
            }}
            options={Object.keys(ACCENTS).map(k=>ACCENTS[k].accent)}
          />
          <TweakToggle label="深色模式" value={t.dark} onChange={(v)=>setTweak('dark', v)} />
        </TweakSection>

        <TweakSection label="文字 Typography">
          <TweakRadio
            label="字級"
            value={t.fontScale}
            onChange={(v)=>setTweak('fontScale', v)}
            options={[ { label:'小', value:0.92 }, { label:'中', value:1 }, { label:'大', value:1.1 } ]}
          />
        </TweakSection>

        <TweakSection label="顯示 Display">
          <TweakToggle label="首頁顯示連勝徽章" value={t.showStreak} onChange={(v)=>setTweak('showStreak', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app-root')).render(<WebApp/>);
