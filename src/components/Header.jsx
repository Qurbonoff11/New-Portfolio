import ThemeMode from "./buttons/ThemeMode";

const Header = ({ darkMode, toggleDarkMode }) => {
  const headerLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="w-full bg-neutral-300 fixed dark:bg-neutral-800 px-4 md:px-0">
      <nav className="container mx-auto flex justify-between items-center py-2">
        <a href="#" className="font-ubunut font-bold text-3xl dark:text-neutral-200">
          Portfolio
        </a>
        <div className="flex gap-6 items-center">
          <ul className="flex gap-4 dark:text-neutral-200">
            {headerLinks.map((link) => (
              <li className="cursor-pointer duration-300 ease-in-out hover:text-blue-500" key={link}>
                <a href="">{link}</a>
              </li>
            ))}
          </ul>
          <ThemeMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
