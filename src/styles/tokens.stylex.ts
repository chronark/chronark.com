import * as stylex from "@stylexjs/stylex";

// midnight: dark is the lead, light is the same voice in daylight.
// Defaults are the dark palette; the media condition switches to light when
// the OS prefers it. Forcing a theme (see themes.ts) overrides both.
const LIGHT = "@media (prefers-color-scheme: light)";

export const vars = stylex.defineVars({
  bg: { default: "#0a0a0a", [LIGHT]: "#fafafa" },
  bgCode: { default: "#0d0d0f", [LIGHT]: "#f1f1f3" },
  codeInlineBg: {
    default: "rgba(255, 255, 255, 0.05)",
    [LIGHT]: "rgba(0, 0, 0, 0.045)",
  },
  text: { default: "#a0a0a0", [LIGHT]: "#55565c" },
  textStrong: { default: "#ededed", [LIGHT]: "#1b1b1f" },
  textEm: { default: "#d4d4d4", [LIGHT]: "#3a3a40" },
  textDim: { default: "#6e6e6e", [LIGHT]: "#8b8b90" },
  marker: { default: "#5a5a5a", [LIGHT]: "#b3b3b8" },
  hairline: {
    default: "rgba(255, 255, 255, 0.08)",
    [LIGHT]: "rgba(0, 0, 0, 0.09)",
  },
  underline: {
    default: "rgba(255, 255, 255, 0.16)",
    [LIGHT]: "rgba(0, 0, 0, 0.18)",
  },
  accent: { default: "#9aa8d8", [LIGHT]: "#5261a8" },
  accentUnderline: {
    default: "rgba(154, 168, 216, 0.5)",
    [LIGHT]: "rgba(82, 97, 168, 0.5)",
  },
  accentOutline: {
    default: "rgba(154, 168, 216, 0.6)",
    [LIGHT]: "rgba(82, 97, 168, 0.6)",
  },
  glow: { default: "rgba(120, 140, 210, 0.075)", [LIGHT]: "transparent" },
  iconSun: { default: "block", [LIGHT]: "none" },
  iconMoon: { default: "none", [LIGHT]: "block" },
});

export const consts = stylex.defineConsts({
  fontSans:
    'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
  fontMono: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
  mediaMobile: "@media (max-width: 480px)",
});
