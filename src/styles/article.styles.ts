import * as stylex from "@stylexjs/stylex";
import { consts, vars } from "./tokens.stylex";

// Markdown output cannot carry StyleX classes by itself, so blog/[...id].astro
// maps every markdown element to a small component (src/components/article/)
// that applies these styles.
//
// Descendant relationships from the old CSS (article pre code, article
// blockquote p, article ul li::before) become stylex.when.ancestor conditions,
// inlined below because the compiler only evaluates them inside stylex.create.
// The observed ancestor components (Pre, Blockquote, Ul) carry this marker
// plus a data attribute.
export const articleMarker = stylex.defaultMarker();

export const article = stylex.create({
  h2: {
    color: vars.textStrong,
    fontSize: "16px",
    fontWeight: 550,
    letterSpacing: "-0.015em",
    marginTop: "2.25rem",
    marginInline: 0,
    marginBottom: "1rem",
  },
  h3: {
    fontSize: "14px",
    fontWeight: 500,
  },
  p: {
    marginTop: 0,
    marginInline: 0,
    marginBottom: "1.1rem",
    color: { default: null, [stylex.when.ancestor("[data-blockquote]")]: vars.textStrong },
  },
  em: {
    color: vars.textEm,
    fontStyle: "italic",
  },
  strong: {
    color: vars.textStrong,
    fontWeight: 500,
  },
  a: {
    textDecoration: "underline",
    textDecorationColor: {
      default: vars.underline,
      ":hover": vars.accentUnderline,
    },
    textUnderlineOffset: "3px",
  },
  ul: {
    marginTop: 0,
    marginInline: 0,
    marginBottom: "1.1rem",
    paddingLeft: "1.1rem",
    listStyleType: "none",
  },
  ol: {
    marginTop: 0,
    marginInline: 0,
    marginBottom: "1.1rem",
    paddingLeft: "1.45rem",
    listStyleType: "decimal",
  },
  li: {
    position: "relative",
    paddingLeft: "0.35rem",
    marginBottom: "0.35rem",
    "::before": {
      content: { default: "none", [stylex.when.ancestor('[data-list="ul"]')]: '"–"' },
      position: "absolute",
      left: "-1.1rem",
      color: vars.marker,
    },
    "::marker": {
      color: vars.marker,
      fontVariantNumeric: "tabular-nums",
    },
  },
  code: {
    fontFamily: consts.fontMono,
    fontSize: { default: "0.88em", [stylex.when.ancestor("[data-codeblock]")]: "12.5px" },
    color: vars.textEm,
    backgroundColor: {
      default: vars.codeInlineBg,
      [stylex.when.ancestor("[data-codeblock]")]: "transparent",
    },
    borderWidth: { default: "1px", [stylex.when.ancestor("[data-codeblock]")]: 0 },
    borderStyle: { default: "solid", [stylex.when.ancestor("[data-codeblock]")]: "none" },
    borderColor: vars.hairline,
    borderRadius: "4px",
    paddingBlock: { default: "0.1em", [stylex.when.ancestor("[data-codeblock]")]: 0 },
    paddingInline: { default: "0.35em", [stylex.when.ancestor("[data-codeblock]")]: 0 },
    display: { default: null, [stylex.when.ancestor("[data-codeblock]")]: "block" },
  },
  blockquote: {
    marginBlock: "1.5rem",
    marginInline: 0,
    paddingLeft: "1rem",
    borderLeftWidth: "1px",
    borderLeftStyle: "solid",
    borderLeftColor: vars.accentUnderline,
  },
  hr: {
    marginBlock: "2rem",
    marginInline: 0,
    borderWidth: 0,
    borderStyle: "none",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: vars.hairline,
  },
  img: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "6px",
  },
  pre: {
    marginBlock: "1.5rem",
    marginInline: 0,
    paddingBlock: "1rem",
    paddingInline: "1.15rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: vars.hairline,
    borderRadius: "6px",
    overflowX: "auto",
    lineHeight: 1.65,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "1.1rem",
  },
  cell: {
    textAlign: "left",
    paddingBlock: "0.375rem",
    paddingRight: "0.75rem",
    paddingLeft: 0,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: vars.hairline,
  },
});
