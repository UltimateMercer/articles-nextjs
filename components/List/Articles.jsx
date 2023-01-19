import Link from "@/components/Link";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import { useState } from "react";
import CardBackground from "@/components/Card/Background";
import formatDate from "@/lib/utils/formatDate";

const ListArticles = ({
  documents,
  initialDisplayDocuments = [],
  pagination,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredDocuments = documents.filter((frontmatter) => {
    const searchContent =
      frontmatter.document.title + frontmatter.document.description;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  const displayDocuments =
    initialDisplayDocuments.length > 0 && !searchValue
      ? initialDisplayDocuments
      : filteredDocuments;

  return (
    <>
      <div className="space-y-2 pb-8 md:space-y-5">
        <div className="flex justify-center mb-4">
          <div className="relative max-w-lg flex-1">
            <input
              aria-label="Pesquisar artigos"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Pesquisar artigos"
              className="block w-full rounded-md border border-gray-300 bg-light px-4 py-2 text-dark focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-10 pb-6">
        {!filteredDocuments.length && (
          <h1 className="text-center font-bold text-7xl my-14">
            Nenhum artigo encontrado!
          </h1>
        )}

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
          {displayDocuments.map((frontmatter) => {
            return (
              <CardBackground
                key={frontmatter.document.slug}
                document={frontmatter.document}
                authors={frontmatter.authorDetails}
                isFeatured
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListArticles;
