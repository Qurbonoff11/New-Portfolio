import { useState } from "react";
import Section from "./components/section";
import Header from "./components/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark scroll-smooth" : " scroll-smooth"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Section />
    </div>
  );
};

export default App;
