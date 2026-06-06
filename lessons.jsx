// lessons.jsx — rich lesson content (Part 1: DNA / RNA / 蛋白質)

const LESSON_CONTENT = {};

// ─────────── DNA · RNA · 蛋白質 (id: 'dna') ───────────
LESSON_CONTENT['dna'] = {
  intro: '生命的訊息流：細胞如何把幾十億個字母長的指令，準確地讀成蛋白質。',
  estimate: '約 25 分鐘',
  units: [
    {
      title: '核苷酸與雙股結構',
      hook: '把 DNA 想成一條超長的拉鍊，兩邊的齒對齊扣在一起 — 只是這條拉鍊長到，攤開來能繞地球幾百萬圈。',
      paragraphs: [
        'DNA 的最小單位叫做「核苷酸 nucleotide」。每一個核苷酸由三個零件組成：一個磷酸基、一個去氧核糖（一種糖）、和一個含氮鹼基。鹼基只有四種：A（腺嘌呤）、T（胸腺嘧啶）、G（鳥糞嘌呤）、C（胞嘧啶）。',
        '兩條 DNA 鏈會像麻花一樣纏繞成「雙螺旋」，並依照「A 配 T、G 配 C」的鹼基配對規則互相連接。這個規則之所以重要，是因為它讓 DNA 能「自我複製」— 把雙股拆開，每股都可以當模板，產生另一條互補鏈。',
        '另一個常被問的細節是「方向性」。每條 DNA 鏈都有 5\' 和 3\' 兩端（讀法是「五撇」和「三撇」），而兩條鏈在雙螺旋中是「反平行」的：一條走 5\'→3\'，另一條走 3\'→5\'。這個方向性影響到後面所有讀寫的動作。',
      ],
      keyPoints: [
        'A-T 兩個氫鍵、G-C 三個氫鍵；GC 含量高 → 結構更穩定、Tm 較高',
        '每股 DNA 有方向性（5\' / 3\'），雙螺旋中兩股「反平行」',
        '雙螺旋的可拆性是 DNA 能複製、轉錄、修復的根本',
      ],
      viz: 'helix',
    },
    {
      title: '轉錄 Transcription',
      hook: '如果 DNA 是圖書館裡的母本，轉錄就是「影印」一張可以帶出去用的副本 — 那個副本就是 RNA。',
      paragraphs: [
        '在細胞核裡，一個名叫 RNA polymerase 的酵素會抓住 DNA、把雙股局部拆開，然後沿著其中一股「模板鏈」滑行。它根據鹼基配對規則，逐位合成一條 RNA。',
        '這條 RNA 用的字母是 A、U、G、C — 注意是 U（尿嘧啶）取代 DNA 裡的 T。其他三個鹼基保持不變。RNA 的另一個差別是它通常是「單股」的，化學性質也比 DNA 不穩定（因此細胞用完很快會降解掉）。',
        '剛轉錄出的 RNA 還不是成熟 mRNA。在真核細胞裡，它會經過三步加工：5\' 端加帽（cap）、3\' 端加 poly-A 尾巴、以及最關鍵的「剪接 splicing」— 切掉內含子 (intron)、留下外顯子 (exon)。同一段基因不同剪接組合，可以做出不同蛋白，這就是「選擇性剪接」。',
      ],
      keyPoints: [
        'DNA → RNA 時，T 換成 U，其他鹼基不變',
        'RNA polymerase 沿著模板鏈 3\'→5\' 讀取，合成 RNA 5\'→3\'',
        '真核 mRNA 會加帽、加尾、剪接；選擇性剪接讓一個基因可做多種蛋白',
      ],
      viz: 'transcription',
    },
    {
      title: '轉譯 Translation',
      hook: '轉譯就像在咖啡店點餐：mRNA 是訂單、ribosome 是廚師、tRNA 是送料的服務生 — 每三個字母點一份胺基酸。',
      paragraphs: [
        '蛋白質的合成發生在「核糖體 ribosome」上。它沿著 mRNA 移動，每次讀三個鹼基 — 這三個鹼基稱為一個「密碼子 codon」— 並根據密碼子表，把對應的胺基酸串成一條多肽鏈。',
        '送胺基酸進來的是 tRNA。每一條 tRNA 一端認得特定的密碼子（透過自己上面的反密碼子 anticodon），另一端攜帶那個密碼子對應的胺基酸。Ribosome 像一個拉鍊機構，把胺基酸一個個用肽鍵串起來。',
        '起始密碼子是 AUG（同時也編碼 Methionine），這就是為什麼絕大多數蛋白質的第一個胺基酸都是 Met。終止密碼子有三個：UAA、UAG、UGA — 它們不對應任何胺基酸，遇到它們，核糖體就會釋放完成的蛋白質。',
      ],
      keyPoints: [
        '64 個密碼子編碼 20 種胺基酸 → 一個胺基酸常對應多個密碼子（簡併性）',
        '起始：AUG (Met)；終止：UAA / UAG / UGA',
        '反密碼子的「擺動 wobble」讓一條 tRNA 可以辨識多個同義密碼子',
      ],
      viz: 'translation',
    },
    {
      title: '密碼子表的祕密',
      hook: '為什麼 64 個密碼子只編 20 個胺基酸？因為演化把這張表設計成「防呆」— 改錯一個字也常常還是同一個胺基酸。',
      paragraphs: [
        '密碼子表並不是隨機分配的。觀察一下：許多同義密碼子只差在第三個字母 — 例如 GCU、GCC、GCA、GCG 都是 Alanine。這稱為「第三位簡併」(third-base degeneracy)。',
        '這種設計帶來巨大的容錯：DNA 在複製、轉錄中難免出錯。若錯誤發生在第三個位置，往往不會改變胺基酸（這種突變叫 silent mutation）。實際統計：第三位的突變約有 70% 是同義的。',
        '更進一步，即使密碼子真的改變胺基酸，這張表也傾向把「化性相近的胺基酸」放在相鄰的密碼子。例如疏水家族（Leu、Val、Ile）的密碼子集中在某些區塊。這讓「保守性錯義突變」對蛋白功能的影響相對較小。',
      ],
      keyPoints: [
        '同義密碼子的差別多在第三位 → silent mutation 對蛋白沒影響',
        '相似性質的胺基酸通常密碼子相鄰 → 容錯設計',
        '同義不代表完全無害：codon usage bias 仍可影響轉譯速度與蛋白摺疊',
      ],
      viz: 'codon-grid',
    },
    {
      title: '突變類型',
      hook: '突變不是都很可怕。有些是錯字、有些是漏字、有些根本不會被讀出來 — 重點是「發生在哪、改了什麼」。',
      paragraphs: [
        '最基本的分類有三類：(1) 替換 substitution — 一個鹼基換成另一個；(2) 插入 insertion — 多出一段；(3) 刪除 deletion — 少了一段。插入或刪除統稱為 indel。',
        '替換突變又依「對蛋白的影響」細分：silent（不改胺基酸）、missense（改成另一個胺基酸）、nonsense（變成終止密碼子，蛋白被截短）。後兩者往往造成功能改變或喪失。',
        '插入或刪除如果不是 3 的倍數，會造成「frameshift（位移）」— 從那個位置以後的密碼子全部錯位讀取，幾乎會做出完全不同的、無功能的蛋白。這也是為什麼 indel 通常比單點替換嚴重得多。',
        '另外還有更大規模的「結構變異 SV」：拷貝數變異 (CNV)、倒置、轉位、染色體斷裂。這類變異常與癌症與遺傳疾病有關。',
      ],
      keyPoints: [
        'Silent / Missense / Nonsense：依對蛋白胺基酸序列的影響分類',
        '非 3n 的 indel → Frameshift → 通常很嚴重',
        '結構變異 (SV) 影響範圍最大，從幾百 bp 到整段染色體',
      ],
      viz: 'mutations',
    },
    {
      title: 'GC 含量與 Tm',
      hook: '為什麼 PCR 設計引子時要在意 GC？因為 GC 鍵比 AT 鍵「更黏」— 引子越黏，越不容易在高溫下脫落。',
      paragraphs: [
        'A 與 T 之間有 2 個氫鍵，G 與 C 之間有 3 個氫鍵。氫鍵越多，雙股結合越穩固，分開（變性）所需的溫度就越高。這個分開的溫度就叫 melting temperature，簡稱 Tm。',
        '對於短引子（< 20 bp），Tm 可以用一個粗略公式：Tm ≈ 4×(G+C) + 2×(A+T)。實際軟體會用更精準的最近鄰熱力學模型，但這個 thumb rule 在實驗室裡仍然很常用。',
        '不同物種的 GC 含量差異很大：人類基因組約 41%、大腸桿菌約 51%、結核菌約 65%。GC 含量也會隨基因組區段變動 — 例如哺乳類有所謂的「等溫塊 isochores」，不同 GC 區帶分布著不同密度的基因。',
      ],
      keyPoints: [
        'GC 含量高 → Tm 高 → 雙股更穩定',
        '短引子 Tm ≈ 4×(G+C) + 2×(A+T)（thumb rule）',
        '不同物種、不同基因組區段的 GC 含量差異顯著',
      ],
      viz: 'gc-bar',
    },
    {
      title: '反向互補練習',
      hook: '常見的考題：「給你正向鏈 5\'-ATGCGT-3\'，請寫出反向互補。」這不是單純倒過來 — 它有兩個步驟。',
      paragraphs: [
        '第一步「互補」：每個鹼基換成它的配對 — A↔T、G↔C。所以 ATGCGT 變成 TACGCA。',
        '第二步「反向」：因為兩條鏈是反平行的，你要再把字串整個倒過來。TACGCA 反過來是 ACGCAT。所以 5\'-ATGCGT-3\' 的反向互補就是 5\'-ACGCAT-3\'。',
        '為什麼這在生資中那麼常用？因為當你拿到一段序列時，基因可能位於正向鏈，也可能位於反向鏈。要找開放閱讀框 (ORF) 時，必須同時檢查 6 個閱讀框 — 正向 3 個、反向互補 3 個。',
      ],
      keyPoints: [
        '反向互補 = 先互補、再反轉（兩步缺一不可）',
        '反向互補後仍保持 5\'→3\' 的讀法',
        '找 ORF 要同時掃 6 個閱讀框',
      ],
      viz: 'revcomp',
    },
    {
      title: '章節小測',
      hook: '把剛剛的概念串起來想一遍 — 從鹼基配對到反向互補，這些都是後面 BLAST、變異呼叫、引子設計的基本功。',
      paragraphs: [
        '挑戰自己：(1) 為什麼基因組複製需要兩條鏈反平行？(2) 如果某個基因第三位發生突變，最可能的後果是什麼？(3) PCR 引子設計時，為什麼一般希望 Tm 在 55-65°C 之間？',
        '把這些問題想過一遍，比死背還有用。試著用自己的話解釋給朋友聽 — 能講清楚，才表示你真的懂了。',
      ],
      keyPoints: [
        '解釋勝於背誦：能用比喻講出來才是懂',
        '從 DNA 結構到應用（PCR、ORF、突變註解）一氣呵成',
      ],
      viz: null,
    },
  ],
};

