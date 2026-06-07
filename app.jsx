// app.jsx — root App

function App(){
  const defaults = window.__BIOLEARN_TWEAKS || { accent:'teal', dark:false, fontScale:1, showStreak:true };
  const [t, setTweak] = useTweaks(defaults);

  const [tab, setTab] = React.useState('home');
  const [stack, setStack] = React.useState([]); // sub-screens
  const [streak, setStreak] = React.useState(()=> window.BioProfiles ? window.BioProfiles.touchStreak() : 0);

  // refresh streak when active user changes
  React.useEffect(()=>{
    const h = ()=> setStreak(window.BioProfiles ? window.BioProfiles.touchStreak() : 0);
    window.addEventListener('biolearn:userchange', h);
    return ()=> window.removeEventListener('biolearn:userchange', h);
  }, []);

  const dark = t.dark;
  const acc = ACCENTS[t.accent] || ACCENTS.teal;

  // apply CSS vars + viewport background
  const cssVars = {
    '--accent': acc.accent,
    '--accent-soft': acc.soft,
    '--accent-ink': acc.deep,
  };

  // Keep the page background (behind the shell) in sync with theme
  React.useEffect(()=>{
    document.body.style.background = dark ? '#0F1410' : '#EFEDE6';
  }, [dark]);

  const push = (screen) => setStack(s=>[...s, screen]);
  const pop = () => setStack(s=>s.slice(0,-1));

  const openCourse = (id)=> push({ kind:'course', id });
  const openTool = (id)=> push({ kind:'tool', id });
  const openReading = (courseId, unitIdx)=> push({ kind:'reading', courseId, unitIdx });

  const cur = stack[stack.length-1];

  // Reset stack when switching tabs
  React.useEffect(()=>{ setStack([]); }, [tab]);

  // Render current screen
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
    ? (cur.kind==='course' ? `Lesson · ${cur.id}` : `Tool · ${cur.id}`)
    : tabLabels[tab];

  return (
    <>
      <div
        style={{ ...cssVars, background: dark?'#0F1410':'#EFEDE6' }}
        className="app-viewport"
        data-screen-label={currentLabel}
      >
        <div
          className="app-scroll"
          style={{
            background: dark?'#0F1410':'#EFEDE6',
            fontSize: 16*t.fontScale,
          }}
        >
          {screen}
        </div>
        <TabBar tab={tab} setTab={(id)=>{ setTab(id); setStack([]); }} dark={dark}/>
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
          <TweakToggle
            label="深色模式"
            value={t.dark}
            onChange={(v)=>setTweak('dark', v)}
          />
        </TweakSection>

        <TweakSection label="文字 Typography">
          <TweakRadio
            label="字級"
            value={t.fontScale}
            onChange={(v)=>setTweak('fontScale', v)}
            options={[
              { label:'小', value:0.92 },
              { label:'中', value:1 },
              { label:'大', value:1.1 },
            ]}
          />
        </TweakSection>

        <TweakSection label="顯示 Display">
          <TweakToggle
            label="首頁顯示連勝徽章"
            value={t.showStreak}
            onChange={(v)=>setTweak('showStreak', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

// TweakColor (from tweaks-panel.jsx) is loaded onto window; we use it directly.

ReactDOM.createRoot(document.getElementById('app-root')).render(<App/>);
