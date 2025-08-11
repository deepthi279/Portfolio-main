// import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
//       data-aos="fade-up"
//     >
//       {/* Contact Info */}
//       <div
//         className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-lg bg-white dark:bg-[#1f2937] transition"
//         data-aos="fade-right"
//       >
//         <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-md">
//           Let's Connect
//         </h2>
//         <p className="mb-6 text-gray-600 dark:text-gray-400">
//           I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
//         </p>
//         <ul className="space-y-4">
//           {[
//             {
//               icon: <FaEnvelope />,
//               href: "mailto:deepthisalunkey996@gmail.com",
//               label: "deepthisalunkey996@gmail.com"
//             },
//             {
//               icon: <FaGithub />,
//               href: "https://github.com/your-github",
//               label: "github.com/your-github"
//             },
//             {
//               icon: <FaLinkedin />,
//               href: "https://linkedin.com/in/deepthi-s-k-2b78292a4",
//               label: "linkedin.com/in/deepthi-s-k-2b78292a4"
//             },
//           ].map((item) => (
//             <li key={item.href} className="flex items-center gap-3">
//               <a
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition transform hover:scale-125 duration-300"
//               >
//                 {item.icon}
//               </a>
//               <span className="text-gray-700 dark:text-gray-300">
//                 {item.label}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Contact Form */}
//       <div
//         className="bg-white dark:bg-[#111111] p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
//         data-aos="fade-left"
//       >
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 bg-white dark:bg-[#1c1c1c] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 bg-white dark:bg-[#1c1c1c] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
//           />
//           <textarea
//             rows="4"
//             placeholder="Your Message"
//             className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 bg-white dark:bg-[#1c1c1c] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition transform hover:scale-105"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-blue-50 to-white dark:from-[#0b1120] dark:to-[#111827] transition-colors duration-500"
      data-aos="fade-up"
    >
      {/* Contact Info */}
      <div
        className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-lg bg-white dark:bg-[#1f2937] transform hover:scale-105 transition duration-300"
        data-aos="fade-right"
      >
        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Let's Connect
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <ul className="space-y-4">
          {[
            {
              icon: <FaEnvelope />,
              href: "mailto:deepthisalunkey996@gmail.com",
              label: "deepthisalunkey996@gmail.com"
            },
            {
              icon: <FaGithub />,
              href: "hhttps://github.com/deepthi279",
              label: "github.com/your-github"
            },
            {
              icon: <FaLinkedin />,
              href: "https://linkedin.com/in/deepthi-s-k-2b78292a4",
              label: "linkedin.com/in/deepthi-s-k-2b78292a4"
            },
          ].map((item) => (
            <li key={item.href} className="flex items-center gap-4">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-blue-500 hover:bg-blue-200 dark:hover:bg-blue-800 transition-transform transform hover:scale-110 duration-300"
              >
                {item.icon}
              </a>
              <span className="text-gray-700 dark:text-gray-300">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Form */}
      <div
        className="bg-white dark:bg-[#1f2937] p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 transform hover:scale-105 transition duration-300"
        data-aos="fade-left"
      >
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Send a Message</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 bg-white dark:bg-[#1c1c1c] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 bg-white dark:bg-[#1c1c1c] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 bg-white dark:bg-[#1c1c1c] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
