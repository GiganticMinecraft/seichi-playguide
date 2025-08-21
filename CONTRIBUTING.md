# seichi-playguide 貢献ガイド (編集中)

seichi-playguide への貢献方法をまとめたものです．

## はじめに

本ガイドへの貢献は多少のプログラミングの知識が必要です．(SeichiAssist への貢献ほどは必要ありません．)

自信がない方は直接編集せずとも[整地鯖 Discord](https://redmine.seichi.click/projects/public/wiki/Official_Discord_Documents) にて誤字報告などを行うことでも貢献することができます．

## 環境構築

### 前提ツールをインストール

このプロジェクトは Mise 及び Git を必要とします．

* Mise: [公式サイトのインストール手順 (英語)](https://mise.jdx.dev/getting-started.html#installing-mise-cli) を参考にインストールしてください
* Git: [公式サイトのインストールページ (英語)](https://git-scm.com/downloads) を参考にインストールしてください

### Git リポジトリをクローン

ターミナルで以下のコマンドを入力し、Git リポジトリをチェックアウトします．

```shell
git clone https://github.com/GiganticMinecraft/seichi-playguide
```

### Node.js と Pnpm のインストール

Node.js と Pnpm をインストールします．

リポジトリ上で以下のコマンドを実行してください．

```bash
mise install
```

そのあと，以下のコマンドを実行して依存関係をインストールします．

```bash
pnpm install
```

## 編集する

本ガイドは [VitePress](https://vitepress.dev/) を使用しており， Markdown で記述されています．

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
