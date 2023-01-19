import fs from "fs";
import generateRss from "@/lib/generate-rss";
import { formatSlug, getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";

export const DOCS_PER_PAGE = 25;

export const pathName = "articles";

export const getAllDocuments = async () => {
  const rawDocuments = await getAllFilesFrontMatter(pathName);

  const documents = await Promise.all(
    rawDocuments.map(async (document) => {
      const authorList = document.authors;
      const authorPromise = authorList.map(async (author) => {
        const authorResults = await getFileBySlug("authors", [author.name]);
        return authorResults.frontmatter;
      });
      const authorDetails = await Promise.all(authorPromise);
      return { document, authorDetails };
    })
  );

  const initialDisplayDocuments = documents.slice(0, DOCS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(documents.length / DOCS_PER_PAGE),
  };
  return { props: { documents, initialDisplayDocuments, pagination } };
};

export const getDocument = async (params) => {
  const rawDocuments = await getAllFilesFrontMatter(pathName);

  const allDocuments = await Promise.all(
    rawDocuments.map(async (document) => {
      const authorList = document.authors;
      const authorPromise = authorList.map(async (author) => {
        const authorResults = await getFileBySlug("authors", [author.name]);
        return authorResults.frontmatter;
      });
      const authorDetails = await Promise.all(authorPromise);

      return { document, authorDetails };
    })
  );

  const documentIndex = allDocuments.findIndex(
    (data) => formatSlug(data.document.slug) === params.slug.join("/")
  );

  const prev = {
    frontmatter: allDocuments[documentIndex + 1]
      ? allDocuments[documentIndex + 1].document
      : null,
    authorDetails: allDocuments[documentIndex + 1]
      ? allDocuments[documentIndex + 1].authorDetails
      : null,
  };

  const next = {
    frontmatter: allDocuments[documentIndex - 1]
      ? allDocuments[documentIndex - 1].document
      : null,
    authorDetails: allDocuments[documentIndex - 1]
      ? allDocuments[documentIndex - 1].authorDetails
      : null,
  };

  const doc = await getFileBySlug(pathName, params.slug.join("/"));

  const authorList = doc.frontmatter.authors;
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug("authors", [author.name]);
    return authorResults.frontmatter;
  });
  const authorDetails = await Promise.all(authorPromise);

  if (rawDocuments.length > 0) {
    const rss = generateRss(rawDocuments);
    fs.writeFileSync("./public/feed.xml", rss);
  }

  return { props: { doc, authorDetails, prev, next } };
};
