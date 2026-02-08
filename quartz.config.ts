import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Telatum - Navigating Complexity",
    enableSPA: true,
    enablePopovers: true,
    analytics: { provider: "plausible" },
    locale: "en-US",
    baseUrl: "telatum.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Crimson Pro",           // More philosophical, Mediterranean feel
        body: "Crimson Pro",              // Unified, elegant serif
        code: "JetBrains Mono",           // Clean modern monospace
      },
      colors: {
        lightMode: {
          light: "#fdfcfa",               // Warmer off-white (Mediterranean sun)
          lightgray: "#e8e6e1",           // Soft beige borders
          gray: "#a39d92",                // Warm gray
          darkgray: "#4a4540",            // Deep brown-gray (readable)
          dark: "#2b2622",                // Almost black-brown
          secondary: "#8b6914",           // Ochre/gold (depth, warmth)
          tertiary: "#6b8e7f",            // Sage green (Mediterranean)
          highlight: "rgba(139, 105, 20, 0.1)",  // Warm highlight
          textHighlight: "#ffeaa7",       // Soft yellow highlight
        },
        darkMode: {
          light: "#1a1816",               // Deep warm dark
          lightgray: "#2d2a26",           // Warm dark gray
          gray: "#6b6560",                // Medium warm gray
          darkgray: "#c9c4bc",            // Light warm text
          dark: "#e8e3db",                // Off-white text
          secondary: "#d4a574",           // Warm gold (less bright than light)
          tertiary: "#8fa89a",            // Muted sage
          highlight: "rgba(212, 165, 116, 0.15)",
          textHighlight: "#8b7355",       // Muted warm highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ 
        priority: ["frontmatter", "git", "filesystem"]  // Git second (you'll update often)
      }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ 
        enableSiteMap: true, 
        enableRSS: true,           // Good - people can subscribe to updates
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config