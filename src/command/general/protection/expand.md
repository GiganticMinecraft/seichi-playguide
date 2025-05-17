---
title: //expand
editLink: true
navbar: true
sidebar: true
aside: false
lastUpdated: false
footer: true
---

# //expand  <Badge type="info" text="WorldGuard" />

`//expand <ブロック数> [方角] [向き]`

選択範囲を指定した方角に指定したブロック数分拡大します．

第二引数で指定する方角，第三引数で指定する向きは以下のように指定します．

- 方角:
  - `north`: 北
  - `south`: 南
  - `west`: 西
  - `east`: 東

- 向き:
  - `me`: 自分の向いている方向
  - `forward`
  - `right`
  - `left`
  - `back`
  - `up`
  - `down`

::: tip 指定しなかった場合の挙動

これらを指定しなかった場合は，デフォルトで `me` が使用されます

:::
