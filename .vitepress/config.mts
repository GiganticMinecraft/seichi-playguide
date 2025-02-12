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
    footer: {
      message:
        "Minecraft は Mojang Stadio の登録商標です。本サーバーは Mojang Stadio社から承認されておらず、Mojang Stadio社とは関係ありません。",
      copyright: "© 2025 seichi.click network",
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
      ],
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
