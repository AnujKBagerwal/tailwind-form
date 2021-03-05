import React, { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    localStorage.setItem("theme", theme);
    root.classList.add(theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
};

export default useDarkMode;
