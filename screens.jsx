// screens.jsx — all in-app screens

// ─────────── Course data ───────────
const COURSES = [
  // ── 基礎 ──
  { id:'intro', title:'生資導論', sub:'bioinformatics 101', progress:1, lessons:5, color:'#0E9384', icon:'intro', group:'foundations',
    units:[
      { title:'什麼是生物資訊', done:true },
      { title:'資料庫導覽 NCBI / Ensembl', done:true },
      { title:'FASTA / FASTQ 格式', done:true },
      { title:'常見檔案類型', done:true },
      { title:'入門小測', done:true },
    ]},
  { id:'dna', title:'DNA · RNA · 蛋白質', sub:'central dogma', progress:0.72, lessons:8, color:'#0E9384', icon:'dna', group:'foundations',
    units:[
      { title:'核苷酸與雙股結構', done:true },
      { title:'轉錄 Transcription', done:true },
      { title:'轉譯 Translation', done:true },
      { title:'密碼子表', done:true },
      { title:'突變類型', done:true },
      { title:'GC 含量與 Tm', done:true },
      { title:'反向互補練習', done:false, active:true },
      { title:'章節小測', done:false },
    ]},
  { id:'aln', title:'序列比對', sub:'pairwise & multiple', progress:0.4, lessons:6, color:'#4F94D8', icon:'aln', group:'foundations',
    units:[
      { title:'點陣圖 Dot plot', done:true },
      { title:'動態規劃', done:true },
      { title:'Needleman-Wunsch', done:false, active:true },
      { title:'Smith-Waterman', done:false },
      { title:'BLAST 入門', done:false },
      { title:'多序列比對 MSA', done:false },
    ]},

  // ── 結構與功能 ──
  { id:'protein', title:'蛋白質結構', sub:'structural biology', progress:0.25, lessons:7, color:'#D9594C', icon:'protein', group:'structure',
    units:[
      { title:'胺基酸性質與分類', done:true },
      { title:'二級結構：α-helix / β-sheet', done:false, active:true },
      { title:'三級摺疊', done:false },
      { title:'PDB 資料庫導覽', done:false },
      { title:'視覺化工具 PyMOL', done:false },
      { title:'AlphaFold 預測原理', done:false },
      { title:'章節小測', done:false },
    ]},
  { id:'ngs', title:'NGS · 次世代定序', sub:'next-gen sequencing', progress:0.15, lessons:7, color:'#EAA532', icon:'ngs', group:'structure',
    units:[
      { title:'Sanger vs NGS', done:true },
      { title:'Illumina 化學原理', done:false, active:true },
      { title:'長讀定序 PacBio / Nanopore', done:false },
      { title:'Reads · Coverage · Depth', done:false },
      { title:'品質控制 FastQC', done:false },
      { title:'參考序列比對 BWA', done:false },
      { title:'章節小測', done:false },
    ]},
  { id:'var', title:'變異與基因型', sub:'variant calling', progress:0, lessons:6, color:'#EAA532', icon:'var', group:'structure',
    units:[
      { title:'SNP / INDEL / SV', done:false },
      { title:'VCF 格式', done:false },
      { title:'GATK 流程簡介', done:false },
      { title:'群體頻率 MAF', done:false },
      { title:'臨床註解 ClinVar', done:false },
      { title:'章節小測', done:false },
    ]},

  // ── 表現分析 ──
  { id:'rnaseq', title:'基因表現 RNA-seq', sub:'expression analysis', progress:0, lessons:7, color:'#9C77C7', icon:'rnaseq', group:'expression',
    units:[
      { title:'從 reads 到 counts', done:false },
      { title:'TPM / FPKM 標準化', done:false },
      { title:'差異表現 DESeq2', done:false },
      { title:'火山圖判讀', done:false },
      { title:'GO 富集分析', done:false },
      { title:'通路分析 KEGG', done:false },
      { title:'章節小測', done:false },
    ]},
  { id:'sc', title:'單細胞 scRNA-seq', sub:'single-cell genomics', progress:0, lessons:6, color:'#9C77C7', icon:'sc', group:'expression',
    units:[
      { title:'10x Genomics 化學', done:false },
      { title:'細胞 × 基因 矩陣', done:false },
      { title:'QC 與雙細胞偵測', done:false },
      { title:'降維 UMAP / t-SNE', done:false },
      { title:'分群與細胞註解', done:false },
      { title:'軌跡分析 Trajectory', done:false },
    ]},

  // ── 演化與群體 ──
  { id:'phy', title:'系統發生樹', sub:'phylogenetics', progress:0, lessons:6, color:'#4FB37E', icon:'phy', group:'evolution',
    units:[
      { title:'演化距離', done:false },
      { title:'UPGMA', done:false },
      { title:'Neighbor Joining', done:false },
      { title:'最大似然 ML', done:false },
      { title:'Bootstrap 信心值', done:false },
      { title:'樹的解讀', done:false },
    ]},
  { id:'pop', title:'群體遺傳學', sub:'population genetics', progress:0, lessons:5, color:'#4FB37E', icon:'pop', group:'evolution',
    units:[
      { title:'Hardy-Weinberg 平衡', done:false },
      { title:'等位基因頻率', done:false },
      { title:'Fst 與族群分化', done:false },
      { title:'天擇與漂變', done:false },
      { title:'章節小測', done:false },
    ]},

  // ── 程式與工具 ──
  { id:'py', title:'Python for Biology', sub:'biopython', progress:0.1, lessons:8, color:'#4F94D8', icon:'py', group:'tools',
    units:[
      { title:'環境設置 conda', done:true },
      { title:'讀寫 FASTA', done:false, active:true },
      { title:'Biopython Seq 物件', done:false },
      { title:'呼叫 BLAST', done:false },
      { title:'解析 GenBank', done:false },
      { title:'pandas 處理表格', done:false },
      { title:'matplotlib 繪圖', done:false },
      { title:'章節小測', done:false },
    ]},
  { id:'r', title:'R 與生統入門', sub:'R for biostatistics', progress:0, lessons:7, color:'#4F94D8', icon:'r', group:'tools',
    units:[
      { title:'R 與 Rstudio', done:false },
      { title:'tidyverse 流程', done:false },
      { title:'假設檢定 t-test', done:false },
      { title:'多重檢定校正', done:false },
      { title:'ggplot2 視覺化', done:false },
      { title:'Bioconductor 套件', done:false },
      { title:'章節小測', done:false },
    ]},

  // ── 進階 ──
  { id:'ml', title:'生物機器學習', sub:'ML in biology', progress:0, lessons:6, color:'#A5318D', icon:'ml', group:'advanced', locked:true,
    units:[
      { title:'監督式 vs 非監督式', done:false },
      { title:'特徵工程：序列編碼', done:false },
      { title:'分類器：SVM / RF', done:false },
      { title:'深度學習：CNN on DNA', done:false },
      { title:'蛋白語言模型 ESM', done:false },
      { title:'評估指標 ROC / PR', done:false },
    ]},

  // ── 表觀遺傳與調控 ──
  { id:'epi', title:'表觀遺傳學', sub:'epigenetics', progress:0, lessons:5, color:'#0E9384', icon:'epi', group:'expression',
    units:[
      { title:'什麼是表觀遺傳', done:false },
      { title:'DNA 甲基化', done:false },
      { title:'組蛋白修飾', done:false },
      { title:'ChIP-seq 入門', done:false },
      { title:'ATAC-seq · 染色質可及性', done:false },
    ]},

  // ── 應用 ──
  { id:'cancer', title:'癌症基因組學', sub:'cancer genomics', progress:0, lessons:6, color:'#D9594C', icon:'cancer', group:'applications',
    units:[
      { title:'Somatic vs Germline', done:false },
      { title:'驅動 vs 乘客突變', done:false },
      { title:'微衛星不穩定 MSI', done:false },
      { title:'突變簽名 Mutational signatures', done:false },
      { title:'拷貝數變異與融合基因', done:false },
      { title:'TCGA 與 ICGC 資源', done:false },
    ]},
  { id:'microbe', title:'微生物群', sub:'microbiome', progress:0, lessons:5, color:'#4FB37E', icon:'microbe', group:'applications',
    units:[
      { title:'16S rRNA vs Shotgun', done:false },
      { title:'ASV / OTU 與 DADA2', done:false },
      { title:'α / β 多樣性', done:false },
      { title:'物種註解 Kraken2', done:false },
      { title:'功能註解 PICRUSt / HUMAnN', done:false },
    ]},
  { id:'crispr', title:'CRISPR 基因編輯', sub:'genome editing', progress:0, lessons:5, color:'#EAA532', icon:'crispr', group:'applications',
    units:[
      { title:'CRISPR-Cas9 工作原理', done:false },
      { title:'gRNA 設計', done:false },
      { title:'脫靶效應評估', done:false },
      { title:'Base / Prime editing', done:false },
      { title:'CRISPR screen 分析', done:false },
    ]},
  { id:'sys', title:'系統生物學', sub:'systems biology', progress:0, lessons:5, color:'#9C77C7', icon:'sys', group:'advanced',
    units:[
      { title:'從還原論到網路觀', done:false },
      { title:'PPI 蛋白質交互作用網路', done:false },
      { title:'基因調控網路', done:false },
      { title:'GSEA 通路富集', done:false },
      { title:'動力學模型與 ODE', done:false },
    ]},
  { id:'cloud', title:'雲端與工作流', sub:'cloud & workflow', progress:0, lessons:5, color:'#4F94D8', icon:'cloud', group:'tools',
    units:[
      { title:'為什麼需要工作流', done:false },
      { title:'Snakemake / Nextflow', done:false },
      { title:'Docker / Singularity 容器', done:false },
      { title:'雲端運算 AWS / GCP', done:false },
      { title:'可重現性與版本控制', done:false },
    ]},
];

const COURSE_GROUPS = [
  { id:'foundations', label:'基礎', en:'FOUNDATIONS' },
  { id:'structure',   label:'結構與功能', en:'STRUCTURE & FUNCTION' },
  { id:'expression',  label:'表現與調控', en:'EXPRESSION & REGULATION' },
  { id:'evolution',   label:'演化與群體', en:'EVOLUTION' },
  { id:'applications', label:'應用領域', en:'APPLICATIONS' },
  { id:'tools',       label:'程式與工具', en:'TOOLS' },
  { id:'advanced',    label:'進階', en:'ADVANCED' },
];

