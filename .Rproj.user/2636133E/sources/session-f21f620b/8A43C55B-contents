# BioLearn · 生物資訊學習 App

> 一款讓生物資訊變得直觀的互動式學習 App。從 DNA 序列、序列比對，到系統發生樹、CRISPR、機器學習，邊看、邊做、邊學。

以 iPhone 風格呈現的純前端原型，採用乾淨的科學感美學（青松石主色 + 米白／深色雙模式）。整個 App 用 React（透過瀏覽器內 Babel 編譯的 JSX）撰寫，**無需建置工具、無需後端**，打開 `index.html` 即可執行。

**🔗 線上展示：https://charlene717.github.io/bioinformatics-learning-app/**

---

## ✨ 功能特色

### 📚 課程（18 章 · 90+ 節）
深入淺出的完整教材，分成 7 大學習路線：

| 路線 | 章節 |
|------|------|
| **基礎** | 生資導論、DNA·RNA·蛋白質、序列比對 |
| **結構與功能** | 蛋白質結構、NGS 次世代定序、變異與基因型 |
| **表現與調控** | 基因表現 RNA-seq、單細胞 scRNA-seq、表觀遺傳學 |
| **演化與群體** | 系統發生樹、群體遺傳學 |
| **應用領域** | 癌症基因組學、微生物群、CRISPR 基因編輯 |
| **程式與工具** | Python for Biology、R 與生統、雲端與工作流 |
| **進階** | 系統生物學、生物機器學習 |

每一節都有「Hook 直覺先行 → 編號段落講解 → 重點整理 → 嵌入式視覺化 → 上下節導航」的學習節奏，並附 40+ 種教學視覺化（雙螺旋、火山圖、UMAP、Bootstrap、CNN-DNA、ROC vs PR…）。

### 🧪 互動工具
- **序列比對 Sandbox** — Needleman-Wunsch 全域比對動畫
- **BLAST 模擬搜尋** — query → 掃描資料庫動畫 → E-value 排序結果剖析
- **GC 含量計算** — GC / AT / Tm + 鹼基組成
- **反向互補** — 互補 → 反轉 步驟拆解
- **密碼子翻譯** — 6 個閱讀框並列 + ORF 偵測
- **Tm 計算** — Wallace / Marmur 雙公式
- **密碼子表** — 64 → 20 對應
- **HWE 計算** — 基因型 → p、q + χ² 檢定

### 🎯 測驗
- 每日小測（跨章節混合）
- 期末總測（隨機 20 題）
- 依章節小測（110+ 題題庫，每題附解析）

### 🃏 學習輔助
- **單字卡** — 90+ 張生資術語，含詳解與章節直達連結
- **書籤** — 收藏單字卡與小節（localStorage 持久化）
- **間隔重複 SRS** — 4 級評分（類 SM-2 演算法）安排複習時程

### 🎨 個人化（Tweaks）
主色（青松石 / 靛藍 / 珊瑚 / 品紅）、深色模式、字級、連勝徽章顯隱。

---

## 🚀 開始使用

直接造訪線上版本：**https://charlene717.github.io/bioinformatics-learning-app/**

或在本機執行（無需安裝任何套件）：

```bash
# 方法一：直接用瀏覽器開啟
open index.html        # macOS
# 或 start index.html  # Windows

# 方法二：用本機伺服器（避免某些瀏覽器的 file:// 限制）
python3 -m http.server 8000
# 然後瀏覽 http://localhost:8000
```

> 首次載入需連網（從 CDN 取得 React、Babel、Google Fonts）。

---

## 🗂 專案結構

```
.
├── index.html        # 進入點：字體、主題變數、腳本載入、Tweaks 預設
├── app.jsx           # App 殼層、Tab 路由、Tweaks 面板
├── screens.jsx       # 各畫面：首頁 / 課程 / 課程詳細 / 練習 / 我的
├── lessons.jsx       # 18 章教材內容 + 教學視覺化 LessonViz
├── widgets.jsx       # 共用元件、序列比對、單字卡、Quiz
├── blast.jsx         # BLAST 模擬搜尋工具
├── tools.jsx         # GC / 反向互補 / 密碼子翻譯 / Tm / HWE 計算機
├── quiz-bank.jsx     # 110+ 題題庫（依章節分類）
├── flashcards.jsx    # 90+ 張單字卡資料
├── study.jsx         # 書籤 + 間隔重複 SRS
├── ios-frame.jsx     # iPhone 裝置外框元件
└── tweaks-panel.jsx  # Tweaks 面板殼層
```

---

## 🛠 技術

- **React 18**（UMD）+ **Babel Standalone**（瀏覽器內 JSX 編譯）
- 純前端、無後端、無建置流程
- 字體：Space Grotesk · Manrope · JetBrains Mono · Noto Sans TC
- 狀態持久化：`localStorage`（書籤、SRS、Tweaks）

---

## 📄 授權

教育用途範例專案。歡迎自由 fork、修改、用於教學。

---

*生物資訊不只是工具，更是用工具去問正確的問題。*