// ─────────── LessonReader ───────────
function LessonReader({ courseId, unitIdx, onBack, onNext, onPrev, dark=false }){
  const content = LESSON_CONTENT[courseId];
  const course = COURSES.find(c=>c.id===courseId);
  if(!content || !content.units[unitIdx]){
    return (
      <div style={{ padding:'0 0 100px' }}>
        <AppHeader dark={dark} subtitle={course?.sub?.toUpperCase()} title="教材整理中" onBack={onBack}/>
        <div style={{ padding:'0 20px' }}>
          <div style={{
            background: dark?'#1E211D':'#fff', borderRadius:18, padding:20,
            border:`1px solid ${dark?'#2A2D29':'#E5E2D9'}`,
            fontFamily:'Noto Sans TC, Manrope', fontSize:14, lineHeight:1.7, color:dark?'#9E9C90':'#707974',
          }}>
            這一節的詳細教材還在編寫中。先試試<b style={{ color:'var(--accent)' }}>練習</b>分頁的小工具，或回到 <b style={{ color:'var(--accent)' }}>DNA · RNA · 蛋白質</b>章節體驗完整教材。
          </div>
        </div>
      </div>
    );
  }

  const unit = content.units[unitIdx];
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';
  const totalUnits = content.units.length;
  const bookmarks = (typeof useBookmarks === 'function') ? useBookmarks() : null;

  return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader
        dark={dark}
        subtitle={`${course.title.toUpperCase()} · ${String(unitIdx+1).padStart(2,'0')} / ${String(totalUnits).padStart(2,'0')}`}
        title={unit.title}
        onBack={onBack}
        right={bookmarks ? (
          <BookmarkButton
            active={bookmarks.hasLesson(courseId, unitIdx)}
            onClick={()=>bookmarks.toggleLesson(courseId, unitIdx)}
          />
        ) : null}
      />

      {/* progress dots */}
      <div style={{ padding:'0 20px', marginBottom:18, display:'flex', gap:4 }}>
        {content.units.map((_,i)=>(
          <div key={i} style={{
            flex:1, height:3, borderRadius:99,
            background: i<unitIdx ? course.color : i===unitIdx ? course.color : line,
            opacity: i<=unitIdx ? 1 : 1,
          }}/>
        ))}
      </div>

      {/* Hook */}
      <div style={{ padding:'0 20px', marginBottom:18 }}>
        <div style={{
          padding:'18px 18px 18px 18px', borderRadius:16,
          background: course.color+'14',
          borderLeft: `3px solid ${course.color}`,
          position:'relative',
        }}>
          <div style={{
            fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:1.4,
            color: course.color, marginBottom:6, fontWeight:700,
          }}>HOOK · 直覺先行</div>
          <div style={{
            fontFamily:'Noto Sans TC, Manrope', fontSize:15.5, fontWeight:500,
            color:fg, lineHeight:1.7, letterSpacing:.2,
          }}>{unit.hook}</div>
        </div>
      </div>

      {/* Body paragraphs */}
      <div style={{ padding:'0 20px', marginBottom:18 }}>
        {unit.paragraphs.map((p, pi)=>(
          <div key={pi} style={{
            fontFamily:'Noto Sans TC, Manrope',
            fontSize:14.5, lineHeight:1.85, color:fg,
            marginBottom: pi<unit.paragraphs.length-1 ? 14 : 0,
            letterSpacing:.1,
          }}>
            <span style={{
              float:'left', fontFamily:'Space Grotesk', fontWeight:700,
              fontSize:13, color: course.color, marginRight:8,
              padding:'2px 7px', borderRadius:99,
              background: course.color+'15',
              lineHeight:'18px',
            }}>{String(pi+1).padStart(2,'0')}</span>
            {p}
          </div>
        ))}
      </div>

      {/* Embedded viz */}
      {unit.viz && (
        <div style={{ padding:'0 20px', marginBottom:18 }}>
          <LessonViz kind={unit.viz} color={course.color} dark={dark}/>
        </div>
      )}

      {/* Key points */}
      {unit.keyPoints && unit.keyPoints.length>0 && (
        <div style={{ padding:'0 20px', marginBottom:18 }}>
          <div style={{
            background:surf, borderRadius:16, padding:'14px 16px',
            border:`1px solid ${line}`,
          }}>
            <div style={{
              fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:1.4,
              color:muted, marginBottom:10, fontWeight:700,
            }}>KEY TAKEAWAYS · 重點整理</div>
            {unit.keyPoints.map((k, ki)=>(
              <div key={ki} style={{
                display:'flex', gap:10, alignItems:'flex-start',
                marginBottom: ki<unit.keyPoints.length-1?10:0,
              }}>
                <div style={{
                  width:18, height:18, borderRadius:6, flexShrink:0, marginTop:1,
                  background: course.color+'22', color: course.color,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontFamily:"'JetBrains Mono',monospace", fontSize:10, fontWeight:700,
                }}>{ki+1}</div>
                <div style={{
                  fontSize:13.5, color:fg, lineHeight:1.6, fontFamily:'Noto Sans TC, Manrope',
                }}>{k}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* nav buttons */}
      <div style={{ padding:'0 20px', display:'flex', gap:8, marginTop:4 }}>
        <button onClick={()=>onPrev && onPrev()} disabled={unitIdx<=0}
          style={{
            flex:1, padding:'12px', borderRadius:12,
            border:`1px solid ${line}`, background:'transparent',
            color: unitIdx<=0?muted:fg, fontWeight:600, fontSize:13,
            fontFamily:'Manrope, system-ui',
            cursor: unitIdx<=0?'default':'pointer',
            display:'flex', alignItems:'center', justifyContent:'center', gap:6,
          }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          上一節
        </button>
        <button onClick={()=>onNext && onNext()}
          style={{
            flex:2, padding:'12px', borderRadius:12, border:'none',
            background: course.color, color:'#fff',
            fontWeight:600, fontSize:13,
            fontFamily:'Manrope, system-ui', cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center', gap:6,
          }}>
          {unitIdx>=totalUnits-1 ? '完成這章 ✓' : '完成本節 · 下一節'}
          {unitIdx<totalUnits-1 && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
        </button>
      </div>
    </div>
  );
}

// ─────────── Inline visualizations for lesson units ───────────
function LessonViz({ kind, color='#0E9384', dark=false }){
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';
  const bg = dark?'#14160E':'#F6F4EC';

  const wrap = (title, child, foot)=>(
    <div style={{ background:surf, borderRadius:16, padding:14, border:`1px solid ${line}` }}>
      <div style={{
        fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted,
        letterSpacing:1.2, marginBottom:10,
      }}>FIG · {title}</div>
      {child}
      {foot && (
        <div style={{
          marginTop:10, paddingTop:10, borderTop:`1px dashed ${line}`,
          fontSize:11.5, color:muted, lineHeight:1.55, fontFamily:'Noto Sans TC',
        }}>{foot}</div>
      )}
    </div>
  );

  if(kind==='helix') {
    return wrap('DNA 雙螺旋與鹼基配對',
      <svg width="100%" viewBox="0 0 320 170">
        {/* backbones */}
        <path d="M40 20 Q100 60 40 100 Q100 140 40 180" stroke={color} strokeWidth="2.5" fill="none"/>
        <path d="M280 20 Q220 60 280 100 Q220 140 280 180" stroke={color} strokeWidth="2.5" fill="none"/>
        {/* base pairs */}
        {[
          [30, 'A','T', 2], [55, 'G','C', 3], [80, 'T','A', 2], [105, 'C','G', 3],
          [130, 'A','T', 2], [155, 'G','C', 3]
        ].map(([y, b1, b2, h], i)=>{
          const stretch = Math.abs(80 - i*25 - 30) * 0.6;
          const x1 = 60, x2 = 260;
          return (
            <g key={i}>
              {/* h-bond lines */}
              {[...Array(h)].map((_,k)=>(
                <line key={k} x1={x1+30} x2={x2-30} y1={y + k*3 - h*1.5} y2={y + k*3 - h*1.5}
                  stroke={muted} strokeWidth="1" strokeDasharray="2 2" opacity=".5"/>
              ))}
              <circle cx={x1+18} cy={y} r="10" fill={BASE_COLORS[b1]}/>
              <text x={x1+18} y={y+4} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fontWeight="700" fill="#fff">{b1}</text>
              <circle cx={x2-18} cy={y} r="10" fill={BASE_COLORS[b2]}/>
              <text x={x2-18} y={y+4} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fontWeight="700" fill="#fff">{b2}</text>
              <text x={155} y={y-3} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill={muted}>{h} H-bond</text>
            </g>
          );
        })}
        {/* labels */}
        <text x="40" y="14" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>5'</text>
        <text x="280" y="14" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>3'</text>
      </svg>,
      <>注意 G-C 配對有 3 個氫鍵、A-T 只有 2 個，這就是 GC 含量影響 Tm 的根本原因。</>
    );
  }

  if(kind==='transcription') {
    return wrap('DNA → RNA 轉錄',
      <svg width="100%" viewBox="0 0 320 160">
        {/* DNA template */}
        <g>
          <text x="14" y="30" fontFamily="JetBrains Mono" fontSize="10" fill={muted}>DNA</text>
          {'ATGCGTACG'.split('').map((b,i)=>(
            <g key={i}>
              <rect x={50+i*26} y="20" width="22" height="22" rx="3" fill={BASE_COLORS[b]}/>
              <text x={61+i*26} y="36" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="12" fontWeight="700" fill="#fff">{b}</text>
            </g>
          ))}
          {/* template line */}
          {'TACGCATGC'.split('').map((b,i)=>(
            <g key={i}>
              <rect x={50+i*26} y="52" width="22" height="22" rx="3" fill={BASE_COLORS[b]} opacity=".4"/>
              <text x={61+i*26} y="68" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="12" fontWeight="700" fill="#fff" opacity=".8">{b}</text>
            </g>
          ))}
        </g>
        {/* arrow */}
        <g transform="translate(155,92)">
          <path d="M0 0 L0 14 M-8 6 L0 14 L8 6" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="14" y="14" fontFamily="JetBrains Mono" fontSize="10" fill={color}>RNA polymerase</text>
        </g>
        {/* RNA */}
        <g>
          <text x="14" y="138" fontFamily="JetBrains Mono" fontSize="10" fill={muted}>RNA</text>
          {'AUGCGUACG'.split('').map((b,i)=>(
            <g key={i}>
              <rect x={50+i*26} y="124" width="22" height="22" rx="3" fill={BASE_COLORS[b]}/>
              <text x={61+i*26} y="140" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="12" fontWeight="700" fill="#fff">{b}</text>
            </g>
          ))}
        </g>
      </svg>,
      <>RNA 用 U 取代 T。DNA 上 T → RNA 上 U；其他 A/G/C 維持。</>
    );
  }

  if(kind==='translation') {
    return wrap('mRNA → 蛋白質 轉譯',
      <svg width="100%" viewBox="0 0 320 170">
        {/* mRNA */}
        <text x="14" y="30" fontFamily="JetBrains Mono" fontSize="10" fill={muted}>mRNA</text>
        {'AUGCGUACG'.split('').map((b,i)=>{
          const codonIdx = Math.floor(i/3);
          const cols = ['#0E9384','#EAA532','#4F94D8'];
          return (
            <g key={i}>
              <rect x={50+i*26} y="20" width="22" height="22" rx="3" fill={BASE_COLORS[b]}/>
              <text x={61+i*26} y="36" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="12" fontWeight="700" fill="#fff">{b}</text>
              {i%3===1 && (
                <rect x={50+(i-1)*26 - 1} y="17" width="76" height="28" rx="5" stroke={cols[codonIdx]} strokeWidth="1.5" fill="none" strokeDasharray="3 2"/>
              )}
            </g>
          );
        })}
        {/* ribosome */}
        <g transform="translate(160,68)">
          <ellipse cx="0" cy="0" rx="55" ry="14" fill={color} opacity=".2"/>
          <text x="0" y="3" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill={color}>RIBOSOME</text>
        </g>
        {/* peptide */}
        <text x="14" y="138" fontFamily="JetBrains Mono" fontSize="10" fill={muted}>Peptide</text>
        {[
          {a:'Met', c:'#0E9384'},
          {a:'Arg', c:'#EAA532'},
          {a:'Thr', c:'#4F94D8'},
        ].map((aa,i)=>(
          <g key={i}>
            <circle cx={62 + i*78} cy="135" r="16" fill={aa.c}/>
            <text x={62 + i*78} y="139" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fontWeight="700" fill="#fff">{aa.a}</text>
            {i<2 && <line x1={62+i*78+16} y1="135" x2={62+(i+1)*78-16} y2="135" stroke={muted} strokeWidth="2"/>}
          </g>
        ))}
      </svg>,
      <>每三個核苷酸 (codon) 對應一個胺基酸。AUG 起始 → Met；CGU → Arg；ACG → Thr。</>
    );
  }

  if(kind==='codon-grid') {
    // show that GCN all → Alanine (degeneracy)
    return wrap('簡併性：GCN 都是 Alanine',
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:6 }}>
        {['GCU','GCC','GCA','GCG'].map(c=>(
          <div key={c} style={{
            background:'#E0B848', color:'#fff', borderRadius:8,
            padding:'10px 4px', textAlign:'center',
            fontFamily:"'JetBrains Mono',monospace",
          }}>
            <div style={{ fontSize:13, fontWeight:700, letterSpacing:.5 }}>{c}</div>
            <div style={{ fontSize:10, opacity:.85, marginTop:2 }}>→ Ala (A)</div>
          </div>
        ))}
      </div>,
      <>第三位 U/C/A/G 都不影響結果 — 這就是「第三位簡併」。約 70% 的第三位點突變是 silent。</>
    );
  }

  if(kind==='mutations') {
    return wrap('替換突變的三種後果',
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {[
          { label:'Silent', codon:'GCU → GCC', aa:'Ala → Ala (不變)', c:'#4FB37E' },
          { label:'Missense', codon:'GCU → GUU', aa:'Ala → Val (換)', c:'#EAA532' },
          { label:'Nonsense', codon:'CAA → UAA', aa:'Gln → STOP (截短)', c:'#D9594C' },
        ].map(m=>(
          <div key={m.label} style={{
            display:'flex', alignItems:'center', gap:10,
            padding:'10px 12px', borderRadius:10,
            background: m.c+'18', border:`1px solid ${m.c}55`,
          }}>
            <div style={{
              width:64, padding:'4px 6px', borderRadius:6, background:m.c, color:'#fff',
              fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700,
              textAlign:'center', letterSpacing:.3,
            }}>{m.label}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11.5, color:fg, fontWeight:600 }}>{m.codon}</div>
              <div style={{ fontSize:11, color:muted, marginTop:1, fontFamily:'Noto Sans TC' }}>{m.aa}</div>
            </div>
          </div>
        ))}
      </div>,
      <>Frameshift（插入/刪除非 3n）通常比點突變更嚴重 — 整段讀碼都會錯位。</>
    );
  }

  if(kind==='gc-bar') {
    const data = [
      { name:'結核菌', gc:65 },
      { name:'大腸桿菌', gc:51 },
      { name:'人類', gc:41 },
      { name:'酵母', gc:38 },
      { name:'瘧原蟲', gc:19 },
    ];
    return wrap('不同物種的 GC 含量',
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {data.map(d=>(
          <div key={d.name} style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:60, fontSize:12, color:fg, fontFamily:'Noto Sans TC' }}>{d.name}</div>
            <div style={{ flex:1, height:14, background:bg, borderRadius:7, overflow:'hidden', position:'relative' }}>
              <div style={{
                width:`${d.gc}%`, height:'100%',
                background:`linear-gradient(90deg, ${color}, ${color}cc)`,
                borderRadius:7,
              }}/>
            </div>
            <div style={{
              width:42, textAlign:'right', fontSize:11,
              fontFamily:"'JetBrains Mono',monospace", color:fg, fontWeight:700,
            }}>{d.gc}%</div>
          </div>
        ))}
      </div>,
      <>GC 含量在不同物種差異巨大 — 從不到 20% 到超過 65%。</>
    );
  }

  if(kind==='dotplot') {
    const s1 = 'ATGCGTACGTAGC';
    const s2 = 'ATGGGTACGCAGC';
    const cells = 13;
    const cs = 18; // cell size
    return wrap('Dot plot · 同源段落 = 對角線',
      <div style={{ display:'flex', justifyContent:'center' }}>
        <svg width={cells*cs+40} height={cells*cs+40} viewBox={`0 0 ${cells*cs+40} ${cells*cs+40}`}>
          {/* axis labels - x */}
          {s1.split('').map((b,i)=>(
            <text key={i} x={30+i*cs+cs/2} y={14} textAnchor="middle"
              fontFamily="JetBrains Mono" fontSize="9" fill={BASE_COLORS[b]||muted} fontWeight="700">{b}</text>
          ))}
          {/* axis labels - y */}
          {s2.split('').map((b,i)=>(
            <text key={i} x={16} y={28+i*cs+cs/2} textAnchor="middle"
              fontFamily="JetBrains Mono" fontSize="9" fill={BASE_COLORS[b]||muted} fontWeight="700">{b}</text>
          ))}
          {/* grid + dots */}
          {s1.split('').map((b1,i)=>(
            s2.split('').map((b2,j)=>{
              const match = b1===b2;
              return (
                <rect key={`${i}-${j}`}
                  x={30+i*cs} y={22+j*cs}
                  width={cs-1} height={cs-1}
                  rx={2}
                  fill={match ? color : bg}
                  opacity={match ? .95 : 1}
                />
              );
            })
          ))}
        </svg>
      </div>,
      <>對角線越長代表共同的子片段越長。完美相同會是一條完整對角；中斷或岔開則代表 indel 或 mismatch。</>
    );
  }

  if(kind==='dp-matrix') {
    // Demonstrate Needleman-Wunsch DP fill on 'GAT' vs 'GCT'
    const s1 = 'GAT', s2 = 'GCT';
    const m = s1.length+1, n = s2.length+1;
    // precomputed DP for visualization
    const M = [
      [0,-1,-2,-3],
      [-1,1,0,-1],
      [-2,0,0,-1],
      [-3,-1,-1,1],
    ];
    // optimal traceback: (3,3) ← (2,2) ← (1,1) ← (0,0)
    const path = new Set(['0-0','1-1','2-2','3-3']);
    const cs = 36;
    return wrap('Needleman-Wunsch 矩陣',
      <div style={{ display:'flex', justifyContent:'center' }}>
        <svg width={n*cs+44} height={m*cs+30} viewBox={`0 0 ${n*cs+44} ${m*cs+30}`}>
          {/* col header */}
          {['—', ...s2.split('')].map((b,j)=>(
            <text key={j} x={44+j*cs+cs/2} y={18} textAnchor="middle"
              fontFamily="JetBrains Mono" fontSize="11" fontWeight="700"
              fill={BASE_COLORS[b]||muted}>{b}</text>
          ))}
          {/* row header */}
          {['—', ...s1.split('')].map((b,i)=>(
            <text key={i} x={20} y={32+i*cs+cs/2} textAnchor="middle"
              fontFamily="JetBrains Mono" fontSize="11" fontWeight="700"
              fill={BASE_COLORS[b]||muted}>{b}</text>
          ))}
          {/* cells */}
          {M.map((row, i)=>row.map((v, j)=>{
            const onPath = path.has(`${i}-${j}`);
            return (
              <g key={`${i}-${j}`}>
                <rect x={32+j*cs} y={24+i*cs} width={cs-3} height={cs-3} rx={5}
                  fill={onPath? color : bg}
                  stroke={onPath? color : line} strokeWidth="1"/>
                <text x={32+j*cs+(cs-3)/2} y={24+i*cs+(cs-3)/2+4} textAnchor="middle"
                  fontFamily="JetBrains Mono" fontSize="13" fontWeight="700"
                  fill={onPath?'#fff':fg}>{v}</text>
              </g>
            );
          }))}
        </svg>
      </div>,
      <>每一格 = max(對角+match/mismatch, 上方+gap, 左方+gap)。從右下回溯出粗體對角路徑：G-G、A-C、T-T，分數 1。</>
    );
  }

  if(kind==='nw-vs-sw') {
    const mono = { fontFamily:"'JetBrains Mono',monospace", fontSize:11.5, letterSpacing:1.2 };
    const renderSeq = (seq, match=null) => (
      <div style={mono}>
        {seq.split('').map((b,i)=>(
          <span key={i} style={{
            color: b==='-' ? muted : match && match[i] ? fg : '#D9594C',
            fontWeight: match && match[i] ? 500 : 700,
          }}>{b}</span>
        ))}
      </div>
    );
    return wrap('NW（全域）vs SW（局部）',
      <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
        <div>
          <div style={{
            fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:color,
            letterSpacing:.8, fontWeight:700, marginBottom:6,
          }}>NEEDLEMAN-WUNSCH · GLOBAL</div>
          <div style={{ display:'flex', flexDirection:'column', gap:3, padding:'10px', background:bg, borderRadius:8 }}>
            {renderSeq('ATGC--CGTACGT', [1,1,1,1,0,0,1,1,1,1,1,1,1])}
            <div style={{ ...mono, color:color }}>|| |&nbsp;&nbsp;||&nbsp;&nbsp;|| |</div>
            {renderSeq('AT-CGGCGAACGT', [1,1,0,1,0,0,1,1,0,0,1,1,1])}
          </div>
        </div>
        <div>
          <div style={{
            fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#EAA532',
            letterSpacing:.8, fontWeight:700, marginBottom:6,
          }}>SMITH-WATERMAN · LOCAL</div>
          <div style={{ display:'flex', flexDirection:'column', gap:3, padding:'10px', background:bg, borderRadius:8 }}>
            <div style={{ ...mono, color:muted }}>...ATGC <span style={{ color:'#EAA532', fontWeight:700 }}>CGT</span> ACGT...</div>
            <div style={{ ...mono, color:'#EAA532', textAlign:'center', marginLeft:36 }}>|||</div>
            <div style={{ ...mono, color:muted }}>...XYZA <span style={{ color:'#EAA532', fontWeight:700 }}>CGT</span> KKKK...</div>
          </div>
        </div>
      </div>,
      <>NW 強制全域對齊；SW 只擷取「最像的一段」。同源 domain 探勘用 SW；演化保守度用 NW。</>
    );
  }

  if(kind==='blast-flow') {
    return wrap('BLAST seed-and-extend 流程',
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {[
          { step:'1', title:'切 k-mer', body:'把 query 切成長度 k 的小片段（核酸 k=11、蛋白 k=3）', col:'#0E9384' },
          { step:'2', title:'查表找 hits', body:'用 hash table 在資料庫裡瞬間找到所有完全相同的 k-mer', col:'#EAA532' },
          { step:'3', title:'向兩側延伸', body:'從每個 hit 出發，左右延伸做局部比對，直到分數開始下降', col:'#4F94D8' },
          { step:'4', title:'計算 E-value', body:'根據比對長度與資料庫大小，估計這個 hit 隨機出現的機率', col:'#9C77C7' },
        ].map(s=>(
          <div key={s.step} style={{
            display:'flex', alignItems:'flex-start', gap:10,
            padding:'10px 12px', borderRadius:10,
            background: s.col+'15', borderLeft:`3px solid ${s.col}`,
          }}>
            <div style={{
              width:22, height:22, borderRadius:6, background:s.col, color:'#fff',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700,
              flexShrink:0,
            }}>{s.step}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:13, fontWeight:600, color:fg }}>{s.title}</div>
              <div style={{ fontSize:11.5, color:muted, marginTop:2, fontFamily:'Noto Sans TC' }}>{s.body}</div>
            </div>
          </div>
        ))}
      </div>,
      <>「粗篩 → 精算」是 BLAST 比完整 SW 快上百倍的原因。代價：可能漏掉「完全沒有共同 k-mer」的遠緣同源。</>
    );
  }

  if(kind==='msa-viz') {
    const seqs = [
      { name:'Human',  seq:'MVHLTPEEKSAV' },
      { name:'Chimp',  seq:'MVHLTPEEKSAV' },
      { name:'Mouse',  seq:'MVHLTDAEKSAV' },
      { name:'Zebra',  seq:'MVHWTAEEKQLI' },
      { name:'Frog',   seq:'MVHWTAEEKAVI' },
    ];
    // count conservation per col
    const cols = seqs[0].seq.length;
    const cons = [];
    for(let c=0;c<cols;c++){
      const counts = {};
      for(const s of seqs){ counts[s.seq[c]] = (counts[s.seq[c]]||0)+1; }
      const max = Math.max(...Object.values(counts));
      cons.push(max/seqs.length);
    }
    return wrap('多序列比對 + 保守欄位',
      <div>
        <div style={{ display:'flex', flexDirection:'column', gap:3 }}>
          {seqs.map((s, si)=>(
            <div key={s.name} style={{ display:'flex', alignItems:'center', gap:6 }}>
              <div style={{ width:44, fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted }}>{s.name}</div>
              <div style={{ display:'flex', gap:1 }}>
                {s.seq.split('').map((aa, i)=>(
                  <div key={i} style={{
                    width:17, height:18, display:'flex', alignItems:'center', justifyContent:'center',
                    fontFamily:"'JetBrains Mono',monospace", fontSize:10, fontWeight:700,
                    color: cons[i]>=0.8 ? '#fff' : fg,
                    background: cons[i]>=1 ? color
                              : cons[i]>=0.8 ? color+'80'
                              : cons[i]>=0.6 ? color+'30'
                              : bg,
                    borderRadius:3,
                  }}>{aa}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:6 }}>
          <div style={{ width:44, fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:muted, textAlign:'right', paddingRight:4 }}>保守度</div>
          <div style={{ display:'flex', gap:1 }}>
            {cons.map((c, i)=>(
              <div key={i} style={{
                width:17, height:24, display:'flex', alignItems:'flex-end', justifyContent:'center',
              }}>
                <div style={{ width:'80%', height:`${c*100}%`, background:color, borderRadius:'2px 2px 0 0' }}/>
              </div>
            ))}
          </div>
        </div>
      </div>,
      <>同一欄整排都相同的位置 = 高度保守，通常是活性中心或結構關鍵殘基。</>
    );
  }

  if(kind==='revcomp') {
    const fwd = 'ATGCGT';
    const comp = 'TACGCA';
    const rev = 'ACGCAT';
    return wrap('反向互補兩步驟',
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {[
          { label:'原始', seq:fwd, prefix:"5'-", suffix:"-3'" },
          { label:'① 互補', seq:comp, prefix:"3'-", suffix:"-5'" },
          { label:'② 反向', seq:rev, prefix:"5'-", suffix:"-3'" },
        ].map((r,i)=>(
          <div key={i} style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{
              width:54, fontSize:11, fontFamily:'Noto Sans TC', color:muted,
              padding:'3px 7px', borderRadius:99, background: i===2?color+'20':bg,
              textAlign:'center', fontWeight:i===2?700:500,
              ...(i===2?{ color: color }:{}),
            }}>{r.label}</div>
            <div style={{
              flex:1, fontFamily:"'JetBrains Mono',monospace", fontSize:13,
              padding:'8px 10px', borderRadius:8, background:bg,
              letterSpacing:1.2, color:fg,
            }}>
              <span style={{ color:muted }}>{r.prefix}</span>
              {r.seq.split('').map((b,bi)=>(
                <span key={bi} style={{ color: BASE_COLORS[b] }}>{b}</span>
              ))}
              <span style={{ color:muted }}>{r.suffix}</span>
            </div>
          </div>
        ))}
      </div>,
      <>第一步「逐位互補」，第二步「整段反轉」。順序不能顛倒；少了任何一步都會出錯。</>
    );
  }

  // ───── Protein chapter vizes ─────
  if(kind==='aa-classes'){
    const groups = [
      { name:'疏水 Hydrophobic', col:'#E0B848', aas:['Ala','Val','Leu','Ile','Met','Phe','Trp','Pro'] },
      { name:'極性 Polar',       col:'#4FB37E', aas:['Ser','Thr','Cys','Asn','Gln','Tyr','Gly'] },
      { name:'正電 Positive',    col:'#4F94D8', aas:['Lys','Arg','His'] },
      { name:'負電 Negative',    col:'#D9594C', aas:['Asp','Glu'] },
    ];
    return wrap('20 種胺基酸性質分類',
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {groups.map(g=>(
          <div key={g.name} style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:80, fontSize:11, color:fg, fontFamily:'Noto Sans TC' }}>{g.name}</div>
            <div style={{ flex:1, display:'flex', flexWrap:'wrap', gap:4 }}>
              {g.aas.map(a=>(
                <div key={a} style={{
                  padding:'3px 8px', background:g.col, color:'#fff', borderRadius:5,
                  fontFamily:"'JetBrains Mono',monospace", fontSize:10, fontWeight:700,
                }}>{a}</div>
              ))}
            </div>
          </div>
        ))}
      </div>,
      <>疏水殘基躲到核心、極性與帶電殘基翻到表面 — 這個「油水分離」是摺疊的主要驅動力。</>
    );
  }

  if(kind==='helix-sheet'){
    return wrap('α-helix 與 β-sheet 的氫鍵',
      <svg width="100%" viewBox="0 0 320 140">
        {/* helix */}
        <text x="10" y="16" fontFamily="JetBrains Mono" fontSize="10" fill={muted}>α-HELIX</text>
        <path d="M14 50 q14 -28 28 0 t28 0 t28 0 t28 0" stroke={color} strokeWidth="2.5" fill="none"/>
        <path d="M14 50 q14 28 28 0 t28 0 t28 0 t28 0" stroke={color} strokeWidth="2.5" fill="none" opacity=".35"/>
        {[14,42,70,98,126].map((x,i)=>(<circle key={i} cx={x} cy="50" r="3.5" fill={color}/>))}
        {/* H-bonds in helix - between i and i+4 */}
        {[[14,98],[42,126]].map(([a,b],i)=>(
          <path key={i} d={`M${a} 50 Q${(a+b)/2} 30 ${b} 50`} stroke="#EAA532" strokeWidth="1.2" strokeDasharray="2 2" fill="none"/>
        ))}
        <text x="14" y="100" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>i ⋯ i+4 hydrogen bond</text>

        {/* sheet */}
        <text x="170" y="16" fontFamily="JetBrains Mono" fontSize="10" fill={muted}>β-SHEET</text>
        <path d="M170 32 l8-4 8 4 8-4 8 4 8-4 8 4 8-4 8 4 8-4 8 4 8-4 8 4" stroke="#EAA532" strokeWidth="2.2" fill="none"/>
        <path d="M170 78 l8-4 8 4 8-4 8 4 8-4 8 4 8-4 8 4 8-4 8 4 8-4 8 4" stroke="#EAA532" strokeWidth="2.2" fill="none"/>
        {/* inter-strand H-bonds */}
        {[178,202,226,250,274].map((x,i)=>(
          <line key={i} x1={x} y1="36" x2={x} y2="74" stroke="#4F94D8" strokeWidth="1" strokeDasharray="2 2"/>
        ))}
        <text x="170" y="100" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>strand ↔ strand H-bonds</text>
      </svg>,
      <>α-helix 的氫鍵在「同一條」(i 與 i+4)；β-sheet 的氫鍵在「相鄰兩條」之間。這是核心差異。</>
    );
  }

  if(kind==='protein-levels'){
    const levels = [
      { n:'1°', name:'一級結構', desc:'胺基酸序列 (Primary sequence)', col:'#9C77C7' },
      { n:'2°', name:'二級結構', desc:'α-helix、β-sheet、loop',       col:'#4F94D8' },
      { n:'3°', name:'三級結構', desc:'整條多肽的 3D 摺疊',          col:'#4FB37E' },
      { n:'4°', name:'四級結構', desc:'多條多肽組成複合物 (oligomer)',col:'#EAA532' },
    ];
    return wrap('蛋白質結構的四層',
      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
        {levels.map((l,i)=>(
          <div key={l.n} style={{
            display:'flex', alignItems:'center', gap:10,
            padding:'10px 12px', borderRadius:10,
            background: l.col+'18', borderLeft:`3px solid ${l.col}`,
          }}>
            <div style={{
              width:32, fontFamily:"'JetBrains Mono',monospace", fontSize:14,
              fontWeight:700, color:l.col,
            }}>{l.n}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:13, fontWeight:600, color:fg }}>{l.name}</div>
              <div style={{ fontSize:11, color:muted, fontFamily:'Noto Sans TC' }}>{l.desc}</div>
            </div>
          </div>
        ))}
      </div>,
      <>從序列 → 局部螺旋/摺片 → 整體 3D → 多鏈組合，層層堆疊出最終的功能蛋白。</>
    );
  }

  if(kind==='pdb-anatomy'){
    return wrap('PDB 條目的關鍵欄位',
      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
        {[
          { k:'PDB ID', v:'1HHO', d:'4 字元唯一識別碼' },
          { k:'Title', v:'OXY T STATE HUMAN HEMOGLOBIN', d:'蛋白名稱與狀態' },
          { k:'Method', v:'X-RAY DIFFRACTION', d:'實驗方法 (X-ray / NMR / cryo-EM)' },
          { k:'Resolution', v:'2.1 Å', d:'越小越清楚（<2.0 = 優、2-3 = 中、>3 = 略糊）' },
          { k:'Chains', v:'A, B, C, D', d:'多少條多肽（四聚體有 4 條）' },
        ].map((r,i)=>(
          <div key={i} style={{
            display:'flex', gap:10, padding:'8px 10px', borderRadius:8,
            background:bg, border:`1px solid ${line}`,
          }}>
            <div style={{ width:84, fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:color, fontWeight:700, letterSpacing:.4 }}>{r.k}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11.5, color:fg, fontWeight:600 }}>{r.v}</div>
              <div style={{ fontSize:10.5, color:muted, fontFamily:'Noto Sans TC', marginTop:1 }}>{r.d}</div>
            </div>
          </div>
        ))}
      </div>,
      <>看 PDB 結構前，先掃這幾欄判斷品質與實驗背景。</>
    );
  }

  if(kind==='alphafold-plddt'){
    const bands = [
      { lo:90, hi:100, col:'#4F94D8', label:'非常可信', desc:'結構幾乎可靠當作實驗資料用' },
      { lo:70, hi:90,  col:'#0E9384', label:'大致可信', desc:'整體摺疊正確、細節可能略有偏差' },
      { lo:50, hi:70,  col:'#EAA532', label:'低信心',   desc:'通常是柔性 loop 或弱信號區' },
      { lo:0,  hi:50,  col:'#D9594C', label:'極低信心', desc:'多半是無結構區 (IDR)，並非錯誤' },
    ];
    return wrap('AlphaFold pLDDT 信心度',
      <div>
        {/* color bar */}
        <div style={{
          display:'flex', height:14, borderRadius:7, overflow:'hidden', marginBottom:10,
        }}>
          {bands.slice().reverse().map((b,i)=>(
            <div key={i} style={{ flex:b.hi-b.lo, background:b.col }}/>
          ))}
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:muted, marginBottom:10 }}>
          <span>0</span><span>50</span><span>70</span><span>90</span><span>100</span>
        </div>
        {bands.map(b=>(
          <div key={b.label} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:6 }}>
            <div style={{ width:14, height:14, borderRadius:3, background:b.col, flexShrink:0 }}/>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:fg, fontWeight:700, width:50 }}>{b.lo}-{b.hi}</div>
            <div style={{ flex:1, fontSize:11.5, color:muted, fontFamily:'Noto Sans TC' }}>
              <b style={{ color:fg }}>{b.label}</b> · {b.desc}
            </div>
          </div>
        ))}
      </div>,
      <>低 pLDDT 不等於模型錯誤 — 經常是真正的 IDR 區域（intrinsically disordered region）。</>
    );
  }

  // ───── RNA-seq chapter vizes ─────
  if(kind==='counts-pipeline'){
    const steps = [
      { n:'1', t:'RNA 抽取', d:'從細胞抽 mRNA', c:'#9C77C7' },
      { n:'2', t:'cDNA 合成', d:'反轉錄 → cDNA', c:'#4F94D8' },
      { n:'3', t:'定序', d:'幾千萬條 reads (.fastq)', c:'#4FB37E' },
      { n:'4', t:'對齊 / 偽對齊', d:'STAR / Salmon', c:'#EAA532' },
      { n:'5', t:'計數', d:'每基因 reads 數', c:'#D9594C' },
    ];
    return wrap('RNA-seq 從樣本到 counts',
      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
        {steps.map((s,i)=>(
          <div key={s.n} style={{
            display:'flex', alignItems:'center', gap:10,
            padding:'8px 12px', borderRadius:10,
            background: s.c+'15', borderLeft:`3px solid ${s.c}`,
          }}>
            <div style={{
              width:22, height:22, borderRadius:6, background:s.c, color:'#fff',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700,
            }}>{s.n}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:13, fontWeight:600, color:fg }}>{s.t}</div>
              <div style={{ fontSize:11, color:muted, fontFamily:'Noto Sans TC' }}>{s.d}</div>
            </div>
          </div>
        ))}
      </div>,
      <>產出的「counts matrix」就是後續所有分析的起點。</>
    );
  }

  if(kind==='tpm-normalization'){
    return wrap('為什麼要標準化？',
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        <div style={{
          padding:'10px 12px', borderRadius:10, background:bg, border:`1px solid ${line}`,
        }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700, color:'#D9594C', marginBottom:4 }}>BIAS · 基因長度</div>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ flex:1, fontSize:11, color:fg, fontFamily:'Noto Sans TC' }}>基因 A (5 kb)</div>
            <div style={{ flex:5, height:10, background:color+'cc', borderRadius:99 }}/>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, width:30, textAlign:'right' }}>500</div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:6 }}>
            <div style={{ flex:1, fontSize:11, color:fg, fontFamily:'Noto Sans TC' }}>基因 B (1 kb)</div>
            <div style={{ flex:1, height:10, background:color+'cc', borderRadius:99 }}/>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, width:30, textAlign:'right' }}>100</div>
          </div>
          <div style={{ marginTop:6, fontSize:10.5, color:muted, fontFamily:'Noto Sans TC' }}>
            真實表現相同，但 raw counts 差 5 倍 — 必須除以長度。
          </div>
        </div>
        <div style={{
          padding:'10px 12px', borderRadius:10, background:color+'15', border:`1px solid ${color}55`,
        }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700, color:color, marginBottom:4 }}>TPM 公式</div>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:fg, lineHeight:1.7 }}>
            TPM<sub>i</sub> = (counts<sub>i</sub> / length<sub>i</sub>) ÷ Σ(counts / length) × 10⁶
          </div>
          <div style={{ fontSize:10.5, color:muted, fontFamily:'Noto Sans TC', marginTop:4 }}>
            每樣本 TPM 加總 = 1,000,000，跨樣本可直接比較。
          </div>
        </div>
      </div>,
      <>raw counts 受基因長度與樣本深度影響；TPM 把兩者一次校正掉。</>
    );
  }

  if(kind==='deseq-flow'){
    return wrap('DESeq2 三個必看欄位',
      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
        {[
          { k:'log2FoldChange', d:'倍數變化（log₂ 表示）', e:'+1 = 翻倍上調；−1 = 減半', col:'#0E9384' },
          { k:'pvalue',          d:'單一基因的顯著性',     e:'未做多重檢定校正',         col:'#EAA532' },
          { k:'padj',            d:'多重檢定校正後的 p',   e:'通常 < 0.05 視為顯著',     col:'#D9594C' },
        ].map((r,i)=>(
          <div key={i} style={{ padding:'10px 12px', borderRadius:10, background:r.col+'15', border:`1px solid ${r.col}40` }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, fontWeight:700, color:r.col }}>{r.k}</div>
            <div style={{ fontSize:11.5, color:fg, fontFamily:'Noto Sans TC', marginTop:2 }}>{r.d}</div>
            <div style={{ fontSize:10.5, color:muted, fontFamily:'Noto Sans TC', marginTop:2 }}>{r.e}</div>
          </div>
        ))}
      </div>,
      <>多重檢定（2 萬個基因同時檢定）會大量出現偽陽性 — padj 是必看欄位，不是 pvalue。</>
    );
  }

  if(kind==='volcano-annotated'){
    return wrap('火山圖的四個區塊',
      <svg width="100%" viewBox="0 0 280 200">
        <line x1="140" x2="140" y1="20" y2="180" stroke={muted} strokeDasharray="3 3" opacity=".6"/>
        <line x1="40" x2="240" y1="60" y2="60" stroke={muted} strokeDasharray="3 3" opacity=".6"/>
        {/* axes */}
        <line x1="40" x2="40" y1="20" y2="180" stroke={muted}/>
        <line x1="40" x2="240" y1="180" y2="180" stroke={muted}/>
        {/* quadrant labels */}
        <text x="60" y="44" fontFamily="Noto Sans TC" fontSize="10" fill="#4F94D8" fontWeight="700">顯著下調</text>
        <text x="160" y="44" fontFamily="Noto Sans TC" fontSize="10" fill="#D9594C" fontWeight="700">顯著上調</text>
        <text x="60" y="170" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>下調 不顯著</text>
        <text x="160" y="170" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>上調 不顯著</text>
        {/* points */}
        {Array.from({length:60}).map((_,i)=>{
          const x = 40 + Math.random()*200;
          const y = 180 - Math.random()*Math.random()*150;
          const sig = (x<120 || x>160) && y<120;
          const col = sig ? (x>140?'#D9594C':'#4F94D8') : muted;
          return <circle key={i} cx={x} cy={y} r={sig?3:2} fill={col} opacity={sig?.85:.4}/>;
        })}
        {/* axis labels */}
        <text x="140" y="196" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>log₂FC = 0</text>
        <text x="36" y="62" textAnchor="end" fontFamily="JetBrains Mono" fontSize="8" fill={muted}>padj=0.05</text>
      </svg>,
      <>右上 = 顯著上調，左上 = 顯著下調，下方 = 不顯著。閾值線把畫面切成 4 區。</>
    );
  }

  if(kind==='go-bars'){
    const terms = [
      { name:'immune response',          n:42, q:1e-12 },
      { name:'inflammatory response',    n:28, q:8e-9  },
      { name:'cytokine signaling',       n:21, q:3e-7  },
      { name:'T cell activation',        n:17, q:9e-6  },
      { name:'apoptotic process',        n:14, q:4e-4  },
    ];
    const maxN = Math.max(...terms.map(t=>t.n));
    return wrap('GO 富集 bar plot',
      <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
        {terms.map(t=>(
          <div key={t.name} style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ flex:1.4, fontSize:11, color:fg, fontFamily:'Noto Sans TC', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{t.name}</div>
            <div style={{ flex:2, position:'relative' }}>
              <div style={{
                width:`${t.n/maxN*100}%`, height:14,
                background:`linear-gradient(90deg, ${color}, ${color}aa)`, borderRadius:4,
              }}/>
            </div>
            <div style={{ width:24, fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:fg, fontWeight:700, textAlign:'right' }}>{t.n}</div>
            <div style={{ width:48, fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, textAlign:'right' }}>{t.q.toExponential(0)}</div>
          </div>
        ))}
      </div>,
      <>每排：GO term 名稱 · 基因數量 · padj。前幾名通常勾勒出實驗的故事主軸。</>
    );
  }

  if(kind==='kegg-pathway'){
    return wrap('KEGG pathway 概念',
      <svg width="100%" viewBox="0 0 290 150">
        {[
          { x:30,  y:75, n:'Receptor', col:'#0E9384', val:'+2.1' },
          { x:110, y:40, n:'Kinase A', col:'#EAA532', val:'+0.2' },
          { x:110, y:110,n:'Kinase B', col:'#EAA532', val:'+1.4' },
          { x:200, y:75, n:'TF',       col:'#D9594C', val:'−1.8' },
          { x:270, y:75, n:'Target',   col:'#9C77C7', val:'−2.3' },
        ].map((n,i)=>(
          <g key={i}>
            <rect x={n.x-26} y={n.y-12} width="52" height="24" rx="4"
              fill={n.col} opacity=".85"/>
            <text x={n.x} y={n.y+3} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill="#fff">{n.n}</text>
            <text x={n.x} y={n.y+26} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>{n.val}</text>
          </g>
        ))}
        {[
          [56, 70, 84, 50],
          [56, 80, 84, 110],
          [136, 40, 174, 70],
          [136, 110, 174, 80],
          [226, 75, 244, 75],
        ].map((p,i)=>(
          <path key={i} d={`M${p[0]} ${p[1]} L${p[2]} ${p[3]}`} stroke={muted} strokeWidth="1.5" markerEnd="url(#a)"/>
        ))}
        <defs>
          <marker id="a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill={muted}/>
          </marker>
        </defs>
      </svg>,
      <>上色 log2FC 後，「上游活化 → 下游抑制」的機制故事一眼看出來。</>
    );
  }

  // ───── Phylogeny chapter vizes ─────
  if(kind==='distance-matrix'){
    const taxa = ['Human','Chimp','Mouse','Frog'];
    const D = [
      [0,    0.012, 0.094, 0.281],
      [0.012, 0,    0.097, 0.284],
      [0.094, 0.097, 0,    0.272],
      [0.281, 0.284, 0.272, 0   ],
    ];
    return wrap('演化距離矩陣',
      <div style={{ display:'inline-block', width:'100%', overflowX:'auto' }}>
        <table style={{ borderCollapse:'collapse', fontFamily:"'JetBrains Mono',monospace", margin:'0 auto' }}>
          <thead>
            <tr>
              <th></th>
              {taxa.map(t=><th key={t} style={{ padding:'4px 8px', fontSize:10, color:muted, fontWeight:600 }}>{t}</th>)}
            </tr>
          </thead>
          <tbody>
            {D.map((row,i)=>(
              <tr key={i}>
                <td style={{ padding:'4px 8px', fontSize:10, color:muted, fontWeight:600 }}>{taxa[i]}</td>
                {row.map((v,j)=>{
                  const intensity = Math.min(1, v/0.3);
                  return (
                    <td key={j} style={{
                      padding:'6px 8px', textAlign:'center',
                      fontSize:11, color:i===j?muted:fg, fontWeight:700,
                      background: i===j ? 'transparent' : `${color}${Math.floor(intensity*120+30).toString(16).padStart(2,'0')}`,
                      border:`1px solid ${line}`,
                    }}>{v.toFixed(3)}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>,
      <>數字 = 每個位點預期替換次數。Human-Chimp 最近、Frog 最遠 — 這個矩陣就是建樹的原料。</>
    );
  }

  if(kind==='upgma-nj'){
    return wrap('UPGMA vs NJ',
      <svg width="100%" viewBox="0 0 320 170">
        {/* UPGMA - ultrametric */}
        <text x="10" y="16" fontFamily="JetBrains Mono" fontSize="10" fill={muted}>UPGMA · 等高</text>
        <g stroke={color} strokeWidth="1.5" fill="none">
          <path d="M20 40 L70 40 L70 28 L100 28"/>
          <path d="M70 40 L70 52 L100 52"/>
          <path d="M20 80 L60 80 L60 70 L100 70"/>
          <path d="M60 80 L60 90 L100 90"/>
          <path d="M20 60 L20 40 M20 60 L20 80"/>
        </g>
        {['A','B','C','D'].map((t,i)=>(
          <text key={t} x="104" y={32+i*21} fontFamily="JetBrains Mono" fontSize="10" fill={fg}>{t}</text>
        ))}
        <text x="20" y="116" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>葉子等高 → 假設等速演化</text>
        {/* NJ - free */}
        <text x="170" y="16" fontFamily="JetBrains Mono" fontSize="10" fill={muted}>NEIGHBOR JOINING</text>
        <g stroke="#EAA532" strokeWidth="1.5" fill="none">
          <path d="M180 60 L220 30 L260 22"/>
          <path d="M220 30 L260 42"/>
          <path d="M180 60 L210 80"/>
          <path d="M210 80 L260 70"/>
          <path d="M210 80 L260 102"/>
        </g>
        {['A','B','C','D'].map((t,i)=>(
          <text key={t} x="264" y={[26,46,74,106][i]} fontFamily="JetBrains Mono" fontSize="10" fill={fg}>{t}</text>
        ))}
        <text x="170" y="130" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>分支自由 → 不假設等速</text>
      </svg>,
      <>UPGMA 強制葉子等高、易受演化速率差影響；NJ 沒這個限制，更符合真實。</>
    );
  }

  if(kind==='ml-likelihood'){
    return wrap('最大似然概念',
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {[
          { tree:'樹 A', score:-1245, isMax:false },
          { tree:'樹 B', score:-1198, isMax:false },
          { tree:'樹 C', score:-1156, isMax:true  },
          { tree:'樹 D', score:-1203, isMax:false },
        ].map(t=>(
          <div key={t.tree} style={{
            display:'flex', alignItems:'center', gap:10,
            padding:'10px 12px', borderRadius:10,
            background: t.isMax ? color+'20' : bg,
            border:`1px solid ${t.isMax ? color : line}`,
          }}>
            <div style={{ width:50, fontFamily:"'JetBrains Mono',monospace", fontSize:11.5, color:fg, fontWeight:700 }}>{t.tree}</div>
            <div style={{ flex:1, fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:muted }}>log L = {t.score}</div>
            {t.isMax && <div style={{ fontSize:9, padding:'2px 6px', borderRadius:4, background:color, color:'#fff', fontWeight:700, letterSpacing:.4, fontFamily:"'JetBrains Mono',monospace" }}>MAX ✓</div>}
          </div>
        ))}
      </div>,
      <>逐一計算每棵樹解釋資料的機率（取 log），選最大的那棵。實際搜尋空間極大，用啟發式演算法。</>
    );
  }

  if(kind==='bootstrap-reps'){
    return wrap('Bootstrap 100 次重抽',
      <svg width="100%" viewBox="0 0 290 130">
        {/* original tree on left */}
        <text x="10" y="16" fontFamily="JetBrains Mono" fontSize="10" fill={muted}>ORIGINAL</text>
        <g stroke={color} strokeWidth="1.5" fill="none">
          <path d="M14 60 L50 60"/>
          <path d="M50 30 L50 90"/>
          <path d="M50 30 L90 30"/>
          <path d="M50 90 L80 90"/>
          <path d="M80 70 L80 110"/>
          <path d="M80 70 L100 70"/>
          <path d="M80 110 L100 110"/>
        </g>
        <text x="94" y="32" fontFamily="JetBrains Mono" fontSize="9" fill={fg}>A</text>
        <text x="104" y="72" fontFamily="JetBrains Mono" fontSize="9" fill={fg}>B</text>
        <text x="104" y="112" fontFamily="JetBrains Mono" fontSize="9" fill={fg}>C</text>
        <text x="56" y="22" fontFamily="JetBrains Mono" fontSize="9" fill={color}>98</text>
        <text x="86" y="62" fontFamily="JetBrains Mono" fontSize="9" fill={color}>76</text>

        {/* reps illustration on right */}
        <text x="160" y="16" fontFamily="JetBrains Mono" fontSize="10" fill={muted}>100 BOOTSTRAP REPS</text>
        {Array.from({length:24}).map((_,i)=>{
          const x = 160 + (i%6)*22;
          const y = 26 + Math.floor(i/6)*22;
          const filled = Math.random()<0.85;
          return <rect key={i} x={x} y={y} width="18" height="18" rx="3"
            fill={filled? color : bg} stroke={filled? color : line}/>;
        })}
        <text x="160" y="120" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>支持率 → 標在分支上</text>
      </svg>,
      <>對 MSA 欄位重抽 100 次，各跑一次建樹，看每個分支出現幾次 — 那就是 bootstrap 值。</>
    );
  }

  if(kind==='tree-reading'){
    return wrap('看樹三步驟',
      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
        {[
          { n:'1', t:'找 outgroup', d:'用最遠的物種定方向' },
          { n:'2', t:'看 clade 結構', d:'哪些物種彼此關係近？' },
          { n:'3', t:'看分支長度', d:'長 = 累積較多突變或時間' },
        ].map(s=>(
          <div key={s.n} style={{
            display:'flex', alignItems:'flex-start', gap:10,
            padding:'10px 12px', borderRadius:10,
            background: color+'15', borderLeft:`3px solid ${color}`,
          }}>
            <div style={{
              width:22, height:22, borderRadius:6, background:color, color:'#fff',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700, flexShrink:0,
            }}>{s.n}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:13, fontWeight:600, color:fg }}>{s.t}</div>
              <div style={{ fontSize:11.5, color:muted, fontFamily:'Noto Sans TC', marginTop:2 }}>{s.d}</div>
            </div>
          </div>
        ))}
      </div>,
      <>同層分支可以任意旋轉而不改變拓樸 — 別被視覺位置誤導。</>
    );
  }

  // ───── Python chapter code blocks (generic renderer) ─────
  // ───── Intro chapter vizes ─────
  if(kind==='fastq-anatomy'){
    return wrap('FASTQ 四行結構',
      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, background:bg, padding:'10px 12px', borderRadius:8, lineHeight:1.7 }}>
        <div><span style={{ color:'#E08EC6' }}>@SRR1234.1</span> read identifier</div>
        <div style={{ color:fg }}>ATGCGTACGTAGCTAGCTAGCTAA</div>
        <div style={{ color:muted }}>+</div>
        <div><span style={{ color:'#EAA532' }}>IIIIIHHHHGGGGGFFFFFEEEE</span> phred quality</div>
      </div>,
      <>每條 reads 4 行。品質字元用 ASCII − 33 解碼成 Phred 分數：I=40、H=39、G=38…</>
    );
  }

  if(kind==='file-types'){
    const groups = [
      { label:'序列', items:[['.fa / .fasta','純序列'],['.fastq','序列 + 品質'],['.gb / .gbk','含完整註解']], col:'#0E9384' },
      { label:'對齊', items:[['.sam','文字格式'],['.bam','二進位壓縮'],['.cram','更壓縮、需參考']], col:'#4F94D8' },
      { label:'註解', items:[['.gff / .gtf','基因組註解'],['.bed','區間清單'],['.wig / .bw','訊號軌跡']], col:'#EAA532' },
      { label:'變異', items:[['.vcf','文字變異列表'],['.bcf','二進位 VCF'],['.tbi','tabix 索引']], col:'#D9594C' },
    ];
    return wrap('生資 4 大檔案類型',
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {groups.map(g=>(
          <div key={g.label} style={{ borderLeft:`3px solid ${g.col}`, paddingLeft:10 }}>
            <div style={{ fontFamily:'Space Grotesk', fontSize:12, fontWeight:700, color:g.col, marginBottom:4 }}>{g.label}</div>
            {g.items.map((it,i)=>(
              <div key={i} style={{ display:'flex', gap:6, fontSize:11.5, marginBottom:2 }}>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontWeight:700, color:fg, width:90 }}>{it[0]}</span>
                <span style={{ color:muted, fontFamily:'Noto Sans TC' }}>{it[1]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>,
      <>記住 4 大類就涵蓋日常 90% 場景。索引檔 (.fai / .bai / .tbi) 千萬不要手動刪。</>
    );
  }

  // ───── Variant chapter vizes ─────
  if(kind==='variant-types'){
    return wrap('變異規模分類',
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {[
          { type:'SNP',   size:'1 bp', ex:'A → G', col:'#0E9384' },
          { type:'INDEL', size:'< 50 bp', ex:'ATG → A (del)', col:'#EAA532' },
          { type:'SV',    size:'> 50 bp', ex:'整段刪除 / 倒置 / 重複', col:'#D9594C' },
        ].map(v=>(
          <div key={v.type} style={{
            display:'flex', alignItems:'center', gap:12,
            padding:'12px 14px', borderRadius:10,
            background: v.col+'15', borderLeft:`3px solid ${v.col}`,
          }}>
            <div style={{
              width:48, padding:'4px 6px', borderRadius:6, background:v.col, color:'#fff',
              fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700,
              textAlign:'center',
            }}>{v.type}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11.5, color:fg, fontWeight:600 }}>{v.size}</div>
              <div style={{ fontSize:11, color:muted, fontFamily:'Noto Sans TC', marginTop:1 }}>例：{v.ex}</div>
            </div>
          </div>
        ))}
      </div>,
      <>規模決定工具：SNP/INDEL 用 GATK、SV 用 Manta / Delly。</>
    );
  }

  if(kind==='vcf-anatomy'){
    return wrap('VCF 一列範例',
      <div style={{
        fontFamily:"'JetBrains Mono',monospace", fontSize:10.5,
        background:bg, padding:'10px 12px', borderRadius:8, color:fg,
        lineHeight:1.7, overflowX:'auto', whiteSpace:'nowrap',
      }}>
        <div>
          <span style={{ color:'#E08EC6' }}>chr7</span>{' '}
          <span style={{ color:'#EAA532' }}>140453136</span>{' '}
          <span style={{ color:muted }}>rs113488022</span>{' '}
          <span style={{ color:'#0E9384' }}>A</span>{' '}
          <span style={{ color:'#D9594C' }}>T</span>{' '}
          <span style={{ color:'#EAA532' }}>99.0</span>{' '}
          <span style={{ color:'#6CD0A5' }}>PASS</span>{' '}
          <span style={{ color:'#7FB7E8' }}>AF=0.5;DP=42</span>{' '}
          <span style={{ color:'#E08EC6' }}>GT:DP</span>{' '}
          <span style={{ color:fg }}>0/1:42</span>
        </div>
      </div>,
      <>欄位：CHROM POS ID REF ALT QUAL FILTER INFO FORMAT SAMPLE。0/1 = 異型（一個 REF 一個 ALT）。</>
    );
  }

  if(kind==='gatk-flow'){
    const steps = [
      { t:'BWA', d:'reads 對齊到參考基因組', c:'#0E9384' },
      { t:'MarkDuplicates', d:'去 PCR 重複', c:'#EAA532' },
      { t:'BQSR', d:'校正品質分數', c:'#4F94D8' },
      { t:'HaplotypeCaller', d:'局部重組裝呼叫變異', c:'#9C77C7' },
      { t:'VQSR', d:'機器學習過濾變異', c:'#D9594C' },
    ];
    return wrap('GATK Best Practices 流程',
      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
        {steps.map((s,i)=>(
          <div key={s.t} style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{
              width:22, height:22, borderRadius:6, background:s.c, color:'#fff',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700, flexShrink:0,
            }}>{i+1}</div>
            <div style={{ flex:1, padding:'8px 12px', borderRadius:8, background:s.c+'15', borderLeft:`3px solid ${s.c}` }}>
              <div style={{ fontFamily:'Space Grotesk', fontSize:13, fontWeight:600, color:fg }}>{s.t}</div>
              <div style={{ fontSize:11, color:muted, fontFamily:'Noto Sans TC' }}>{s.d}</div>
            </div>
          </div>
        ))}
      </div>,
      <>順序不可顛倒 — BQSR 必須在 MarkDuplicates 之後、HaplotypeCaller 之前。</>
    );
  }

  if(kind==='maf-distribution'){
    return wrap('變異依 MAF 分類',
      <svg width="100%" viewBox="0 0 290 130">
        <defs>
          <linearGradient id="mafgrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D9594C"/>
            <stop offset="33%" stopColor="#EAA532"/>
            <stop offset="66%" stopColor="#0E9384"/>
          </linearGradient>
        </defs>
        <rect x="20" y="50" width="250" height="22" rx="11" fill="url(#mafgrad)" opacity=".85"/>
        <line x1="103" x2="103" y1="42" y2="80" stroke={fg} strokeWidth="1"/>
        <line x1="186" x2="186" y1="42" y2="80" stroke={fg} strokeWidth="1"/>
        <text x="20" y="40" fontFamily="JetBrains Mono" fontSize="9" fill="#D9594C">罕見</text>
        <text x="62" y="40" fontFamily="JetBrains Mono" fontSize="9" fill="#EAA532">低頻</text>
        <text x="220" y="40" fontFamily="JetBrains Mono" fontSize="9" fill="#0E9384">常見</text>
        <text x="20" y="98" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>MAF 0</text>
        <text x="92" y="98" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>1%</text>
        <text x="175" y="98" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>5%</text>
        <text x="252" y="98" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>50%</text>
        <text x="20" y="120" fontFamily="Noto Sans TC" fontSize="10" fill={muted}>罕見變異多用 SKAT；常見變異用 GWAS 單 SNP</text>
      </svg>,
      <>臨床診斷常做 popmax MAF filter — 在任一族群 MAF &gt; 1% 通常視為良性常見變異。</>
    );
  }

  if(kind==='clinvar-levels'){
    const levels = [
      { code:'B',   name:'Benign 良性', col:'#0E9384' },
      { code:'LB',  name:'Likely Benign', col:'#6CD0A5' },
      { code:'VUS', name:'Uncertain 不確定', col:'#EAA532' },
      { code:'LP',  name:'Likely Pathogenic', col:'#E08484' },
      { code:'P',   name:'Pathogenic 致病', col:'#D9594C' },
    ];
    return wrap('ClinVar 五級分類',
      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
        {levels.map(l=>(
          <div key={l.code} style={{
            display:'flex', alignItems:'center', gap:10,
            padding:'8px 12px', borderRadius:8,
            background:l.col+'18', borderLeft:`3px solid ${l.col}`,
          }}>
            <div style={{
              width:38, padding:'3px 0', borderRadius:6, background:l.col, color:'#fff',
              fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700,
              textAlign:'center',
            }}>{l.code}</div>
            <div style={{ fontSize:12, color:fg, fontFamily:'Noto Sans TC' }}>{l.name}</div>
          </div>
        ))}
      </div>,
      <>星級 (★1-4) 代表證據強度 — 多源一致 ≥ 2 顆星。診斷實務以 P / LP 為致病推薦。</>
    );
  }

  // ───── Population genetics vizes ─────
  if(kind==='hwe-curve'){
    return wrap('HWE 基因型分布隨 p 變化',
      <svg width="100%" viewBox="0 0 290 160">
        {[...Array(50)].map((_,i)=>{
          const p = i/49;
          const q = 1-p;
          const AA = p*p, Aa = 2*p*q, aa = q*q;
          const x = 20 + p*240;
          return (
            <g key={i}>
              <rect x={x-2.5} y={140-AA*120} width={5} height={AA*120} fill="#0E9384" opacity=".25"/>
              <rect x={x-2.5} y={140-Aa*120} width={5} height={Aa*120} fill="#EAA532" opacity=".25"/>
              <rect x={x-2.5} y={140-aa*120} width={5} height={aa*120} fill="#D9594C" opacity=".25"/>
            </g>
          );
        })}
        {/* curves */}
        <path d={`M${[...Array(50)].map((_,i)=>{ const p=i/49; return `${20+p*240} ${140-p*p*120}`; }).join(' L')}`} stroke="#0E9384" strokeWidth="2" fill="none"/>
        <path d={`M${[...Array(50)].map((_,i)=>{ const p=i/49,q=1-p; return `${20+p*240} ${140-2*p*q*120}`; }).join(' L')}`} stroke="#EAA532" strokeWidth="2" fill="none"/>
        <path d={`M${[...Array(50)].map((_,i)=>{ const p=i/49,q=1-p; return `${20+p*240} ${140-q*q*120}`; }).join(' L')}`} stroke="#D9594C" strokeWidth="2" fill="none"/>
        <line x1="20" x2="260" y1="140" y2="140" stroke={muted}/>
        <text x="20" y="155" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>p=0</text>
        <text x="140" y="155" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>p=0.5</text>
        <text x="240" y="155" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>p=1</text>
        <text x="50" y="34" fontFamily="JetBrains Mono" fontSize="9" fill="#0E9384">p² (AA)</text>
        <text x="120" y="34" fontFamily="JetBrains Mono" fontSize="9" fill="#EAA532">2pq (Aa)</text>
        <text x="200" y="34" fontFamily="JetBrains Mono" fontSize="9" fill="#D9594C">q² (aa)</text>
      </svg>,
      <>p = 0.5 時異型 (Aa) 比例達 50% 最高 — 這就是 2pq 的拋物線特性。</>
    );
  }

  if(kind==='fst-bar'){
    const pairs = [
      { name:'Africa vs Europe', fst:0.108 },
      { name:'Europe vs E.Asia',  fst:0.075 },
      { name:'Africa vs E.Asia',  fst:0.137 },
      { name:'Han vs Japanese',   fst:0.011 },
      { name:'Yoruba vs Esan',    fst:0.005 },
    ];
    const maxFst = 0.2;
    return wrap('Fst 數值範圍實例（人類族群）',
      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
        {pairs.map(p=>(
          <div key={p.name} style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:140, fontSize:11, color:fg, fontFamily:'Manrope' }}>{p.name}</div>
            <div style={{ flex:1, height:14, background:bg, borderRadius:7, position:'relative', overflow:'hidden' }}>
              <div style={{ width:`${p.fst/maxFst*100}%`, height:'100%', background:color, borderRadius:7 }}/>
            </div>
            <div style={{ width:40, textAlign:'right', fontSize:11, fontFamily:"'JetBrains Mono',monospace", color:fg, fontWeight:700 }}>{p.fst.toFixed(3)}</div>
          </div>
        ))}
      </div>,
      <>洲際 Fst 約 0.05-0.15、同洲族群 {'< 0.02'}。這數字背後是「人類遺傳變異 85% 在族群內」。</>
    );
  }

  // ───── Single-cell vizes ─────
  if(kind==='scrna-droplet'){
    return wrap('10x 微滴：1 細胞 + 1 條碼磁珠',
      <svg width="100%" viewBox="0 0 290 130">
        <defs>
          <radialGradient id="oil" cx="0.5" cy="0.5">
            <stop offset="0%" stopColor="#EAA53222"/>
            <stop offset="100%" stopColor={bg}/>
          </radialGradient>
        </defs>
        {[
          { x:60, y:65, has:true,  cellCol:'#0E9384', beadCol:'#9C77C7', barcode:'AAAA' },
          { x:155,y:55, has:false, cellCol:null,      beadCol:'#9C77C7', barcode:'GGCT' },
          { x:230,y:75, has:true,  cellCol:'#EAA532', beadCol:'#4F94D8', barcode:'TACG' },
        ].map((d,i)=>(
          <g key={i}>
            <circle cx={d.x} cy={d.y} r="36" fill="url(#oil)" stroke={muted} strokeWidth="1" strokeDasharray="3 2"/>
            {d.has && <circle cx={d.x-9} cy={d.y+5} r="9" fill={d.cellCol} opacity=".8"/>}
            <circle cx={d.x+12} cy={d.y-6} r="8" fill={d.beadCol} opacity=".85"/>
            <text x={d.x+12} y={d.y-3} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="#fff" fontWeight="700">{d.barcode}</text>
          </g>
        ))}
        <text x="20" y="125" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>有些微滴沒包到細胞 → 過濾掉</text>
      </svg>,
      <>每顆磁珠上的 cell barcode 不同，標籤完成後合併測序，靠 barcode 還原「哪條 reads 來自哪細胞」。</>
    );
  }

  if(kind==='sparse-matrix'){
    return wrap('細胞 × 基因 稀疏矩陣',
      <svg width="100%" viewBox="0 0 290 140">
        {[...Array(13)].map((_,r)=>(
          [...Array(28)].map((_,c)=>{
            const v = Math.random();
            const filled = v>0.9;
            return <rect key={`${r}-${c}`} x={20+c*9} y={10+r*9} width={7} height={7} rx={1}
              fill={filled? color : bg} opacity={filled? .4+v*0.6 : 1} stroke={line} strokeWidth=".5"/>;
          })
        ))}
        <text x="20" y="135" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>細胞 (列) × 基因 (行) — &gt; 90% 是 0</text>
      </svg>,
      <>稀疏存格式只記非零格 — 不然 20K cells × 20K genes 會直接爆記憶體。</>
    );
  }

  if(kind==='qc-thresholds'){
    return wrap('scRNA-seq QC 三指標',
      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
        {[
          { k:'detected genes / cell',  range:'200-6000',  bad:'太少→空 droplet；太多→雙細胞', col:'#0E9384' },
          { k:'total UMI counts',       range:'500-30000', bad:'太低→死細胞；太高→雙細胞', col:'#EAA532' },
          { k:'% mitochondrial reads',  range:'< 10-20%',  bad:'太高→細胞膜破裂、漏胞質', col:'#D9594C' },
        ].map(q=>(
          <div key={q.k} style={{
            padding:'10px 12px', borderRadius:10,
            background:q.col+'15', borderLeft:`3px solid ${q.col}`,
          }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
              <div style={{ fontFamily:'Space Grotesk', fontSize:12.5, fontWeight:600, color:fg }}>{q.k}</div>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:q.col, fontWeight:700 }}>{q.range}</div>
            </div>
            <div style={{ fontSize:11, color:muted, fontFamily:'Noto Sans TC', marginTop:2 }}>{q.bad}</div>
          </div>
        ))}
      </div>,
      <>實際閾值因組織與實驗而異，但這三個指標永遠要看。</>
    );
  }

  if(kind==='umap-detail'){
    return wrap('PCA → UMAP 流程',
      <div style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 0' }}>
        {[
          { name:'Counts', d:'20K cells × 20K genes', col:muted },
          { name:'Norm', d:'lognorm / SCT', col:'#EAA532' },
          { name:'PCA', d:'→ 50 PCs', col:'#4F94D8' },
          { name:'KNN', d:'k=20 neighbours', col:'#9C77C7' },
          { name:'UMAP', d:'→ 2D', col:'#0E9384' },
        ].map((s,i)=>(
          <React.Fragment key={s.name}>
            <div style={{
              flex:1, padding:'10px 6px', borderRadius:8,
              background:s.col+'20', border:`1px solid ${s.col}55`, textAlign:'center',
            }}>
              <div style={{ fontFamily:'Space Grotesk', fontSize:12, fontWeight:700, color:s.col }}>{s.name}</div>
              <div style={{ fontSize:9.5, color:muted, fontFamily:'Noto Sans TC', marginTop:2 }}>{s.d}</div>
            </div>
            {i<4 && <span style={{ color:muted, fontSize:12 }}>→</span>}
          </React.Fragment>
        ))}
      </div>,
      <>PCA 是必要的中間步驟，去除主要雜訊並降維。直接對原始矩陣做 UMAP 會爆且失真。</>
    );
  }

  if(kind==='cell-types'){
    const clusters = [
      { name:'CD4+ T', markers:['CD3D','CD4','IL7R'], col:'#0E9384' },
      { name:'B cell', markers:['CD19','MS4A1','CD79A'], col:'#EAA532' },
      { name:'Monocyte', markers:['CD14','LYZ','S100A9'], col:'#9C77C7' },
      { name:'NK', markers:['NKG7','GNLY','GZMB'], col:'#D9594C' },
    ];
    return wrap('細胞群註解 marker genes',
      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
        {clusters.map(c=>(
          <div key={c.name} style={{
            display:'flex', alignItems:'center', gap:10,
            padding:'8px 12px', borderRadius:8,
            background:c.col+'15', borderLeft:`3px solid ${c.col}`,
          }}>
            <div style={{ fontFamily:'Space Grotesk', fontSize:12.5, fontWeight:700, color:c.col, width:80 }}>{c.name}</div>
            <div style={{ flex:1, display:'flex', gap:4, flexWrap:'wrap' }}>
              {c.markers.map(m=>(
                <span key={m} style={{
                  fontFamily:"'JetBrains Mono',monospace", fontSize:10, fontWeight:700,
                  padding:'2px 7px', borderRadius:4,
                  background:c.col, color:'#fff',
                }}>{m}</span>
              ))}
            </div>
          </div>
        ))}
      </div>,
      <>每個 cluster 的 top differentially expressed genes，配合教科書 marker 完成註解。</>
    );
  }

  // ───── R chapter vizes (extend code-* snippets) ─────
  // (handled in code-* block below)

  if(kind==='mult-test'){
    return wrap('多重檢定校正',
      <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
        {[
          { k:'Raw p < 0.05', n:1000, c:'#D9594C', note:'20,000 個基因 × 5% 偽陽率 → 1000 個偶然' },
          { k:'Bonferroni',  n:5,    c:'#0E9384', note:'最嚴格：α / N → 偽陽性極少，但漏掉真實' },
          { k:'BH (FDR<0.05)', n:80, c:'#EAA532', note:'平衡：允許 5% 假陽率 → 較實用' },
        ].map(r=>(
          <div key={r.k} style={{
            padding:'10px 12px', borderRadius:10,
            background:r.c+'15', borderLeft:`3px solid ${r.c}`,
          }}>
            <div style={{ display:'flex', justifyContent:'space-between' }}>
              <div style={{ fontFamily:'Space Grotesk', fontSize:12.5, fontWeight:600, color:fg }}>{r.k}</div>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:r.c, fontWeight:700 }}>{r.n}</div>
            </div>
            <div style={{ fontSize:10.5, color:muted, fontFamily:'Noto Sans TC', marginTop:2 }}>{r.note}</div>
          </div>
        ))}
      </div>,
      <>20,000 個 t-test 不校正會生出 1000 個雜訊「顯著」 — BH 是 RNA-seq / GWAS 標準。</>
    );
  }

  // ───── ML chapter vizes ─────
  if(kind==='supervised-vs'){
    return wrap('監督式 vs 非監督式',
      <div style={{ display:'flex', gap:10 }}>
        {[
          { name:'監督式', items:['有 X 和 y', '學 X → y 映射', '分類 / 回歸'], col:'#0E9384' },
          { name:'非監督式', items:['只有 X', '找 X 的結構', '分群 / 降維 / 異常'], col:'#EAA532' },
        ].map(s=>(
          <div key={s.name} style={{
            flex:1, padding:'12px 14px', borderRadius:12,
            background:s.col+'18', border:`1px solid ${s.col}55`,
          }}>
            <div style={{ fontFamily:'Space Grotesk', fontSize:14, fontWeight:700, color:s.col, marginBottom:6 }}>{s.name}</div>
            {s.items.map((it,i)=>(
              <div key={i} style={{ fontSize:11.5, color:fg, fontFamily:'Noto Sans TC', marginBottom:3 }}>· {it}</div>
            ))}
          </div>
        ))}
      </div>,
      <>scRNA-seq 細胞分群 = 非監督；變異致病性預測 = 監督。</>
    );
  }

  if(kind==='one-hot-seq'){
    return wrap('DNA one-hot 編碼',
      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:14, color:fg, fontWeight:700, letterSpacing:2 }}>
          {'ACGT'.split('').map((b,i)=>(
            <span key={i} style={{ color: BASE_COLORS[b] }}>{b}</span>
          ))}
        </div>
        <span style={{ color:muted, fontSize:14 }}>→</span>
        <div style={{ flex:1 }}>
          {['A','C','G','T'].map((row,r)=>(
            <div key={row} style={{ display:'flex', gap:4, marginBottom:2 }}>
              <span style={{ width:14, fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:BASE_COLORS[row], fontWeight:700 }}>{row}</span>
              {'ACGT'.split('').map((b,c)=>(
                <div key={c} style={{
                  width:20, height:20, borderRadius:4,
                  background: b===row ? BASE_COLORS[row] : bg,
                  color: b===row ? '#fff' : muted,
                  fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700,
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>{b===row?'1':'0'}</div>
              ))}
            </div>
          ))}
        </div>
      </div>,
      <>ACGT → 一個 4×L 的二元矩陣。CNN / transformer 處理 DNA 的標準輸入格式。</>
    );
  }

  if(kind==='cnn-dna'){
    return wrap('CNN 在 DNA 序列上',
      <svg width="100%" viewBox="0 0 290 140">
        {/* input */}
        <text x="14" y="16" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>DNA INPUT (one-hot)</text>
        {[...Array(20)].map((_,i)=>(
          <rect key={i} x={14+i*13} y={22} width={11} height={28}
            fill={['#E25858','#4F94D8','#EAA532','#4FB37E'][i%4]} opacity=".7"/>
        ))}
        {/* conv kernel */}
        <rect x={70} y={20} width={52} height={32} fill="none" stroke="#9C77C7" strokeWidth="2" strokeDasharray="3 2"/>
        <text x={73} y={64} fontFamily="JetBrains Mono" fontSize="9" fill="#9C77C7" fontWeight="700">conv (motif)</text>
        <line x1="96" y1="72" x2="96" y2="86" stroke={muted} strokeWidth="1.5" markerEnd="url(#arr)"/>
        {/* feature map */}
        <text x="14" y="100" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>FEATURE MAP</text>
        {[...Array(17)].map((_,i)=>{
          const h = 4 + Math.abs(Math.sin(i*0.5))*16;
          return <rect key={i} x={14+i*14} y={106+(20-h)} width={11} height={h} fill="#0E9384" opacity=".7"/>;
        })}
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill={muted}/>
          </marker>
        </defs>
      </svg>,
      <>每個 conv kernel 就是一個 learned motif；多層 conv 學到更高階的序列特徵。</>
    );
  }

  if(kind==='roc-vs-pr'){
    return wrap('ROC vs PR 曲線',
      <svg width="100%" viewBox="0 0 290 140">
        {/* ROC */}
        <g transform="translate(0,0)">
          <text x="14" y="12" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>ROC</text>
          <line x1="20" x2="20" y1="20" y2="120" stroke={muted}/>
          <line x1="20" x2="135" y1="120" y2="120" stroke={muted}/>
          <line x1="20" x2="135" y1="120" y2="20" stroke={muted} strokeDasharray="2 2" opacity=".4"/>
          <path d="M20 120 Q35 60 70 40 Q100 30 135 25" stroke={color} strokeWidth="2" fill="none"/>
          <text x="58" y="58" fontFamily="JetBrains Mono" fontSize="8" fill={color} fontWeight="700">AUC=0.85</text>
          <text x="78" y="132" fontFamily="JetBrains Mono" fontSize="8" fill={muted}>FPR</text>
        </g>
        {/* PR */}
        <g transform="translate(150,0)">
          <text x="14" y="12" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>PR</text>
          <line x1="20" x2="20" y1="20" y2="120" stroke={muted}/>
          <line x1="20" x2="135" y1="120" y2="120" stroke={muted}/>
          <path d="M20 25 Q40 30 70 60 Q100 100 135 110" stroke="#EAA532" strokeWidth="2" fill="none"/>
          <text x="58" y="58" fontFamily="JetBrains Mono" fontSize="8" fill="#EAA532" fontWeight="700">AUC=0.52</text>
          <text x="78" y="132" fontFamily="JetBrains Mono" fontSize="8" fill={muted}>Recall</text>
        </g>
      </svg>,
      <>不平衡資料（正樣本稀少）時，ROC AUC 看起來很高，但 PR AUC 才暴露真相。</>
    );
  }

  if(kind && kind.startsWith('code-')){
    const snippets = {
      'code-conda': [
        '# 建立並啟用 bioenv',
        'conda create -n bioenv python=3.11',
        'conda activate bioenv',
        '',
        '# 從 bioconda 裝套件',
        'conda install -c bioconda biopython pysam samtools',
        '',
        '# 匯出環境分享',
        'conda env export > environment.yml',
      ],
      'code-fasta': [
        'from Bio import SeqIO',
        '',
        '# 篩出長度 > 1000 的 contig',
        'with open("contigs.fa") as fa:',
        '    long_seqs = [r for r in SeqIO.parse(fa, "fasta")',
        '                 if len(r.seq) > 1000]',
        '',
        'SeqIO.write(long_seqs, "long.fa", "fasta")',
        'print(f"{len(long_seqs)} sequences kept")',
      ],
      'code-seq': [
        'from Bio.Seq import Seq',
        '',
        'dna = Seq("ATGCGTACGTAA")',
        'print(dna.complement())',
        '# TACGCATGCATT',
        'print(dna.reverse_complement())',
        '# TTACGTACGCAT',
        'print(dna.translate())',
        '# MRT* (Met-Arg-Thr-STOP)',
      ],
      'code-blast': [
        'from Bio.Blast import NCBIWWW, NCBIXML',
        '',
        'result = NCBIWWW.qblast("blastn", "nt",',
        '                       "ATGGTGCATCTGACTCCT")',
        'records = list(NCBIXML.parse(result))',
        '',
        'for hit in records[0].alignments[:5]:',
        '    hsp = hit.hsps[0]',
        '    print(hit.title[:40], f"E={hsp.expect:.0e}")',
      ],
      'code-genbank': [
        'from Bio import SeqIO',
        '',
        '# 抽出所有 CDS 並印 product 名',
        'rec = next(SeqIO.parse("ncov.gb", "genbank"))',
        'for feat in rec.features:',
        '    if feat.type == "CDS":',
        '        prod = feat.qualifiers["product"][0]',
        '        print(feat.location, prod)',
      ],
      'code-pandas': [
        'import pandas as pd',
        '',
        'df = pd.read_csv("deseq.tsv", sep="\\t")',
        '',
        '# 篩出顯著上調基因',
        'up = df[(df.log2FC > 1) & (df.padj < 0.05)]',
        '',
        '# 依染色體分組計數',
        'print(up.groupby("chrom").size())',
      ],
      'code-plot': [
        'import matplotlib.pyplot as plt',
        'import numpy as np',
        '',
        'fig, ax = plt.subplots(figsize=(5,4))',
        'ax.scatter(df.log2FC, -np.log10(df.padj),',
        '           c=df.padj<0.05, cmap="coolwarm", s=8)',
        'ax.set_xlabel("log2 FC")',
        'ax.set_ylabel("-log10(padj)")',
        'fig.savefig("volcano.png", dpi=300)',
      ],
      'code-r-basic': [
        '# 讀 CSV、看前幾列',
        'df <- read.csv("counts.csv")',
        'head(df)',
        'summary(df)',
        '',
        '# 索引從 1 開始（不是 0）',
        'df[1, ]      # 第一列',
        'df$gene_id   # 取一欄',
        'sum(is.na(df$padj))  # 數缺失值',
      ],
      'code-r-tidy': [
        'library(tidyverse)',
        '',
        '# 用管線 %>% 串起多步',
        'df %>%',
        '  filter(padj < 0.05, abs(log2FC) > 1) %>%',
        '  group_by(chrom) %>%',
        '  summarise(',
        '    n = n(),',
        '    mean_lfc = mean(log2FC)',
        '  )',
      ],
      'code-r-ggplot': [
        'library(ggplot2)',
        '',
        'ggplot(df, aes(log2FC, -log10(padj))) +',
        '  geom_point(aes(color = padj < 0.05),',
        '             alpha = 0.6, size = 1) +',
        '  scale_color_manual(values = c("grey","red")) +',
        '  theme_classic() +',
        '  labs(x = "log2 FC", y = "-log10(padj)")',
      ],
    };
    const lines = snippets[kind] || [];
    return (
      <div style={{
        background:'#0F1410', borderRadius:14, padding:'12px 4px 12px 14px', overflow:'hidden',
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:8 }}>
          <span style={{ width:8,height:8,borderRadius:99,background:'#FF5F57' }}/>
          <span style={{ width:8,height:8,borderRadius:99,background:'#FFBD2E' }}/>
          <span style={{ width:8,height:8,borderRadius:99,background:'#28C840' }}/>
          <span style={{ marginLeft:6, fontFamily:"'JetBrains Mono',monospace", fontSize:10.5, color:'#9C9E96' }}>
            {kind.replace('code-','')}.{ kind==='code-conda'?'sh': kind.startsWith('code-r-')?'R':'py'}
          </span>
        </div>
        <pre style={{
          margin:0, fontFamily:"'JetBrains Mono',monospace", fontSize:11.5,
          color:'#E0DED2', lineHeight:1.7, overflowX:'auto', paddingRight:14,
        }}>
{lines.map((l,i)=>(
  <div key={i} style={{ color: l.startsWith('#')? '#74766E':'#E0DED2' }}>
    <span style={{ color:'#74766E', marginRight:8, userSelect:'none' }}>{String(i+1).padStart(2,' ')}</span>
    <CodeLine line={l}/>
  </div>
))}
        </pre>
      </div>
    );
  }

  return null;
}

