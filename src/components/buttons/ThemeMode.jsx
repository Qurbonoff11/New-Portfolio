import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeMode = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="text-2xl text-neutral-900 duration-500 cursor-pointer active:animate-spin active:opacity-5 dark:text-neutral-200"
    >
      {darkMode ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeMode;
