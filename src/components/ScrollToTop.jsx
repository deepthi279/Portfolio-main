// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";

// export default function ScrollToTop() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <button
//       onClick={scrollToTop}
//       className={`fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110 ${
//         visible ? "opacity-100" : "opacity-0 pointer-events-none"
//       }`}
//       aria-label="Scroll to top"
//     >
//       <FaArrowUp />
//     </button>
//   );
// }
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 text-white p-3 rounded-full 
        bg-gradient-to-br from-blue-500 to-blue-700 
        dark:from-blue-800 dark:to-blue-900 
        shadow-lg hover:shadow-2xl 
        hover:ring-2 hover:ring-blue-300 dark:hover:ring-blue-600
        transition-transform duration-300 
        transform hover:scale-125 active:scale-90
        ${
          visible
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
}