// ─────────── 序列比對 (id: 'aln') ───────────
LESSON_CONTENT['aln'] = {
  intro: '當兩條序列只差一點點，是因為它們是親戚？還是巧合？序列比對給你一個量化的答案。',
  estimate: '約 30 分鐘',
  units: [
    {
      title: '點陣圖 Dot plot',
      hook: '把兩條序列分別放在橫軸與縱軸，相同字母的位置塗點 — 線段就會自然浮現。這是最直覺的「眼睛比對法」。',
      paragraphs: [
        '想像 X 軸放序列 A、Y 軸放序列 B。每當 A[i] == B[j]，就在 (i, j) 點一個點。當兩條序列有共同的子片段時，圖上會出現一條斜線（45° 對角線）。',
        '更進一步，可以用「窗口」減少雜訊：例如「過去 5 個位置中至少有 4 個相符才畫點」。這樣可以濾掉隨機相同的單點，凸顯真正同源的區塊。',
        '點陣圖特別擅長看出兩種事件：(1)「重複序列」會在主對角線之外出現平行短線；(2)「倒置 inversion」會出現反向（135°）的對角線。它常用於做初步的基因組對比。',
      ],
      keyPoints: [
        '相同字母 → (i, j) 上點一點 → 同源段落自然形成對角線',
        '加上窗口閾值可過濾雜訊，讓對角線更清楚',
        '平行短線 = 重複序列；反斜線 = 倒置變異',
      ],
      viz: 'dotplot',
    },
    {
      title: '動態規劃直覺',
      hook: '把「兩條序列怎麼最好地對齊」這個大問題，拆成「下一步要不要插 gap」這種小問題 — 然後讓電腦從左上格走到右下格。',
      paragraphs: [
        '序列比對的核心難題是：兩條序列幾乎可以有無數種對齊方式，怎麼找到「最好」的？動態規劃 (Dynamic Programming, DP) 給了一個保證最佳解的方法。',
        '它建立一個矩陣 M[i][j]，代表「序列 A 的前 i 個字元和序列 B 的前 j 個字元對齊」的最佳分數。每一格只有三個來源：(1) 從左上對角來 → 兩字母直接配對；(2) 從上方來 → A 用 gap；(3) 從左邊來 → B 用 gap。取三者中得分最高的當作這一格的值。',
        '當填完整張表後，從右下角往左上「回溯 traceback」就能還原最佳對齊路徑。整個過程的時間複雜度是 O(m × n)，對中短序列非常實用。',
      ],
      keyPoints: [
        '把整體最佳化拆成「對角／上／左」三選一的局部選擇',
        'M[i][j] = max(對角配對分數, 上方 + gap, 左方 + gap)',
        '從右下角回溯就能還原最佳路徑',
      ],
      viz: 'dp-matrix',
    },
    {
      title: 'Needleman-Wunsch · 全域比對',
      hook: '當你確定兩條序列「整體上」相關 — 例如同源基因 — 就用 NW。它強迫你從頭對到尾，連兩端不像的地方也要算。',
      paragraphs: [
        'NW 是經典的「全域比對 global alignment」演算法。它強制把兩條序列的「整段」對齊，從第一個字元到最後一個字元都不能省。',
        '計分模型很簡單：match +1、mismatch -1、gap -1（實務上可以調整、甚至區分 gap-open 與 gap-extend）。整體目標是最大化最終分數。',
        '什麼時候用 NW？當你已經知道兩條序列是同源、長度相當，想看整體差異 — 例如比較同一基因在不同物種的序列、或比較兩個蛋白的演化保守性。',
      ],
      keyPoints: [
        'NW = 全域比對：強制端到端對齊',
        '適合「長度相近 + 整體相關」的序列',
        '計分可加 gap-open / gap-extend 區分連續 gap 的成本',
      ],
      viz: 'nw-vs-sw',
    },
    {
      title: 'Smith-Waterman · 局部比對',
      hook: '如果你想找「兩條序列裡最像的一小段」，全域比對只會浪費你的時間。SW 專門做這件事 — 它允許比對停在任何地方。',
      paragraphs: [
        'SW 和 NW 看起來很像，但只有兩個關鍵差別：(1) 矩陣裡任何負分數都會被「擷取為 0」，意思是「我寧可從這裡重新開始，也不要繼續變差」；(2) 回溯從矩陣中「最大值的格子」開始，不一定是右下角，遇到 0 就停。',
        '這兩個改動讓 SW 可以自然地找出「兩條序列中最相似的一段」。它對找「保守 domain」、「motif」、或在長序列中找短探針都非常有用 — BLAST 內部使用的也是 SW 的變體。',
        '使用情境：你拿到一段未知功能的蛋白，想看它有沒有任何熟悉的功能 domain（例如 zinc finger）。用 SW 對比已知 domain 資料庫，就能找到局部相似的 hit。',
      ],
      keyPoints: [
        'SW = 局部比對：找最相似的「子片段」',
        '兩個關鍵差異：分數負值歸零、從最大值回溯',
        '適合找 motif、domain、或在長序列中定位短片段',
      ],
      viz: 'nw-vs-sw',
    },
    {
      title: 'BLAST 入門',
      hook: 'NW / SW 雖然精準，但對著千萬筆的資料庫慢得讓人抓狂。BLAST 用「先粗篩、再精算」的策略，把速度拉了幾個數量級。',
      paragraphs: [
        'BLAST (Basic Local Alignment Search Tool) 的核心想法是：完整 SW 太慢，但同源序列幾乎必然共享一些「短到爆的完全相同 k-mer」。所以先找這些 k-mer hits（這步可以用 hash table 極快完成），再向兩側延伸做局部比對 — 這個策略叫做 seed-and-extend。',
        '幾個關鍵參數：word size（k-mer 長度，nucleotide 預設 11、protein 預設 3）、E-value 閾值（越小越顯著）、scoring matrix（蛋白質常用 BLOSUM62）。',
        'BLAST 也有家族成員：blastn（核酸對核酸）、blastp（蛋白對蛋白）、blastx（把 query DNA 翻譯成 6 個閱讀框再對蛋白資料庫）、tblastn（蛋白 query 對翻譯後的 DNA 資料庫）。選對工具往往比調參數更重要。',
      ],
      keyPoints: [
        'Seed-and-extend 策略：先找短 k-mer 相符，再向外延伸',
        'E-value 越小越顯著；一般以 < 1e-5 視為同源',
        'blastn / blastp / blastx / tblastn 各有用途，要選對',
      ],
      viz: 'blast-flow',
    },
    {
      title: '多序列比對 MSA',
      hook: '兩兩比對能告訴你兩條序列的關係。但要看整個家族的演化，你需要同時把幾十條序列排在一起 — 這就是 MSA。',
      paragraphs: [
        'MSA (Multiple Sequence Alignment) 是把 n 條序列同時對齊。理論上可以把 NW 推廣到 n 維，但時間複雜度 O(L^n) 完全無法接受，所以實務上都用「逐步比對 progressive alignment」：先建一棵 guide tree，從最相似的兩條開始合併，逐步加入其他。代表工具：Clustal Omega、MAFFT、MUSCLE。',
        'MSA 的視覺化會把同源位點上下對齊，並用顏色標出「保守欄位 conserved column」 — 一整欄都是相同或同類胺基酸 → 通常是功能或結構的關鍵位點。',
        'MSA 是許多下游分析的入口：(1) 系統發生樹建構（需要先對齊才能算距離）；(2) 找保守 motif；(3) 訓練 profile / HMM（後者是 PSI-BLAST 與 HMMER 的基礎）。',
      ],
      keyPoints: [
        '逐步比對 (progressive)：guide tree → 從最近的兩條開始合併',
        '保守欄位通常對應功能或結構關鍵位點',
        'MSA 是系統發生、motif、HMM profile 的共同入口',
      ],
      viz: 'msa-viz',
    },
  ],
};

