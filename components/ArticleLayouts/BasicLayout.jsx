import { useState, useEffect } from "react";
import Link from "next/link";
import { ArticleSEO } from "@/components/SEO";
import Image from "@/components/Image";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import ScrollTopAndComment from "@/components/ArticleRelated/ScrollTopAndComment";
import CardBackground from "@/components/Card/Background";
import AuthorInfo from "../ArticleRelated/AuthorInfo";
import { useTheme } from "next-themes";
import DateFormat from "@/components/DateFormat";

const postDateTemplate = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const BasicLayout = ({ frontmatter, authorDetails, next, prev, children }) => {
  const { authors, styles, slug, fileName, date, title, tags } = frontmatter;
  const [filter, setFilter] = useState(() =>
    frontmatter.filter ? frontmatter.filter : "filter-cyberpunk-v"
  );
  const [typography, setTypography] = useState(() =>
    frontmatter.typography ? `${frontmatter.typography}-article` : ""
  );

  const images = [frontmatter.cover || null, frontmatter.imageHeader || null];
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <ArticleSEO
        url={`${siteMetadata.siteUrl}/projects/${slug}`}
        canonicalUrl={`${siteMetadata.siteUrl}/projects/${slug}`}
        authorDetails={authorDetails}
        cover={frontmatter.cover ? frontmatter.cover : frontmatter.imageHeader}
        images={images}
        {...frontmatter}
      />
      <section className="main-article">
        <ScrollTopAndComment />
        <header className="header-basic">
          <div className="header-basic-content">
            <h5 className="article-meta">
              <span
                className={`p-1 bg-dark text-light dark:bg-light dark:text-dark`}
              >
                <span className="marker-line">
                  <DateFormat date={date} fulltimestamp />
                </span>
              </span>
            </h5>
            <h1 className="article-title mb-4">
              <span
                className={`p-1 bg-dark text-light dark:bg-light dark:text-dark`}
              >
                <span className="marker-line">{title}</span>
              </span>
            </h1>
          </div>
          <div className="header-basic-container hover:hover-card">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={
                  frontmatter.cover
                    ? frontmatter.cover
                    : frontmatter.imageHeader
                }
              />
              <source
                media="(min-width: 769px)"
                srcSet={
                  frontmatter.cover
                    ? frontmatter.cover
                    : frontmatter.imageHeader
                }
              />
              <img
                src={
                  frontmatter.cover
                    ? frontmatter.cover
                    : frontmatter.imageHeader
                }
                className={`header-basic-container-image ${filter}`}
                alt={`${title} Image`}
              />
              {/* <Image
                src={
                  frontMatter.cover
                    ? frontMatter.cover
                    : frontMatter.imageHeader
                }
                className={`header-basic-container-image ${filter}`}
                width={10000}
                height={10000}
                alt={`${title} Image`}
              /> */}
            </picture>
          </div>
        </header>
        <article
          className={`article-grid prose dark:prose-dark !pb-12 ${typography}-article`}
        >
          {children}
        </article>
        {frontmatter.gallery && frontmatter.gallery.length > 0 && (
          <div className="article-grid">
            <h3 className="text-3xl font-bold bg-dark text-light dark:bg-light dark:text-dark mb-4">
              <span className="marker-line !py-2 !px-3">Galeria:</span>
            </h3>
            {frontmatter.gallery.map((image, index) => (
              <figure key={index}>
                <img
                  src={image}
                  className="max-w-full block mx-auto"
                  alt={`${title} image ${index}`}
                />
              </figure>
            ))}
          </div>
        )}
        <div className="article-grid">
          <h3 className="text-3xl font-bold bg-dark text-light dark:bg-light dark:text-dark mb-4">
            <span className="marker-line !py-2 !px-3">Escrito por:</span>
          </h3>
          {authorDetails.map((author, index) => (
            <AuthorInfo
              key={index}
              author={author}
              quote={authors[index].quote}
              filter={filter}
            />
          ))}
        </div>
      </section>
      {(next.frontmatter || prev.frontmatter) && (
        <div className="main-article">
          <div className="article-grid">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
              {prev.frontmatter && (
                <div className="mb-6">
                  <h4 className="text-2xl font-bold tracking-wide mb-3">
                    <span className="marker-line !py-1 !px-2 bg-dark text-light dark:bg-light dark:text-dark">
                      Projeto anterior
                    </span>
                  </h4>
                  <CardBackground
                    document={prev.frontmatter}
                    authors={prev.authorDetails}
                  />
                </div>
              )}
              {next.frontmatter && (
                <div className="mb-6">
                  <h4 className="text-2xl font-bold tracking-wide md:text-right mb-3">
                    <span className="marker-line !py-1 !px-2 bg-dark text-light dark:bg-light dark:text-dark">
                      Próximo projeto
                    </span>
                  </h4>
                  <CardBackground
                    document={next.frontmatter}
                    authors={next.authorDetails}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BasicLayout;
