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

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(parse)
    .use(rehypeDocument)
    .use(rehypeHighlight)
    .use(rehypeFormat)
    .use(rehypeStringify, {
      allowDangerousHtml: true,
      allowDangerousCharacters: true,
    })
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(remarkMath, { singleDollarTextMath: true })
    .use(rehypeKatex, {
      output: "mathml",
      colorIsTextColor: true,
      throwOnError: true,
    })
    .use(rehypeRaw)
    .process(markdown);
  return result.toString();
}