// ─────────── 蛋白質結構 (id: 'protein') ───────────
LESSON_CONTENT['protein'] = {
  intro: '蛋白質不是一條直線，而是一個摺疊精準的 3D 機器。先理解它怎麼摺，再去理解它怎麼工作。',
  estimate: '約 30 分鐘',
  units: [
    {
      title: '胺基酸性質與分類',
      hook: '20 種胺基酸可以想成 20 種不同個性的積木 — 有的怕水、有的愛水、有的帶正電、有的帶負電。蛋白怎麼摺，就看這些性格怎麼搭。',
      paragraphs: [
        '胺基酸的「骨架」其實長得都一樣：一個中心碳、一個 NH₂、一個 COOH、一個 H。真正讓它們不同的，是「側鏈 R group」 — 也就是掛在中心碳上的那一塊。',
        '按側鏈性質可以分四大類：(1) 疏水（怕水，例如 Leu、Val、Ile、Phe）；(2) 極性無電（例如 Ser、Thr、Asn、Gln）；(3) 帶正電（Lys、Arg、His）；(4) 帶負電（Asp、Glu）。另外還有特殊角色：Cys 能形成雙硫鍵、Pro 會打彎、Gly 因為太小而非常靈活。',
        '為什麼這些性格決定摺疊？因為蛋白質在水溶液裡，疏水殘基會「躲到內部」、極性與帶電殘基會「翻到表面」 — 就像油水分離。這個簡單的物理力，是大多數蛋白質摺疊的主要推手。',
      ],
      keyPoints: [
        '四大類：疏水 / 極性 / 正電 / 負電',
        '疏水「內聚」是蛋白摺疊的主要驅動力',
        'Cys（雙硫鍵）、Pro（剛性轉折）、Gly（靈活）是三個特例',
      ],
      viz: 'aa-classes',
    },
    {
      title: '二級結構：α-helix / β-sheet',
      hook: 'α-helix 像一根捲起來的彈簧；β-sheet 像折疊起來的扇子。整個蛋白幾乎都是由這兩種基本花樣交織而成。',
      paragraphs: [
        '二級結構描述局部胺基酸鏈的規則性排列，主要由「骨架氫鍵」決定 — 也就是 N-H 與 C=O 之間的氫鍵。',
        'α-helix 由肽鏈纏成右手螺旋，每圈約 3.6 個殘基，氫鍵發生在「i」和「i+4」位置之間。β-sheet 則由兩條或多條肽鏈彼此並排（平行或反平行），氫鍵在鏈與鏈之間。',
        '一個蛋白通常會有 helix + sheet + 連接它們的 loop。loop 雖然沒有規則結構，但常常就是「活性位點」 — 因為它最靈活、最能變形去抓住底物。',
      ],
      keyPoints: [
        'α-helix：右手螺旋、i 與 i+4 氫鍵、3.6 殘基/圈',
        'β-sheet：肽鏈並排、平行或反平行、鏈間氫鍵',
        'Loop 看似雜亂，但常常是活性中心',
      ],
      viz: 'helix-sheet',
    },
    {
      title: '三級摺疊',
      hook: '把一條毛線揉成一團 — 但是那團毛線只有一種正確的揉法，揉錯就會引發疾病（例如阿茲海默症的 amyloid）。',
      paragraphs: [
        '三級結構 (tertiary) = 整個多肽鏈在 3D 空間的最終摺疊狀態。它整合了所有二級結構元件，並透過疏水核心、氫鍵、雙硫鍵、靜電作用一起穩定下來。',
        '功能單位通常以「domain」為單位 — 一個 domain 是一段獨立摺疊的區塊，常常重複出現在不同蛋白中（例如 zinc finger、SH3、kinase domain）。一個大蛋白可能由好幾個 domain 串起來，各管一個功能。',
        '四級結構則進一步：兩條或更多條多肽鏈組成一個「複合物 oligomer」。血紅素 (hemoglobin) 就是 4 條鏈 (2α + 2β) 組成的四聚體，能合作運送氧氣。',
      ],
      keyPoints: [
        'Domain = 獨立摺疊的功能模組，常跨蛋白重複出現',
        '疏水核心、氫鍵、雙硫鍵、靜電力共同維持三級結構',
        '四級結構：多條多肽鏈組成更大的複合物',
      ],
      viz: 'protein-levels',
    },
    {
      title: 'PDB 資料庫導覽',
      hook: 'PDB 是蛋白質界的 GitHub — 全世界研究員把實驗解出來的結構檔上傳到這裡，免費供任何人下載、查看、再分析。',
      paragraphs: [
        'PDB (Protein Data Bank) 收錄 X-ray 結晶、NMR、cryo-EM 等實驗解析的生物大分子 3D 結構。截至 2024 已超過 22 萬筆。每個結構有一個 4 字元 ID，例如人類血紅素是 1HHO、新冠病毒 spike 是 6VYB。',
        'PDB 檔案是純文字 (.pdb 或 .cif)，每一行記錄一個原子：座標 (x,y,z)、所屬殘基、所屬鏈。配上視覺化軟體就能看到立體結構。',
        '解析度（Resolution）是品質指標，單位 Å：< 2.0 Å 通常很清楚、3.0 Å 就只能看大致摺疊。看 PDB 結構時，先看解析度、實驗方法、再看蛋白本身。',
      ],
      keyPoints: [
        'PDB ID 是 4 字元，例如 1HHO、6VYB',
        '檔案格式：.pdb / .cif，逐行記錄原子座標',
        'Resolution 越小越清楚，2.0 Å 是常見的好品質門檻',
      ],
      viz: 'pdb-anatomy',
    },
    {
      title: '視覺化工具 PyMOL',
      hook: '看 PDB 不是看數字 — 你需要把它「畫」出來、轉動它、染色它、看 active site 在哪裡。PyMOL 就是做這件事的標準工具。',
      paragraphs: [
        'PyMOL 是科研最廣用的分子視覺化軟體。打開 .pdb 後，可以選擇不同顯示方式：cartoon（看摺疊大樣）、stick（看原子）、surface（看口袋形狀）。',
        '常見的染色方式：(1) by chain — 不同鏈不同顏色；(2) by secondary structure — helix 紅、sheet 黃、loop 綠；(3) by B-factor — 顯示哪些區域比較「晃」（高動態）。',
        '其他類似工具：ChimeraX（介面新、整合 cryo-EM 工具）、Mol* / NGL Viewer（網頁版，可直接在瀏覽器看 PDB）。寫論文做 figure 多半用 PyMOL；快速查看用 web viewer。',
      ],
      keyPoints: [
        'cartoon / stick / surface 是三種主要呈現方式',
        '依鏈、二級結構、B-factor 是常用染色策略',
        'PyMOL（論文 figure）、ChimeraX（cryo-EM）、Mol*（網頁）各有所長',
      ],
      viz: null,
    },
    {
      title: 'AlphaFold 預測原理',
      hook: '50 年來「光看序列能不能預測 3D 摺疊」是生物學的聖杯。2020 年 DeepMind 的 AlphaFold 2 用 AI 把它解了 — 而且開源了。',
      paragraphs: [
        '傳統方法（如同源建模）只能在資料庫裡找到「相似已知結構」時才有用。AlphaFold 突破點在於：它用一個深度學習模型，從多序列比對 (MSA) 中學到「哪些殘基在演化上一起變」 — 因為共變代表它們在 3D 上接觸。',
        '輸出除了座標，還有一個關鍵指標 pLDDT（per-residue confidence，0-100）。pLDDT > 90 = 非常可信；70-90 = 大致可信；< 50 = 通常是無結構區（IDR）。看 AlphaFold 預測結構時，要先看顏色分布。',
        'AlphaFold DB 已預測了 2 億條蛋白質結構，免費下載。但要注意：(1) AlphaFold 給的是「單一靜態結構」，不模擬動態與構象變化；(2) 對 multi-domain 蛋白的「相對方向」可能不準；(3) 突變對結構影響的預測仍有限。',
      ],
      keyPoints: [
        '核心 insight：演化上共變的殘基在 3D 上接觸 → 從 MSA 學摺疊',
        'pLDDT 是逐殘基信心度，看圖前先看顏色分布',
        '靜態結構好用，但不模擬動態 / 配體結合構象',
      ],
      viz: 'alphafold-plddt',
    },
    {
      title: '章節小測',
      hook: '把蛋白知識應用到實際情境：拿到一個 AlphaFold 預測，你會怎麼解讀？',
      paragraphs: [
        '挑戰：(1) 你看到一段蛋白 AlphaFold 預測有大段 pLDDT < 50，代表什麼？(2) 為什麼 GFP 的「螢光中心」位於蛋白的疏水核心？(3) 設計突變實驗時，為什麼通常避開高度保守的殘基？',
        '把這些連回前面的「胺基酸性質、摺疊原理、保守性」就能想通。生資不只是工具，更是用工具去問正確的問題。',
      ],
      keyPoints: [
        '低 pLDDT 區域常是 IDR 或柔性 loop，不是錯誤',
        '功能中心通常在保守的疏水核心',
      ],
      viz: null,
    },
  ],
};

