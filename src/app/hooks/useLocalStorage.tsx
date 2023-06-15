import { useState, useEffect } from "react";

function useLocalStorage(key: string, initalValue: string) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      let item;
      if (typeof window !== "undefined") {
        item = window.localStorage.getItem(key);
      }
      return item ? JSON.parse(item) : initalValue;
    } catch (error) {
      console.log(error);
      return initalValue;
    }
  });

  useEffect(() => {
    try {
      const valueToStore =
        typeof storedValue === "function"
          ? storedValue(storedValue)
          : storedValue;

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
