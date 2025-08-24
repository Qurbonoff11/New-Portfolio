import { LuSquareTerminal } from "react-icons/lu";
import { TypeAnimation } from "react-type-animation";
import { PcImg } from "../assets";

const Section = () => {

  const img = PcImg

  return (
    <main className="w-full flex justify-center items-center h-screen dark:bg-neutral-900 py-[52px]">
      <section className="container mx-auto h-full flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-[500] font-ubunut dark:text-neutral-200">
            Hello, I'm <br />
            <span className="text-8xl font-extrabold text-blue-500">
              Qurbonoff
            </span>
          </h1>
          <div className="rounded-xl overflow-hidden mt-6 bg-black">
            <div className="w-full bg-gray-300 flex justify-between items-center px-3 py-2 dark:bg-gray-900">
              <div className="flex justify-start items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-red-600"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
              </div>
              <div className="text-lg text-gray-600">
                <LuSquareTerminal />
              </div>
            </div>
            <div className="p-3 text-md font-medium text-neutral-200 font-google-sans-code">
              <p>
                <span className="text-neutral-400">$</span>My-Skills
                {/* <span className="text-blue-500"> Developer</span> */}
                <TypeAnimation
                  sequence={[
                    " HTML",
                    1000,
                    " CSS",
                    1000,
                    " JavaScript",
                    1000,
                    " ReactJs",
                    1000,
                    " Tailwindcss",
                    1000,
                    " Sass",
                    1000,
                    " TypeScript",
                    1000,
                    " PHP",
                    1000,
                    " C++",
                    1000,
                    " Vite",
                    1000,
                    " VueJs",
                    1000,
                    " Python",
                    1000,
                    " Less css",
                    1000,
                    " Pug",
                    1000,
                    " Markdown",
                    1000,
                    " Bash",
                    1000,
                    " Linux",
                    1000,
                    " Babel",
                    1000,
                    " NodeJs",
                    1000,
                    " NextJs",
                    1000,
                    " Firebase",
                    1000,
                  ]}
                  speed={50}
                  style={{ color: "oklch(62.3% 0.214 259.815)" }}
                  repeat={Infinity}
                />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="w-[700px]" src={img} alt="img" />
        </div>
      </section>
    </main>
  );
};

export default Section;
