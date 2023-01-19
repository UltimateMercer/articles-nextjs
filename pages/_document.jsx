import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#eaeaea"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#121212"
        />
      </Head>
      <body className="bg-light text-dark dark:bg-dark dark:text-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
