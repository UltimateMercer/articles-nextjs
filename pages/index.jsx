import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { PageSEO } from "@/components/SEO";
import { useTheme } from "next-themes";
import CardBackground from "@/components/Card/Background";
import ListArticles from "@/components/List/Articles";
import siteMetadata from "@/data/siteMetadata";
import { getAllDocuments } from "@/lib/services";

export const ARTICLES_PER_PAGE = 25;

export async function getStaticProps() {
  return getAllDocuments();
}

const Home = ({ documents, initialDisplayDocuments, pagination }) => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <section className="background-texture">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-7xl md:leading-14">
            Articles
          </h1>
        </div>
        <ListArticles
          documents={documents}
          initialDisplayDocuments={initialDisplayDocuments}
          pagination={pagination}
        />
      </section>
    </>
  );
};

export default Home;
