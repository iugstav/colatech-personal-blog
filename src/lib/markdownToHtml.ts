import { unified } from "unified";
import parse from "remark-parse";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import rehypeFormat from "rehype-format";
import rehypeDocument from "rehype-document";
import remarkRehype from "remark-rehype";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(parse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
