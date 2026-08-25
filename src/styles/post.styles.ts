import * as stylex from "@stylexjs/stylex";
import { vars } from "./tokens.stylex";

export const post = stylex.create({
  nav: {
    marginBottom: "4.5rem",
  },
  navLink: {
    color: { default: vars.textDim, ":hover": vars.accent },
  },
  articleHead: {
    display: "flex",
    alignItems: "baseline",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  h1: {
    // longhand, so it actually overrides typo.h1's marginBottom
    marginBottom: 0,
    flex: 1,
  },
});