function CourseGlyph({ id, color, size=44 }){
  const s = size;
  if(id==='dna') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <path d="M14 10c0 8 16 8 16 12s-16 4-16 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M30 10c0 8-16 8-16 12s16 4 16 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 14h12M16 30h12M17 18h10M17 26h10" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity=".6"/>
    </svg>
  );
  if(id==='aln') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <rect x="10" y="13" width="4" height="4" rx="1" fill={color}/>
      <rect x="16" y="13" width="4" height="4" rx="1" fill={color}/>
      <rect x="22" y="13" width="4" height="4" rx="1" fill={color} opacity=".3"/>
      <rect x="28" y="13" width="4" height="4" rx="1" fill={color}/>
      <rect x="10" y="27" width="4" height="4" rx="1" fill={color}/>
      <rect x="16" y="27" width="4" height="4" rx="1" fill={color}/>
      <rect x="22" y="27" width="4" height="4" rx="1" fill={color} opacity=".3"/>
      <rect x="28" y="27" width="4" height="4" rx="1" fill={color}/>
      <path d="M12 21h20" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" opacity=".5"/>
    </svg>
  );
  if(id==='ngs') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <path d="M10 32V20M14 32V14M18 32V22M22 32V12M26 32V18M30 32V24M34 32V16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  if(id==='phy') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <path d="M12 22h6M18 14h8M18 30h8M26 14v0M26 22v0M26 30v0M26 14h6M26 22h6M26 30h6" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="12" cy="22" r="2" fill={color}/>
      <circle cx="32" cy="14" r="2" fill={color}/>
      <circle cx="32" cy="22" r="2" fill={color}/>
      <circle cx="32" cy="30" r="2" fill={color}/>
    </svg>
  );
  if(id==='ml') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <circle cx="14" cy="14" r="3" fill={color}/>
      <circle cx="14" cy="30" r="3" fill={color}/>
      <circle cx="30" cy="22" r="3" fill={color}/>
      <path d="M17 14l10 7M17 30l10-7" stroke={color} strokeWidth="1.5"/>
    </svg>
  );
  if(id==='intro') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <path d="M12 14a2 2 0 012-2h6v20h-6a2 2 0 01-2-2V14zM32 14a2 2 0 00-2-2h-6v20h6a2 2 0 002-2V14z" stroke={color} strokeWidth="1.7" fill="none" strokeLinejoin="round"/>
      <path d="M16 18h2M16 22h2M26 18h2M26 22h2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  if(id==='protein') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <path d="M11 22c0-3 3-5 6-3s5 6 8 5 5-4 8-3" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="11" cy="22" r="2" fill={color}/>
      <circle cx="22" cy="24" r="2" fill={color}/>
      <circle cx="33" cy="21" r="2" fill={color}/>
      <path d="M14 30c2-2 6-1 8 0s5 1 7-1" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity=".5"/>
    </svg>
  );
  if(id==='var') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <rect x="10" y="14" width="24" height="6" rx="1.5" stroke={color} strokeWidth="1.5" fill="none"/>
      <rect x="10" y="24" width="24" height="6" rx="1.5" stroke={color} strokeWidth="1.5" fill="none"/>
      <rect x="18" y="14" width="2.5" height="6" fill={color}/>
      <rect x="26" y="24" width="2.5" height="6" fill={color}/>
    </svg>
  );
  if(id==='rnaseq') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <path d="M10 32V12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 32h24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="26" r="1.5" fill={color} opacity=".5"/>
      <circle cx="20" cy="22" r="1.5" fill={color} opacity=".5"/>
      <circle cx="14" cy="18" r="2" fill={color}/>
      <circle cx="28" cy="16" r="2" fill={color}/>
      <circle cx="24" cy="24" r="1.5" fill={color} opacity=".5"/>
      <circle cx="32" cy="22" r="1.5" fill={color} opacity=".5"/>
      <path d="M22 32V12" stroke={color} strokeDasharray="2 3" strokeWidth="1" opacity=".5"/>
    </svg>
  );
  if(id==='sc') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <circle cx="15" cy="16" r="2.5" fill={color}/>
      <circle cx="20" cy="13" r="2" fill={color}/>
      <circle cx="13" cy="22" r="1.8" fill={color}/>
      <circle cx="29" cy="17" r="2.2" fill={color} opacity=".5"/>
      <circle cx="32" cy="23" r="2" fill={color} opacity=".5"/>
      <circle cx="27" cy="28" r="1.8" fill={color} opacity=".5"/>
      <circle cx="17" cy="30" r="2" fill={color} opacity=".7"/>
      <circle cx="22" cy="27" r="1.5" fill={color} opacity=".7"/>
    </svg>
  );
  if(id==='pop') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <circle cx="15" cy="16" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="22" cy="13" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="29" cy="16" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="15" cy="28" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="22" cy="31" r="3" fill={color}/>
      <circle cx="29" cy="28" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
    </svg>
  );
  if(id==='py') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <path d="M14 16l-4 6 4 6M30 16l4 6-4 6" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M19 30l6-16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  if(id==='r') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <path d="M10 30c0-5 2-10 6-12s8 0 9 4-3 7-6 7" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M19 29l5 5M22 22h6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  if(id==='epi') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <path d="M10 14h24M10 22h24M10 30h24" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity=".4"/>
      {[14, 18, 26, 30].map((x,i)=>(
        <circle key={i} cx={x} cy={[14,22,14,30][i]} r="2.5" fill={color}/>
      ))}
      <text x="22" y="40" textAnchor="middle" fontSize="6" fill={color} fontFamily="JetBrains Mono" fontWeight="700">CH₃</text>
    </svg>
  );
  if(id==='cancer') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <circle cx="14" cy="14" r="4" stroke={color} strokeWidth="1.8" fill="none"/>
      <circle cx="22" cy="22" r="5" fill={color}/>
      <circle cx="30" cy="14" r="3.5" fill={color} opacity=".7"/>
      <circle cx="32" cy="30" r="3" fill={color} opacity=".5"/>
      <circle cx="14" cy="30" r="2.5" fill={color} opacity=".5"/>
    </svg>
  );
  if(id==='microbe') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <ellipse cx="14" cy="16" rx="4" ry="2.5" fill={color} opacity=".7" transform="rotate(-20 14 16)"/>
      <ellipse cx="28" cy="14" rx="4" ry="2.5" fill={color} opacity=".7" transform="rotate(15 28 14)"/>
      <ellipse cx="20" cy="24" rx="3.5" ry="2" fill={color} opacity=".7" transform="rotate(40 20 24)"/>
      <ellipse cx="30" cy="28" rx="4" ry="2.2" fill={color} opacity=".7" transform="rotate(-10 30 28)"/>
      <ellipse cx="14" cy="30" rx="3" ry="2" fill={color} opacity=".7" transform="rotate(-30 14 30)"/>
    </svg>
  );
  if(id==='crispr') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <path d="M10 14h24M10 30h24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 14v16" stroke={color} strokeWidth="2" strokeDasharray="2 2"/>
      <circle cx="22" cy="22" r="4" fill={color}/>
      <text x="22" y="25" textAnchor="middle" fontSize="6" fill="#fff" fontFamily="JetBrains Mono" fontWeight="700">Cas</text>
    </svg>
  );
  if(id==='sys') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <circle cx="14" cy="14" r="3" fill={color}/>
      <circle cx="30" cy="14" r="3" fill={color}/>
      <circle cx="22" cy="22" r="3" fill={color}/>
      <circle cx="14" cy="30" r="3" fill={color}/>
      <circle cx="30" cy="30" r="3" fill={color}/>
      <path d="M14 14L22 22M30 14L22 22M22 22L14 30M22 22L30 30M14 14L30 14M14 30L30 30" stroke={color} strokeWidth="1" opacity=".4"/>
    </svg>
  );
  if(id==='cloud') return (
    <svg width={s} height={s} viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill={color} opacity=".12"/>
      <path d="M14 26c-2 0-4-2-4-4s2-4 4-4c0-3 3-5 6-5s5 2 5 4c3-1 6 1 6 4s-3 5-6 5H14z" stroke={color} strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      <path d="M16 32l1-2M22 32l1-2M28 32l1-2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  return null;
}

// ─────────── Header (custom, not iOS large title) ───────────
function AppHeader({ title, subtitle, dark=false, right=null, onBack=null }){
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  return (
    <div style={{ padding:'calc(env(safe-area-inset-top, 0px) + 26px) 20px 14px', display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:12 }}>
      <div style={{ flex:1, minWidth:0 }}>
        {onBack && (
          <button onClick={onBack} style={{
            background:'transparent', border:'none', color:'var(--accent)',
            fontSize:13, padding:0, marginBottom:6, cursor:'pointer',
            display:'flex', alignItems:'center', gap:4, fontFamily:'Manrope',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            返回
          </button>
        )}
        {subtitle && (
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'var(--accent)', letterSpacing:1.4, marginBottom:4 }}>
            {subtitle}
          </div>
        )}
        <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:24, fontWeight:600, color:fg, letterSpacing:-.5, lineHeight:1.2 }}>
          {title}
        </div>
      </div>
      {right}
    </div>
  );
}

