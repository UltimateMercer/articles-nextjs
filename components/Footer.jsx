import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="max-w-full pt-4 px-6 pb-12 background-texture">
        <div className="container mx-auto">
          <Link href="/">
            <img
              src="/images/ultimate-logo-red.svg"
              className="mx-auto hidden dark:block"
              width="100"
              height="100"
              alt="Ultimate Mercer Logo"
            />
          </Link>

          <Link href="/">
            <img
              src="/images/ultimate-logo-dark.svg"
              className="mx-auto block dark:hidden"
              width="100"
              height="100"
              alt="Ultimate Mercer Logo"
            />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
