// Shared StyleX compiler options. The Vite transform (astro.config.mjs) and
// the PostCSS plugin (postcss.config.cjs) must use identical options so the
// class names in the compiled JS match the generated CSS.
module.exports = {
  dev: false,
  runtimeInjection: false,
  treeshakeCompensation: true,
  unstable_moduleResolution: {
    type: "commonJS",
    rootDir: __dirname,
  },
};