// ─────────── Tab bar ───────────
function TabBar({ tab, setTab, dark=false }){
  const tabs = [
    { id:'home', label:'首頁', icon:(c)=>(<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 10l8-7 8 7v8a2 2 0 01-2 2h-3v-6H8v6H5a2 2 0 01-2-2v-8z" stroke={c} strokeWidth="1.7" strokeLinejoin="round"/></svg>) },
    { id:'courses', label:'課程', icon:(c)=>(<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 5a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke={c} strokeWidth="1.7"/><path d="M7 8h8M7 11h8M7 14h5" stroke={c} strokeWidth="1.7" strokeLinecap="round"/></svg>) },
    { id:'practice', label:'練習', icon:(c)=>(<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke={c} strokeWidth="1.7"/><path d="M11 6v5l3 2" stroke={c} strokeWidth="1.7" strokeLinecap="round"/></svg>) },
    { id:'me', label:'我的', icon:(c)=>(<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.5" stroke={c} strokeWidth="1.7"/><path d="M4 19c0-3.5 3.5-6 7-6s7 2.5 7 6" stroke={c} strokeWidth="1.7" strokeLinecap="round"/></svg>) },
  ];

  const bg = dark?'rgba(20,22,18,.85)':'rgba(250,250,247,.92)';
  const border = dark?'rgba(255,255,255,.06)':'rgba(0,0,0,.06)';
  const muted = dark?'#74766E':'#9C9C8F';
  const active = 'var(--accent)';

  return (
    <div style={{
      position:'absolute', left:8, right:8, bottom:'calc(env(safe-area-inset-bottom, 0px) + 12px)', height:64,
      background:bg, backdropFilter:'blur(20px) saturate(180%)', WebkitBackdropFilter:'blur(20px) saturate(180%)',
      border:`1px solid ${border}`, borderRadius:24,
      display:'flex', alignItems:'center', padding:'0 6px',
      boxShadow: dark?'0 8px 24px rgba(0,0,0,.4)':'0 8px 24px rgba(15,22,20,.08)',
      zIndex:100,
    }}>
      {tabs.map(t=>{
        const isActive = tab===t.id;
        return (
          <button key={t.id} onClick={()=>setTab(t.id)}
            data-screen-label={t.label}
            style={{
              flex:1, background:'transparent', border:'none', cursor:'pointer',
              padding:'8px 4px', display:'flex', flexDirection:'column', alignItems:'center', gap:2,
              color: isActive?active:muted,
              fontFamily:'Manrope, Noto Sans TC', fontSize:10, fontWeight:600,
            }}>
            <div style={{
              padding:'4px 14px', borderRadius:99,
              background: isActive?'var(--accent-soft)':'transparent',
              transition:'all .2s',
            }}>
              {t.icon(isActive?active:muted)}
            </div>
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

// ─────────── Home screen ───────────
function HomeScreen({ dark, openCourse, openTool, streak, showStreak }){
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';

  return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader
        dark={dark}
        subtitle="2026 / 06 / 06 · FRI"
        title={<>解開生命的密碼 🧬<br/>從一段 DNA 開始</>}
        right={
          showStreak && (
            <div style={{
              padding:'10px 14px', borderRadius:14,
              background: dark?'rgba(255,165,50,.08)':'rgba(234,165,50,.12)',
              border: `1px solid ${dark?'rgba(255,165,50,.18)':'rgba(234,165,50,.3)'}`,
              display:'flex', alignItems:'center', gap:8,
            }}>
              <span style={{ fontSize:18 }}>🔥</span>
              <div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:muted, letterSpacing:.8 }}>STREAK</div>
                <div style={{ fontFamily:'Space Grotesk', fontWeight:700, fontSize:16, color:fg }}>{streak}天</div>
              </div>
            </div>
          )
        }
      />

      {/* Today's challenge */}
      <div style={{ padding:'0 20px', marginTop:8 }}>
        <div onClick={()=>openTool('quiz')} style={{
          borderRadius:20, padding:'18px 18px 16px',
          background:'linear-gradient(135deg, var(--accent) 0%, #6CD0A5 120%)',
          color:'#fff', position:'relative', overflow:'hidden',
          cursor:'pointer',
          boxShadow:'0 8px 24px rgba(14,147,132,.25)',
        }}>
          {/* deco helix */}
          <svg width="120" height="160" viewBox="0 0 120 160" style={{ position:'absolute', right:-20, top:-10, opacity:.18 }}>
            <path d="M20 10c0 30 80 30 80 60s-80 30-80 60" stroke="#fff" strokeWidth="2" fill="none"/>
            <path d="M100 10c0 30-80 30-80 60s80 30 80 60" stroke="#fff" strokeWidth="2" fill="none"/>
            {[0,25,50,75,100,125].map((y,i)=>(
              <line key={i} x1="22" y1={20+y} x2="98" y2={20+y} stroke="#fff" strokeWidth="1.5"/>
            ))}
          </svg>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:1.4, opacity:.8 }}>
            DAILY · 跨章節 8 題
          </div>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:22, fontWeight:600, marginTop:6, letterSpacing:-.3 }}>
            今日挑戰
          </div>
          <div style={{ fontFamily:'Noto Sans TC, Manrope', fontSize:13, opacity:.92, marginTop:4 }}>
            轉錄、轉譯、BLAST 顯著性
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginTop:14 }}>
            <div style={{
              padding:'6px 12px', background:'rgba(255,255,255,.2)', borderRadius:99,
              fontSize:12, fontWeight:600, backdropFilter:'blur(8px)',
            }}>＋ 30 XP</div>
            <div style={{
              padding:'6px 12px', background:'rgba(255,255,255,.2)', borderRadius:99,
              fontSize:12, fontWeight:600, backdropFilter:'blur(8px)',
            }}>3 分鐘</div>
          </div>
        </div>
      </div>

      {/* Continue learning */}
      <div style={{ padding:'24px 20px 0' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:10 }}>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg }}>繼續學習</div>
          <div style={{ fontSize:12, color:'var(--accent)', cursor:'pointer' }}>全部 →</div>
        </div>

        <div onClick={()=>openCourse('dna')} style={{
          background:surf, borderRadius:18, padding:14,
          border:`1px solid ${line}`,
          display:'flex', gap:12, alignItems:'center', cursor:'pointer',
        }}>
          <CourseGlyph id="dna" color="#0E9384" size={52}/>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg }}>
              DNA · RNA · 蛋白質
            </div>
            <div style={{ fontSize:12, color:muted, marginTop:2, marginBottom:8 }}>
              Lesson 7 · 反向互補練習
            </div>
            <ProgressBar pct={0.72} color="var(--accent)" track={dark?'rgba(255,255,255,.08)':'rgba(0,0,0,.06)'} height={5}/>
          </div>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:13, color:fg, fontWeight:700 }}>72%</div>
        </div>
      </div>

      {/* Quick tools */}
      <div style={{ padding:'24px 20px 0' }}>
        <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>
          快速工具
        </div>

        {/* BLAST featured card */}
        <div onClick={()=>openTool('blast')} style={{
          background:'linear-gradient(135deg, #233040 0%, #0F1A24 100%)',
          color:'#fff', borderRadius:16, padding:'14px 16px', marginBottom:10,
          cursor:'pointer', position:'relative', overflow:'hidden',
          display:'flex', alignItems:'center', gap:14,
        }}>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="18" cy="18" r="13" stroke="#6CD0A5" strokeWidth="2"/>
            <path d="M28 28l8 8" stroke="#6CD0A5" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="14" cy="16" r="1.5" fill="#6CD0A5"/>
            <circle cx="22" cy="14" r="1.5" fill="#6CD0A5"/>
            <circle cx="18" cy="22" r="1.5" fill="#6CD0A5"/>
            <path d="M14 16l8-2M14 16l4 6M22 14l-4 8" stroke="#6CD0A5" strokeWidth=".8" opacity=".6"/>
          </svg>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:1.2, opacity:.65, color:'#6CD0A5' }}>
              FEATURED · BLAST
            </div>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:16, marginTop:2 }}>
              BLAST 模擬搜尋
            </div>
            <div style={{ fontSize:11, opacity:.75, marginTop:2, fontFamily:'Noto Sans TC' }}>
              query → 掃描資料庫 → 看 E-value 排序
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 2l6 6-6 6" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" opacity=".5"/></svg>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
          <ToolCard dark={dark} onClick={()=>openTool('aligner')}
            icon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="5" width="4" height="4" rx="1" fill="#0E9384"/><rect x="9" y="5" width="4" height="4" rx="1" fill="#0E9384" opacity=".4"/><rect x="15" y="5" width="4" height="4" rx="1" fill="#0E9384"/><rect x="3" y="13" width="4" height="4" rx="1" fill="#0E9384"/><rect x="9" y="13" width="4" height="4" rx="1" fill="#0E9384" opacity=".4"/><rect x="15" y="13" width="4" height="4" rx="1" fill="#0E9384"/></svg>}
            title="序列比對" sub="互動式 NW 動畫"/>
          <ToolCard dark={dark} onClick={()=>openTool('cards')}
            icon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="4" width="14" height="14" rx="3" stroke="#EAA532" strokeWidth="1.7"/><rect x="5" y="2" width="14" height="14" rx="3" fill="#EAA532" opacity=".15"/></svg>}
            title="單字卡" sub={`${FLASHCARDS_FULL.length} 個生資術語`}/>
          <ToolCard dark={dark} onClick={()=>openTool('quiz')}
            icon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="#4F94D8" strokeWidth="1.7"/><path d="M8 9a3 3 0 116 0c0 1.5-3 1.5-3 3M11 16v.5" stroke="#4F94D8" strokeWidth="1.7" strokeLinecap="round"/></svg>}
            title="小測驗" sub="即時解析"/>
          <ToolCard dark={dark} onClick={()=>openTool('codon')}
            icon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2v8M11 12v8M2 11h8M12 11h8" stroke="#9C77C7" strokeWidth="1.7" strokeLinecap="round"/><circle cx="11" cy="11" r="2" fill="#9C77C7"/></svg>}
            title="密碼子表" sub="64 種對應"/>
        </div>
      </div>

      {/* Weekly streak grid */}
      <div style={{ padding:'24px 20px 0' }}>
        <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>
          本週活躍
        </div>
        <div style={{
          background:surf, borderRadius:18, padding:'16px 18px',
          border:`1px solid ${line}`,
        }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:6 }}>
            {['一','二','三','四','五','六','日'].map((d,i)=>{
              const vals = [0.8, 1, 0.6, 0.9, 1, 0.4, 0];
              const v = vals[i];
              const isToday = i===0;
              return (
                <div key={d} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6, flex:1 }}>
                  <div style={{
                    width:'100%', height:60, background:dark?'rgba(255,255,255,.04)':'rgba(0,0,0,.04)',
                    borderRadius:8, position:'relative', overflow:'hidden',
                  }}>
                    <div style={{
                      position:'absolute', bottom:0, left:0, right:0,
                      height: `${v*100}%`,
                      background: isToday?'var(--accent)':dark?'rgba(108,208,165,.4)':'#B8E2D7',
                      borderRadius:'0 0 8px 8px',
                    }}/>
                  </div>
                  <div style={{ fontSize:10, color:isToday?'var(--accent)':muted, fontWeight:isToday?700:500, fontFamily:'Noto Sans TC' }}>{d}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolCard({ icon, title, sub, onClick, dark }){
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';
  return (
    <div onClick={onClick} style={{
      background:surf, borderRadius:16, padding:14,
      border:`1px solid ${line}`, cursor:'pointer',
    }}>
      <div style={{ marginBottom:10 }}>{icon}</div>
      <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:14, color:fg }}>{title}</div>
      <div style={{ fontSize:11, color:muted, marginTop:2, fontFamily:'Noto Sans TC, Manrope' }}>{sub}</div>
    </div>
  );
}

