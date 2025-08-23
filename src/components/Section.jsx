const Section = () => {
  // const link = "https://skillicons.dev/icons?i=";

  // const logoIconLinks = [
  //   {
  //     id: crypto.randomUUID(),
  //     icon: `${link}html`,
  //     alt: "html"
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     icon: `${link}css`,
  //     alt: "css"
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     icon: `${link}javascript`,
  //     alt: "javascript"
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     icon: `${link}react`,
  //     alt: "react"
  //   },
  // ];

  return (
    <main className="w-full flex justify-center items-center h-screen dark:bg-neutral-900 py-[52px]">
      <section className="container mx-auto h-full flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-medium dark:text-neutral-200 font-ubunut">
            Hi I'm <br />
            <span className="text-7xl font-extrabold text-blue-500">
              Qurbonoff
            </span>
          </h1>
          <p className="text-2xl font-medium dark:text-neutral-200">Full Stack Developer</p>
        </div>
        <div>
          
        </div>
      </section>
    </main>
  );
};

export default Section;
