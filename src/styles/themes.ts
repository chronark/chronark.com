import * as stylex from "@stylexjs/stylex";
import { vars } from "./tokens.stylex";

// Forced themes for the manual toggle. Without a stored preference the site
// follows the OS via the media conditions baked into the token defaults.

export const lightTheme = stylex.createTheme(vars, {
  bg: "#fafafa",
  bgCode: "#f1f1f3",
  codeInlineBg: "rgba(0, 0, 0, 0.045)",
  text: "#55565c",
  textStrong: "#1b1b1f",
  textEm: "#3a3a40",
  textDim: "#8b8b90",
  marker: "#b3b3b8",
  hairline: "rgba(0, 0, 0, 0.09)",
  underline: "rgba(0, 0, 0, 0.18)",
  accent: "#5261a8",
  accentUnderline: "rgba(82, 97, 168, 0.5)",
  accentOutline: "rgba(82, 97, 168, 0.6)",
  glow: "transparent",
  iconSun: "none",
  iconMoon: "block",
});

export const darkTheme = stylex.createTheme(vars, {
  bg: "#0a0a0a",
  bgCode: "#0d0d0f",
  codeInlineBg: "rgba(255, 255, 255, 0.05)",
  text: "#a0a0a0",
  textStrong: "#ededed",
  textEm: "#d4d4d4",
  textDim: "#6e6e6e",
  marker: "#5a5a5a",
  hairline: "rgba(255, 255, 255, 0.08)",
  underline: "rgba(255, 255, 255, 0.16)",
  accent: "#9aa8d8",
  accentUnderline: "rgba(154, 168, 216, 0.5)",
  accentOutline: "rgba(154, 168, 216, 0.6)",
  glow: "rgba(120, 140, 210, 0.075)",
  iconSun: "block",
  iconMoon: "none",
});
