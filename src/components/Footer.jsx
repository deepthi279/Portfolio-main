// import {
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
//   FaWhatsapp,
//   FaEnvelope,
// } from "react-icons/fa";
// import { SiReact, SiVite } from "react-icons/si";

// export default function Footer() {
//   return (
//     <footer className="mt-12 p-6 text-center border-t border-gray-800 dark:border-gray-700">
//       <div className="flex justify-center gap-4 mb-4">
//         <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
//           <FaGithub className="text-gray-400 hover:text-white transition text-xl" />
//         </a>
//         <a href="https://linkedin.com/in/deepthi-s-k-2b78292a4" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin className="text-blue-500 hover:text-blue-400 transition text-xl" />
//         </a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//           <FaInstagram className="text-pink-500 hover:text-pink-400 transition text-xl" />
//         </a>
//         <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
//           <FaWhatsapp className="text-green-500 hover:text-green-400 transition text-xl" />
//         </a>
//         <a href="mailto:deepthisalunkey996@gmail.com">
//           <FaEnvelope className="text-red-500 hover:text-red-400 transition text-xl" />
//         </a>
//       </div>
//       <p className="text-gray-500 mb-2">
//         © 2025 Deepthi Salunkey. All rights reserved.
//       </p>
//       <p className="flex items-center justify-center gap-2 text-gray-500">
//         Built with
//         <span className="animate-bounce text-blue-400">
//           <SiReact size={18} />
//         </span>
//         +
//         <span className="animate-pulse text-yellow-400">
//           <SiVite size={18} />
//         </span>
//       </p>
//     </footer>
//   );
// }

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { SiReact, SiVite } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-12 px-6 py-8 text-center bg-gradient-to-br from-blue-100 to-blue-50 dark:from-[#0b1120] dark:to-[#111827] border-t border-gray-300 dark:border-gray-700 transition-colors duration-500">
      {/* Social Icons */}
      <div className="flex justify-center gap-5 mb-6">
        {[
          {
            href: "https://github.com/your-github",
            icon: <FaGithub />,
            color: "hover:bg-gray-900 hover:text-white",
          },
          {
            href: "https://linkedin.com/in/deepthi-s-k-2b78292a4",
            icon: <FaLinkedin />,
            color: "hover:bg-blue-600 hover:text-white",
          },
          {
            href: "https://instagram.com",
            icon: <FaInstagram />,
            color: "hover:bg-pink-600 hover:text-white",
          },
          {
            href: "https://wa.me/your-number",
            icon: <FaWhatsapp />,
            color: "hover:bg-green-600 hover:text-white",
          },
          {
            href: "mailto:deepthisalunkey996@gmail.com",
            icon: <FaEnvelope />,
            color: "hover:bg-red-600 hover:text-white",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl text-gray-600 dark:text-gray-300 rounded-full p-3 transition transform hover:scale-110 ${item.color}`}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">
        © 2025 Deepthi Salunkey. All rights reserved.
      </p>

      {/* Tech Credits */}
      <p className="flex items-center justify-center gap-2 text-gray-500 text-sm">
        Built with
        <span className="animate-bounce text-blue-500">
          <SiReact size={18} />
        </span>
        +
        <span className="animate-pulse text-yellow-500">
          <SiVite size={18} />
        </span>
      </p>
    </footer>
  );
}