// ─────────── RNA-seq 基因表現 (id: 'rnaseq') ───────────
LESSON_CONTENT['rnaseq'] = {
  intro: '看不到「現在」哪些基因正在被轉錄，就沒辦法理解細胞在做什麼。RNA-seq 就是那雙眼睛。',
  estimate: '約 30 分鐘',
  units: [
    {
      title: '從 reads 到 counts',
      hook: 'RNA-seq 的整個流程，本質上就是「把幾千萬條短句拼回原文、再算每句出現幾次」— 出現越多次的基因，越活躍。',
      paragraphs: [
        '實驗端：把細胞裡的 mRNA 抽出來、反轉錄成 cDNA、打斷成片段、定序得到幾千萬條 reads（每條 50-150 bp）。reads 存在 .fastq 檔，每條 reads 連帶有品質分數。',
        '分析端有兩條主路：(1) Alignment-based — 用 HISAT2 / STAR 把 reads 對齊到參考基因組，再用 featureCounts / HTSeq 數每個基因有幾條 reads 對上；(2) Alignment-free — 用 Salmon / Kallisto 直接估計轉錄本的表現量，速度快很多。',
        '輸出的「counts matrix」是 RNA-seq 的起點：每列一個基因、每行一個樣本、每格是 reads 數。所有後續分析（標準化、差異表現、富集分析）都從這張表開始。',
      ],
      keyPoints: [
        'mRNA → cDNA → 片段化 → 定序 → reads (.fastq)',
        '兩派分析：對齊型 (STAR/HISAT2) vs 偽對齊型 (Salmon/Kallisto)',
        '最終產物：counts matrix（基因 × 樣本）',
      ],
      viz: 'counts-pipeline',
    },
    {
      title: 'TPM / FPKM 標準化',
      hook: '直接比 raw counts 是錯的：基因越長、reads 越多；樣本定序越深、reads 越多。標準化就是把這兩個偏差除掉。',
      paragraphs: [
        '為什麼不能直接比 raw counts？想像基因 A 長 5kb、基因 B 長 1kb — 即使表現量相同，A 也會撈到 5 倍的 reads。要除以「基因長度」才公平。',
        'TPM (Transcripts Per Million) 是現在最常用的標準化：先把每基因的 counts 除以長度 (kb)，再除以總和，乘以一百萬。每個樣本的 TPM 加總都會是 1,000,000，讓樣本間可以比較。',
        'FPKM/RPKM 是較舊的標準化，做法略有不同（先除樣本深度、再除長度）— 各樣本的總和不一定相等，跨樣本比較有偏差。現在新的論文多用 TPM。',
      ],
      keyPoints: [
        '不能比 raw counts：基因長度與樣本深度都會影響',
        'TPM：先除長度 → 除總和 → ×10⁶，加總一定是 1M',
        'TPM 比 FPKM 更適合跨樣本比較',
      ],
      viz: 'tpm-normalization',
    },
    {
      title: '差異表現 DESeq2',
      hook: '同一個基因在處理組比對照組多了 1.8 倍 reads — 這算「上調」嗎？要不要看 p 值？這就是差異表現分析的核心問題。',
      paragraphs: [
        'DESeq2 是 R 套件，給它 counts matrix + 樣本分組就能算每個基因的差異表現。輸出三個關鍵欄位：log2FoldChange（倍數變化，正為上調）、pvalue（顯著性）、padj（多重檢定校正後的 p 值）。',
        '它的核心模型是「負二項分布」(negative binomial)，因為 RNA-seq counts 的變異大於 Poisson 預期（即「過度離散 overdispersion」）。DESeq2 從所有基因借資訊估計離散度，比單一基因獨立估計更穩定。',
        '判讀基準：常見閾值是 |log2FC| > 1（即 2 倍變化）且 padj < 0.05。但這只是慣例 — 視實驗目的可以調整。低表達基因通常變異大、p 值容易不顯著，要用 LFC shrinkage 處理。',
      ],
      keyPoints: [
        'log2FoldChange、pvalue、padj 是三個必看欄位',
        '負二項分布模型 + 跨基因借資訊估離散度',
        '常見閾值 |log2FC| > 1 & padj < 0.05（可調）',
      ],
      viz: 'deseq-flow',
    },
    {
      title: '火山圖判讀',
      hook: '幾萬個基因的差異表現結果丟給你，你不可能一個一個看。火山圖一張就把「誰最有趣」全標出來。',
      paragraphs: [
        '火山圖 (Volcano plot) 的橫軸是 log2FoldChange、縱軸是 −log10(padj)。所以「越往右上 = 越顯著上調」、「越往左上 = 越顯著下調」、「中間下方 = 不顯著」。',
        '常見閾值線：縱向兩條 (log2FC = ±1)、橫向一條 (padj = 0.05 → −log10 ≈ 1.3)。落在四個角落（右上 + 左上）的基因就是你的候選名單。',
        '一個 pitfall：log2FC 很大但只有 1 個樣本變化，或基因表現極低 → 看似戲劇性，實際不可信。要看「平均表現量」(baseMean)，太低的基因即使 log2FC 大也常是雜訊。',
      ],
      keyPoints: [
        '右上 = 顯著上調，左上 = 顯著下調',
        '閾值線：|log2FC| > 1，padj < 0.05（−log10 = 1.3）',
        '注意低表達基因 — log2FC 大但常常不可信',
      ],
      viz: 'volcano-annotated',
    },
    {
      title: 'GO 富集分析',
      hook: '你拿到 300 個顯著上調基因 — 它們是隨機分布、還是集中在某個功能類別？GO 分析告訴你答案。',
      paragraphs: [
        'GO (Gene Ontology) 把基因依功能標註成三個分支：BP (biological process)、MF (molecular function)、CC (cellular component)。每個基因可以有多個 GO term，例如 "DNA repair"、"protein kinase activity"。',
        '富集分析的問題是：「我的 300 個基因中，有沒有某個 GO term 出現的比例『顯著高於』全基因組的背景？」用 Fisher 精確檢定（或 hypergeometric test）算 p 值。',
        '看結果時常用 dot plot：橫軸是 enrichment score、點大小是基因數、顏色是 padj。前 10 個 term 通常就能勾勒出你的基因群在做什麼 — 例如「免疫反應、發炎、細胞凋亡」就暗示是免疫相關的反應。',
      ],
      keyPoints: [
        'GO 三分支：BP（過程）、MF（功能）、CC（位置）',
        '富集 = 你的基因群中某 term 比例顯著高於背景',
        'Dot plot 是最常見的呈現方式',
      ],
      viz: 'go-bars',
    },
    {
      title: '通路分析 KEGG',
      hook: 'GO 告訴你「功能類別」，KEGG 告訴你「分子彼此怎麼接力」— 把基因放回真實的生化反應鏈上。',
      paragraphs: [
        'KEGG (Kyoto Encyclopedia of Genes and Genomes) 是手繪整理的代謝與訊息傳遞路徑圖庫。每張通路圖 (pathway) 把參與的基因與分子用箭頭連起來，呈現它們「誰活化誰、誰抑制誰」。',
        'KEGG 富集分析的數學跟 GO 一樣（Fisher / 超幾何），只是換成 KEGG pathway 當分類單位。輸出的 hits 例如 hsa04010 (MAPK 訊息傳遞)、hsa00010 (糖解作用)。',
        'KEGG 的價值是「機制可視化」：你可以把差異表現基因的 log2FC 上色到通路圖上，立刻看出「上游 receptor 上調 → 中游 kinase 不變 → 下游 transcription factor 下調」這種敘事。',
      ],
      keyPoints: [
        'KEGG = 手繪通路圖庫，把分子放回真實反應鏈',
        '富集分析方法同 GO（Fisher / 超幾何）',
        '可把表現變化映射到通路圖，看出機制故事',
      ],
      viz: 'kegg-pathway',
    },
    {
      title: '章節小測',
      hook: '從 fastq 到「故事」，整個 RNA-seq 流程的決策點在哪裡？',
      paragraphs: [
        '挑戰：(1) 為什麼跨樣本比較要用 TPM 而非 raw counts？(2) 為什麼 DESeq2 用負二項而不是 Poisson？(3) 火山圖中 log2FC 極大但 padj 不顯著的基因，最可能的原因是什麼？',
        '答對了，下次自己跑 RNA-seq 就不會被軟體輸出嚇到 — 因為你知道每個數字代表什麼。',
      ],
      keyPoints: [
        '理解每步「為什麼這樣做」比記指令更重要',
        '一份結果若三項都對：標準化合理、模型合理、閾值合理 — 才能信任',
      ],
      viz: null,
    },
  ],
};

// ─────────── 系統發生樹 (id: 'phy') ───────────
LESSON_CONTENT['phy'] = {
  intro: '從序列差異反推祖先 — 系統發生樹是生物學的「時光機」。',
  estimate: '約 25 分鐘',
  units: [
    {
      title: '演化距離',
      hook: '兩條序列差了 10% 的字母 — 它們分家了多久？這個轉換比想像中複雜，因為「同一個位置可能變了又變回來」。',
      paragraphs: [
        '最簡單的距離：「p-distance」就是兩條序列差異位點的比例。但這會「低估」真實演化距離 — 因為一個位置可能從 A 變到 T 再變回 A，看起來沒變，其實發生了兩次替換。',
        '更準確的方法是用「替換模型」校正：Jukes-Cantor（假設四個鹼基互換機率相同）、Kimura 2-parameter（區分轉換 transition 與顛換 transversion）、HKY、GTR 等。蛋白質常用 PAM / BLOSUM / WAG 等矩陣。',
        '校正後得到「替換次數估計」(substitutions per site)，這個數值才是用來建樹的距離。同一段序列用不同模型，距離會差，所以選對模型很重要 — 軟體 ModelTest / jModelTest 會幫你選最合適的模型。',
      ],
      keyPoints: [
        'p-distance（直接差異比例）會低估真實距離',
        '校正用替換模型：JC、K2P、HKY、GTR（核酸）；PAM、BLOSUM（蛋白）',
        '不同模型給的距離不同 → 用 ModelTest 選最合適',
      ],
      viz: 'distance-matrix',
    },
    {
      title: 'UPGMA',
      hook: '最簡單的建樹法：把最像的兩條合併，再把這對和其他比、再合併，重複直到剩一棵樹。前提是「演化速率全程一致」。',
      paragraphs: [
        'UPGMA (Unweighted Pair Group Method with Arithmetic Mean) 是「層次分群」的一種。它假設所有譜系的演化速率相同（分子時鐘假說），所以可以畫成「ultrametric tree」 — 所有葉節點到根的距離都相等。',
        '步驟：(1) 找距離矩陣中最小的一對 (i,j)；(2) 把它們合併成新節點，分支長度為距離/2；(3) 用「算術平均」重算新節點到其他節點的距離；(4) 重複直到只剩一個節點。',
        'UPGMA 的最大問題就是「演化速率一致」這個假設常常不成立 — 某些譜系的演化速率可能快很多。當這個假設被破壞時，UPGMA 會給錯誤的拓樸結構。所以實務上多用 NJ 或 ML。',
      ],
      keyPoints: [
        '層次分群：最像的合併、重算、再合併',
        '假設：所有譜系演化速率相同（分子時鐘）',
        '前提不成立時會給錯誤的樹 → 實務多用 NJ / ML',
      ],
      viz: 'upgma-nj',
    },
    {
      title: 'Neighbor Joining',
      hook: 'NJ 是 UPGMA 的「升級版」 — 它不假設等速演化，速度卻幾乎一樣快。是現在最常用的距離型建樹法。',
      paragraphs: [
        'NJ (Saitou & Nei, 1987) 的核心是一個調整過的距離量：D_ij = d_ij − (r_i + r_j)/(n−2)，其中 r_i 是 i 到所有其他點的距離總和。用 D_ij 取代原距離找最近鄰居，能避免「長分支吸引」的偏差。',
        '結果是一棵「unrooted tree」 — 沒有根、沒有方向。要看演化方向，就需要 outgroup（離群參考組）。常見做法：研究哺乳類時，把鳥類或爬蟲類當 outgroup。',
        'NJ 計算複雜度約 O(n³)，對幾百條序列輕鬆。它的弱點是只用距離（一個摘要數），無法善用每個位點的詳細資訊 — 這就是為什麼也常用 ML 或 Bayesian。',
      ],
      keyPoints: [
        'NJ 不假設等速演化，避免長分支吸引',
        '輸出是 unrooted tree，需要 outgroup 定方向',
        '速度快、適合大資料；但精度不如 ML',
      ],
      viz: 'upgma-nj',
    },
    {
      title: '最大似然 ML',
      hook: '把「樹的形狀」當參數，問：哪一棵樹「最能解釋」我看到的這些序列？這就是 ML 的問法。',
      paragraphs: [
        'ML (Maximum Likelihood) 從「指定一個替換模型 + 樹拓樸 + 分支長度」開始，計算「看到當前序列資料的機率」，然後搜尋讓這個機率最大的組合。',
        '它的優勢：(1) 充分利用每個位點的資訊（不像 NJ 只用距離摘要）；(2) 模型透明，可以加入更複雜的替換模式（gamma 變速、不變位點）；(3) 可以做模型比較（AIC / BIC）。',
        '代價是運算成本。樹的可能拓樸數量隨葉子數呈雙階乘成長，搜索空間極大。現代軟體 (RAxML、IQ-TREE) 用啟發式演算法找近似最佳樹，幾百條序列也能跑。',
      ],
      keyPoints: [
        'ML：找最能解釋當前資料的樹 + 模型參數',
        '利用每個位點資訊，精度通常優於距離法',
        '運算重，但 RAxML / IQ-TREE 已能處理上千條序列',
      ],
      viz: 'ml-likelihood',
    },
    {
      title: 'Bootstrap 信心值',
      hook: '一棵樹的拓樸可信嗎？把資料重抽 100 次重新建樹，看每個分支出現幾次 — 出現 95 次就是「95% bootstrap」。',
      paragraphs: [
        'Bootstrap 是統計學的標準工具：對 MSA 的「欄位」抽樣（with replacement）造出多個 pseudo-replicate datasets，每個都重新建樹。如果某分支在 100 次抽樣中出現 95 次，這個分支的 bootstrap 支持率就是 95%。',
        '判讀慣例：≥ 70 還算可接受，≥ 95 很可信，< 50 通常不採信。但 bootstrap 受很多因素影響（序列長度、變異率、模型），所以是「相對可信度」而非絕對機率。',
        '近年的替代方案：「approximate likelihood ratio test (aLRT)」與「ultrafast bootstrap」(UFBoot)。UFBoot 比 standard bootstrap 快 50-100 倍，IQ-TREE 預設使用，已成主流。',
      ],
      keyPoints: [
        '對 MSA 欄位重抽 → 各 replicate 建樹 → 數分支出現率',
        '≥ 70 可接受、≥ 95 很可信、< 50 不採信',
        'UFBoot（IQ-TREE）已逐步取代傳統 bootstrap',
      ],
      viz: 'bootstrap-reps',
    },
    {
      title: '樹的解讀',
      hook: '同樣一棵樹，可以畫成放射狀、矩形、圓形、unrooted — 但拓樸都是同一個。看懂的關鍵是「分支關係」，不是「外觀」。',
      paragraphs: [
        '看樹三步走：(1) 找 outgroup → 確認方向；(2) 看「分群 clade」結構 — 哪些物種彼此關係近；(3) 看分支長度（如有的話）— 代表演化距離或時間。',
        '常見誤讀：(a) 把「視覺位置近」當成「演化關係近」 — 樹可以旋轉同層任意分支，左右位置不代表關係。(b) 忽略 bootstrap — 樹拓樸要看支持率才可信。(c) 把「節點」當成具體祖先 — 它其實只是「最近共同祖先 MRCA」的位置估計。',
        '進階閱讀：時間校正樹 (chronogram) 把分支長度等比於時間（用化石或地理事件當校準點）— 這類分析能說「人類和老鼠的祖先約活在 9000 萬年前」這種敘事。',
      ],
      keyPoints: [
        '看樹順序：outgroup → clade → 分支長度',
        '同層旋轉不改變拓樸 — 視覺位置不等於演化關係',
        '時間校正樹可把分支對應到「年代」',
      ],
      viz: 'tree-reading',
    },
  ],
};

