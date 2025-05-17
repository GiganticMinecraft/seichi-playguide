import { type DefaultTheme, type HeadConfig, defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "seichi-playguide",
  description: "ギガンティック☆整地鯖の遊び方や基本情報をまとめた総合ガイド",
  srcDir: "./src",
  lastUpdated: true,
  themeConfig: {
    logo: { src: "/assets/server-icon.png" },
    nav: defineNav(),
    lastUpdatedText: "最終更新日",
    aside: false,
    sidebar: {
      "/gameplay/": { base: "/gameplay/", items: defineGameplaySidebarItems() },
      "/command/": { base: "/command/", items: defineCommandSidebarItems() },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/GiganticMinecraft" },
      {
        icon: "discord",
        link: "https://discord.com/servers/giganteitsukuzheng-di-qing-237758724121427969",
      },
      {
        icon: "youtube",
        link: "https://youtube.com/channel/UCRa1dzpugnk83WH6VW5e-og",
      },
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "検索",
                buttonAriaLabel: "検索",
              },
              modal: {
                displayDetails: "表示",
                resetButtonTitle: "リセット",
                backButtonTitle: "戻る",
                noResultsText: "結果が見つかりませんでした",
                footer: {
                  selectText: "選択",
                  selectKeyAriaLabel: "選択",
                  navigateText: "ナビゲート",
                  navigateUpKeyAriaLabel: "上",
                  navigateDownKeyAriaLabel: "下",
                  closeText: "閉じる",
                  closeKeyAriaLabel: "閉じる",
                },
              },
            },
          },
        },
        async _render(src, env, md) {
          const html = await md.render(src, env);
          // データベースの場合は、検索結果を表示しない
          if (env.relativePath.startsWith("database/")) return "";
          return html;
        },
      },
    },
    footer: {
      message:
        "Minecraft は Mojang Stadio の登録商標です。本サーバーは Mojang Stadio社から承認されておらず、Mojang Stadio社とは関係ありません。",
      copyright: "© 2019 - 2025 seichi.click network",
    },
  },
});

function defineHead(): HeadConfig[] {
  return [
    // Add favicon
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ];
}

function defineNav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "ゲームプレイガイド",
      link: "/gameplay/manual/getting-started",
      activeMatch: "/gameplay/",
    },
    { text: "コマンドガイド", link: "/command/overview" },
    { text: "データベース", link: "/database/overview" },
  ];
}

function defineGameplaySidebarItems(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ゲームマニュアル",
      collapsed: false,
      items: [
        { text: "はじめる", link: "manual/getting-started" },
        { text: "序盤の動き方", link: "manual/tutorial" },
        { text: "土地保護", link: "manual/protection" },
        { text: "実績・二つ名", link: "manual/nickname" },
        { text: "MineStack", link: "manual/minestack" },
        { text: "トレードシステム", link: "manual/trade" },
        { text: "Mebius", link: "manual/mebius" },
        { text: "公共施設", link: "manual/facilities" },
        { text: "チャンネルチャット", link: "manual/channel-chat" },
      ],
    },
    {
      text: "整地ガイド",
      collapsed: false,
      items: [
        { text: "整地スキル", link: "seichi/skill" },
        { text: "マナシステム", link: "seichi/mana" },
        { text: "レベルシステム", link: "seichi/level" },
        { text: "ガチャシステム", link: "seichi/gacha" },
        { text: "エフェクト", link: "seichi/effect" },
      ],
    },
    {
      text: "建築ガイド",
      collapsed: false,
      items: [
        { text: "建築スキル", link: "building/skill" },
        { text: "レベルシステム", link: "building/level" },
      ],
    },
    {
      text: "トラベルガイド",
      collapsed: false,
      items: [
        { text: "ワールド間移動", link: "travel/world" },
        { text: "サーバー間移動", link: "travel/server" },
      ],
    },
  ];
}

function defineCommandSidebarItems(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "一般コマンド",
      collapsed: false,
      items: [
        { text: "チャット系", link: "chat-category" },
        { text: "移動系", link: "movement-category" },
        { text: "保護系", link: "protection-category" },
        { text: "SeichiAssist", link: "seichiassist" },
      ],
    },
    {
      text: "役職コマンド",
      collapsed: true,
      items: [{ text: "Observer", link: "observer-category" }],
    },
  ];
}
