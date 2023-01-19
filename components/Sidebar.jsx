import react, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div
        className={`flex justify-between flex-col self-start sticky top-0 bg-transparent flex-shrink z-50 h-screen min-h-screen w-20 border-r border-gray`}
      >
        <nav className="h-full">
          <div className=" block h-full">
            <div className="flex justify-between flex-col h-screen">
              <div className="text-center py-6 px-0">
                <Link href="/">
                  <img
                    src="/images/ultimate-logo-red.svg"
                    className="mx-auto hidden dark:block"
                    width="60"
                    height="60"
                    alt="Ultimate Mercer Logo"
                  />
                </Link>

                <Link href="/">
                  <img
                    src="/images/ultimate-logo-dark.svg"
                    className="mx-auto block dark:hidden"
                    width="60"
                    height="60"
                    alt="Ultimate Mercer Logo"
                  />
                </Link>
              </div>
              <div className="block"></div>
              <div className="block">
                <div className="px-0 py-2">
                  <div className="py-2 px-0">
                    <button
                      className={`py-2 px-3 block mx-auto rounded-lg bg-gray-200 dark:bg-gray-600 hover:ring-2 ring-gray-300 transition-all`}
                      onClick={() =>
                        setTheme(currentTheme === "dark" ? "light" : "dark")
                      }
                    >
                      {mounted && (
                        <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
                      )}
                    </button>
                  </div>
                  {/* {currentTheme === "dark" ? (
                    <>
                      <div className="py-2 px-0">
                        <button
                          className="py-2 px-3 block mx-auto bg-slate-800 hover:bg-light hover:text-dark rounded"
                          onClick={() => setTheme("light")}
                        >
                          <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="py-2 px-0">
                        <button
                          className="py-2 px-3 block mx-auto bg-gray-100 hover:bg-dark hover:text-light rounded"
                          onClick={() => setTheme("dark")}
                        >
                          <div>
                            <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
                          </div>
                        </button>
                      </div>
                    </>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
