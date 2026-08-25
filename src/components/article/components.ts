import A from "./A.astro";
import Blockquote from "./Blockquote.astro";
import Code from "./Code.astro";
import Em from "./Em.astro";
import H1 from "./H1.astro";
import H2 from "./H2.astro";
import H3 from "./H3.astro";
import H4 from "./H4.astro";
import Hr from "./Hr.astro";
import Img from "./Img.astro";
import Li from "./Li.astro";
import Ol from "./Ol.astro";
import P from "./P.astro";
import Pre from "./Pre.astro";
import Strong from "./Strong.astro";
import Table from "./Table.astro";
import Td from "./Td.astro";
import Th from "./Th.astro";
import Ul from "./Ul.astro";

// element map for <Content components={...} /> in blog/[...id].astro
export const articleComponents = {
  a: A,
  blockquote: Blockquote,
  code: Code,
  em: Em,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  hr: Hr,
  img: Img,
  li: Li,
  ol: Ol,
  p: P,
  pre: Pre,
  strong: Strong,
  table: Table,
  td: Td,
  th: Th,
  ul: Ul,
};
