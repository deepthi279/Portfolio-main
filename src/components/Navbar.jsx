
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 shadow-md transition-all duration-300 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-[#0b1120] dark:to-[#111827] backdrop-blur-md">
      <h1 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-md">
        Deepthi Salunkey
      </h1>

      <div className="flex items-center space-x-4">
        <ul className="hidden md:flex space-x-4 text-sm font-medium">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Projects", href: "#projects" },
            { name: "Experience", href: "#experience" },
            { name: "Education", href: "#education" },
            { name: "Certifications", href: "#certifications" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-3 py-1 rounded transition-all duration-300 transform hover:scale-110 hover:bg-blue-200 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </div>
    </nav>
  );
}
