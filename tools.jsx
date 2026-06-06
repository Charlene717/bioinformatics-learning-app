// tools.jsx — Interactive bioinformatics tools

// ─────────── shared helpers ───────────
function cleanDNA(s){ return (s||'').toUpperCase().replace(/[^ACGTUN]/g,''); }
function reverseComplementDNA(s){
  const comp = { A:'T', T:'A', U:'A', G:'C', C:'G', N:'N' };
  return s.toUpperCase().split('').map(b=>comp[b]||'N').reverse().join('');
}

// ─────────── GC content calculator ───────────
function GCCalculator({ dark=false }){
  const [input, setInput] = React.useState('ATGCGTACGTAGCTAGCTAGCTAACGGCATCGATCGAT');
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';

  const seq = cleanDNA(input);
  const counts = { A:0,T:0,G:0,C:0,N:0 };
  for(const b of seq) counts[b==='U'?'T':b] = (counts[b==='U'?'T':b]||0) + 1;
  const total = seq.length;
  const gc = total ? (counts.G + counts.C) / total : 0;
  const at = total ? (counts.A + counts.T) / total : 0;
  const tm = 4*(counts.G+counts.C) + 2*(counts.A+counts.T);

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
      <div style={{ background:surf, borderRadius:18, padding:14, border:`1px solid ${line}` }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, letterSpacing:1, marginBottom:6 }}>SEQUENCE (DNA)</div>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={4}
          spellCheck={false}
          style={{
            width:'100%', padding:'10px 12px', borderRadius:10,
            border:`1px solid ${line}`, background:dark?'#14160E':'#F6F4EC',
            fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:fg,
            outline:'none', resize:'vertical', letterSpacing:.8, lineHeight:1.5,
            boxSizing:'border-box',
          }}/>
        <div style={{ fontSize:11, color:muted, marginTop:6, fontFamily:"'JetBrains Mono',monospace" }}>
          長度 {total} bp · 非 ACGTU 字元自動移除
        </div>
      </div>

      {total>0 && (
        <>
          {/* GC ring + stats */}
          <div style={{ background:surf, borderRadius:18, padding:18, border:`1px solid ${line}`, display:'flex', alignItems:'center', gap:14 }}>
            <ProgressRing pct={gc} size={80} stroke={9} color="var(--accent)" track={dark?'rgba(255,255,255,.08)':'rgba(0,0,0,.06)'}/>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, letterSpacing:1 }}>GC CONTENT</div>
              <div style={{ fontFamily:'Space Grotesk', fontSize:30, fontWeight:700, color:fg, lineHeight:1.1, letterSpacing:-.5 }}>
                {(gc*100).toFixed(1)}%
              </div>
              <div style={{ fontSize:11.5, color:muted, fontFamily:'Noto Sans TC', marginTop:2 }}>
                AT 含量 {(at*100).toFixed(1)}% · Tm ≈ {tm.toFixed(0)}°C
              </div>
            </div>
          </div>

          {/* Base composition bars */}
          <div style={{ background:surf, borderRadius:18, padding:14, border:`1px solid ${line}` }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, letterSpacing:1, marginBottom:10 }}>BASE COMPOSITION</div>
            {['A','T','G','C'].map(b=>{
              const pct = total ? counts[b]/total : 0;
              return (
                <div key={b} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8 }}>
                  <div style={{
                    width:22, height:22, borderRadius:6,
                    background: BASE_COLORS[b], color:'#fff',
                    fontFamily:"'JetBrains Mono',monospace", fontSize:12, fontWeight:700,
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>{b}</div>
                  <div style={{ flex:1, height:10, background:dark?'#14160E':'#F6F4EC', borderRadius:5, overflow:'hidden' }}>
                    <div style={{ width:`${pct*100}%`, height:'100%', background:BASE_COLORS[b], borderRadius:5, transition:'width .4s' }}/>
                  </div>
                  <div style={{ width:60, fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:fg, fontWeight:700, textAlign:'right' }}>
                    {counts[b]} ({(pct*100).toFixed(1)}%)
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

// ─────────── Reverse complement converter ───────────
function RevCompTool({ dark=false }){
  const [input, setInput] = React.useState('ATGCGTACG');
  const seq = cleanDNA(input);
  const comp = seq.split('').map(b=>({A:'T',T:'A',U:'A',G:'C',C:'G',N:'N'})[b]||'N').join('');
  const rev = seq.split('').reverse().join('');
  const revcomp = reverseComplementDNA(seq);
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';

  const Row = ({ label, seq, pre, post, hl })=>(
    <div style={{ display:'flex', alignItems:'center', gap:10 }}>
      <div style={{ width:54, fontSize:11, fontFamily:'Noto Sans TC', color:muted, textAlign:'right' }}>{label}</div>
      <div style={{
        flex:1, padding:'10px 12px', borderRadius:10, background:dark?'#14160E':'#F6F4EC',
        fontFamily:"'JetBrains Mono',monospace", fontSize:13.5, letterSpacing:1.5, wordBreak:'break-all',
      }}>
        <span style={{ color:muted }}>{pre}</span>
        {seq.split('').map((b,i)=>(
          <span key={i} style={{ color: hl?BASE_COLORS[b]:fg, fontWeight:hl?700:500 }}>{b}</span>
        ))}
        <span style={{ color:muted }}>{post}</span>
      </div>
    </div>
  );

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
      <div style={{ background:surf, borderRadius:18, padding:14, border:`1px solid ${line}` }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, letterSpacing:1, marginBottom:6 }}>SEQUENCE (DNA)</div>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={3}
          spellCheck={false}
          style={{
            width:'100%', padding:'10px 12px', borderRadius:10,
            border:`1px solid ${line}`, background:dark?'#14160E':'#F6F4EC',
            fontFamily:"'JetBrains Mono',monospace", fontSize:13, color:fg,
            outline:'none', resize:'vertical', letterSpacing:1.2,
            boxSizing:'border-box',
          }}/>
      </div>

      {seq.length>0 && (
        <div style={{ background:surf, borderRadius:18, padding:14, border:`1px solid ${line}`, display:'flex', flexDirection:'column', gap:10 }}>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:13.5, fontWeight:600, color:fg }}>步驟拆解</div>
          <Row label="原始" seq={seq} pre="5'-" post="-3'" hl={true}/>
          <Row label="① 互補" seq={comp} pre="3'-" post="-5'" hl={true}/>
          <Row label="② 反向" seq={rev} pre="3'-" post="-5'" hl={false}/>
          <div style={{
            padding:'10px 12px', borderRadius:10,
            background:'var(--accent-soft)', border:`1px solid var(--accent)`,
            display:'flex', alignItems:'center', gap:10,
          }}>
            <div style={{ width:54, fontSize:11, fontFamily:'Noto Sans TC', color:'var(--accent-ink)', textAlign:'right', fontWeight:700 }}>結果</div>
            <div style={{
              flex:1, fontFamily:"'JetBrains Mono',monospace", fontSize:13.5,
              letterSpacing:1.5, color:'var(--accent-ink)', wordBreak:'break-all', fontWeight:700,
            }}>
              5'-{revcomp.split('').map((b,i)=>(
                <span key={i} style={{ color: BASE_COLORS[b] }}>{b}</span>
              ))}-3'
            </div>
          </div>
        </div>
      )}

      <div style={{
        padding:'12px 14px', borderRadius:12,
        background:dark?'#14160E':'#F6F4EC', border:`1px dashed ${line}`,
        fontSize:12, color:muted, fontFamily:'Noto Sans TC', lineHeight:1.6,
      }}>
        反向互補 = 先互補、再反轉。順序不能顛倒。常用於：找 ORF 在反向鏈、PCR 反向引子設計。
      </div>
    </div>
  );
}

