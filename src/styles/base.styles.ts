import * as stylex from "@stylexjs/stylex";
import { consts, vars } from "./tokens.stylex";

export const base = stylex.create({
  html: {
    backgroundColor: vars.bg,
  },
  body: {
    marginBlock: 0,
    marginInline: "auto",
    maxWidth: "620px",
    minHeight: "100dvh",
    paddingTop: "4rem",
    paddingInline: "1.5rem",
    paddingBottom: "6rem",
    color: vars.text,
    fontFamily: consts.fontSans,
    fontSize: "14px",
    lineHeight: 1.7,
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizeLegibility",
  },
  // the one atmospheric accent: a faint glow bleeding in from the top
  glow: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: `radial-gradient(60% 38% at 50% -8%, ${vars.glow}, transparent 70%)`,
  },
  footer: {
    marginTop: "5rem",
    paddingTop: "1.5rem",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: vars.hairline,
    display: "flex",
    gap: "1.25rem",
  },
  footerLink: {
    fontSize: "13px",
    color: { default: vars.textDim, ":hover": vars.accent },
  },
  toggle: {
    position: "absolute",
    top: "1.35rem",
    right: "1.5rem",
    color: { default: vars.textDim, ":hover": vars.accent },
    backgroundColor: "transparent",
    borderWidth: 0,
    borderStyle: "none",
    padding: "0.4rem",
    cursor: "pointer",
    transition: "color 120ms ease",
    outlineWidth: { default: null, ":focus-visible": "1px" },
    outlineStyle: { default: null, ":focus-visible": "solid" },
    outlineColor: { default: null, ":focus-visible": vars.accentOutline },
    outlineOffset: "3px",
    borderRadius: "2px",
  },
  icon: {
    width: "15px",
    height: "15px",
  },
  iconSun: {
    display: vars.iconSun,
  },
  iconMoon: {
    display: vars.iconMoon,
  },
});

// base link behavior shared by every non-article link
export const link = stylex.create({
  base: {
    color: { default: vars.textStrong, ":hover": vars.accent },
    textDecoration: "none",
    transition: "color 120ms ease",
    outlineWidth: { default: null, ":focus-visible": "1px" },
    outlineStyle: { default: null, ":focus-visible": "solid" },
    outlineColor: { default: null, ":focus-visible": vars.accentOutline },
    outlineOffset: "3px",
    borderRadius: "2px",
  },
});

// mono uppercase micro-labels for section headers and dates
export const typo = stylex.create({
  monoLabel: {
    fontFamily: consts.fontMono,
    fontSize: "11px",
    fontWeight: 400,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: vars.textDim,
  },
  monoDate: {
    fontFamily: consts.fontMono,
    fontSize: "12px",
    color: vars.textDim,
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap",
  },
  h1: {
    color: vars.textStrong,
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    marginTop: 0,
    marginInline: 0,
    marginBottom: "0.6rem",
  },
});
