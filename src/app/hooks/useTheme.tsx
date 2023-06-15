import { useEffect } from "react";
import { Theme } from "../enums/theme.enum";
import useLocalStorage from "./useLocalStorage";

function useTheme() {
  const [theme, setTheme] = useLocalStorage("theme", Theme.DARK);

  useEffect(() => {
    const className = Theme.DARK;

    const root = window.document.documentElement;

    theme === Theme.DARK
      ? root.classList.add(className)
      : root.classList.remove(className);
  }, [theme]);

  return [theme, setTheme];
}

export default useTheme;