// ─────────── Codon translator (6 frames) ───────────
const CODON_TABLE = {
  'TTT':'F','TTC':'F','TTA':'L','TTG':'L',
  'CTT':'L','CTC':'L','CTA':'L','CTG':'L',
  'ATT':'I','ATC':'I','ATA':'I','ATG':'M',
  'GTT':'V','GTC':'V','GTA':'V','GTG':'V',
  'TCT':'S','TCC':'S','TCA':'S','TCG':'S',
  'CCT':'P','CCC':'P','CCA':'P','CCG':'P',
  'ACT':'T','ACC':'T','ACA':'T','ACG':'T',
  'GCT':'A','GCC':'A','GCA':'A','GCG':'A',
  'TAT':'Y','TAC':'Y','TAA':'*','TAG':'*',
  'CAT':'H','CAC':'H','CAA':'Q','CAG':'Q',
  'AAT':'N','AAC':'N','AAA':'K','AAG':'K',
  'GAT':'D','GAC':'D','GAA':'E','GAG':'E',
  'TGT':'C','TGC':'C','TGA':'*','TGG':'W',
  'CGT':'R','CGC':'R','CGA':'R','CGG':'R',
  'AGT':'S','AGC':'S','AGA':'R','AGG':'R',
  'GGT':'G','GGC':'G','GGA':'G','GGG':'G',
};