// ─────────── Python for Biology (id: 'py') ───────────
LESSON_CONTENT['py'] = {
  intro: '理論再漂亮，最後都要寫 code 跑。Biopython + pandas + matplotlib 是生資 Python 的三件套。',
  estimate: '約 35 分鐘',
  units: [
    {
      title: '環境設置 conda',
      hook: 'Python 套件總有衝突 — 這個專案要 numpy 1.20、那個要 1.24。conda 就是讓你每個專案各有一個獨立沙盒。',
      paragraphs: [
        'Conda 是「環境管理 + 套件管理」工具。每個 conda environment 都是一個獨立的 Python 與套件集合，互不干擾。生資推薦用 Miniconda（精簡版）或 Mamba（更快的 conda 兼容工具）。',
        '常用流程：(1) `conda create -n bioenv python=3.11` 建環境；(2) `conda activate bioenv` 切換；(3) `conda install -c bioconda biopython pysam` 從 bioconda 頻道安裝；(4) `conda deactivate` 退出。',
        'bioconda 頻道專收生資工具：samtools、bcftools、bwa、salmon、blast 等都能用 conda 一行裝完。比起手動編譯方便很多。env 設定也可以存成 `environment.yml` 分享給合作者一鍵重建。',
      ],
      keyPoints: [
        '每專案一個 conda env，避免套件衝突',
        '生資套件多在 bioconda 頻道：`-c bioconda`',
        'environment.yml 讓環境可重現分享',
      ],
      viz: 'code-conda',
    },
    {
      title: '讀寫 FASTA',
      hook: 'FASTA 看起來簡單到不用寫 code 也能讀 — 直到你的檔有 10GB、100 萬條序列。這時 Biopython 的 SeqIO 就救命了。',
      paragraphs: [
        '`SeqIO.parse("file.fa", "fasta")` 回傳一個迭代器，每次給你一個 SeqRecord 物件（含 .id、.description、.seq）。它「邊讀邊處理」— 不會把整個檔案塞到記憶體。',
        '常見任務：篩出長度大於某值的、計算 GC 含量、轉成不同格式（FASTA ↔ GenBank ↔ FASTQ）。把 SeqIO.write 跟 SeqIO.parse 串起來，就是經典的 ETL 流程。',
        '`Bio.Seq` 提供基本操作：.reverse_complement()、.translate()（DNA → 蛋白）、.transcribe()（DNA → RNA）。這些跟手寫迴圈相比，正確、安全、可讀。',
      ],
      keyPoints: [
        'SeqIO.parse 是迭代器 — 大檔不爆記憶體',
        'SeqRecord：.id / .description / .seq',
        '.reverse_complement() / .translate() / .transcribe() 是基本動作',
      ],
      viz: 'code-fasta',
    },
    {
      title: 'Biopython Seq 物件',
      hook: 'Biopython 的 Seq 不是字串 — 它知道自己是 DNA 還是蛋白、知道自己用哪個密碼子表。',
      paragraphs: [
        'Seq 物件像字串一樣可以 slicing、concat，但多了生物意義：seq.translate(table=1) 用標準密碼子表轉蛋白；seq.translate(table=2) 用粒線體密碼子表（粒線體用不同表！）。',
        '其他常用：seq.count("GC") 數子字串、seq.find("ATG") 找位置、seq.complement() / .reverse_complement()。Biopython 還會「警告」你做不合理的操作 — 例如把蛋白 .translate() 會丟例外。',
        '從 1.78 版起，Biopython 把 Alphabet（過去用來區分 DNA/RNA/蛋白）拿掉了 — 改由你在呼叫方法時指定。所以舊教學的 `Seq("ATG", IUPAC.unambiguous_dna)` 寫法現在不需要了。',
      ],
      keyPoints: [
        'Seq.translate(table=N) — 用對的密碼子表',
        '原生支援 slicing、find、complement',
        '新版 Biopython 不再需要 Alphabet 物件',
      ],
      viz: 'code-seq',
    },
    {
      title: '呼叫 BLAST',
      hook: '不用每次都打開 NCBI 網頁。Biopython 可以用 Python 直接送 query、收結果、剖析 hits — 全部自動化。',
      paragraphs: [
        '`NCBIWWW.qblast(program, db, sequence)` 把 query 送上 NCBI 雲端跑 BLAST，回傳一個 XML handle。配合 `NCBIXML.parse()` 剖析每個 hit、其 HSP（high-scoring pair）、E-value 與對齊。',
        '注意：NCBI 對 API 用量有限制（不要過於頻繁、要附 email）。批量分析時最好下載本地 BLAST 資料庫，用 subprocess 呼叫本機 `blastn` 會快上百倍。',
        '小撇步：解析結果時用 `blast_records = list(NCBIXML.parse(handle))`，然後 `for hit in blast_records[0].alignments: for hsp in hit.hsps: print(hsp.expect)`。',
      ],
      keyPoints: [
        'NCBIWWW.qblast() 送 query、NCBIXML.parse() 剖析',
        '大量分析 → 用本地 BLAST，速度差百倍',
        '每個 hit 有多個 HSP，記得遍歷',
      ],
      viz: 'code-blast',
    },
    {
      title: '解析 GenBank',
      hook: 'FASTA 只有「序列」。GenBank 是有「註解」的格式 — 它告訴你每個 CDS、exon、gene、protein 在哪裡。',
      paragraphs: [
        'GenBank 檔 (.gb / .gbk) 是 NCBI 的核心格式，除了序列還包含 features 列表：每個 feature 有 type (CDS / gene / mRNA / source...)、location（位置區間）、qualifiers（如 product、note、gene_name）。',
        'Biopython：`for record in SeqIO.parse("ncov.gb", "genbank"): for feat in record.features: if feat.type=="CDS": print(feat.qualifiers["product"], feat.location)`。',
        '應用場景：(1) 從 GenBank 抽出所有 CDS 的核酸 / 蛋白序列；(2) 找特定基因的座標再切出來；(3) 把 NCBI 註解轉成 GFF 格式給其他工具用。',
      ],
      keyPoints: [
        'GenBank = 序列 + 註解 features 的綜合格式',
        '每 feature 有 type、location、qualifiers',
        '常見任務：抽 CDS、切片段、轉 GFF',
      ],
      viz: 'code-genbank',
    },
    {
      title: 'pandas 處理表格',
      hook: 'RNA-seq 跑完一張 counts 表、變異呼叫一張 VCF 表、富集分析一張 enrichment 表 — pandas 是處理它們的瑞士刀。',
      paragraphs: [
        'pandas 的核心物件是 DataFrame（類似 Excel 表）。讀進來：`df = pd.read_csv("counts.tsv", sep="\\t", index_col=0)`。常用動作：df.head()、df.shape、df.describe()、df["geneA"]、df.loc[:, "sample1":"sample3"]。',
        '篩選與計算：`df[df["padj"] < 0.05]`、`df.groupby("condition").mean()`、`df.merge(annot, on="gene_id")`。寫過 SQL 的會覺得熟悉 — pandas 大部分概念可以對應到 SELECT / WHERE / GROUP BY / JOIN。',
        '視覺化整合：`df.plot.scatter(x="logFC", y="-log10(padj)")` 直接畫火山圖。配合 matplotlib 或 seaborn 可以做更精緻的圖。生資 80% 的「分析後處理」都在 pandas 完成。',
      ],
      keyPoints: [
        'DataFrame 像 Excel 表，操作像 SQL',
        '常用：df[mask] 篩選、groupby、merge',
        '與 matplotlib / seaborn 無縫整合',
      ],
      viz: 'code-pandas',
    },
    {
      title: 'matplotlib 繪圖',
      hook: '一張好圖勝過十頁文字。matplotlib 可以畫得很醜也可以畫得很精緻 — 取決於你願意花多少時間調參。',
      paragraphs: [
        '基本流程：`fig, ax = plt.subplots(figsize=(6,4))` 開圖、`ax.scatter(...)` 畫、`ax.set_xlabel("log2FC")` 加註、`fig.savefig("volcano.png", dpi=300)` 存檔。OO interface 比 plt.xxx 寫法更可靠。',
        '生資常用的圖：散點圖（火山圖 / MA plot）、heatmap（用 imshow 或 seaborn.heatmap）、box plot（多組表現量分布）、bar chart（GO 富集）。每張圖都要有座標標籤、單位、圖例。',
        '美化提示：(1) 用 `plt.style.use("seaborn-v0_8-whitegrid")` 統一風格；(2) 字體至少 10pt；(3) DPI 至少 300 用於發表；(4) 顏色用 viridis / cividis（色盲友善）而非 jet。',
      ],
      keyPoints: [
        'fig, ax = plt.subplots() → ax.xxx() → fig.savefig()',
        '生資四大圖：scatter / heatmap / boxplot / bar',
        '色盲友善色階：viridis、cividis；避免 jet',
      ],
      viz: 'code-plot',
    },
    {
      title: '章節小測',
      hook: '挑一個你自己想做的小分析 — 從 FASTA 計算 GC、從 VCF 篩出特定基因區域變異、從 GenBank 抽出所有 CDS — 試著用 Python 寫出來。',
      paragraphs: [
        '挑戰：(1) 寫一段 5 行以內的 Biopython，把一個多 FASTA 檔篩出所有長度 > 1000 bp 的序列。(2) 用 pandas 開 counts.tsv，篩出在處理組平均比對照組高 2 倍的基因。(3) 用 matplotlib 把那組基因畫成 boxplot。',
        '真正會寫 5 行 code 解決一個小問題，就已經比 90% 只看過教科書的人有用。動手是唯一的捷徑。',
      ],
      keyPoints: [
        '能用 5 行解決一個小問題 = 有用的程度',
        '理論 + 動手 = 真正會生資',
      ],
      viz: null,
    },
  ],
};

// ─────────── 生資導論 (id: 'intro') ───────────
LESSON_CONTENT['intro'] = {
  intro: '在跳進工具與演算法之前，先建立對「生物資訊在做什麼」的全景。',
  estimate: '約 18 分鐘',
  units: [
    {
      title: '什麼是生物資訊',
      hook: '生物資訊是「用電腦處理生命的資料」 — 從一個基因組幾十億個 base，到單細胞 RNA-seq 幾百萬個細胞，靠人眼是看不完的。',
      paragraphs: [
        '生物資訊 (Bioinformatics) 是用計算方法處理大量生物資料的領域。涵蓋三個核心方向：(1) 序列分析（DNA / RNA / 蛋白）；(2) 結構與功能預測；(3) 系統與網路分析。',
        '它與「計算生物學 Computational Biology」常被混用，差異是：前者偏資料處理工具，後者偏建模與假設驅動。實務上一個專案常同時用到兩端的方法。',
      ],
      keyPoints: [
        '核心三方向：序列 / 結構 / 系統',
        '生物資訊偏資料工程，計算生物學偏建模 — 實務常融合',
      ],
      viz: null,
    },
    {
      title: '資料庫導覽 NCBI / Ensembl',
      hook: 'NCBI 就是生物資訊的「Google」— 99% 的研究都從這裡開始抓資料。',
      paragraphs: [
        'NCBI 旗下包含：GenBank（序列）、PubMed（文獻）、SRA（原始 reads）、dbSNP（變異）、Gene（基因註解）、Protein（蛋白序列）等。每個資料庫有自己的查詢介面，但都能用 Entrez API 程式化存取。',
        'Ensembl 是歐洲版本，特別強調人類與模式生物的基因註解；UCSC Genome Browser 則是視覺化王者，能把多種資料層疊在基因組座標上瀏覽。日常使用三者通常並行 — 看資料用 NCBI、看註解用 Ensembl、看 track 用 UCSC。',
      ],
      keyPoints: [
        'NCBI 是序列資料總入口；Ensembl 偏註解；UCSC 偏視覺化',
        '所有主要資料庫都有 REST API，可用程式批次抓取',
      ],
      viz: null,
    },
    {
      title: 'FASTA / FASTQ 格式',
      hook: '兩個格式撐起整個生物資訊。FASTA 存「乾淨」的序列，FASTQ 存「定序機剛吐出」的有品質分數的 reads。',
      paragraphs: [
        'FASTA 格式：每筆兩部分 — 以 ">" 開頭的標題列（含 ID 與描述），下面接序列字串。可以一個檔放多筆 (multi-FASTA)。最常見的延伸副檔名是 .fa 或 .fasta。',
        'FASTQ 格式：每條 reads 四行 — @ID、序列、+、品質字串。品質用 Phred 分數編碼：每個字元對應一個錯誤機率。Q20 = 1% 錯誤、Q30 = 0.1%。實務上 RNA-seq / WGS 都從 .fastq.gz 開始。',
      ],
      keyPoints: [
        'FASTA = 序列；FASTQ = 序列 + 品質',
        'Phred 品質：Q20 (1% err) → Q30 (0.1% err) → Q40 (0.01%)',
      ],
      viz: 'fastq-anatomy',
    },
    {
      title: '常見檔案類型速查',
      hook: '生資的副檔名比天文還複雜 — 但其實 90% 的日常只需要記住這 10 種。',
      paragraphs: [
        '依用途分四大類：(1) 序列：.fa / .fasta / .fastq / .gb；(2) 對齊：.sam / .bam / .cram；(3) 註解：.gff / .gtf / .bed；(4) 變異：.vcf / .bcf。',
        '大多數工具有「對應的索引檔」加速隨機存取：.fa → .fai、.bam → .bai、.vcf.gz → .tbi。看到別人專案多了 .bai 不要刪掉，那是 BAM 的查詢索引。',
      ],
      keyPoints: [
        '序列 / 對齊 / 註解 / 變異 — 四大類涵蓋日常 90%',
        '索引檔 (.fai / .bai / .tbi) 是查詢加速器，不能刪',
      ],
      viz: 'file-types',
    },
    {
      title: '入門小測',
      hook: '把這幾個觀念串起來：當你拿到一個 .fastq.gz 檔案，你的下一步是什麼？',
      paragraphs: [
        '挑戰：(1) 為什麼 Phred Q30 比 Q20 嚴格 10 倍？(2) 你想找某基因的人類同源，會選 NCBI 還是 Ensembl？為什麼？(3) 從 .bam 想看 reads 對到哪裡，缺少哪個檔會無法工作？',
        '答出來，就代表你能讀懂大部分生資論文的「Methods」段落 — 那是進入這個領域的門票。',
      ],
      keyPoints: [
        '理解資料格式 → 看得懂論文 Methods',
      ],
      viz: null,
    },
  ],
};

// ─────────── 變異與基因型 (id: 'var') ───────────
LESSON_CONTENT['var'] = {
  intro: '從 BAM 到 VCF，從個體變異到群體頻率，再到臨床意義。',
  estimate: '約 25 分鐘',
  units: [
    {
      title: 'SNP / INDEL / SV',
      hook: '變異就像 DNA 上的錯字、漏字、整段被搬家 — 三種不同規模的事件，工具完全不同。',
      paragraphs: [
        'SNP (Single Nucleotide Polymorphism) — 單一鹼基的替換，是最常見的變異型別。INDEL 是 < 50 bp 的小插入或刪除。Structural Variant (SV) 包含 > 50 bp 的事件：大段刪除、重複、倒置、轉位、CNV。',
        '為什麼要區分？因為偵測工具完全不同：SNP / 小 INDEL 用 GATK / DeepVariant；SV 用 Manta / Delly / Lumpy。短讀定序 (Illumina 150 bp) 對 SV 的敏感度本身就有限 — 長讀 (PacBio / Nanopore) 大幅改善。',
      ],
      keyPoints: [
        'SNP < INDEL (< 50bp) < SV (> 50bp) — 三種規模',
        '偵測工具不同；短讀對 SV 偵測有限',
      ],
      viz: 'variant-types',
    },
    {
      title: 'VCF 格式深入',
      hook: 'VCF 看起來像 Excel — 但每一列其實濃縮了複雜的統計：等位基因、基因型、深度、品質、過濾標記。',
      paragraphs: [
        'VCF (Variant Call Format) 每列一個變異位點。前 8 個固定欄位：#CHROM、POS、ID、REF、ALT、QUAL、FILTER、INFO；INFO 之後是 FORMAT 與各樣本的基因型。',
        '基因型編碼：0/0 = 雙等位都是 REF（同型參考）、0/1 = 一邊 REF 一邊 ALT（異型）、1/1 = 雙等位都是 ALT（同型變異）。FORMAT 常含 GT (genotype)、DP (depth)、AD (allelic depth)、GQ (genotype quality)。',
      ],
      keyPoints: [
        '前 8 欄固定；INFO 與 FORMAT 是擴充欄',
        '0/0 同型 REF、0/1 異型、1/1 同型 ALT',
      ],
      viz: 'vcf-anatomy',
    },
    {
      title: 'GATK 流程簡介',
      hook: 'GATK Best Practices 是「業界標準」 — 跟著做，你的變異呼叫品質有保證；偷工，結果就會失真。',
      paragraphs: [
        '經典流程：BWA 對齊 → MarkDuplicates 去重 → BaseRecalibrator 校正品質分數 → HaplotypeCaller 呼叫變異 → VariantRecalibrator 過濾。每一步都有特定目的，跳過任何一步都會降低準確度。',
        'GATK 4.x 全面 Java 改寫，整合 Picard，並支援 Spark 平行加速。也有更新的 deep-learning 替代品 DeepVariant — 在某些情境（高同質區、PacBio HiFi）已超越 GATK 的表現。',
      ],
      keyPoints: [
        '對齊 → 去重 → BQSR → HaplotypeCaller → VQSR',
        'DeepVariant 在某些情境表現更好',
      ],
      viz: 'gatk-flow',
    },
    {
      title: '群體頻率 MAF',
      hook: '一個變異是「常見」還是「罕見」？看 Minor Allele Frequency (MAF) — 它決定你後續用哪套統計方法。',
      paragraphs: [
        'MAF 是該族群中「次多」的等位基因頻率。MAF ≥ 5% 為常見、1-5% 為低頻、< 1% 為罕見變異。常見變異多用 GWAS / 單一 SNP 關聯；罕見變異要用 SKAT、burden test 等聚合方法。',
        'gnomAD 是最重要的群體頻率資料庫（V4 已收 800K+ 樣本），分各種族群提供 MAF。臨床診斷時常做 popmax filter — 在任一族群 MAF > 1% 就視為良性常見變異，不太可能是孟德爾遺傳病的致病變異。',
      ],
      keyPoints: [
        'MAF ≥ 5% 常見；1-5% 低頻；< 1% 罕見',
        'gnomAD 是查詢 popmax MAF 的標準資料庫',
      ],
      viz: 'maf-distribution',
    },
    {
      title: '臨床註解 ClinVar',
      hook: '一個變異到底「會不會生病」？ClinVar 整理了全球臨床實驗室提交的證據與分類。',
      paragraphs: [
        'ClinVar 的分類有五級：Benign (B)、Likely Benign (LB)、Variant of Uncertain Significance (VUS)、Likely Pathogenic (LP)、Pathogenic (P)。Star Rating 1-4 顆代表證據強度（多源一致 vs 單一提交）。',
        '臨床實務做變異註解的工具鏈通常是 VEP (Variant Effect Predictor) + ANNOVAR，整合 ClinVar、gnomAD、SIFT、PolyPhen、CADD 等。最終由臨床遺傳師依 ACMG 指引綜合判讀。',
      ],
      keyPoints: [
        '五級：B / LB / VUS / LP / P',
        '星級代表證據強度，多源一致 ≥ 2 顆星',
      ],
      viz: 'clinvar-levels',
    },
    {
      title: '章節小測',
      hook: '從一個 VCF 檔做到「這個變異會致病嗎」 — 你能列出中間每一步嗎？',
      paragraphs: [
        '挑戰：(1) 為什麼 GATK 流程要先 MarkDuplicates 再 BQSR？順序顛倒會怎樣？(2) 在 gnomAD 上看到一個變異 popmax MAF = 2%，這對它「是致病罕見變異」的可能性說了什麼？(3) ClinVar 上有兩位實驗室一致投 Pathogenic，但證據不同 — 星級會是幾顆？',
        '能回答這些，你就具備初步的臨床變異判讀能力。',
      ],
      keyPoints: [
        '變異流程 = 對齊 + 呼叫 + 註解 + 判讀',
      ],
      viz: null,
    },
  ],
};

// ─────────── 群體遺傳學 (id: 'pop') ───────────
LESSON_CONTENT['pop'] = {
  intro: '一個族群的等位基因頻率隨時間怎麼變？這背後是 Hardy-Weinberg、天擇、漂變、遷移、突變五力之爭。',
  estimate: '約 20 分鐘',
  units: [
    {
      title: 'Hardy-Weinberg 平衡',
      hook: 'HWE 是群體遺傳的「零假設」 — 它假設族群什麼演化都沒發生，等位基因頻率世代不變。',
      paragraphs: [
        'HWE 公式：p² + 2pq + q² = 1。p 是 A 等位基因頻率，q 是 a 的頻率。如果族群滿足五個條件（隨機交配、無天擇、無遷移、無突變、族群夠大），基因型頻率就會是這個分布。',
        '實務最重要的應用是「QC」：定序資料若某 SNP 偏離 HWE，常暗示基因型呼叫錯誤、樣本污染、或族群分層。GWAS 前處理會用 HWE p < 1e-6 等閾值過濾 SNP。',
      ],
      keyPoints: [
        'p² + 2pq + q² = 1：A 同型 + 異型 + a 同型',
        'HWE 偏離常用於 QC，過濾品質不佳的 SNP',
      ],
      viz: 'hwe-curve',
    },
    {
      title: '等位基因頻率',
      hook: '族群裡 A 與 a 各佔幾成？這個簡單數字是所有族群遺傳分析的基石。',
      paragraphs: [
        '計算方法：把同型 AA、異型 Aa、同型 aa 個體數記下，p = (2·AA + Aa) / (2·N)，q = 1 − p。三人同型 AA、四人 Aa、三人 aa → p = (6 + 4)/20 = 0.5，q = 0.5。',
        '小族群時等位基因頻率受「漂變 genetic drift」影響大 — 有些等位基因僅僅因為運氣不好就消失了。大族群中天擇與遷移的作用相對主導。',
      ],
      keyPoints: [
        'p = (2·AA + Aa) / (2·N)',
        '小族群 → 漂變主導；大族群 → 天擇主導',
      ],
      viz: null,
    },
    {
      title: 'Fst 與族群分化',
      hook: '兩個族群基因庫差多少？Fst 用一個 0-1 的數字告訴你。',
      paragraphs: [
        'Fst 比較「族群內變異」與「族群間變異」的比例：Fst = (HT − HS) / HT，HT 是合併族群異型機率、HS 是各族群異型機率的平均。Fst = 0 表示兩族群完全一致；Fst → 1 表示完全不同的固定狀態。',
        '人類各大洲族群間 Fst 大約 0.05-0.15（差異「不大」），這是「人類遺傳變異約 85% 在族群內、15% 在族群間」這個常被引用的事實的數字基礎。',
      ],
      keyPoints: [
        'Fst = (HT − HS) / HT',
        '人類洲際 Fst 約 0.05-0.15（變異多在族群內）',
      ],
      viz: 'fst-bar',
    },
    {
      title: '天擇與漂變',
      hook: '兩個力量決定等位基因頻率怎麼變：「機率漂流」是漂變、「有利者活」是天擇。',
      paragraphs: [
        '漂變 (Genetic Drift)：純粹由抽樣機率造成的頻率變化。對小族群影響極大，可能讓中性甚至略有利的等位基因消失，也可能讓有害的等位基因暫時固定。',
        '天擇 (Selection)：有利等位基因被優先傳到下代。三類：正向（promote）、負向（remove）、平衡（balancing - 維持多型）。鐮刀型貧血的 HbS 在瘧區是經典「平衡選擇」案例 — 異型對瘧疾有抵抗力，同型則致病。',
      ],
      keyPoints: [
        '漂變 = 隨機；天擇 = 有方向',
        'Balancing selection 維持多型（HbS 與瘧疾抵抗）',
      ],
      viz: null,
    },
    {
      title: '章節小測',
      hook: '當你看到 GWAS 論文裡的 Manhattan plot，這些群體遺傳概念其實全部都派上用場。',
      paragraphs: [
        '挑戰：(1) GWAS 前處理為什麼要去掉偏離 HWE 的 SNP？(2) 為什麼 Fst 通常用來「定義族群」而非「個體祖源」？(3) 漂變和瓶頸事件 (bottleneck) 在頻率上的表現有什麼不同？',
        '這些都是 GWAS / 群體遺傳論文中常出現的問題，能回答代表你能讀懂該領域論文的核心結果。',
      ],
      keyPoints: [
        'HWE QC、Fst 分群、漂變/瓶頸是 GWAS 必備概念',
      ],
      viz: null,
    },
  ],
};

