import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Telatum",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "telatum.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Serif 4",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf9f6",        // Warm "paper" white
          lightgray: "#e5e5e5",    // Borders
          gray: "#b8b8b8",         // Metadata/Dates
          darkgray: "#4e4e4e",     // Body text
          dark: "#2b2b2b",         // Headers
          secondary: "#384b60",    // Links (Deep Navy)
          tertiary: "#84a59d",     // Hover state (Sage)
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff2aa",
        },
        darkMode: {
          light: "#161617",        // Deep Charcoal
          lightgray: "#393639",    // Borders
          gray: "#646464",         // Metadata
          darkgray: "#d4d4d4",     // Body text
          dark: "#ebebec",         // Headers
          secondary: "#7b97aa",    // Links (Steel Blue)
          tertiary: "#84a59d",     // Hover state (Sage)
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa02",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem", "git"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
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
      Plugin.AliasRedirect