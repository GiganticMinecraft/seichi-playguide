---
title: /spectator
editLink: true
navbar: true
sidebar: true
aside: false
lastUpdated: false
footer: true
---

# /spectatortheater <Badge type="info" text="SpectatorTheater" />

## `/spectatortheater [start|end]` (`/spectator [start|end]`)

一時的にスペクテイターモードに切り替えます．

スペクテイターモードには時間制限があり, 指定時間が経過すると自動的にスペクテイターモードが終了します．

コマンドにはクールタイムが設定されており最後にスペクテイターモードになってから一定時間が経過しないと再度スペクテイターモードになることは出来ません．

::: tip

以下の場合でもスペクテイターモードは終了します。

- ワールド間の移動を行った場合
  - スペクテイターモードによるテレポートでワールドをまたいた場合でも終了します。テレポート先のプレイヤーがどこにいるか確認してからテレポートしてください。
- プレイヤーのゲームモードが変更された場合
- プレイヤーがゲームを退出 (ログアウト) した場合
- プラグイン `SpectatorTheater` が無効化された場合

:::