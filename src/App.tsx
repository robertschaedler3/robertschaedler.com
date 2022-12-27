import "./App.css";
import portrait from "./images/portrait.jpg";

import { GitHub, Linkedin } from "react-feather";
import { Dots, FancyText, Footer, IconButton, Tag } from "./components";

function App() {
  return (
    <>
      <div className="text-neutral-700 dark:text-stone-200">
        <div className="flex flex-row">
          <div className="flex flex-col h-screen w-full px-40">
            <div className="fixed top-0 left-0 bg-stone-200  dark:bg-neutral-800 -z-50">
              <Dots />
            </div>

            <div className="absolute right-60 -bottom-16">
              <div className="flex flex-row justify-center items-center gap-10">
                <div className="h-112 w-36 bg-stone-300 dark:bg-neutral-900 drop-shadow-md"></div>
                <div className="h-112 w-36 bg-stone-300 dark:bg-neutral-900 drop-shadow-md"></div>
                <div className="h-112 w-36 bg-stone-300 dark:bg-neutral-900 drop-shadow-md"></div>
              </div>
            </div>

            <div className="flex flex-row justify-end items-center h-24 z-10">
              <IconButton
                className="divide-x divide-stone-400 hover:divide-neutral-700 bg-stone-300 dark:bg-neutral-900 hover:text-neutral-700 hover:bg-sky-300 hover:-translate-y-1 transition-all"
                href="https://www.linkedin.com/in/robert-schaedler-iii/"
              >
                <span className="font-medium font-mono tracking-wider mr-2 transition-all">
                  Connect
                </span>
                <span>
                  <Linkedin size="18" className="ml-2 transition-all" />
                </span>
              </IconButton>
            </div>

            <div className="flex flex-row w-full">
              <div className="flex flex-col justify-center items-start h-full w-full">
                <Tag type="h1">
                  <h1 className="text-7xl font-extrabold uppercase">
                    <FancyText content={["Robert", "Schaedler"]} />
                  </h1>
                </Tag>

                <div className="group relative h-56 w-96 mt-6 mb-6">
                  <img
                    src={portrait}
                    alt="Robert Schaedler"
                    className="absolute object-cover w-full h-full z-10 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all border-2 border-neutral-900 dark:border-neutral-100 drop-shadow-2xl"
                  />
                  <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-neutral-500 dark:border-stone-300 group-hover:translate-y-1 group-hover:translate-x-1 group-hover:border-sky-500 transition-all"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-end item-center w-full z-10">
              <div className="flex flex-col justify-center items-end">
                <h2 className="text-5xl font-extrabold uppercase">
                  <FancyText content="Software Engineer" />
                </h2>
                <h4 className="font-mono text-neutral-500 dark:text-neutral-300">
                  @ Microsoft
                </h4>
              </div>
            </div>

            <div className="fixed bottom-0 left-0 px-5 text-neutral-500 dark:text-neutral-300">
              <div className="flex flex-col justify-center items-center gap-4">
                <a
                  href="https://github.com/robertschaedler3"
                  className="font-mono vertical hover:text-sky-500 hover:-translate-y-1 transition-all"
                >
                  @robertschaedler3
                </a>
                <GitHub />
                <div className="h-48 border-neutral-500 dark:border-stone-300 border-l-2"></div>
              </div>
            </div>
          </div>
        </div>

        <Footer className="mt-12 h-28" />
      </div>
    </>
  );
}

export default App;
