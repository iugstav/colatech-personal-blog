import { marked } from "marked";
import markedKatex from "marked-katex-extension";
import h from "highlight.js";

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
      return h.highlight(code, { language, ignoreIllegals: true }).value;
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
