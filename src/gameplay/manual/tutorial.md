---
title: 序盤の動き方
editLink: true
navbar: true
sidebar: true
aside: false
lastUpdated: true
footer: true
---

# 序盤の動き方

ここでははじめてギガンティック☆整地鯖をプレイする人向けに、序盤の動き方を解説します。

接続前にルールを確認しましょう。「ルールを把握していませんでした」は通用しません。

[ルール | seichi.click network](https://www.seichi.network/rule)

最初に接続するとロビーサーバーに接続されます。このサーバーから各種ゲームサーバーに接続することができます。

![](/images/tutorial/lobby.png)

## 1. ゲームサーバーに接続する

ロビーサーバーに接続したら、ゲームサーバーに接続しましょう。

どのサーバーを選んでも同じように整地することができますし、いつでもほかのサーバーに移動することもできます。

詳しくは [サーバー間移動](/gameplay/travel/server) をご覧ください。

## 2. チュートリアルをプレイする

はじめてギガンティック☆整地鯖をプレイする場合は、チュートリアルをプレイすることをおすすめします。

チュートリアルは、ゲームの基本的な操作やルールを学ぶことができるコンテンツです。

チュートリアルをプレイするにはまず、公共施設サーバーに接続します。接続するにはロビーサーバーにある「公共施設サーバー」のゲートに入るか、コマンド `/server s7` を実行します。

![](/images/tutorial/s7-gate.png)

公共施設サーバーに接続すると、スポーン地点にチュートリアルのゲートがあるので、そこに入りましょう。

![](/images/tutorial/s7-tutorial-gate.png)

チュートリアルのゲートに入ると、チュートリアルが開始されます。チュートリアルでは、次のことを学ぶことができます。

- クイズ形式での基本的なルールの確認
- クイズ形式での整地鯖の独自要素に関する説明

これらをクリアすると、最初の整地に役立つアイテムを入手することができます。時間に余裕がある場合は実践編までクリアしてみましょう。

![](/images/tutorial/tutorial-rule.png)

## 3. 整地を始める

チュートリアルをプレイすれば、あなたは整地に必要なアイテムを持っているはずです。 

::: tip

アイテムは全部で7種類です。もし取り忘れがある場合は基礎編をもう一度プレイしましょう。 

`/spawn` コマンドでスポーン地点に戻れます。

:::

整地はどのサーバーでもできるというわけではなく、大きく分けて3つのサーバーで行うことができます。

- [アルカディアサーバー](https://s1.map.gigantic.seichi.click/?worldname=world_2): プレイヤー数が一番多く、活気のあるサーバーです
    ![](/images/tutorial/s1.png)
- [エデンサーバー](https://s2.map.gigantic.seichi.click/?worldname=world_2): アルカディアより静かな為落ち着いて整地、建築ができます。
    ![](/images/tutorial/s2.png)
- [ヴァルハラスーバー](https://s3.map.gigantic.seichi.click/?worldname=world_2): メインワールドに雪の降る様子が幻想的なサーバーです。
    ![](/images/tutorial/s3.png)

ロビーサーバーに戻るには `/server lobby` を実行してください。

各サーバーにはロビーサーバーにあるゲートに入るか [`/server`](../../command/general/movement/server.md) コマンドを使用して直接移動することもできます。

![](/images/tutorial/lobby-gate.png)

### 整地ワールドについて

整地ワールドは、整地を行うための専用のワールドです。**逆に言えばこれら以外のワールドでは整地を行うことはできません。**

整地ワールドには次のような種類があり、ワールドによって **保護必須の有無** や **定期リセットされるか** が異なります。

| ワールド名 | 説明 | 保護必須 |
| --- | --- | --- |
| 第1整地 | 初心者向けの整地ワールドで、整地量の計算が0.8倍になる代わりに整地の心得違反があっても処罰されず、毎週金曜日朝6時にリセットされます。 | なし |
| 第2整地 | 保護上限が 256グリッド*2 の整地ワールド。 | あり |
| 第3整地 | s第1整地と同じだが、心得違反があった場合は通常通り処罰が行われます。 | なし |
| 第4整地 | 保護上限が 5120グリッド*2 の整地ワールド。主に上級者向け。 | あり |
| 整地ネザー | ネザーの整地ワールド。主に上級者向け。 | あり |
| 整地エンド | エンドの整地ワールド。主に上級者向け。 | あり |

::: tip

初心者の場合は、まず第1整地で整地を始めることをおすすめします。

万が一心得違反をしてしまっても、処罰されることはありません。ただし、整地量が0.8倍になるので、慣れたら第3整地に移動することをおすすめします。

:::

整地ワールドへの移動はロビーサーバーにあるゲートに入ります。

![](/images/tutorial/world-gate.png)

----

整地ワールドへ移動したら、整地できる場所を探しましょう。この際 `/rtp` コマンドを使用すると、ランダムな場所に移動することができます。

整地できる場所を見つけたら、整地の心得を守りながら、そこで整地を始めましょう。とにかくブロックを壊すのです。

![](/images/tutorial/world_SW_1.png)

## 4. 整地スキルを使う

整地を進めるとレベルが上がっていきます。あるレベルまで上げると整地スキルを使うことができます。整地スキルは、整地を効率的に行うためのスキルです。

スキルの設定は棒メニューから行えます。木の棒を右クリックするか `/stickmenu` コマンドを実行してください。

![](/images/tutorial/menu-skill-button.png)

スキルメニューが開いたら、スキルを選択して設定することができます。スキルには色んな範囲でブロックを壊すことができるものや、ブロックを一度にたくさん壊すことができるものなどがあります。

最初に覚えるのは **1*2*1** の範囲のブロックを破壊できるスキル **デュアル・ブレイク** でしょう。条件を満たしていれば岩盤から別のアイテムに置き換われるので、そのアイテムをクリックしスキルを装備しましょう。

![](/images/tutorial/skill-menu.png)

スキルを装備した状態でブロックを壊してみると **デュアル・ブレイク** が発動するので、上下のブロックが一度に壊れることがわかるでしょう。

::: tip

スキルは整地を効率的に行うための重要な要素です。特に **デュアル・ブレイク** は序盤から使えるので、積極的に活用しましょう。

:::

::: tip

スキルによってはスニークしながらクリックすると、効果を切り替えることができます。例えば **デュアル・ブレイク** の場合、スニークしながらクリックすると、下向きか上向きかを切り替えることができます。

すべてのスキルが対応しているわけではありません。その場合はスキルの ON/OFF が切り替われるだけです。

:::

スキルはレベルアップすることで新しいものを覚えることができます。どんどんレベルを上げて新しいスキルを取得していきましょう。詳しくは [整地スキル](../seichi/skill.md) を参照してください。

## 5. MineStack を使う

整地を進めると、整地スキルだけではなく、`MineStack` という機能も使えるようになります。

`MineStack` は、ブロックをまとめて収納することができる機能です。デフォルトで ON になっているため、既に破壊したブロックが自動的に収納されているはずです。

![](/images/tutorial/minestack-button.png)

MineStack はアイテム・ブロックをいくつかのジャンル別に仕分けて収納します。取り出す際は MineStack ボタンをクリックして、収納されているブロックを選択することで取り出すことができます。

![](/images/tutorial/minestack-toppage.png)

![](/images/tutorial/minestack-item-button.png)

----

ここまでが序盤の動き方の基本的な流れです。整地を進めることで、より多くのアイテムやスキルを手に入れることができ、さらに効率的に整地を行うことができます。

また整地以外にも、建築やイベントなど、さまざまな楽しみ方ができるのがギガンティック☆整地鯖の魅力です。詳しくはほかのガイドを参照してください。