// ─────────── 單細胞 scRNA-seq (id: 'sc') ───────────
LESSON_CONTENT['sc'] = {
  intro: '從 bulk 到 single cell — 把細胞「打散」測，揭示組織內的細胞型態異質性。',
  estimate: '約 25 分鐘',
  units: [
    {
      title: '10x Genomics 化學',
      hook: '一顆 10x 微滴包一個細胞 + 一顆條碼磁珠 — 這就是大規模單細胞定序的祕密武器。',
      paragraphs: [
        '10x Chromium 平台用「微流體」技術，把每個細胞與一顆攜帶獨特 cell barcode 的磁珠一起包進油滴 (GEM)。在油滴內完成 mRNA 反轉錄並標上 barcode，之後再合併測序，靠 barcode 就能還原「這條 reads 來自哪顆細胞」。',
        '單一實驗常處理 5,000-20,000 顆細胞，每細胞撈到 ~30,000 reads、~1,500 detected genes。技術天花板：mRNA 捕獲率僅 10-20% — 多數低表達轉錄本會 dropout 為 0。',
      ],
      keyPoints: [
        '微滴 = 1 cell + 1 barcoded bead',
        '單實驗 5K-20K cells；mRNA 捕獲率 ~10-20%',
      ],
      viz: 'scrna-droplet',
    },
    {
      title: '細胞 × 基因 矩陣',
      hook: 'scRNA-seq 的核心輸出：一張稀疏到 90% 都是零的矩陣 — 但每個非零格都是一個細胞的故事。',
      paragraphs: [
        '輸出是「cell × gene」counts matrix，通常存成 sparse 格式 (10x .mtx + barcodes.tsv + features.tsv)。每細胞有 ~1500 個 detected genes，相對於 20,000 個基因，矩陣超過 90% 是 0 — 部分真零、部分是 dropout。',
        '兩大分析框架：Scanpy (Python) 與 Seurat (R)。兩者功能類似，可互通 (.h5ad ↔ .rds)。整個流程：load → QC → 標準化 → 變異基因選擇 → PCA → UMAP → 分群 → 註解。',
      ],
      keyPoints: [
        'sparse matrix 通常 > 90% 是 0',
        'Scanpy (Python) / Seurat (R) 兩大主流框架',
      ],
      viz: 'sparse-matrix',
    },
    {
      title: 'QC 與雙細胞偵測',
      hook: '在分析之前一定要清資料：死細胞、雙細胞、純 ambient RNA — 不清掉，後面的分群會亂七八糟。',
      paragraphs: [
        '三個關鍵 QC 指標：(1) detected genes / cell（太少 → 死細胞或空 droplet）；(2) total UMI counts（太低 → 同上）；(3) % mitochondrial reads（> 10-20% → 細胞膜破裂、漏出細胞質）。',
        'Doublet 偵測：油滴中包到兩顆細胞時，會看似「兩種型態的雜交」。工具：Scrublet (Python)、DoubletFinder (R)、scDblFinder。流程上先 QC 過濾，再做 doublet detection；過濾比例約 5-15%。',
      ],
      keyPoints: [
        'QC 三指標：detected genes / UMI / % mito',
        'Doublet rate ~0.4% per 1000 cells — 必須過濾',
      ],
      viz: 'qc-thresholds',
    },
    {
      title: '降維 UMAP / t-SNE',
      hook: '20,000 維壓到 2 維還能看清細胞群？UMAP 比 t-SNE 更快、更好詮釋群間距離。',
      paragraphs: [
        '流程：標準化的表現矩陣 → PCA 降到 30-50 維（去除主要雜訊與線性結構）→ KNN graph → UMAP / t-SNE 視覺化 2D。PCA 是必要前處理 — 直接對 20,000 基因做 UMAP 會極慢且雜訊大。',
        'UMAP 與 t-SNE 都是非線性降維。UMAP 的「群間距離」較有意義（保留全域結構），t-SNE 局部結構清楚但群間距離無物理意義。現在 scRNA-seq 主流用 UMAP。',
      ],
      keyPoints: [
        '永遠先做 PCA（30-50 PC）再做 UMAP / t-SNE',
        'UMAP 較快 + 全域結構合理；t-SNE 局部清楚但距離無意義',
      ],
      viz: 'umap-detail',
    },
    {
      title: '分群與細胞註解',
      hook: '降維後一群一群的點是什麼細胞？靠 marker genes + 既有資料庫對照。',
      paragraphs: [
        '分群常用 Leiden / Louvain 演算法（在 KNN graph 上找社群）。Resolution 參數越大 → 群越多；常從 0.5 起手依生物意義微調。',
        '註解方法：(1) 手動 — 看每群高表達的 marker genes，比對教科書／資料庫；(2) 自動 — SingleR、CellTypist、scANVI 等用 ML 對已知細胞型態資料庫做分類。註解後務必驗證關鍵 marker 在該群是否確實高表現。',
      ],
      keyPoints: [
        'Leiden / Louvain 是主流分群演算法',
        '註解：手動 marker check + 自動工具雙保險',
      ],
      viz: 'cell-types',
    },
    {
      title: '軌跡分析 Trajectory',
      hook: '細胞不是靜態分類，它在分化、在變化 — 軌跡分析告訴你「誰是誰的祖先」、「過程中哪些基因換手」。',
      paragraphs: [
        '軌跡分析 (Pseudotime) 假設細胞群間存在連續的發育或活化軌跡，把每細胞排到一個「偽時間」軸上。代表工具：Monocle3、Slingshot、PAGA、scVelo。',
        'RNA velocity (La Manno 2018) 更進一步：用 spliced vs unspliced reads 比例推估「細胞正往哪個方向走」 — 像在 UMAP 上畫小箭頭。對發育、分化、re-programming 研究極有用。',
      ],
      keyPoints: [
        'Pseudotime：把細胞排到連續軌跡上',
        'RNA velocity：spliced / unspliced 比例預測未來狀態',
      ],
      viz: null,
    },
  ],
};

// ─────────── R 與生統入門 (id: 'r') ───────────
LESSON_CONTENT['r'] = {
  intro: '生資的另一條主路 — R 在統計與視覺化上的傳統優勢仍未被 Python 完全取代。',
  estimate: '約 28 分鐘',
  units: [
    {
      title: 'R 與 RStudio',
      hook: 'R 是「為統計而生」的語言。RStudio 是它的 IDE — 就像 Python 與 VS Code 的關係。',
      paragraphs: [
        'R 的核心物件是 vector、data.frame、list。資料分析常用：`df <- read.csv("counts.csv")`；`head(df)`；`summary(df)`。R 的索引從 1 開始（注意，不是 Python 的 0），且 NA 是內建的缺失值類型。',
        'RStudio 提供四宮格介面（編輯器、Console、環境、Plots / Help）。最近的 Posit Workbench 是 RStudio 商業版。Quarto / R Markdown 讓你把分析、結果、敘述寫在同一個文件，產生可重現的報告。',
      ],
      keyPoints: [
        'R 索引從 1 開始、NA 是內建缺失值',
        'RStudio = 標準 IDE；Quarto = 可重現報告',
      ],
      viz: 'code-r-basic',
    },
    {
      title: 'tidyverse 流程',
      hook: '原生 R 寫起來像舊版 Excel；tidyverse 重新定義了「優雅的 R」 — 用管線 %>% 把資料一路推下去。',
      paragraphs: [
        'tidyverse 是套件集合：dplyr (資料處理)、tidyr (整理)、ggplot2 (繪圖)、readr (讀檔)、tibble (資料框)、purrr (函數式)。核心動詞 dplyr：filter、select、mutate、group_by、summarise，配合 %>% 管線像 SQL 一樣讀得順。',
        '範例：`df %>% filter(padj<0.05) %>% group_by(chrom) %>% summarise(n=n(), mean_lfc=mean(log2FC))`。比原生 `aggregate(...)` 大幅可讀。R 4.1+ 也支援原生管線 |>，與 %>% 行為大致一致。',
      ],
      keyPoints: [
        'dplyr 動詞：filter / select / mutate / group_by / summarise',
        '%>% 或 |> 把多步串成一條清楚的 pipeline',
      ],
      viz: 'code-r-tidy',
    },
    {
      title: '假設檢定 t-test',
      hook: '兩組樣本平均值差別有意義嗎？t-test 是最基本的判斷工具。',
      paragraphs: [
        't-test 的核心：(1) 計算兩組均值差；(2) 算出該差異的標準誤；(3) 比值是 t 統計量。t 越大 → 越不像隨機。配合自由度查 t 分布 → p 值。R 一行：`t.test(group_a, group_b)`。',
        '前提：常態分布 + 等變異 (Welch t-test 放寬等變異假設)。若資料明顯非常態 → 用 Wilcoxon rank-sum test 替代 (`wilcox.test()`)。樣本數 < 5 時統計檢力極低，不論用哪個檢定都建議謹慎。',
      ],
      keyPoints: [
        't = 均值差 / 標準誤；越大越顯著',
        '非常態 → Wilcoxon；小樣本 → 結果保守看待',
      ],
      viz: null,
    },
    {
      title: '多重檢定校正',
      hook: '同時做 2 萬個 t-test，即使全是雜訊也會有 1000 個 p < 0.05 — 多重檢定校正存在的原因。',
      paragraphs: [
        '兩大校正策略：(1) Bonferroni — 把 α 除以檢定次數，最嚴格但常過度保守；(2) Benjamini-Hochberg (BH / FDR) — 控制偽陽性比例而非總數，較不保守，是 RNA-seq / GWAS 標準。',
        'R：`p.adjust(pvalues, method="BH")` 直接給校正後 p 值（即 FDR）。常見閾值 FDR < 0.05 = 5% 的「顯著結果」中允許是偽陽性。',
      ],
      keyPoints: [
        'Bonferroni 嚴格 / BH 較不保守',
        'p.adjust(p, method="BH") 一行搞定 FDR',
      ],
      viz: 'mult-test',
    },
    {
      title: 'ggplot2 視覺化',
      hook: 'ggplot 把「畫圖」變成「組合語法」 — 圖層、美學、座標各自獨立組合，極度可重用。',
      paragraphs: [
        '核心語法：`ggplot(data, aes(x, y, color)) + geom_point() + theme_classic()`。每加一個 + 就疊一層。geom_*（點/線/條）、aes（美學映射）、scale_*（色階）、theme_*（外觀）、facet_*（小圖網格）。',
        '生資常用：geom_point 散點 (火山圖)、geom_tile 熱圖、geom_boxplot 箱型圖、geom_bar 長條圖。配合 `ggsave("fig.pdf", width=6, height=4)` 存成發表級 PDF。',
      ],
      keyPoints: [
        'ggplot = 圖層語法，逐層 +',
        '生資四圖：point / tile / boxplot / bar',
      ],
      viz: 'code-r-ggplot',
    },
    {
      title: 'Bioconductor 套件',
      hook: 'CRAN 是 R 的「app store」，Bioconductor 則是「生資專區」 — DESeq2、edgeR、limma 都在這。',
      paragraphs: [
        'Bioconductor 收錄 2000+ 個生資專用套件。透過 BiocManager 安裝：`BiocManager::install("DESeq2")`。每個套件都有對應 vignette（教學文件）— 學新套件先讀 vignette 比 Google 更快。',
        '常用核心套件：DESeq2 / edgeR / limma (差異表現)、Seurat (單細胞)、ComplexHeatmap (進階熱圖)、ggbio (基因組視覺化)、Biostrings (序列處理)、GenomicRanges (區間運算)。',
      ],
      keyPoints: [
        'BiocManager::install() 安裝 Bioconductor 套件',
        'vignette 是最佳學習資源',
      ],
      viz: null,
    },
    {
      title: '章節小測',
      hook: '從 csv 到一張可發表的 figure — R 走完整個分析流程其實不需要寫 50 行 code。',
      paragraphs: [
        '挑戰：(1) 為什麼 BH 校正比 Bonferroni 在差異表現分析中更常用？(2) 寫 R 程式碼用 dplyr，從 `df` 篩出 padj < 0.05 且 log2FC > 1 的基因。(3) 寫 ggplot 把這些基因的 log2FC 對 padj 畫火山圖。',
        '答對代表你能用 R 走完一個完整的 RNA-seq 後處理流程 — 這幾乎就是生資 entry level 的標準技能。',
      ],
      keyPoints: [
        'dplyr 篩選 + ggplot 繪圖 = 完整後處理流程',
      ],
      viz: null,
    },
  ],
};

// ─────────── 生物機器學習 (id: 'ml') ───────────
LESSON_CONTENT['ml'] = {
  intro: '從預測蛋白功能到設計新疫苗 — ML / DL 已是現代生資不可繞過的工具。',
  estimate: '約 30 分鐘',
  units: [
    {
      title: '監督式 vs 非監督式',
      hook: '有標籤資料 → 監督式（找映射）；沒標籤資料 → 非監督式（找結構）。生資兩者都常用。',
      paragraphs: [
        '監督式 (Supervised) 學習：訓練時提供 X (特徵) 和 y (標籤)，模型學從 X 預測 y。例：用變異特徵預測「致病 vs 良性」、用序列預測「啟動子 vs 非啟動子」。常見模型：邏輯回歸、SVM、隨機森林、CNN、Transformer。',
        '非監督式 (Unsupervised) 學習：只有 X，沒有 y。任務是發現資料結構：分群 (clustering)、降維 (PCA / UMAP)、異常偵測。scRNA-seq 的細胞分群就是非監督；GWAS 的族群分層用 PCA 也是非監督。',
      ],
      keyPoints: [
        '監督式 = 找 X → y 映射；非監督 = 找 X 結構',
        '常見任務：分類 / 回歸 / 分群 / 降維 / 異常',
      ],
      viz: 'supervised-vs',
    },
    {
      title: '特徵工程：序列編碼',
      hook: 'ATCG 怎麼塞進 ML 模型？最簡單 one-hot；最有力的近年是 embedding from language model。',
      paragraphs: [
        '經典編碼：(1) one-hot — A=[1,0,0,0]、C=[0,1,0,0] 等；(2) k-mer 計數 — 統計各長度 k 子字串的頻率；(3) 物理化學性質 — 把每個鹼基或胺基酸轉成性質向量（疏水度、電荷、體積等）。',
        '深度學習編碼：(1) sequence embedding — 每個位置學一個向量；(2) 預訓練語言模型 ESM、ProtBERT、DNABERT — 把序列丟進 transformer 取最後一層作為「context-aware embedding」。後者捕捉演化與結構資訊，效果通常顯著優於 one-hot。',
      ],
      keyPoints: [
        'one-hot 簡單但訊號弱；ESM embedding 是現代主流',
        'k-mer 計數對短序列分類仍很有用',
      ],
      viz: 'one-hot-seq',
    },
    {
      title: '分類器：SVM / Random Forest',
      hook: '不一定要深度學習 — 對表格特徵 (variant features, k-mer counts)，SVM 和 RF 仍是極具競爭力的工具。',
      paragraphs: [
        'Random Forest：集成多棵決策樹，每棵看不同的特徵與樣本子集，最後投票。優點：免標準化、能處理高維、給 feature importance、超參數少。在臨床變異致病性預測（如 CADD）大量使用。',
        'SVM (Support Vector Machine)：找一個最大邊界超平面分隔兩類。配合 kernel trick 處理非線性。對小樣本、高維度（如序列分類）特別強。早期 protein function prediction 是 SVM 的主場。',
      ],
      keyPoints: [
        'RF：集成、免標準化、給 feature importance',
        'SVM：高維小樣本強；kernel 處理非線性',
      ],
      viz: null,
    },
    {
      title: '深度學習：CNN on DNA',
      hook: 'CNN 原本為圖像而生 — 但 DNA 序列也是「一維有局部模式的資料」，CNN 在這完美適用。',
      paragraphs: [
        'CNN (Convolutional Neural Network) 用卷積核掃描序列，自動學習 motif-like 特徵。經典例：DeepBind (Alipanahi 2015) 預測 TF 結合位點、Basset 預測染色質可及性、DeepSEA 預測非編碼變異效應。',
        '輸入通常是 one-hot 編碼的序列（4 通道 × L 長度），通過幾層 conv1d → pooling → fully connected → output。訓練資料可以是 ChIP-seq peaks、ATAC-seq peaks、GWAS hits 等。',
      ],
      keyPoints: [
        'CNN 在 DNA 上學 motif-like 特徵',
        '代表作：DeepBind / Basset / DeepSEA',
      ],
      viz: 'cnn-dna',
    },
    {
      title: '蛋白語言模型 ESM',
      hook: '把蛋白序列當「外星語言」訓練 BERT — 結果發現它學到了結構、功能、共演化模式。',
      paragraphs: [
        'ESM (Evolutionary Scale Modeling, Meta AI) 系列模型用 masked language model 任務在 UniRef 上預訓練（隨機遮住胺基酸，讓模型預測）。ESM-2 (15B 參數) 學到的 embedding 可用於：結構預測、功能註解、突變效應、抗體設計。',
        '其重要應用 ESMFold：純從序列預測結構，速度比 AlphaFold 快 60 倍，雖然準確度略低，但對「沒有 MSA」的孤兒蛋白特別有價值（AlphaFold 強依賴 MSA 共演化訊號）。',
      ],
      keyPoints: [
        'ESM = 在蛋白序列上的 transformer language model',
        'ESMFold 比 AlphaFold 快 60×；對孤兒蛋白特別好用',
      ],
      viz: null,
    },
    {
      title: '評估指標 ROC / PR',
      hook: '模型 accuracy 95% 聽起來很棒 — 但如果致病變異只佔 5%，全部猜「良性」也能 95%。要看 ROC 與 PR 才知真本事。',
      paragraphs: [
        'ROC (Receiver Operating Characteristic) 曲線：橫軸 False Positive Rate、縱軸 True Positive Rate，所有閾值掃描下的點。AUC = 1 完美、0.5 隨機。容易誤導之處：當資料極不平衡，ROC AUC 看起來很高但實際偽陽性很多。',
        'PR (Precision-Recall) 曲線：橫軸 Recall、縱軸 Precision。當「正樣本稀少」時 (致病變異、稀有事件)，PR-AUC 比 ROC-AUC 更具參考性。臨床或變異致病預測通常兩者一起報。',
      ],
      keyPoints: [
        'ROC-AUC：通用；PR-AUC：正樣本稀少時更有意義',
        '臨床預測 → 兩者一起報、解讀更全面',
      ],
      viz: 'roc-vs-pr',
    },
  ],
};

// ─────────── 表觀遺傳學 (id: 'epi') ───────────
LESSON_CONTENT['epi'] = {
  intro: '基因序列不變，但細胞知道自己是什麼 — 表觀遺傳學就是研究這個「記憶層」。',
  estimate: '約 22 分鐘',
  units: [
    {
      title: '什麼是表觀遺傳',
      hook: '你身體裡幾乎每個細胞的 DNA 都一樣，但腦細胞和皮膚細胞卻長得完全不同 — 區別不在基因序列，而在「哪些基因被打開」。',
      paragraphs: [
        '表觀遺傳 (Epigenetics) = 不改變 DNA 序列、卻能影響基因表現的修飾。三大層次：(1) DNA 甲基化、(2) 組蛋白修飾、(3) 非編碼 RNA 調控。',
        '這些修飾可以隨細胞分裂遺傳給子細胞，但又能在環境刺激下改變 — 介於「絕對遺傳」與「即時可塑」之間，是發育、衰老、疾病的核心調控層。',
      ],
      keyPoints: [
        '同一基因組 → 不同細胞型態，靠表觀遺傳調控',
        '三大層次：DNA 甲基化、組蛋白修飾、ncRNA',
        '可遺傳、但又可被環境改變',
      ],
      viz: null,
    },
    {
      title: 'DNA 甲基化',
      hook: 'CpG 雙核苷酸上加個甲基 (CH₃) — 就能讓附近的基因「關燈」。',
      paragraphs: [
        '哺乳類最主要的 DNA 甲基化發生在 CpG 雙核苷酸的 C 上，產生 5-甲基胞嘧啶 (5mC)。CpG islands（CpG 密集區）多位於啟動子；當這些區域大量甲基化，下游基因通常被沉默。',
        '偵測技術：bisulfite sequencing 把未甲基化的 C 轉成 U（再變 T），保留甲基化的 5mC — 比對前後就能逐位點看甲基化狀態。新興的 EM-seq、Nanopore 直接定序甲基化標記，免去化學轉換。',
      ],
      keyPoints: [
        '5mC 在 CpG 密集啟動子 → 基因沉默',
        'Bisulfite-seq 是經典定量方法',
        'Nanopore 可直接定序甲基化標記',
      ],
      viz: null,
    },
    {
      title: '組蛋白修飾',
      hook: 'DNA 不是裸著存在 — 它纏繞在組蛋白上像線繞線軸。組蛋白尾巴上的化學標記，決定基因「翻書」翻不翻得開。',
      paragraphs: [
        '組蛋白是 H2A、H2B、H3、H4 四種蛋白組成的八聚體 (核小體)。它們的 N 端尾巴會被乙醯化、甲基化、磷酸化等修飾。常見指標：H3K4me3（啟動子活化）、H3K27me3（沉默）、H3K9ac（活化轉錄）、H3K27ac（強增強子）。',
        '不同修飾組合形成「組蛋白密碼 histone code」。例如 H3K4me3 + H3K27ac 共存 → 強烈活化的啟動子；H3K27me3 + H3K9me3 → 異染色質沉默。',
      ],
      keyPoints: [
        'H3K4me3 = 啟動子活化',
        'H3K27me3 = 抑制 / 異染色質',
        'H3K27ac = 強增強子',
      ],
      viz: null,
    },
    {
      title: 'ChIP-seq 入門',
      hook: '想知道某個轉錄因子或組蛋白標記在基因組上「停在哪些位置」？ChIP-seq 就是用抗體「釣」出來再定序。',
      paragraphs: [
        '流程：(1) 細胞用甲醛固定 → (2) 切碎染色質 → (3) 用特異抗體免疫沉澱 (IP) 把目標蛋白與綁的 DNA 一起拉出來 → (4) DNA 定序。對齊到基因組後，會在綁定位點出現 reads 峰 (peak)。',
        '常用工具：BWA / Bowtie2 對齊 → MACS2 / MACS3 呼叫 peaks → HOMER / MEME 找 motif → deepTools 視覺化。對照組 (input 或 IgG) 是必須的，否則無法判斷是真正富集還是雜訊。',
      ],
      keyPoints: [
        '抗體 + 定序 → 找蛋白在基因組上的綁定位點',
        '工具鏈：BWA → MACS → HOMER / deepTools',
        'Input 對照組不可省略',
      ],
      viz: null,
    },
    {
      title: 'ATAC-seq · 染色質可及性',
      hook: '不用抗體也能找「開放區」 — ATAC-seq 讓 Tn5 轉位酶直接「跳進」開放染色質，留下定序的標記。',
      paragraphs: [
        'ATAC-seq (Assay for Transposase-Accessible Chromatin) 用過度活躍的 Tn5 同時切染色質並插入定序 adapter — 只有「染色質開放」的位置才能被切到。比 ChIP-seq 簡單、樣本量需求少，特別適合單細胞（scATAC-seq）。',
        '輸出 peaks 反映「哪些區域目前是開放的」 — 通常對應啟動子、增強子、開放的 TF 結合位點。可結合 RNA-seq 與 ChIP-seq 構成多體學整合分析。',
      ],
      keyPoints: [
        'Tn5 同時切 + 插 adapter → 一步法',
        '輸出 = 開放染色質區域',
        '單細胞 ATAC 可直接看 cell type-specific 調控',
      ],
      viz: null,
    },
  ],
};

