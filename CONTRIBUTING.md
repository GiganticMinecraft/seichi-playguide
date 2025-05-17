# seichi-playguide 貢献ガイド (編集中)

seichi-playguide への貢献方法をまとめたものです．

## はじめに

本ガイドへの貢献は多少のプログラミングの知識が必要です．(SeichiAssist への貢献ほどは必要ありません．)

自信がない方は直接編集せずともDiscord にて誤字報告などを行うことでも貢献することができます．

## 環境構築

本ガイドの環境構築には Mise を使用し， Node.js　と　Pnpm をダウンロードします．ルートリポジトリ上で以下のコマンドを実行してください．

```bash
mise install
```

そのあと，以下のコマンドを実行して依存関係をインストールします．

```bash
pnpm install
```

## 編集する

本ガイドは VitePress を使用しており， Markdown で記述されています．
VitePress のドキュメントは [こちら](https://vitepress.dev/) を参照してください．

本ガイドは以下の構成になっています．

- `src/` : ソースコード
  - `public/` : 画像などのアセット
  - `command/` : コマンドガイド
  - `database/` : データベース
  - `gameplay/` : ゲームプレイガイド
  - `index.md` : トップページ

ページの最初には構成設定を記述する必要があります．

これらの構成設定はページにより異なります．以下を参考にしてください．

- ドキュメントページ:

    ```markdown
    ---
    title:
    editLink: true
    navbar: true
    sidebar: true
    aside: false
    lastUpdated: true
    footer: true
    ---
    ```

- コマンドガイドページ:

    ```markdown
    ---
    title: /
    editLink: true
    navbar: true
    sidebar: true
    aside: false
    lastUpdated: false
    footer: true
    --- 
    ```