// ─────────── Courses screen ───────────
function CoursesScreen({ dark, openCourse }){
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';

  const totalLessons = COURSES.reduce((s,c)=>s+c.lessons, 0);

  return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark} subtitle={`${COURSES.length} 章 · ${totalLessons} 小節`} title="課程地圖"/>

      {/* overall progress strip */}
      <div style={{ padding:'0 20px', marginBottom:18 }}>
        <div style={{
          background:surf, borderRadius:16, padding:14,
          border:`1px solid ${line}`,
          display:'flex', alignItems:'center', gap:12,
        }}>
          <ProgressRing
            pct={COURSES.reduce((s,c)=>s+c.progress,0)/COURSES.length}
            size={42} stroke={5} color="var(--accent)"
            track={dark?'rgba(255,255,255,.08)':'rgba(0,0,0,.06)'}/>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, letterSpacing:1.2 }}>OVERALL</div>
            <div style={{ fontFamily:'Space Grotesk', fontSize:16, fontWeight:600, color:fg, lineHeight:1.2 }}>
              整體進度 {Math.round(COURSES.reduce((s,c)=>s+c.progress,0)/COURSES.length*100)}%
            </div>
          </div>
          <div style={{
            padding:'5px 9px', borderRadius:99,
            background: dark?'rgba(255,165,50,.12)':'#FFF1DE',
            color: dark?'#F2C97A':'#945910',
            fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700, letterSpacing:.4,
          }}>🔥 7</div>
        </div>
      </div>

      {/* grouped courses */}
      {COURSE_GROUPS.map((g, gi)=>{
        const items = COURSES.filter(c=>c.group===g.id);
        if(!items.length) return null;
        return (
          <div key={g.id} style={{ marginBottom: gi===COURSE_GROUPS.length-1 ? 0 : 22 }}>
            <div style={{ padding:'0 20px', marginBottom:10, display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
              <div style={{ display:'flex', alignItems:'baseline', gap:8 }}>
                <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg }}>{g.label}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, letterSpacing:1 }}>{g.en}</div>
              </div>
              <div style={{ fontSize:11, color:muted, fontFamily:"'JetBrains Mono',monospace" }}>{items.length}</div>
            </div>

            <div style={{ padding:'0 20px', display:'flex', flexDirection:'column', gap:8 }}>
              {items.map(c=>(
                <div key={c.id} onClick={()=>!c.locked && openCourse(c.id)} style={{
                  background:surf, borderRadius:16, padding:12,
                  border:`1px solid ${line}`, display:'flex', gap:12, alignItems:'center',
                  cursor: c.locked?'default':'pointer', opacity:c.locked?.55:1,
                  position:'relative', overflow:'hidden',
                }}>
                  <CourseGlyph id={c.icon} color={c.color} size={44}/>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                      <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:14, color:fg, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{c.title}</div>
                      {c.locked && <span style={{
                        fontSize:9, fontFamily:"'JetBrains Mono',monospace",
                        padding:'2px 5px', background:dark?'#2A2D29':'#EFEDE6', color:muted,
                        borderRadius:4, letterSpacing:.5, flexShrink:0,
                      }}>LOCKED</span>}
                      {c.progress===1 && <span style={{
                        fontSize:9, fontFamily:"'JetBrains Mono',monospace",
                        padding:'2px 5px', background:'var(--accent-soft)', color:'var(--accent-ink)',
                        borderRadius:4, letterSpacing:.5, flexShrink:0,
                      }}>✓ 完成</span>}
                    </div>
                    <div style={{ fontSize:11, color:muted, marginTop:2, fontFamily:"'JetBrains Mono',monospace", letterSpacing:.5 }}>
                      {c.sub.toUpperCase()} · {c.lessons} 小節
                    </div>
                    <div style={{ marginTop:7 }}>
                      <ProgressBar pct={c.progress} color={c.color} track={dark?'rgba(255,255,255,.08)':'rgba(0,0,0,.06)'} height={3}/>
                    </div>
                  </div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:fg, fontWeight:700, minWidth:32, textAlign:'right' }}>
                    {Math.round(c.progress*100)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─────────── Lesson detail ───────────
function LessonDetailScreen({ dark, courseId, onBack, openTool, openReading }){
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';
  const c = COURSES.find(x=>x.id===courseId) || COURSES[0];
  const units = c.units || [];

  return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark} subtitle={c.sub.toUpperCase()} title={c.title} onBack={onBack}/>

      {/* progress hero */}
      <div style={{ padding:'0 20px' }}>
        <div style={{
          background: surf, borderRadius:20, padding:'18px',
          border:`1px solid ${line}`,
          display:'flex', alignItems:'center', gap:14,
        }}>
          <ProgressRing pct={c.progress} size={62} stroke={6} color={c.color}
            track={dark?'rgba(255,255,255,.08)':'rgba(0,0,0,.06)'}/>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:1.2, color:muted }}>PROGRESS</div>
            <div style={{ fontFamily:'Space Grotesk', fontSize:22, fontWeight:600, color:fg, lineHeight:1.1 }}>
              {Math.round(c.progress*100)}% <span style={{ fontSize:13, color:muted, fontWeight:500 }}>完成</span>
            </div>
            <div style={{ fontSize:12, color:muted, marginTop:4, fontFamily:'Noto Sans TC' }}>
              再學 {Math.max(1, Math.ceil(c.lessons*(1-c.progress)))} 小節即可獲得章節徽章
            </div>
          </div>
        </div>
      </div>

      {/* mini lesson preview: 中心法則 */}
      {c.id==='dna' && (
        <div style={{ padding:'20px 20px 0' }}>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>
            重點預覽 · 中心法則
          </div>
          <div style={{
            background:surf, borderRadius:18, padding:16,
            border:`1px solid ${line}`,
          }}>
            <CentralDogmaViz dark={dark}/>
            <div style={{ fontSize:13, color:muted, marginTop:14, lineHeight:1.6, fontFamily:'Noto Sans TC' }}>
              遺傳資訊由 <b style={{ color:fg }}>DNA</b> 透過<b style={{ color:fg }}>轉錄</b>產生 RNA，
              再經由<b style={{ color:fg }}>轉譯</b>合成蛋白質。這條路徑稱為「中心法則」。
            </div>
          </div>
        </div>
      )}

      {c.id==='aln' && (
        <div style={{ padding:'20px 20px 0' }}>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>
            動手試試
          </div>
          <SequenceAligner dark={dark}/>
        </div>
      )}

      {c.id==='protein' && (
        <div style={{ padding:'20px 20px 0' }}>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>
            重點預覽 · 二級結構
          </div>
          <ProteinPreview dark={dark}/>
        </div>
      )}

      {c.id==='rnaseq' && (
        <div style={{ padding:'20px 20px 0' }}>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>
            重點預覽 · 火山圖
          </div>
          <VolcanoPreview dark={dark}/>
        </div>
      )}

      {c.id==='phy' && (
        <div style={{ padding:'20px 20px 0' }}>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>
            重點預覽 · 系統發生樹
          </div>
          <TreePreview dark={dark}/>
        </div>
      )}

      {c.id==='py' && (
        <div style={{ padding:'20px 20px 0' }}>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>
            程式範例 · 讀取 FASTA
          </div>
          <CodePreview dark={dark}/>
        </div>
      )}

      {c.id==='ngs' && (
        <div style={{ padding:'20px 20px 0' }}>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>
            重點預覽 · Reads 覆蓋
          </div>
          <CoveragePreview dark={dark}/>
        </div>
      )}

      {c.id==='sc' && (
        <div style={{ padding:'20px 20px 0' }}>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>
            重點預覽 · UMAP 分群
          </div>
          <UMAPPreview dark={dark}/>
        </div>
      )}

      {/* unit list */}
      {units.length>0 && (
        <div style={{ padding:'20px 20px 0' }}>
          <div style={{
            display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:10,
          }}>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg }}>
              小節
            </div>
            {LESSON_CONTENT[c.id] && (
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'var(--accent)', letterSpacing:1, fontWeight:600 }}>
                FULL TEXT ✓
              </div>
            )}
          </div>
          <div style={{
            background:surf, borderRadius:18,
            border:`1px solid ${line}`, overflow:'hidden',
          }}>
            {units.map((u,i)=>{
              const hasReading = !!(LESSON_CONTENT[c.id] && LESSON_CONTENT[c.id].units[i]);
              return (
                <div key={i}
                  onClick={()=>hasReading && openReading && openReading(c.id, i)}
                  style={{
                    display:'flex', alignItems:'center', padding:'14px 16px', gap:12,
                    borderBottom: i<units.length-1?`1px solid ${line}`:'none',
                    cursor: hasReading?'pointer':'default',
                    background: u.active?(dark?'rgba(14,147,132,.08)':'var(--accent-soft)'):'transparent',
                    opacity: hasReading?1:.6,
                  }}>
                  <div style={{
                    width:24, height:24, borderRadius:'50%', flexShrink:0,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    background: u.done? c.color : u.active?'var(--accent)':dark?'#2A2D29':'#EFEDE6',
                    color: u.done||u.active?'#fff':muted,
                    fontSize:11, fontWeight:700, fontFamily:"'JetBrains Mono',monospace",
                  }}>
                    {u.done? <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5l2.5 2.5 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> : i+1}
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:14, color:fg, fontWeight:u.active?600:500, fontFamily:'Noto Sans TC, Manrope' }}>{u.title}</div>
                    {u.active && <div style={{ fontSize:11, color:'var(--accent)', marginTop:2, fontFamily:"'JetBrains Mono',monospace", letterSpacing:.4 }}>IN PROGRESS</div>}
                    {!hasReading && !u.active && (
                      <div style={{ fontSize:10, color:muted, marginTop:2, fontFamily:"'JetBrains Mono',monospace", letterSpacing:.4 }}>編寫中</div>
                    )}
                  </div>
                  {hasReading && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke={muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function CentralDogmaViz({ dark }){
  const muted = dark?'#9E9C90':'#707974';
  const fg = dark?'#F0EEE5':'#0F1614';
  return (
    <div>
      <div style={{ display:'flex', alignItems:'center', gap:6, fontFamily:'Manrope, Noto Sans TC' }}>
        <Bubble title="DNA" sub="雙股" color="#0E9384" dark={dark}/>
        <Arrow label="轉錄" dark={dark}/>
        <Bubble title="RNA" sub="單股" color="#9C77C7" dark={dark}/>
        <Arrow label="轉譯" dark={dark}/>
        <Bubble title="蛋白質" sub="多肽" color="#EAA532" dark={dark}/>
      </div>
      <div style={{
        marginTop:12, padding:'8px 10px',
        background: dark?'#14160E':'#F6F4EC', borderRadius:10,
        fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:muted, letterSpacing:.6,
        textAlign:'center',
      }}>
        ATGCGT ─▶ AUGCGU ─▶ Met-Arg
      </div>
    </div>
  );
}

function Bubble({ title, sub, color, dark }){
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  return (
    <div style={{
      flex:1, padding:'10px 4px', borderRadius:12, textAlign:'center',
      background: color+'1F',
      border:`1px solid ${color}33`,
    }}>
      <div style={{ fontFamily:'Space Grotesk', fontSize:13, fontWeight:700, color }}>{title}</div>
      <div style={{ fontSize:10, color:muted, fontFamily:'Noto Sans TC' }}>{sub}</div>
    </div>
  );
}

function Arrow({ label, dark }){
  const muted = dark?'#9E9C90':'#707974';
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0, padding:'0 2px' }}>
      <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
        <path d="M2 5h17M14 1l5 4-5 4" stroke={muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div style={{ fontSize:9, color:muted, marginTop:3, fontFamily:'Noto Sans TC' }}>{label}</div>
    </div>
  );
}

// ─────────── Practice hub ───────────
function PracticeScreen({ dark, openTool }){
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';

  const [seg, setSeg] = React.useState('tools'); // tools | tests

  // Tool cards
  const tools = [
    { id:'aligner', title:'序列比對', sub:'NW 動畫', icon:'⇌', col:'#0E9384' },
    { id:'gc',      title:'GC 含量計算', sub:'GC / AT / Tm', icon:'🧪', col:'#4FB37E' },
    { id:'revcomp', title:'反向互補',     sub:'步驟拆解',     icon:'⇄', col:'#4F94D8' },
    { id:'translate', title:'密碼子翻譯', sub:'6 frame ORF',  icon:'🧬', col:'#9C77C7' },
    { id:'tm',      title:'Tm 計算',     sub:'引子設計',     icon:'🌡', col:'#EAA532' },
    { id:'codon',   title:'密碼子表',    sub:'64 → 20',     icon:'📊', col:'#EAA532' },
    { id:'hwe',     title:'HWE 計算',    sub:'p² + 2pq + q²', icon:'∑', col:'#A5318D' },
    { id:'cards',   title:'單字卡',      sub:`${FLASHCARDS_FULL.length} 張`, icon:'🃏', col:'#0E9384' },
  ];

  return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark}
        subtitle={seg==='tools' ? `${tools.length+2} INTERACTIVE TOOLS` : `${QUIZ_BANK.length} 題 · ${new Set(QUIZ_BANK.map(q=>q.course)).size} 章節`}
        title="練習"/>

      {/* segment switcher */}
      <div style={{ padding:'0 20px', marginBottom:16 }}>
        <div style={{
          display:'flex', background:dark?'#14160E':'#EFEDE6',
          borderRadius:12, padding:3, gap:2,
        }}>
          {[
            { id:'tools', label:'互動工具', n:tools.length+2 },
            { id:'tests', label:'測驗',     n:QUIZ_BANK.length },
          ].map(s=>{
            const on = s.id===seg;
            return (
              <button key={s.id} onClick={()=>setSeg(s.id)} style={{
                flex:1, padding:'9px 4px', borderRadius:10, border:'none',
                background: on ? (dark?'#1E211D':'#fff') : 'transparent',
                color: on ? fg : muted,
                fontFamily:'Manrope, Noto Sans TC', fontSize:13, fontWeight:600,
                cursor:'pointer', transition:'all .2s',
                boxShadow: on ? (dark?'0 1px 3px rgba(0,0,0,.4)':'0 1px 3px rgba(0,0,0,.08)') : 'none',
                display:'flex', alignItems:'center', justifyContent:'center', gap:6,
              }}>
                {s.label}
                <span style={{
                  fontFamily:"'JetBrains Mono',monospace", fontSize:10.5,
                  color: on?'var(--accent)':muted, fontWeight:700,
                }}>{s.n}</span>
              </button>
            );
          })}
        </div>
      </div>

      {seg==='tools' && (
        <div style={{ padding:'0 20px' }}>
          {/* BLAST featured */}
          <div onClick={()=>openTool('blast')} style={{
            background:'linear-gradient(135deg, #233040 0%, #0F1A24 100%)',
            color:'#fff', borderRadius:16, padding:'14px 16px', marginBottom:12,
            cursor:'pointer', position:'relative', overflow:'hidden',
            display:'flex', alignItems:'center', gap:14,
            boxShadow:'0 8px 24px rgba(15,26,36,.25)',
          }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <circle cx="18" cy="18" r="13" stroke="#6CD0A5" strokeWidth="2"/>
              <path d="M28 28l8 8" stroke="#6CD0A5" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="14" cy="16" r="1.5" fill="#6CD0A5"/>
              <circle cx="22" cy="14" r="1.5" fill="#6CD0A5"/>
              <circle cx="18" cy="22" r="1.5" fill="#6CD0A5"/>
            </svg>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:1.2, color:'#6CD0A5' }}>
                FEATURED · BLAST
              </div>
              <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:16, marginTop:2 }}>
                BLAST 模擬搜尋
              </div>
              <div style={{ fontSize:11, opacity:.75, marginTop:2, fontFamily:'Noto Sans TC' }}>
                4 個 query 預設 · 掃描動畫 · 結果剖析
              </div>
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 2l6 6-6 6" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" opacity=".5"/></svg>
          </div>

          {/* tools grid */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
            {tools.map(t=>(
              <div key={t.id} onClick={()=>openTool(t.id)} style={{
                background:surf, borderRadius:14, padding:'12px 12px',
                border:`1px solid ${line}`, cursor:'pointer',
                display:'flex', flexDirection:'column', gap:8,
                borderLeft:`3px solid ${t.col}`,
              }}>
                <div style={{ fontSize:22 }}>{t.icon}</div>
                <div>
                  <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:13.5, color:fg, lineHeight:1.2 }}>{t.title}</div>
                  <div style={{ fontSize:11, color:muted, marginTop:2, fontFamily:"'JetBrains Mono',monospace", letterSpacing:.4 }}>{t.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* secondary actions */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginTop:16 }}>
            <button onClick={()=>openTool('bookmarks')} style={{
              padding:'12px 14px', borderRadius:14, background:surf, border:`1px solid ${line}`,
              cursor:'pointer', textAlign:'left',
              display:'flex', alignItems:'center', gap:10, fontFamily:'Manrope, Noto Sans TC',
            }}>
              <span style={{ fontSize:20 }}>📌</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:600, color:fg }}>我的收藏</div>
                <div style={{ fontSize:10.5, color:muted, marginTop:1, fontFamily:"'JetBrains Mono',monospace" }}>單字卡 + 小節</div>
              </div>
            </button>
            <button onClick={()=>openTool('review')} style={{
              padding:'12px 14px', borderRadius:14, background:surf, border:`1px solid ${line}`,
              cursor:'pointer', textAlign:'left',
              display:'flex', alignItems:'center', gap:10, fontFamily:'Manrope, Noto Sans TC',
            }}>
              <span style={{ fontSize:20 }}>🔁</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:600, color:fg }}>今日複習</div>
                <div style={{ fontSize:10.5, color:muted, marginTop:1, fontFamily:"'JetBrains Mono',monospace" }}>SRS 間隔重複</div>
              </div>
            </button>
          </div>
        </div>
      )}

      {seg==='tests' && (
        <div style={{ padding:'0 20px' }}>
          {/* big quiz card */}
          <div onClick={()=>openTool('quiz')} style={{
            background:'linear-gradient(135deg, #4F94D8, #6BB9F0)', color:'#fff',
            borderRadius:20, padding:18, marginBottom:10, position:'relative', overflow:'hidden', cursor:'pointer',
            boxShadow:'0 8px 24px rgba(79,148,216,.25)',
          }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:1.4, opacity:.85 }}>QUIZ · 跨章節混合</div>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:22, fontWeight:600, marginTop:4 }}>今日小測</div>
            <div style={{ fontSize:13, opacity:.92, marginTop:4, fontFamily:'Noto Sans TC' }}>
              從各章節各挑一題，3 分鐘完成
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:14 }}>
              <div style={{ padding:'6px 10px', background:'rgba(255,255,255,.22)', borderRadius:99, fontSize:11, fontWeight:600 }}>＋ 30 XP</div>
              <div style={{ padding:'6px 10px', background:'rgba(255,255,255,.22)', borderRadius:99, fontSize:11, fontWeight:600 }}>連勝 +1</div>
            </div>
            <div style={{ position:'absolute', right:-10, bottom:-30, fontSize:140, opacity:.12 }}>🎯</div>
          </div>

          {/* final exam */}
          <div onClick={()=>openTool('quiz:final')} style={{
            background:'linear-gradient(135deg, #A5318D, #D076B7)', color:'#fff',
            borderRadius:16, padding:'14px 16px', marginBottom:18, cursor:'pointer',
            display:'flex', alignItems:'center', gap:14, position:'relative', overflow:'hidden',
            boxShadow:'0 6px 18px rgba(165,49,141,.2)',
          }}>
            <div style={{ fontSize:30 }}>🏆</div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:1.3, opacity:.85 }}>FINAL EXAM</div>
              <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, marginTop:2 }}>期末總測</div>
              <div style={{ fontSize:11.5, opacity:.92, marginTop:1, fontFamily:'Noto Sans TC' }}>20 題隨機混合 · 全 13 章節</div>
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 2l6 6-6 6" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" opacity=".5"/></svg>
          </div>

          {/* chapter quizzes */}
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:10 }}>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg }}>依章節小測</div>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:muted, letterSpacing:1 }}>
              {new Set(QUIZ_BANK.map(q=>q.course)).size} 章
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
            {COURSES.map(c=>{
              const n = QUIZ_BANK.filter(q=>q.course===c.id).length;
              if(n===0) return null;
              return (
                <div key={c.id} onClick={()=>openTool(`quiz:${c.id}`)} style={{
                  background:surf, borderRadius:14, padding:12,
                  border:`1px solid ${line}`, borderLeft:`3px solid ${c.color}`,
                  cursor:'pointer',
                  display:'flex', flexDirection:'column', gap:6,
                }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:12.5, fontWeight:600, color:fg, lineHeight:1.2 }}>{c.title}</div>
                    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:c.color, fontWeight:700 }}>{n}題</div>
                  </div>
                  <div style={{ fontSize:10, color:muted, fontFamily:"'JetBrains Mono',monospace", letterSpacing:.4 }}>
                    {c.sub.toUpperCase()}
                  </div>
                </div>
              );
            })}
          </div>

          {/* hint */}
          <div style={{
            marginTop:18, padding:'12px 14px', borderRadius:12,
            background:dark?'#14160E':'#F6F4EC', border:`1px dashed ${line}`,
            fontSize:11.5, color:muted, fontFamily:'Noto Sans TC', lineHeight:1.6,
          }}>
            <b style={{ color:fg }}>提示</b>　每題答完都有解析。錯題不會降低 XP，只計算正確答對的題數。
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────── Tool screens (full) ───────────
function ToolScreen({ dark, tool, onBack, openReading }){
  const fg = dark?'#F0EEE5':'#0F1614';
  if(tool==='quiz' || (tool && tool.startsWith('quiz:'))) {
    const courseId = tool && tool.startsWith('quiz:') ? tool.slice(5) : null;
    const isFinal = courseId === 'final';
    const courseName = courseId && !isFinal ? (COURSES.find(c=>c.id===courseId)?.title) : null;
    return (
      <div style={{ padding:'0 0 100px' }}>
        <AppHeader dark={dark}
          subtitle={isFinal ? 'FINAL EXAM · 20 隨機題' : courseId ? `QUIZ · ${courseName?.toUpperCase()}` : `QUIZ · 跨章節混合`}
          title={isFinal ? '期末總測' : courseId ? courseName + ' 小測' : '今日小測'}
          onBack={onBack}/>
        <div style={{ padding:'0 20px' }}>
          <QuizCard dark={dark} courseId={courseId}/>
        </div>
      </div>
    );
  }
  if(tool==='gc') return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark} subtitle="GC CONTENT CALCULATOR" title="GC 含量計算" onBack={onBack}/>
      <div style={{ padding:'0 20px' }}><GCCalculator dark={dark}/></div>
    </div>
  );
  if(tool==='revcomp') return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark} subtitle="REVERSE COMPLEMENT" title="反向互補" onBack={onBack}/>
      <div style={{ padding:'0 20px' }}><RevCompTool dark={dark}/></div>
    </div>
  );
  if(tool==='translate') return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark} subtitle="CODON TRANSLATOR · 6 FRAMES" title="密碼子翻譯" onBack={onBack}/>
      <div style={{ padding:'0 20px' }}><CodonTranslator dark={dark}/></div>
    </div>
  );
  if(tool==='tm') return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark} subtitle="MELTING TEMPERATURE" title="Tm 計算" onBack={onBack}/>
      <div style={{ padding:'0 20px' }}><TmCalculator dark={dark}/></div>
    </div>
  );
  if(tool==='hwe') return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark} subtitle="HARDY-WEINBERG" title="HWE 平衡計算" onBack={onBack}/>
      <div style={{ padding:'0 20px' }}><HWECalculator dark={dark}/></div>
    </div>
  );
  if(tool==='cards') {
    const total = (typeof FLASHCARDS_FULL !== 'undefined' ? FLASHCARDS_FULL : FLASHCARDS).length;
    return (
      <div style={{ padding:'0 0 100px' }}>
        <AppHeader dark={dark} subtitle={`FLASHCARDS · ${total} TERMS`} title="單字卡" onBack={onBack}/>
        <div style={{ padding:'0 20px' }}>
          <FlashCardDeck dark={dark} openReading={openReading}/>
        </div>
      </div>
    );
  }
  if(tool==='aligner') return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark} subtitle="SEQUENCE ALIGNMENT" title="序列比對" onBack={onBack}/>
      <div style={{ padding:'0 20px' }}>
        <SequenceAligner dark={dark}/>
        <div style={{
          marginTop:14, padding:14, borderRadius:14,
          background: dark?'#1E211D':'#fff', border:`1px solid ${dark?'#2A2D29':'#E5E2D9'}`,
          fontSize:12, color:dark?'#9E9C90':'#707974', lineHeight:1.6, fontFamily:'Noto Sans TC',
        }}>
          <b style={{ color:fg }}>提示</b>　動畫展示 Needleman-Wunsch 全域比對如何逐欄決定對齊：
          綠色短條代表「相符」、紅點代表「錯配」、灰線代表「插入空位 (gap)」。
        </div>
      </div>
    </div>
  );
  if(tool==='blast') return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark} subtitle="BLAST · NUCLEOTIDE SEARCH" title="BLAST 模擬" onBack={onBack}/>
      <div style={{ padding:'0 20px' }}>
        <BlastTool dark={dark}/>
        <div style={{
          marginTop:14, padding:14, borderRadius:14,
          background: dark?'#1E211D':'#fff', border:`1px solid ${dark?'#2A2D29':'#E5E2D9'}`,
          fontSize:12, color:dark?'#9E9C90':'#707974', lineHeight:1.6, fontFamily:'Noto Sans TC',
        }}>
          <b style={{ color:fg }}>怎麼讀 BLAST 結果？</b><br/>
          <b style={{ color:'var(--accent)' }}>Bit score</b> 越高越好；<b style={{ color:'var(--accent)' }}>E-value</b> 越小越顯著。
          一般以 E &lt; 1e-5 視為同源 hit。Identity 是逐位對齊的相同比例；Coverage 是 query 被對到的覆蓋比例。
        </div>
      </div>
    </div>
  );
  if(tool==='codon') return <CodonTable dark={dark} onBack={onBack}/>;
  if(tool==='bookmarks') return <BookmarksScreen dark={dark} onBack={onBack} openReading={openReading} openTool={(t)=>onBack && onBack()}/>;
  if(tool==='review')    return <ReviewScreen dark={dark} onBack={onBack} openTool={(t)=>onBack && onBack()}/>;
  return null;
}