// ─────────── 癌症基因組學 (id: 'cancer') ───────────
LESSON_CONTENT['cancer'] = {
  intro: '癌症是「演化在身體裡發生」— 細胞累積突變、適者生存。基因組學告訴我們腫瘤怎麼長、怎麼治。',
  estimate: '約 28 分鐘',
  units: [
    {
      title: 'Somatic vs Germline 變異',
      hook: '你身上每天都在發生新的突變 — 大部分是 somatic（只影響該細胞與其後代），少部分發生在生殖細胞時才會變成 germline 傳給下一代。',
      paragraphs: [
        'Germline variant：在受精卵或生殖細胞層次的變異，全身細胞共有，會遺傳。BRCA1/2 突變是經典的 germline 致病例。',
        'Somatic variant：在體細胞分裂時發生，只存在於該細胞及其後代。癌症的驅動突變幾乎都是 somatic。分析時必須有「配對正常組織」做減法，從 tumor BAM 減去 normal BAM 才能找出 somatic-specific。',
      ],
      keyPoints: [
        'Germline = 受精卵層次 → 全身 + 遺傳',
        'Somatic = 體細胞層次 → 局部 + 不遺傳',
        '癌症 somatic 分析必須有 paired normal',
      ],
      viz: null,
    },
    {
      title: '驅動突變 vs 乘客突變',
      hook: '一顆腫瘤可能有幾千個 somatic 變異，但只有少數真正「驅動」癌化 — 其他都是搭便車的乘客。',
      paragraphs: [
        '驅動突變 (driver) = 賦予細胞生長 / 存活優勢的突變。常落在「癌基因 oncogene」(GAIN-OF-FUNCTION：KRAS、MYC) 或「腫瘤抑制基因 TSG」(LOSS-OF-FUNCTION：TP53、RB1)。',
        '乘客突變 (passenger) = 在驅動突變後跟著累積但沒有功能影響的突變。鑑別工具：MutSigCV、dNdScv、OncodriveCLUST — 統計上看「特定基因突變率是否高於背景」。COSMIC Cancer Gene Census 整理了 700+ 已知 driver。',
      ],
      keyPoints: [
        'Driver = 有功能、推動癌化；Passenger = 搭便車',
        'Oncogene = GoF；TSG = LoF',
        '統計工具識別 driver: MutSigCV、dNdScv',
      ],
      viz: null,
    },
    {
      title: '微衛星不穩定 MSI',
      hook: '某些癌症因為「修復機制壞掉」，會在 microsatellite 區域累積大量小 indel — 這就是 MSI。MSI-high 通常對免疫治療反應良好。',
      paragraphs: [
        'Microsatellite 是基因組中 1-6 bp 的短重複序列 (如 AAAAAA、CACACACA)。如果細胞的「錯配修復 mismatch repair (MMR)」蛋白 (MLH1、MSH2、MSH6、PMS2) 失效，這些區域會在每次複製時不穩定地增減重複數。',
        '臨床意義：MSI-high 腫瘤 (例如某些大腸癌、子宮內膜癌) 帶有大量新抗原 → 免疫系統可辨識 → 對 PD-1 抑制劑 (pembrolizumab) 反應率高。MSI 是 FDA 第一個批准的「跨癌種」免疫治療生物標記。',
      ],
      keyPoints: [
        'MMR 缺失 → microsatellite 區域累積 indel',
        'MSI-high → 高突變負荷 → 免疫治療反應好',
        '檢測：MSI PCR 或 NGS-based（MSIsensor、MANTIS）',
      ],
      viz: null,
    },
    {
      title: '突變簽名 Mutational signatures',
      hook: '不同致癌原（紫外線、菸、某些化療藥）會在 DNA 上留下「指紋」 — 從這些指紋反推暴露歷史與機制。',
      paragraphs: [
        '把 somatic SNV 依「6 種替換 × 兩側鹼基」分成 96 類，統計每種類別在腫瘤中的次數，就得到突變光譜。把多個腫瘤的光譜做 NMF 分解 → 萃取出「簽名 signatures」。COSMIC 已收 60+ 個已知簽名。',
        '經典簽名：SBS4 = 抽菸 (C>A 在 NCC 環境)、SBS7a/b = UV 紫外線、SBS6 = MSI / dMMR、SBS3 = 同源重組缺失 (HRD，BRCA 相關)、SBS40 = 年齡老化。同一腫瘤可能混合多種簽名。',
      ],
      keyPoints: [
        '96 種 trinucleotide context → NMF → signatures',
        'SBS4 抽菸、SBS7 UV、SBS6 MSI、SBS3 BRCA-like',
        'COSMIC SBS 資料庫是註解標準',
      ],
      viz: null,
    },
    {
      title: '拷貝數變異與融合基因',
      hook: '癌症不只小變異 — 整段 DNA 被刪、被加倍、或斷裂後接到別處。融合基因常常是強驅動。',
      paragraphs: [
        'CNV (Copy Number Variation)：染色體區段拷貝數 ≠ 2 (二倍體預期)。MYC 增幅 (amplification) 是經典致癌；TP53 缺失 (loss) 喪失腫瘤抑制。工具：GISTIC、CNVkit。',
        '融合基因 (gene fusion)：染色體斷裂後兩個基因「接在一起」形成異常嵌合蛋白。BCR-ABL（慢性骨髓性白血病）造就 Gleevec / Imatinib 神藥；EML4-ALK（肺腺癌）對應 crizotinib。RNA-seq 工具：STAR-Fusion、Arriba。',
      ],
      keyPoints: [
        'CNV：擴增 (gain) / 缺失 (loss)，多為 driver',
        'Fusion：染色體斷裂接合，常產生致癌嵌合蛋白',
        '經典：BCR-ABL（CML）、EML4-ALK（肺癌）',
      ],
      viz: null,
    },
    {
      title: 'TCGA 與 ICGC 資源',
      hook: '想做癌症分析又沒資料？TCGA 已經測完上萬個腫瘤的 WGS、RNA-seq、甲基化、proteomics — 全部免費公開。',
      paragraphs: [
        'TCGA (The Cancer Genome Atlas) 涵蓋 33 種癌型、約 11,000 名病人。每個樣本有多體學資料：WES/WGS、RNA-seq、miRNA-seq、450K 甲基化、RPPA 蛋白組。從 GDC 入口下載。',
        'ICGC PCAWG (Pan-Cancer Analysis of Whole Genomes) 整合 2700+ 個 WGS 腫瘤資料。另外 cBioPortal、UCSC Xena、GDC 都提供視覺化探索工具 — 不寫 code 也能跑互動分析。',
      ],
      keyPoints: [
        'TCGA: 33 癌型 × 11K 病人 × 多體學',
        'PCAWG: 2700+ WGS pan-cancer',
        'cBioPortal / Xena: 互動式探索',
      ],
      viz: null,
    },
  ],
};

// ─────────── 微生物群 (id: 'microbe') ───────────
LESSON_CONTENT['microbe'] = {
  intro: '腸道裡有幾兆個微生物 — 它們的基因加起來比你自己的還多。怎麼測、怎麼分析這個「第二基因組」？',
  estimate: '約 22 分鐘',
  units: [
    {
      title: '16S rRNA vs Shotgun',
      hook: '只想知道「裡面有哪些細菌」用 16S；想知道「它們在做什麼功能」用 shotgun — 兩條完全不同的路線。',
      paragraphs: [
        '16S rRNA 是細菌的「身分證」基因，9 個變異區 (V1-V9) 演化保守但物種間有差異。常用 V3-V4 區域做 PCR 擴增定序，便宜快速。缺點：解析度只到屬 (genus) 級、無法看功能基因。',
        'Shotgun metagenomics：不挑基因，直接打碎所有 DNA 定序。能看到全部細菌、古菌、真菌、病毒，還能直接識別功能基因 (代謝路徑、抗生素抗性)。代價：成本高 10×、分析複雜得多。',
      ],
      keyPoints: [
        '16S = 便宜、僅看「誰在」、屬級解析',
        'Shotgun = 貴、看「誰 + 在做什麼」、種級',
        '兩種互補；研究目的決定選擇',
      ],
      viz: null,
    },
    {
      title: 'ASV / OTU 與 DADA2',
      hook: '把 reads 群成「物種」過去靠 OTU（97% 相似度聚類）— 現在 DADA2 直接給單鹼基解析度的 ASV，徹底取代 OTU。',
      paragraphs: [
        'OTU (Operational Taxonomic Unit)：把相似度 ≥ 97% 的 reads 聚成一群代表一個物種。簡單但解析度低、無法跨資料集合併。',
        'ASV (Amplicon Sequence Variant)：DADA2 / Deblur 用統計模型去除定序錯誤，把每個「真正不同」的序列當一個 unit。解析度到 1 bp，可跨研究合併、可重現。現在 16S 分析的事實標準。',
      ],
      keyPoints: [
        'OTU：97% 聚類（過時）',
        'ASV：DADA2 給單鹼基解析度',
        'ASV 跨研究可合併，OTU 不行',
      ],
      viz: null,
    },
    {
      title: 'α / β 多樣性',
      hook: '一個樣本內有多少種？樣本之間差多少？α 與 β 多樣性是微生物分析的兩個基本問題。',
      paragraphs: [
        'α 多樣性 = 單一樣本內的多樣性。指標：Observed (物種數)、Shannon (考慮均勻度)、Simpson、Faith\'s PD (考慮系統發生)。',
        'β 多樣性 = 樣本之間的差異。常用距離：Bray-Curtis (組成差異)、UniFrac (考慮系統發生)、weighted vs unweighted。配合 PCoA / NMDS 視覺化分群；統計檢定用 PERMANOVA。',
      ],
      keyPoints: [
        'α：樣本內豐富度 + 均勻度',
        'β：樣本間距離 (Bray-Curtis、UniFrac)',
        '視覺化 PCoA + PERMANOVA 統計檢定',
      ],
      viz: null,
    },
    {
      title: '物種註解 Kraken2',
      hook: 'Shotgun reads 怎麼知道是大腸桿菌還是乳酸菌？Kraken2 用 k-mer 匹配秒級註解。',
      paragraphs: [
        'Kraken2 把參考基因組切成 k-mers (k=35)，建立 LCA (Lowest Common Ancestor) 資料庫。reads 比對 k-mer hits 後分配到分類樹上最一致的層級。速度極快、準確度高。',
        '常配合 Bracken (Bayesian Reestimation) 把 Kraken2 read 數量轉換成「相對豐度」估計，校正 mapping bias。MetaPhlAn 是另一條路線，用 marker genes 而非全基因組，記憶體更省。',
      ],
      keyPoints: [
        'Kraken2 用 k-mer + LCA 快速分類',
        'Bracken 估真實豐度',
        'MetaPhlAn 用 marker gene 路線',
      ],
      viz: null,
    },
    {
      title: '功能註解 PICRUSt / HUMAnN',
      hook: '「這個微生物社群在做什麼代謝」比「有哪些菌」更有臨床意義。',
      paragraphs: [
        'PICRUSt2：從 16S 推測代謝功能。利用 16S 物種與 KEGG 通路的已知對應，給 16S 樣本也能輸出「功能 profile」。缺點：依賴推測，深度不如 shotgun。',
        'HUMAnN3：給 shotgun 用，直接從 reads 註解到 UniRef 蛋白家族 + MetaCyc 代謝路徑。輸出每個樣本的 pathway 豐度，能直接做差異分析。',
      ],
      keyPoints: [
        'PICRUSt：16S → 推測功能',
        'HUMAnN：shotgun → 直接量化功能',
        '輸出 KEGG / MetaCyc pathway 豐度',
      ],
      viz: null,
    },
  ],
};

// ─────────── CRISPR 基因編輯 (id: 'crispr') ───────────
LESSON_CONTENT['crispr'] = {
  intro: 'CRISPR 把「精準改基因」從幾百萬美元的工程降到一個研究生兩週能完成的實驗。',
  estimate: '約 22 分鐘',
  units: [
    {
      title: 'CRISPR-Cas9 工作原理',
      hook: '細菌用 CRISPR 系統「記憶」入侵病毒並切碎它們 — 科學家把這套系統改造成可程式化的 DNA 剪刀。',
      paragraphs: [
        'Cas9 是一個 DNA 內切酶 (nuclease)。它本身不認得任何特定 DNA — 是搭配一條 guide RNA (gRNA) 才能定位。gRNA 的前 20 nt 與目標 DNA 互補，把 Cas9 帶到該位點。',
        'Cas9 還需要目標 DNA 旁邊有「PAM」(Protospacer Adjacent Motif) — 通常是 NGG (SpCas9)。找到 PAM 加上 gRNA 配對，Cas9 就會在切點產生雙股斷裂 (DSB)。細胞的修復機制 (NHEJ / HDR) 會在切點製造突變或插入新序列。',
      ],
      keyPoints: [
        'Cas9 = 蛋白剪刀；gRNA = 定位導航',
        '靶標需有 PAM (NGG)',
        '雙股斷裂 → NHEJ (產生 indel) / HDR (精準改寫)',
      ],
      viz: null,
    },
    {
      title: 'gRNA 設計',
      hook: '一段 20 nt 的 gRNA 看似簡單 — 但選錯會脫靶切爆其他位置，選對能精準命中目標。',
      paragraphs: [
        '設計原則：(1) 目標有 PAM；(2) gRNA 與其他基因組區域差異 ≥ 3 mismatch（避免脫靶）；(3) GC 含量 40-60%；(4) 避開 5\' end T 富集區（轉錄受抑）。',
        '常用工具：CRISPOR、CHOPCHOP、Benchling、Synthego — 輸入目標基因或座標，自動評分並列出最佳 gRNA 候選。同時報告 on-target efficiency 預測與 off-target 風險。',
      ],
      keyPoints: [
        'PAM + 20 nt + 低脫靶 + GC 40-60%',
        '工具：CRISPOR / CHOPCHOP / Benchling',
        'On-target 預測 + off-target 評估雙報告',
      ],
      viz: null,
    },
    {
      title: '脫靶效應評估',
      hook: '即便設計再好，Cas9 還是可能切到「相似但不是目標」的位置 — 脫靶 (off-target) 是 CRISPR 治療的最大安全顧慮。',
      paragraphs: [
        '評估方法：(1) 計算性 — Cas-OFFinder、CRISPOR 列舉所有 ≤ 4 mismatch 的潛在脫靶位點；(2) 實驗 — GUIDE-seq、CIRCLE-seq、DISCOVER-seq 在細胞或 in vitro 偵測實際脫靶。',
        '減低脫靶的策略：(1) 用高保真 Cas9 變體 (eSpCas9、HiFi-Cas9)；(2) 把 Cas9 切成兩個 nickase (Cas9n D10A) 各切一條鏈，需兩條 gRNA 配對才完整斷裂；(3) 直接用 base editor / prime editor 不需 DSB。',
      ],
      keyPoints: [
        '計算 + 實驗雙路評估脫靶',
        '高保真 Cas9 變體 / nickase 雙 gRNA 降低脫靶',
        'Base / Prime editor 完全免去 DSB',
      ],
      viz: null,
    },
    {
      title: 'Base / Prime editing',
      hook: '想換掉一個鹼基，但不想冒 DSB 修復出錯的風險 — base editor 直接「化學換字」，不剪雙股。',
      paragraphs: [
        'Base editor (David Liu 2016)：把 Cas9 改造成「失活但仍能結合」(dCas9 / nCas9) 再融合「脫氨酶」。Cytosine base editor (CBE) 把 C 改成 T；Adenine base editor (ABE) 把 A 改成 G。不產生 DSB，安全性高。',
        'Prime editor (Anzalone 2019)：在 nCas9 + 反轉錄酶基礎上，用一條「pegRNA」同時帶定位序列與要改寫的新序列。可做任意點突變、小插入、小刪除，理論上能修約 89% 的人類致病變異。',
      ],
      keyPoints: [
        'Base editor：C→T (CBE) / A→G (ABE) 化學換字',
        'Prime editor：pegRNA 寫入任意改動',
        '兩者皆免雙股斷裂、降低 off-target 風險',
      ],
      viz: null,
    },
    {
      title: 'CRISPR screen 分析',
      hook: '一次同時敲掉幾千個基因看哪些影響細胞存活 — 大規模 CRISPR screen 是當代發現新藥靶最有力的工具之一。',
      paragraphs: [
        '流程：建一個「gRNA library」(通常每基因 4-10 條 gRNA、總共幾萬條) → 病毒感染細胞 → 細胞每天分裂與淘汰 → 不同時間點抽 DNA 定序 gRNA → 看哪些 gRNA 在處理組中顯著減少或增加。',
        '分析工具：MAGeCK 是最常用的 R / Python 套件，給出每基因的 enrichment score 與 p value。輸出常用「volcano plot」 — 顯著富集 = 必需基因或抗藥基因。DepMap (Broad) 公開了上千癌症細胞株的 screen 資料。',
      ],
      keyPoints: [
        '幾萬條 gRNA → 反向遺傳學大規模篩選',
        'MAGeCK 是主流分析工具',
        'DepMap 是公開的 cancer cell line screen 資源',
      ],
      viz: null,
    },
  ],
};

// ─────────── 系統生物學 (id: 'sys') ───────────
LESSON_CONTENT['sys'] = {
  intro: '單個基因的故事說了一百年。系統生物學的問題是：把所有故事串起來時，整個細胞怎麼運作？',
  estimate: '約 22 分鐘',
  units: [
    {
      title: '從還原論到網路觀',
      hook: '傳統分子生物學一次研究一個基因 — 但實際的細胞像一座城市，每個基因都與十幾個其他基因互動。',
      paragraphs: [
        '系統生物學的核心觀點：細胞功能來自「網路 + 動態」，不是單一分子。研究單元從「基因」升級到「子網路、模組、迴路 (motifs)」。',
        '研究方法整合了實驗 (high-throughput omics) 與計算 (網路分析、動力學模型、ML)。常見問題：什麼是必需的「核心 hub 基因」？哪些迴路產生振盪 (cell cycle)？擾動一個基因會傳播到哪些下游？',
      ],
      keyPoints: [
        '焦點：網路 + 動態，不是單一基因',
        '研究單元升級到模組、迴路、子網路',
        '整合 omics + 計算建模',
      ],
      viz: null,
    },
    {
      title: 'PPI 蛋白質交互作用網路',
      hook: '一個蛋白通常與十幾個其他蛋白互動。把這些交互作用畫出來，就形成 cell 的「社交網路」。',
      paragraphs: [
        '主要實驗方法：Yeast-2-Hybrid (Y2H)、Co-IP / Mass Spec (AP-MS)、BioID、Proximity labeling。各有偏誤 — Y2H 偏直接強鍵、AP-MS 偏複合物成員、BioID 偏鄰近交互。',
        '資料庫：STRING（整合多源證據打分）、BioGRID、IntAct、HuRI。網路分析常見指標：degree (連接數)、betweenness centrality (橋接度)、clustering coefficient。高 degree 的「hub」蛋白通常是必需基因。',
      ],
      keyPoints: [
        '實驗方法各有偏誤 → 多源整合更可信',
        '資料庫：STRING、BioGRID',
        'Hub 蛋白多為必需基因',
      ],
      viz: null,
    },
    {
      title: '基因調控網路',
      hook: '誰開誰、誰關誰 — 把轉錄因子與下游靶基因連起來，就成了基因調控網路。',
      paragraphs: [
        '建構方法：(1) ChIP-seq / ATAC-seq + motif 找 TF-target 對應；(2) 從 co-expression 推斷（WGCNA、ARACNE）；(3) Perturbation-based（KO + 表現變化）。',
        '經典「網路 motifs」：feed-forward loop (前饋環路)、negative feedback (負回饋產生振盪)、自我活化 (記憶開關)。少數簡單迴路重複出現在無數生物系統中 — 就像電子電路的 NAND/AND 閘。',
      ],
      keyPoints: [
        '建構：ChIP/ATAC + motif / co-expression / perturbation',
        '經典 motifs：feed-forward、negative feedback、autoregulation',
        '少數迴路重複出現於各種系統',
      ],
      viz: null,
    },
    {
      title: 'GSEA 通路富集',
      hook: '差異表現分析給你一張基因排名 — GSEA 不挑 top hits，而是看「整條通路」是否系統性偏移。',
      paragraphs: [
        'GSEA (Gene Set Enrichment Analysis, Subramanian 2005)：把所有基因依差異程度 (log2FC) 排序，再對每個 gene set 計算「累積分數 enrichment score」沿排名走的形狀。比起傳統 over-representation analysis (ORA)，GSEA 更敏感地抓「整體 mild 偏移」訊號。',
        '常用 gene set 來源：MSigDB（Hallmark、Reactome、KEGG、GO 整合）、PROGENy（基於 pathway-responsive footprint）、DoRothEA（TF 活性）。輸出 NES (Normalized Enrichment Score) + FDR。',
      ],
      keyPoints: [
        'GSEA 不挑 top hits，看「整條通路」偏移',
        '比 ORA 更敏感於 mild but consistent 訊號',
        'MSigDB Hallmark 是常用的入門 gene set',
      ],
      viz: null,
    },
    {
      title: '動力學模型與 ODE',
      hook: '濃度隨時間怎麼變？把生化反應寫成微分方程，電腦能模擬出整條代謝路徑或訊號傳遞的時序行為。',
      paragraphs: [
        'ODE (Ordinary Differential Equation) 模型把每個物種的濃度當變數，反應速率用 mass action 或 Michaelis-Menten 動力學寫成方程。代表工具：COPASI、PySCeS、Tellurium / Antimony。',
        '常見模型場景：訊號級聯（如 MAPK 雙磷酸化開關）、震盪（cell cycle、生物時鐘）、bistability（細胞分化決策）。挑戰：參數常常未知，需用實驗時序資料 fit 出來，再驗證能否預測未見的擾動。',
      ],
      keyPoints: [
        'ODE 把生化反應寫成微分方程',
        '常見：訊號級聯、震盪、bistability',
        '參數估計常用實驗時序資料 fit',
      ],
      viz: null,
    },
  ],
};

// ─────────── 雲端與工作流 (id: 'cloud') ───────────
LESSON_CONTENT['cloud'] = {
  intro: '寫對的程式 ≠ 跑得對。可重現、可擴展的工作流，是現代生資的必修課。',
  estimate: '約 22 分鐘',
  units: [
    {
      title: '為什麼需要工作流',
      hook: '手動跑 bash script 跑十次 RNA-seq 樣本，到第三次你就忘記哪個跑完了、用了什麼參數 — 工作流系統就是來解決這個。',
      paragraphs: [
        '生資 pipeline 動輒 10-30 步：QC → trim → align → dedup → call → annotate ... 每步都要「失敗時從中斷處續跑」、「不同樣本平行」、「參數記錄」。手寫 bash 完全做不到這些。',
        '工作流系統的核心特性：(1) DAG 描述步驟依賴；(2) 自動偵測中斷處續跑；(3) 平行排程；(4) 紀錄參數、環境、版本；(5) 整合容器（每步用獨立環境）。',
      ],
      keyPoints: [
        '生資 pipeline = 多步驟、長時、易斷',
        '工作流系統解決：續跑、平行、可重現',
        '替手動 bash 一勞永逸',
      ],
      viz: null,
    },
    {
      title: 'Snakemake / Nextflow',
      hook: '兩個生資界最流行的工作流引擎 — Snakemake (Python 為基底) 與 Nextflow (Groovy / Java) 各有信徒。',
      paragraphs: [
        'Snakemake：Python-like 語法、規則 (rule) 像 Makefile、社群活躍、學習曲線平緩。適合中小型分析、學術環境。',
        'Nextflow：Groovy DSL、原生支援雲端 (AWS Batch、Google Life Sciences)、產業界 (nf-core 標準) 偏好。大規模、生產級分析的事實標準。',
      ],
      keyPoints: [
        'Snakemake：Python-flavor、學術界主流',
        'Nextflow：雲端原生、產業界 / nf-core 標準',
        '兩者學一個 → 終身受用',
      ],
      viz: null,
    },
    {
      title: 'Docker / Singularity 容器',
      hook: '「在我電腦上能跑」是研究的詛咒。容器把整個環境（OS、套件、版本）打包，到哪都一樣。',
      paragraphs: [
        'Docker 用「image」（含 OS + 套件）封裝環境，跑成 container。Dockerfile 描述如何建構 image。BioContainers (quay.io/biocontainers) 收錄幾千個生資工具的官方 image。',
        'Singularity / Apptainer：HPC（高效能叢集）環境的容器標準。比 Docker 安全（不需 root），可跟 Slurm 等 job scheduler 整合。Docker image 可直接轉成 Singularity (.sif)。',
      ],
      keyPoints: [
        'Docker：通用容器標準 + BioContainers',
        'Singularity：HPC 安全版（不需 root）',
        '一條 image 跨機器跨年份都能重現',
      ],
      viz: null,
    },
    {
      title: '雲端運算 AWS / GCP',
      hook: '本地伺服器跑不動？租 AWS 一千核機器 10 美元跑一小時 — 雲端讓「分析資源」變成「按用量付費的水電」。',
      paragraphs: [
        '常見雲端服務：AWS EC2（虛擬機）、AWS Batch（批次運算）、Google Cloud Life Sciences、Microsoft Azure。NCBI SRA、TCGA、ENA 都直接放在雲上 — 算與資料同地最省成本。',
        '替代方案：Galaxy（網頁化的圖形工作流，免費）、Terra（NCI Cloud Resource，多體學整合分析）、Code Ocean、Seven Bridges。對沒運維能力的實驗室特別友善。',
      ],
      keyPoints: [
        '雲端 = 按用量付費的彈性運算',
        '主要平台：AWS、GCP、Azure',
        'Galaxy / Terra 提供圖形化雲端入口',
      ],
      viz: null,
    },
    {
      title: '可重現性與版本控制',
      hook: '論文發表三年後資料還能重新跑出來嗎？「可重現性 reproducibility」是 2020 後生資界最重要的價值。',
      paragraphs: [
        'Git + GitHub / GitLab 是程式碼版本控制標準。但「環境」與「資料」也要管 — 用 conda env / Docker image 鎖環境、用 DVC / git-lfs 追大檔。Snakemake / Nextflow 自帶 hash-based provenance tracking。',
        '更高層次：FAIR 原則 (Findable, Accessible, Interoperable, Reusable)。把資料註解 metadata、上傳到公開資料庫（Zenodo、figshare）、附上分析 code repo — 是現代發表的標配。',
      ],
      keyPoints: [
        'Git for 程式碼、conda / Docker for 環境、DVC for 資料',
        '工作流自帶 provenance tracking',
        'FAIR 原則：Findable / Accessible / Interoperable / Reusable',
      ],
      viz: null,
    },
  ],
};

Object.assign(window, { LESSON_CONTENT, LessonReader, LessonViz });

// Simple syntax highlighter for code snippets
function CodeLine({ line }){
  if(line.startsWith('#')) return <span style={{ color:'#74766E' }}>{line}</span>;
  const tokens = [];
  const re = /("[^"]*"|\b(from|import|with|as|for|in|if|return|print|def|class|conda|create|activate|install|env|export|library|function)\b|f"[^"]*"|\.[a-zA-Z_]+|\b\d+(\.\d+)?\b|%>%|<-)/g;
  let last=0, m;
  while((m = re.exec(line))){
    if(m.index>last) tokens.push({ t:line.slice(last,m.index), c:'#E0DED2' });
    const tok = m[0];
    let col = '#E0DED2';
    if(/^("|f")/.test(tok)) col = '#C4DA8B';
    else if(/^\d/.test(tok)) col = '#E0B848';
    else if(/^\./.test(tok)) col = '#7FB7E8';
    else if(/^(from|import|with|as|for|in|if|return|def|class|library|function)$/.test(tok)) col = '#E08EC6';
    else if(/^(print)$/.test(tok)) col = '#7FB7E8';
    else if(/^(conda|create|activate|install|env|export)$/.test(tok)) col = '#6CD0A5';
    else if(/^(%>%|<-)$/.test(tok)) col = '#E08EC6';
    tokens.push({ t:tok, c:col });
    last = re.lastIndex;
  }
  if(last<line.length) tokens.push({ t:line.slice(last), c:'#E0DED2' });
  return <>{tokens.map((t,i)=><span key={i} style={{ color:t.c }}>{t.t}</span>)}</>;
}

