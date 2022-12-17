import { unified } from "unified";
import parse from "remark-parse";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import rehypeFormat from "rehype-format";
import rehypeDocument from "rehype-document";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import { marked } from "marked";
import h from "highlight.js";
import markedKatex from "marked-katex-extension";
import katex from "katex";

type something = any;

export default async function markdownToHtml(markdown: string) {
  marked.use(
    markedKatex({
      displayMode: (type: string) => type == "block",
      output: "mathml",
      throwOnError: true,
      trust: true,
    })
  );

  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, lang) {
      const language = h.getLanguage(lang) ? lang : "plaintext";
      return h.highlight(code, { language }).value;
    },
    langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartypants: false,
    xhtml: false,
  });

  const result = marked.parse(markdown);

  return result;
}
