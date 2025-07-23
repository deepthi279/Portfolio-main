// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Experience from "./pages/Experience";
// import Education from "./pages/Education";
// import Certifications from "./pages/Certifications";
// import Contact from "./pages/Contact";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";

// export default function App() {
//   useEffect(() => {
//     // Smooth scrolling to sections
//     const links = document.querySelectorAll("nav a[href^='#']");
//     links.forEach((link) => {
//       link.onclick = (e) => {
//         e.preventDefault();
//         const target = document.querySelector(link.getAttribute("href"));
//         if (target) {
//           target.scrollIntoView({ behavior: "smooth" });
//         }
//       };
//     });

//     // Initialize AOS animations
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="bg-white dark:bg-[#0b0b0b] text-gray-900 dark:text-white transition-colors duration-300 font-sans">
//       <Navbar />
//       <main className="pt-10 space-y-10">
//         <Home />
//         <About />
//         <Skills />
//         <Projects />
//         <Experience />
//         <Education />
//         <Certifications />
//         <Contact />
//       </main>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// }

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  useEffect(() => {
    // Smooth scrolling
    const links = document.querySelectorAll("nav a[href^='#']");
    links.forEach((link) => {
      link.onclick = (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      };
    });

    // Animate on scroll init
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white dark:from-[#0b1120] dark:to-[#111827] text-gray-900 dark:text-white transition-colors duration-300 font-sans">
      <Navbar />
      <main className="pt-10 space-y-10 animate-zoom-in">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
