// import { useEffect, useState } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState(
//     () =>
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
//   );

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//       localStorage.theme = "dark";
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.theme = "light";
//     }
//   }, [isDark]);

//   return (
//     <button
//       onClick={() => setIsDark(!isDark)}
//       className="text-xl p-2 rounded transition transform hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-700"
//       aria-label="Toggle Theme"
//     >
//       {isDark ? <FaSun /> : <FaMoon />}
//     </button>
//   );
// }
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () =>
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-xl p-2 rounded-full transition-all transform duration-300 ease-in-out
                 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900
                 text-blue-800 dark:text-yellow-400
                 border border-blue-300 dark:border-gray-700
                 shadow-md hover:shadow-xl hover:scale-110"
      aria-label="Toggle Theme"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
