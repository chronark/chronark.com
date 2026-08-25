import * as stylex from "@stylexjs/stylex";
import { consts, vars } from "./tokens.stylex";

// marker on each post link so the title can react to link hover
export const postLinkMarker = stylex.defaultMarker();

export const home = stylex.create({
  intro: {
    margin: 0,
    maxWidth: "52ch",
  },
  introLink: {
    textDecoration: "underline",
    textDecorationColor: {
      default: vars.underline,
      ":hover": vars.accentUnderline,
    },
    textUnderlineOffset: "3px",
  },
  writing: {
    marginTop: "4.5rem",
  },
  monoLabel: {
    marginTop: 0,
    marginInline: 0,
    marginBottom: "1.25rem",
  },
  posts: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  postLink: {
    display: "flex",
    alignItems: "baseline",
    gap: { default: "1rem", [consts.mediaMobile]: "0.1rem" },
    flexDirection: { default: "row", [consts.mediaMobile]: "column" },
    paddingBlock: "0.7rem",
    paddingInline: 0,
    color: vars.text,
  },
  postTitle: {
    color: {
      default: vars.textStrong,
      [stylex.when.ancestor(":hover")]: vars.accent,
    },
    fontWeight: 450,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  postRule: {
    flex: 1,
    borderTopWidth: "1px",
    borderTopStyle: "dashed",
    borderTopColor: vars.hairline,
    transform: "translateY(-0.2em)",
    display: { default: null, [consts.mediaMobile]: "none" },
  },
});