function translateFrame(seq){
  let p = '';
  for(let i=0;i+3<=seq.length;i+=3){
    const c = seq.slice(i, i+3).replace(/U/g,'T');
    p += CODON_TABLE[c] || 'X';
  }
  return p;
}

function CodonTranslator({ dark=false }){
  const [input, setInput] = React.useState('ATGCGTACGCATGCGTAATCGATCGATAA');
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';

  const seq = cleanDNA(input).replace(/U/g,'T');
  const rc = reverseComplementDNA(seq);

  const frames = [
    { label:'+1', seq: seq, p: translateFrame(seq) },
    { label:'+2', seq: seq.slice(1), p: translateFrame(seq.slice(1)) },
    { label:'+3', seq: seq.slice(2), p: translateFrame(seq.slice(2)) },
    { label:'−1', seq: rc, p: translateFrame(rc) },
    { label:'−2', seq: rc.slice(1), p: translateFrame(rc.slice(1)) },
    { label:'−3', seq: rc.slice(2), p: translateFrame(rc.slice(2)) },
  ];

  // Helper: render a peptide with stop codons highlighted, M (start) in green
  const renderPeptide = (p)=>p.split('').map((aa,i)=>{
    const isStop = aa==='*';
    const isStart = aa==='M';
    const isX = aa==='X';
    return (
      <span key={i} style={{
        color: isStop ? '#fff' : isStart ? '#fff' : isX ? muted : fg,
        background: isStop ? '#D9594C' : isStart ? '#0E9384' : 'transparent',
        padding: (isStop||isStart) ? '1px 3px' : 0,
        borderRadius: 3,
        marginRight: (isStop||isStart) ? 2 : 0,
        fontFamily:"'JetBrains Mono',monospace",
        fontWeight: (isStop||isStart) ? 700 : 500,
      }}>{aa}</span>
    );
  });

  // ORF detection per frame: find longest M...* segment
  const findLongestORF = (p)=>{
    let best = { start:-1, end:-1, len:0 };
    let s = -1;
    for(let i=0;i<p.length;i++){
      if(p[i]==='M' && s===-1) s = i;
      if(p[i]==='*' && s!==-1){
        const len = i - s;
        if(len > best.len) best = { start:s, end:i, len };
        s = -1;
      }
    }
    return best;
  };

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
      <div style={{ background:surf, borderRadius:18, padding:14, border:`1px solid ${line}` }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, letterSpacing:1, marginBottom:6 }}>DNA SEQUENCE</div>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={3}
          spellCheck={false}
          style={{
            width:'100%', padding:'10px 12px', borderRadius:10,
            border:`1px solid ${line}`, background:dark?'#14160E':'#F6F4EC',
            fontFamily:"'JetBrains Mono',monospace", fontSize:13, color:fg,
            outline:'none', resize:'vertical', letterSpacing:1.2,
            boxSizing:'border-box',
          }}/>
        <div style={{ fontSize:11, color:muted, marginTop:6, fontFamily:"'JetBrains Mono',monospace" }}>
          {seq.length} bp · 6 個閱讀框並列翻譯
        </div>
      </div>

      {seq.length>=3 && (
        <div style={{ background:surf, borderRadius:18, padding:14, border:`1px solid ${line}` }}>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:13.5, fontWeight:600, color:fg, marginBottom:10 }}>
            6 個閱讀框翻譯
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:9 }}>
            {frames.map(f=>{
              const orf = findLongestORF(f.p);
              return (
                <div key={f.label}>
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:3 }}>
                    <span style={{
                      padding:'2px 7px', borderRadius:4,
                      background: f.label.startsWith('+')?'#0E938420':'#D9594C20',
                      color: f.label.startsWith('+')?'#0E9384':'#D9594C',
                      fontFamily:"'JetBrains Mono',monospace", fontSize:10, fontWeight:700, letterSpacing:.5,
                    }}>FRAME {f.label}</span>
                    {orf.len>0 && (
                      <span style={{
                        fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted,
                      }}>longest ORF: {orf.len} aa</span>
                    )}
                  </div>
                  <div style={{
                    padding:'8px 10px', borderRadius:8, background:dark?'#14160E':'#F6F4EC',
                    fontSize:12, lineHeight:1.5, wordBreak:'break-all',
                  }}>
                    {renderPeptide(f.p)}
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{
            marginTop:12, fontSize:11, color:muted, fontFamily:'Noto Sans TC', lineHeight:1.55,
            paddingTop:10, borderTop:`1px dashed ${line}`,
          }}>
            <b style={{ color:'#0E9384' }}>M</b> = Met（起始）·
            <b style={{ color:'#D9594C' }}> *</b> = 終止 ·
            X = 未知字元/不完整密碼子
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────── Tm calculator ───────────
function TmCalculator({ dark=false }){
  const [input, setInput] = React.useState('GTCAGTTACGACTACGT');
  const seq = cleanDNA(input);
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';

  // Count
  let gc = 0, at = 0;
  for(const b of seq){ if(b==='G'||b==='C') gc++; else if(b==='A'||b==='T'||b==='U') at++; }
  const n = seq.length;

  // Wallace rule (Tm ≈ 4(G+C) + 2(A+T)) for short oligos (< 14 bp)
  const tmWallace = 4*gc + 2*at;

  // Marmur formula for longer: Tm = 81.5 + 16.6·log10[Na+] + 41·(GC%) − 600/N
  // Use [Na+] = 0.05 M for typical PCR
  const Na = 0.05;
  const gcFrac = n? gc/n : 0;
  const tmMarmur = n>=14 ? 81.5 + 16.6 * Math.log10(Na) + 41 * gcFrac - 600 / n : null;

  // Recommendation
  const goodRange = (t)=> t>=55 && t<=65;
  const recTm = n<14 ? tmWallace : tmMarmur;

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
      <div style={{ background:surf, borderRadius:18, padding:14, border:`1px solid ${line}` }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, letterSpacing:1, marginBottom:6 }}>
          PRIMER SEQUENCE
        </div>
        <input value={input} onChange={e=>setInput(e.target.value)} maxLength={50}
          spellCheck={false}
          style={{
            width:'100%', padding:'10px 12px', borderRadius:10,
            border:`1px solid ${line}`, background:dark?'#14160E':'#F6F4EC',
            fontFamily:"'JetBrains Mono',monospace", fontSize:14, color:fg,
            outline:'none', letterSpacing:1.5,
            boxSizing:'border-box',
          }}/>
        <div style={{ fontSize:11, color:muted, marginTop:6, fontFamily:"'JetBrains Mono',monospace" }}>
          {n} bp · GC {n?(gcFrac*100).toFixed(1):0}%
        </div>
      </div>

      {n>0 && (
        <>
          <div style={{ background:surf, borderRadius:18, padding:16, border:`1px solid ${line}` }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, letterSpacing:1, marginBottom:8 }}>RECOMMENDED Tm</div>
            <div style={{ display:'flex', alignItems:'baseline', gap:10 }}>
              <div style={{ fontFamily:'Space Grotesk', fontSize:42, fontWeight:700, color: goodRange(recTm) ? 'var(--accent)' : '#EAA532', letterSpacing:-1, lineHeight:1 }}>
                {recTm.toFixed(1)}
              </div>
              <div style={{ fontFamily:'Space Grotesk', fontSize:18, color:muted }}>°C</div>
              <div style={{ marginLeft:'auto', fontSize:11, color:muted, fontFamily:'Noto Sans TC' }}>
                {goodRange(recTm) ? '✓ 在 PCR 推薦範圍' : recTm<55 ? '偏低，建議拉長' : '偏高，建議縮短'}
              </div>
            </div>
            <div style={{ marginTop:8, height:6, background:dark?'#14160E':'#F6F4EC', borderRadius:99, position:'relative' }}>
              {/* good range marker 55-65°C, full bar 30-85°C */}
              <div style={{
                position:'absolute', left:`${(55-30)/55*100}%`, width:`${10/55*100}%`,
                top:0, bottom:0, background:'var(--accent-soft)', borderRadius:99,
              }}/>
              <div style={{
                position:'absolute', left:`${Math.max(0,Math.min(100,(recTm-30)/55*100))}%`,
                top:-3, width:12, height:12, marginLeft:-6, borderRadius:99,
                background:'var(--accent)', boxShadow:'0 1px 4px rgba(0,0,0,.2)',
              }}/>
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:10, color:muted, fontFamily:"'JetBrains Mono',monospace", marginTop:4 }}>
              <span>30</span><span>55</span><span>65</span><span>85</span>
            </div>
          </div>

          <div style={{ background:surf, borderRadius:18, padding:14, border:`1px solid ${line}` }}>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:13.5, fontWeight:600, color:fg, marginBottom:10 }}>
              兩種計算公式
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              <FormulaCard
                title="Wallace Rule"
                sub="短引子 < 14 bp"
                formula="Tm ≈ 4·(G+C) + 2·(A+T)"
                value={tmWallace}
                active={n<14}
                dark={dark}
              />
              <FormulaCard
                title="Marmur (修正)"
                sub="長引子 ≥ 14 bp，[Na⁺]=50 mM"
                formula="81.5 + 16.6·log[Na⁺] + 41·%GC − 600/N"
                value={tmMarmur}
                active={n>=14}
                dark={dark}
              />
            </div>
          </div>

          <div style={{
            padding:'12px 14px', borderRadius:12,
            background:dark?'#14160E':'#F6F4EC', border:`1px dashed ${line}`,
            fontSize:12, color:muted, fontFamily:'Noto Sans TC', lineHeight:1.6,
          }}>
            PCR 引子實務建議：兩條引子 Tm 差距 &lt; 5°C、Tm 落在 55-65°C、GC 含量 40-60%、避免 3' 端連續重複。
          </div>
        </>
      )}
    </div>
  );
}

