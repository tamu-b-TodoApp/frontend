<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## 作業方針

### 1. 指示に正確に従うこと

- 指示の内容を正確に理解し、不明点がある場合は必ず実装者に確認すること

### 2. 実装ノートの記録

実装作業中に以下の事項が発生した場合は、**必ず `implementation-notes` ディレクトリに記録**して下さい。

- 指示に明記されていなかった判断や決定事項
- 技術的制約による変更点
- 妥協点や代替案の採用理由
- 仕様の曖昧さに対する解釈
- 発生した問題とその解決方法
- 今後の検討事項や課題

#### ファイル名の命名規則

`implementation-notes/yyyy-MM-dd_HHmmss_作業タイトル.md`

- ファイル作成時に毎回 `date '+%Y-%m-%d_%H%M%S'` を実行し、その値をプレフィックスに使用すること
- 過去の実行記録を再利用せず、必ず新しく取得すること
- 作業タイトル：何を作成・実装したかを簡潔に書くこと
