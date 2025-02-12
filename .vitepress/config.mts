import { type DefaultTheme, defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GiganticMinecraft プレイガイド",
  description: "ギガンティック☆整地鯖の遊び方や基本情報をまとめた総合ガイド",
  srcDir: "./src",
  outDir: "./dist",
  lastUpdated: true,
  themeConfig: {
    // logo: { src: '/', width: 24, height: 24 },
    nav: defineNav(),
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
    lastUpdatedText: "最終更新日",
  },
});

function defineNav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "ゲームプレイガイド",
      link: "/gameplay/getting-started",
      activeMatch: "/gameplay/",
    },
    { text: "コマンドガイド", link: "/command/overview" },
  ];
}

function defineGameplaySidebarItems(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ゲームマニュアル",
      collapsed: false,
      items: [{ text: "サーバへの参加方法", link: "getting-started" }],
    },
  ];
}

function defineCommandSidebarItems(): DefaultTheme.SidebarItem[] {
  return [
    { text: "はじめに", link: "overview" },
    { text: "チャット", link: "chat-category" },
    {
      text: "コマンドガイド",
      collapsed: false,
      items: [{ text: "チャット", link: "chat-category" }],
    },
  ];
}