function FormulaCard({ title, sub, formula, value, active, dark }){
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  return (
    <div style={{
      padding:'10px 12px', borderRadius:10,
      background: active? 'var(--accent-soft)' : (dark?'#14160E':'#F6F4EC'),
      border: active? `1px solid var(--accent)` : `1px solid ${dark?'#2A2D29':'#E5E2D9'}`,
    }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
        <div style={{ fontFamily:'Space Grotesk', fontWeight:600, fontSize:13, color:active?'var(--accent-ink)':fg }}>
          {title}
        </div>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:14, color:active?'var(--accent-ink)':fg, fontWeight:700 }}>
          {value!=null ? `${value.toFixed(1)} °C` : '—'}
        </div>
      </div>
      <div style={{ fontSize:10.5, color:muted, fontFamily:'Noto Sans TC', marginTop:2 }}>{sub}</div>
      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:active?'var(--accent-ink)':muted, marginTop:4, letterSpacing:.3 }}>
        {formula}
      </div>
    </div>
  );
}

// ─────────── Hardy-Weinberg calculator ───────────
function HWECalculator({ dark=false }){
  const [aa, setAa] = React.useState(50);
  const [Aa, setAa_] = React.useState(30);
  const [aaH, setAaH] = React.useState(20);
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';

  const N = aa + Aa + aaH;
  const p = N? (2*aa + Aa)/(2*N) : 0;
  const q = 1 - p;
  // Expected under HWE
  const expAA = N * p*p;
  const expAa = N * 2*p*q;
  const expaa = N * q*q;
  // chi-square
  const chi = N ? (((aa-expAA)**2)/Math.max(.01,expAA) + ((Aa-expAa)**2)/Math.max(.01,expAa) + ((aaH-expaa)**2)/Math.max(.01,expaa)) : 0;

  const Slider = ({ label, val, set, max=100, col })=>(
    <div style={{ marginBottom:10 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:4 }}>
        <span style={{ fontFamily:'Space Grotesk', fontSize:12.5, fontWeight:600, color:fg }}>{label}</span>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:col, fontWeight:700 }}>{val}</span>
      </div>
      <input type="range" min={0} max={max} value={val} onChange={e=>set(parseInt(e.target.value))}
        style={{ width:'100%', accentColor:col }}/>
    </div>
  );

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
      <div style={{ background:surf, borderRadius:18, padding:14, border:`1px solid ${line}` }}>
        <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:13.5, fontWeight:600, color:fg, marginBottom:10 }}>
          觀察到的基因型計數
        </div>
        <Slider label="AA (同型 dominant)" val={aa} set={setAa} col="#0E9384"/>
        <Slider label="Aa (異型)" val={Aa} set={setAa_} col="#EAA532"/>
        <Slider label="aa (同型 recessive)" val={aaH} set={setAaH} col="#D9594C"/>
        <div style={{ marginTop:6, fontSize:11, color:muted, fontFamily:"'JetBrains Mono',monospace" }}>
          總個體數 N = {N}
        </div>
      </div>

      {N>0 && (
        <>
          {/* Allele frequencies */}
          <div style={{ background:surf, borderRadius:18, padding:16, border:`1px solid ${line}`, display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
            <div style={{ textAlign:'center' }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, letterSpacing:1 }}>p (A)</div>
              <div style={{ fontFamily:'Space Grotesk', fontSize:28, fontWeight:700, color:'#0E9384' }}>{p.toFixed(3)}</div>
            </div>
            <div style={{ textAlign:'center' }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, letterSpacing:1 }}>q (a)</div>
              <div style={{ fontFamily:'Space Grotesk', fontSize:28, fontWeight:700, color:'#D9594C' }}>{q.toFixed(3)}</div>
            </div>
          </div>

          {/* Expected vs Observed */}
          <div style={{ background:surf, borderRadius:18, padding:14, border:`1px solid ${line}` }}>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:13.5, fontWeight:600, color:fg, marginBottom:10 }}>
              觀察 vs HWE 期望
            </div>
            <table style={{ width:'100%', borderCollapse:'collapse', fontFamily:"'JetBrains Mono',monospace", fontSize:12 }}>
              <thead>
                <tr style={{ color:muted, fontSize:10, letterSpacing:.4 }}>
                  <th style={{ textAlign:'left', padding:'4px 0', fontWeight:600 }}></th>
                  <th style={{ textAlign:'right', padding:'4px 0', fontWeight:600 }}>OBS</th>
                  <th style={{ textAlign:'right', padding:'4px 0', fontWeight:600 }}>EXP</th>
                  <th style={{ textAlign:'right', padding:'4px 0', fontWeight:600 }}>Δ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['AA', aa, expAA, '#0E9384'],
                  ['Aa', Aa, expAa, '#EAA532'],
                  ['aa', aaH, expaa, '#D9594C'],
                ].map((r,i)=>(
                  <tr key={i} style={{ borderTop:`1px dashed ${line}` }}>
                    <td style={{ padding:'8px 0', color:r[3], fontWeight:700 }}>{r[0]}</td>
                    <td style={{ textAlign:'right', color:fg, fontWeight:700 }}>{r[1]}</td>
                    <td style={{ textAlign:'right', color:muted }}>{r[2].toFixed(1)}</td>
                    <td style={{ textAlign:'right', color: Math.abs(r[1]-r[2])>r[2]*0.2 ? '#D9594C' : muted }}>
                      {(r[1]-r[2]).toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{
              marginTop:12, paddingTop:10, borderTop:`1px dashed ${line}`,
              display:'flex', alignItems:'baseline', justifyContent:'space-between',
            }}>
              <span style={{ fontSize:11, color:muted, fontFamily:'Noto Sans TC' }}>χ² 統計量 (df=1)</span>
              <span style={{
                fontFamily:"'JetBrains Mono',monospace", fontSize:14, fontWeight:700,
                color: chi>3.84 ? '#D9594C' : 'var(--accent)',
              }}>
                {chi.toFixed(2)} {chi>3.84 ? '(p<0.05, 偏離 HWE)' : '(符合 HWE)'}
              </span>
            </div>
          </div>

          <div style={{
            padding:'12px 14px', borderRadius:12,
            background:dark?'#14160E':'#F6F4EC', border:`1px dashed ${line}`,
            fontSize:12, color:muted, fontFamily:'Noto Sans TC', lineHeight:1.6,
          }}>
            χ² &gt; 3.84 表示在 α=0.05 顯著偏離 HWE — 實務上常代表：基因型呼叫錯誤、樣本污染、或族群分層。
          </div>
        </>
      )}
    </div>
  );
}

Object.assign(window, {
  GCCalculator, RevCompTool, CodonTranslator, TmCalculator, HWECalculator,
  cleanDNA, reverseComplementDNA, translateFrame, CODON_TABLE,
});