// ─────────── Codon Table ───────────
const CODONS = {
  // first letter U/C/A/G
  // simplified one-letter
  'UUU':'F','UUC':'F','UUA':'L','UUG':'L',
  'UCU':'S','UCC':'S','UCA':'S','UCG':'S',
  'UAU':'Y','UAC':'Y','UAA':'*','UAG':'*',
  'UGU':'C','UGC':'C','UGA':'*','UGG':'W',
  'CUU':'L','CUC':'L','CUA':'L','CUG':'L',
  'CCU':'P','CCC':'P','CCA':'P','CCG':'P',
  'CAU':'H','CAC':'H','CAA':'Q','CAG':'Q',
  'CGU':'R','CGC':'R','CGA':'R','CGG':'R',
  'AUU':'I','AUC':'I','AUA':'I','AUG':'M',
  'ACU':'T','ACC':'T','ACA':'T','ACG':'T',
  'AAU':'N','AAC':'N','AAA':'K','AAG':'K',
  'AGU':'S','AGC':'S','AGA':'R','AGG':'R',
  'GUU':'V','GUC':'V','GUA':'V','GUG':'V',
  'GCU':'A','GCC':'A','GCA':'A','GCG':'A',
  'GAU':'D','GAC':'D','GAA':'E','GAG':'E',
  'GGU':'G','GGC':'G','GGA':'G','GGG':'G',
};
const AA_COLOR = {
  F:'#E0B848', L:'#E0B848', I:'#E0B848', M:'#E0B848', V:'#E0B848', A:'#E0B848', W:'#E0B848', P:'#E0B848', G:'#E0B848', Y:'#E0B848',
  S:'#4FB37E', T:'#4FB37E', C:'#4FB37E', N:'#4FB37E', Q:'#4FB37E',
  K:'#4F94D8', R:'#4F94D8', H:'#4F94D8',
  D:'#E25858', E:'#E25858',
  '*':'#707974',
};
function CodonTable({ dark, onBack }){
  const [selected, setSelected] = React.useState('AUG');
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';
  const bases = ['U','C','A','G'];
  return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark} subtitle="CODON TABLE · 64 → 20" title="密碼子表" onBack={onBack}/>
      <div style={{ padding:'0 20px' }}>
        <div style={{
          background:surf, borderRadius:18, padding:16, border:`1px solid ${line}`, marginBottom:14,
        }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:muted, letterSpacing:1, marginBottom:6 }}>
            SELECTED
          </div>
          <div style={{ display:'flex', alignItems:'baseline', gap:14 }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:34, fontWeight:700, color:fg, letterSpacing:2 }}>
              {selected}
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:'Space Grotesk', fontSize:14, fontWeight:600, color:fg }}>
                {AA_NAME[CODONS[selected]] || '?'} ({CODONS[selected]})
              </div>
              <div style={{ fontSize:11, color:muted, fontFamily:'Noto Sans TC' }}>
                {selected==='AUG'? '起始密碼子 · Methionine' : CODONS[selected]==='*'? '終止密碼子' : '一般密碼子'}
              </div>
            </div>
            <div style={{
              width:36, height:36, borderRadius:8,
              background: AA_COLOR[CODONS[selected]] || '#707974',
              color:'#fff', display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:"'JetBrains Mono',monospace", fontSize:18, fontWeight:700,
            }}>{CODONS[selected]}</div>
          </div>
        </div>

        <div style={{
          background:surf, borderRadius:18, padding:'12px 10px 14px', border:`1px solid ${line}`,
        }}>
          {bases.map(b1=>(
            <div key={b1} style={{ display:'grid', gridTemplateColumns:'24px repeat(4, 1fr)', gap:4, marginBottom:4 }}>
              <div style={{
                fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:muted,
                display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700,
              }}>{b1}</div>
              {bases.map(b2=>(
                <div key={b2} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2 }}>
                  {['U','C','A','G'].map(b3=>{
                    const codon = b1+b2+b3;
                    const aa = CODONS[codon];
                    const isSel = codon===selected;
                    return (
                      <div key={b3} onClick={()=>setSelected(codon)} style={{
                        padding:'6px 4px', borderRadius:6,
                        background: isSel ? AA_COLOR[aa] : (dark?'#14160E':'#F6F4EC'),
                        color: isSel ? '#fff' : fg,
                        textAlign:'center', cursor:'pointer',
                        fontFamily:"'JetBrains Mono',monospace", fontSize:9.5,
                        border:`1px solid ${isSel? AA_COLOR[aa]: 'transparent'}`,
                      }}>
                        <div style={{ fontWeight:700, letterSpacing:.5 }}>{codon}</div>
                        <div style={{
                          fontSize:9, marginTop:1,
                          color: isSel ? '#fff' : AA_COLOR[aa], fontWeight:700,
                        }}>{aa}</div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* legend */}
        <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginTop:14 }}>
          {[
            ['疏水','#E0B848'],['極性','#4FB37E'],['正電','#4F94D8'],['負電','#E25858'],['終止','#707974'],
          ].map(([t,c])=>(
            <div key={t} style={{ display:'flex', alignItems:'center', gap:6, fontSize:11, color:muted, fontFamily:'Noto Sans TC' }}>
              <span style={{ width:10, height:10, borderRadius:3, background:c }}/>{t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const AA_NAME = {
  F:'Phe',L:'Leu',I:'Ile',M:'Met',V:'Val',S:'Ser',P:'Pro',T:'Thr',A:'Ala',Y:'Tyr',
  H:'His',Q:'Gln',N:'Asn',K:'Lys',D:'Asp',E:'Glu',C:'Cys',W:'Trp',R:'Arg',G:'Gly','*':'STOP',
};

// ─────────── Profile screen ───────────
function ProfileScreen({ dark, streak, setStreak }){
  const fg = dark?'#F0EEE5':'#0F1614';
  const muted = dark?'#9E9C90':'#707974';
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';
  const stats = [
    { label:'總 XP', val:'1,240' },
    { label:'已學', val:'18 節' },
    { label:'答對率', val:'87%' },
  ];
  const badges = [
    { name:'DNA 新手', icon:'🧬', got:true },
    { name:'連勝 7 天', icon:'🔥', got:true },
    { name:'比對達人', icon:'⇌', got:true },
    { name:'BLAST 高手', icon:'🔍', got:false },
    { name:'演化樹師', icon:'🌳', got:false },
    { name:'蛋白工程', icon:'🧪', got:false },
  ];

  return (
    <div style={{ padding:'0 0 100px' }}>
      <AppHeader dark={dark} subtitle="STUDENT · BIOINFORMATICS" title="我的"/>
      <div style={{ padding:'0 20px' }}>
        {/* hero card */}
        <div style={{
          background:surf, borderRadius:20, padding:'20px',
          border:`1px solid ${line}`,
          display:'flex', alignItems:'center', gap:14,
        }}>
          <div style={{
            width:64, height:64, borderRadius:20,
            background: 'linear-gradient(135deg, var(--accent), #6CD0A5)',
            color:'#fff', display:'flex', alignItems:'center', justifyContent:'center',
            fontFamily:'Space Grotesk', fontSize:24, fontWeight:700,
          }}>陳</div>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontSize:18, fontWeight:600, color:fg }}>
              陳同學
            </div>
            <div style={{ fontSize:12, color:muted, fontFamily:'Noto Sans TC', marginTop:2 }}>
              生物學系 · 大二 · Lv 6
            </div>
            <ProgressBar pct={0.62} color="var(--accent)" track={dark?'rgba(255,255,255,.08)':'rgba(0,0,0,.06)'} height={4}/>
            <div style={{ fontSize:10, color:muted, fontFamily:"'JetBrains Mono',monospace", marginTop:4, letterSpacing:.5 }}>
              760 / 1200 XP → LV 7
            </div>
          </div>
        </div>

        {/* stats */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8, marginTop:12 }}>
          {stats.map(s=>(
            <div key={s.label} style={{
              background:surf, borderRadius:14, padding:'12px 10px', border:`1px solid ${line}`, textAlign:'center',
            }}>
              <div style={{ fontFamily:'Space Grotesk', fontSize:18, fontWeight:700, color:fg }}>{s.val}</div>
              <div style={{ fontSize:11, color:muted, marginTop:2, fontFamily:'Noto Sans TC' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* streak card */}
        <div style={{
          marginTop:12, padding:16, borderRadius:18,
          background: dark? 'linear-gradient(135deg, rgba(234,165,50,.15), rgba(234,165,50,.05))' : 'linear-gradient(135deg, #FFF1DE, #FFE5C2)',
          border:`1px solid ${dark?'rgba(234,165,50,.25)':'#F4D9B0'}`,
          display:'flex', alignItems:'center', gap:14,
        }}>
          <div style={{ fontSize:36 }}>🔥</div>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:'Space Grotesk', fontSize:22, fontWeight:700, color:dark?'#F2C97A':'#945910' }}>
              {streak} 天連勝
            </div>
            <div style={{ fontSize:12, color:dark?'#C7A57C':'#9B7A45', fontFamily:'Noto Sans TC' }}>
              繼續保持！明天小測就可達 {streak+1} 天
            </div>
          </div>
        </div>

        {/* badges */}
        <div style={{ marginTop:18 }}>
          <div style={{ fontFamily:'Space Grotesk, Noto Sans TC', fontWeight:600, fontSize:15, color:fg, marginBottom:10 }}>
            徽章 <span style={{ color:muted, fontWeight:500, fontSize:13 }}>3 / 6</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8 }}>
            {badges.map(b=>(
              <div key={b.name} style={{
                background:surf, borderRadius:14, padding:'14px 8px', textAlign:'center',
                border:`1px solid ${line}`, opacity: b.got?1:.4,
              }}>
                <div style={{ fontSize:28, filter: b.got?'none':'grayscale(1)' }}>{b.icon}</div>
                <div style={{ fontSize:11, color:fg, marginTop:6, fontFamily:'Noto Sans TC' }}>{b.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────── Course-specific mini visualizations ───────────
function PreviewCard({ children, dark, foot }){
  const surf = dark?'#1E211D':'#fff';
  const line = dark?'#2A2D29':'#E5E2D9';
  const muted = dark?'#9E9C90':'#707974';
  return (
    <div style={{ background:surf, borderRadius:18, padding:16, border:`1px solid ${line}` }}>
      {children}
      {foot && (
        <div style={{
          marginTop:12, paddingTop:10, borderTop:`1px dashed ${line}`,
          fontSize:12, color:muted, lineHeight:1.55, fontFamily:'Noto Sans TC, Manrope',
        }}>{foot}</div>
      )}
    </div>
  );
}

function ProteinPreview({ dark }){
  const muted = dark?'#9E9C90':'#707974';
  return (
    <PreviewCard dark={dark} foot={<><b style={{ color:'var(--accent)' }}>α-helix</b> 由肽鍵內氫鍵纏繞成右手螺旋；<b style={{ color:'#EAA532' }}>β-sheet</b> 則是肽鏈彼此平行/反平行排列形成的摺片。</>}>
      <svg width="100%" height="120" viewBox="0 0 320 120">
        {/* helix */}
        <text x="14" y="18" fontFamily="JetBrains Mono" fontSize="10" fill={muted} letterSpacing="1">α-HELIX</text>
        <path d="M16 60q12-32 32 0t32 0 32 0 32 0" stroke="var(--accent)" strokeWidth="3" fill="none"/>
        <path d="M16 60q12 32 32 0t32 0 32 0 32 0" stroke="var(--accent)" strokeWidth="3" fill="none" opacity=".35"/>
        {[16,48,80,112,144].map((x,i)=>(
          <circle key={i} cx={x} cy="60" r="3.5" fill="var(--accent)"/>
        ))}
        {/* sheet */}
        <text x="180" y="18" fontFamily="JetBrains Mono" fontSize="10" fill={muted} letterSpacing="1">β-SHEET</text>
        <path d="M180 40l8-6 8 6 8-6 8 6 8-6 8 6 8-6 8 6 8-6 8 6 8-6 8 6" stroke="#EAA532" strokeWidth="2.5" fill="none"/>
        <path d="M180 70l8-6 8 6 8-6 8 6 8-6 8 6 8-6 8 6 8-6 8 6 8-6 8 6" stroke="#EAA532" strokeWidth="2.5" fill="none"/>
        <path d="M188 100l-8 6M188 100l8 6M200 100l-8 6M200 100l8 6" stroke="#EAA532" strokeWidth="2.5" opacity=".6" fill="none"/>
        {/* labels */}
        <text x="16" y="100" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>3.6 res/turn</text>
        <text x="180" y="100" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>strands ↔ H-bond</text>
      </svg>
    </PreviewCard>
  );
}

function VolcanoPreview({ dark }){
  const muted = dark?'#9E9C90':'#707974';
  const fg = dark?'#F0EEE5':'#0F1614';
  const grid = dark?'rgba(255,255,255,.06)':'rgba(0,0,0,.06)';
  // simulated points
  const points = React.useMemo(()=>{
    const arr = [];
    for(let i=0;i<80;i++){
      const x = (Math.random()-0.5)*6; // log2FC
      const y = Math.abs(x)*1.2 + Math.random()*3 + 0.2; // -log10 p
      arr.push({ x, y });
    }
    return arr;
  },[]);
  const w = 290, h = 160;
  const px = x => 40 + (x+4)/8*(w-50);
  const py = y => h-24 - (y/8)*(h-30);
  return (
    <PreviewCard dark={dark} foot={<>左右兩側為顯著上/下調基因（log₂FC 大且 p 值小）。閾值線：|log₂FC|=1，-log₁₀(p)=1.3</>}>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display:'block' }}>
        {/* grid */}
        {[2,4,6].map(g=>(
          <line key={g} x1="40" x2={w} y1={py(g)} y2={py(g)} stroke={grid}/>
        ))}
        {/* threshold lines */}
        <line x1={px(-1)} x2={px(-1)} y1="10" y2={h-24} stroke={muted} strokeDasharray="3 3" opacity=".6"/>
        <line x1={px(1)} x2={px(1)} y1="10" y2={h-24} stroke={muted} strokeDasharray="3 3" opacity=".6"/>
        <line x1="40" x2={w} y1={py(1.3)} y2={py(1.3)} stroke={muted} strokeDasharray="3 3" opacity=".6"/>
        {/* axes */}
        <line x1="40" x2="40" y1="10" y2={h-24} stroke={muted}/>
        <line x1="40" x2={w} y1={h-24} y2={h-24} stroke={muted}/>
        {/* points */}
        {points.map((p,i)=>{
          const sig = Math.abs(p.x)>1 && p.y>1.3;
          const col = sig ? (p.x>0?'#D9594C':'#4F94D8') : (dark?'#5A5C56':'#C8C4B6');
          return <circle key={i} cx={px(p.x)} cy={py(p.y)} r={sig?3:2} fill={col} opacity={sig?.9:.6}/>;
        })}
        {/* labels */}
        <text x={w/2} y={h-6} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>log₂ FoldChange</text>
        <text x="10" y={h/2} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill={muted} transform={`rotate(-90 12 ${h/2})`}>−log₁₀ p</text>
        <text x={w-46} y="20" fontFamily="JetBrains Mono" fontSize="9" fill="#D9594C">UP</text>
        <text x="48" y="20" fontFamily="JetBrains Mono" fontSize="9" fill="#4F94D8">DOWN</text>
      </svg>
    </PreviewCard>
  );
}

function TreePreview({ dark }){
  const muted = dark?'#9E9C90':'#707974';
  const fg = dark?'#F0EEE5':'#0F1614';
  return (
    <PreviewCard dark={dark} foot={<>分支長度代表演化距離；<b style={{ color:fg }}>Bootstrap</b> 值（節點旁數字）表示分支的穩定度。</>}>
      <svg width="100%" viewBox="0 0 320 200">
        {/* tree edges */}
        <path d="M30 100 L80 100" stroke={muted} strokeWidth="1.5"/>
        <path d="M80 40 L80 160" stroke={muted} strokeWidth="1.5"/>
        <path d="M80 40 L130 40" stroke={muted} strokeWidth="1.5"/>
        <path d="M80 160 L120 160" stroke={muted} strokeWidth="1.5"/>
        <path d="M120 130 L120 190" stroke={muted} strokeWidth="1.5"/>
        <path d="M120 130 L180 130" stroke={muted} strokeWidth="1.5"/>
        <path d="M120 190 L160 190" stroke={muted} strokeWidth="1.5"/>
        <path d="M130 20 L130 60" stroke={muted} strokeWidth="1.5"/>
        <path d="M130 20 L200 20" stroke={muted} strokeWidth="1.5"/>
        <path d="M130 60 L200 60" stroke={muted} strokeWidth="1.5"/>
        {/* tips */}
        {[
          [200, 20, 'Homo sapiens', '#0E9384'],
          [200, 60, 'Pan troglodytes', '#0E9384'],
          [180, 130, 'Mus musculus', '#EAA532'],
          [160, 190, 'Gallus gallus', '#9C77C7'],
        ].map(([x,y,name,c],i)=>(
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill={c}/>
            <text x={x+9} y={y+4} fontFamily="JetBrains Mono" fontSize="10" fill={fg}>{name}</text>
          </g>
        ))}
        {/* bootstrap labels */}
        <text x="84" y="36" fontFamily="JetBrains Mono" fontSize="8" fill={muted}>98</text>
        <text x="124" y="126" fontFamily="JetBrains Mono" fontSize="8" fill={muted}>76</text>
        <text x="134" y="16" fontFamily="JetBrains Mono" fontSize="8" fill={muted}>99</text>
        {/* scale */}
        <line x1="30" x2="70" y1="190" y2="190" stroke={muted}/>
        <line x1="30" x2="30" y1="186" y2="194" stroke={muted}/>
        <line x1="70" x2="70" y1="186" y2="194" stroke={muted}/>
        <text x="32" y="184" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>0.1 subs/site</text>
      </svg>
    </PreviewCard>
  );
}

function CodePreview({ dark }){
  const bg = dark?'#0F1410':'#0F1614';
  const muted = '#74766E';
  const lines = [
    { t:'from Bio import SeqIO', c:'k' },
    { t:'', c:'' },
    { t:'for rec in SeqIO.parse("genes.fa", "fasta"):', c:'' },
    { t:'    seq = rec.seq', c:'' },
    { t:'    gc = (seq.count("G") + seq.count("C")) / len(seq)', c:'' },
    { t:'    print(rec.id, len(seq), f"{gc:.2%}")', c:'' },
    { t:'', c:'' },
    { t:'# NM_001 1542 51.23%', c:'cm' },
    { t:'# NM_002 2087 47.91%', c:'cm' },
  ];
  const color = (s)=>{
    if(s.startsWith('#')) return '#74766E';
    return s
      .replace(/(from|for|in|import)/g, '§k§$1§/§')
      .replace(/("[^"]*")/g, '§s§$1§/§')
      .replace(/(\d+(\.\d+)?)/g, '§n§$1§/§');
  };
  return (
    <div style={{
      background: bg, borderRadius:18, padding:'14px 4px 14px 14px', overflow:'hidden',
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:10 }}>
        <span style={{ width:10,height:10,borderRadius:99,background:'#FF5F57' }}/>
        <span style={{ width:10,height:10,borderRadius:99,background:'#FFBD2E' }}/>
        <span style={{ width:10,height:10,borderRadius:99,background:'#28C840' }}/>
        <span style={{ marginLeft:8, fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#9C9E96' }}>gc_content.py</span>
      </div>
      <pre style={{
        margin:0, fontFamily:"'JetBrains Mono',monospace", fontSize:12,
        color:'#E0DED2', lineHeight:1.7, overflowX:'auto', paddingRight:14,
      }}>
{lines.map((l, i)=>(
  <div key={i} style={{ color: l.c==='cm'? muted : '#E0DED2' }}>
    <span style={{ color:muted, marginRight:10, userSelect:'none' }}>{String(i+1).padStart(2,' ')}</span>
    <Syn line={l.t}/>
  </div>
))}
      </pre>
    </div>
  );
}
function Syn({ line }){
  if(line.startsWith('#')) return <span style={{ color:'#74766E' }}>{line}</span>;
  const tokens = [];
  let s = line;
  const re = /("[^"]*"|\b(from|for|in|import)\b|\b\d+(\.\d+)?\b|f"\{[^}]+\}")/g;
  let last=0, m;
  while((m=re.exec(line))){
    if(m.index>last) tokens.push({ t:line.slice(last,m.index), c:'#E0DED2' });
    const tok = m[0];
    let col = '#E0DED2';
    if(/^(from|for|in|import)$/.test(tok)) col = '#E08EC6';
    else if(/^"/.test(tok)) col = '#C4DA8B';
    else if(/^\d/.test(tok)) col = '#E0B848';
    else if(/^f"/.test(tok)) col = '#C4DA8B';
    tokens.push({ t:tok, c:col });
    last = re.lastIndex;
  }
  if(last<line.length) tokens.push({ t:line.slice(last), c:'#E0DED2' });
  return <>{tokens.map((t,i)=><span key={i} style={{ color:t.c }}>{t.t}</span>)}</>;
}

function CoveragePreview({ dark }){
  const muted = dark?'#9E9C90':'#707974';
  const fg = dark?'#F0EEE5':'#0F1614';
  // simulated coverage
  const w = 290, h = 90;
  const bars = React.useMemo(()=>{
    const arr=[]; let v=15;
    for(let i=0;i<60;i++){ v = Math.max(2, Math.min(40, v + (Math.random()-.5)*6)); arr.push(v); }
    return arr;
  },[]);
  return (
    <PreviewCard dark={dark} foot={<>每個垂直條代表某位置上覆蓋的 reads 數量；覆蓋深度不均常見於 GC 偏差或重複區。</>}>
      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:muted, letterSpacing:.5, marginBottom:6 }}>
        chr1:1,000,000–1,001,200 · 平均 ~ 18×
      </div>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`}>
        {bars.map((v,i)=>(
          <rect key={i} x={4+i*(w-8)/60} y={h-10-(v/40)*(h-16)}
            width={(w-8)/60 - 1} height={(v/40)*(h-16)}
            fill="var(--accent)" opacity={.45 + (v/40)*0.5}/>
        ))}
        <line x1="0" x2={w} y1={h-10} y2={h-10} stroke={muted} opacity=".5"/>
        {/* gene track */}
        <rect x="60" y={h-6} width="40" height="4" rx="2" fill={fg}/>
        <rect x="110" y={h-6} width="30" height="4" rx="2" fill={fg}/>
        <line x1="100" x2="110" y1={h-4} y2={h-4} stroke={fg} strokeWidth="1"/>
        <text x="60" y={h+0} fontFamily="JetBrains Mono" fontSize="0" fill={muted}> </text>
      </svg>
    </PreviewCard>
  );
}

function UMAPPreview({ dark }){
  const muted = dark?'#9E9C90':'#707974';
  const fg = dark?'#F0EEE5':'#0F1614';
  const clusters = [
    { cx:80, cy:60, n:30, col:'#0E9384', name:'T cell' },
    { cx:200, cy:50, n:25, col:'#EAA532', name:'B cell' },
    { cx:140, cy:130, n:35, col:'#9C77C7', name:'Monocyte' },
    { cx:230, cy:140, n:18, col:'#D9594C', name:'NK' },
  ];
  return (
    <PreviewCard dark={dark} foot={<>UMAP 把高維基因表現壓到 2D，相似的細胞會自然靠在一起，便於分群與細胞型態註解。</>}>
      <svg width="100%" viewBox="0 0 290 200" style={{ display:'block' }}>
        {clusters.map((c,ci)=>(
          <g key={ci}>
            {[...Array(c.n)].map((_,i)=>{
              const a = Math.random()*Math.PI*2;
              const r = Math.random()*22 + 4;
              return <circle key={i} cx={c.cx+Math.cos(a)*r} cy={c.cy+Math.sin(a)*r} r="2.5" fill={c.col} opacity=".75"/>;
            })}
            <text x={c.cx} y={c.cy-32} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill={c.col}>{c.name}</text>
          </g>
        ))}
        <text x="14" y="194" fontFamily="JetBrains Mono" fontSize="9" fill={muted}>UMAP-1</text>
        <text x="14" y="184" fontFamily="JetBrains Mono" fontSize="9" fill={muted} transform="rotate(-90 14 184)">UMAP-2</text>
      </svg>
    </PreviewCard>
  );
}

// expose
Object.assign(window, {
  COURSES, COURSE_GROUPS, CourseGlyph, AppHeader, TabBar,
  HomeScreen, CoursesScreen, LessonDetailScreen,
  PracticeScreen, ToolScreen, ProfileScreen,
});
