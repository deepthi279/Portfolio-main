// import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="py-16 bg-gradient-to-b from-white to-gray-100 dark:from-[#0b1120] dark:to-[#111827]"
//     >
//       <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
//         {/* Left Column */}
//         <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-md bg-white dark:bg-[#1f2937]">
//           <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
//             Let's Connect
//           </h2>
//           <p className="mb-6 text-gray-600 dark:text-gray-400">
//             I’m always open to discussing new projects, creative ideas, or
//             opportunities to be part of your vision.
//           </p>
//           <ul className="space-y-4">
//             <li className="flex items-center gap-3">
//               <a
//                 href="mailto:deepthisalunkey996@gmail.com"
//                 className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition transform hover:scale-110 duration-300"
//               >
//                 <FaEnvelope />
//               </a>
//               <span className="text-gray-700 dark:text-gray-300">
//                 deepthisalunkey996@gmail.com
//               </span>
//             </li>
//             <li className="flex items-center gap-3">
//               <a
//                 href="https://github.com/your-github"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition transform hover:scale-110 duration-300"
//               >
//                 <FaGithub />
//               </a>
//               <span className="text-gray-700 dark:text-gray-300">
//                 github.com/your-github
//               </span>
//             </li>
//             <li className="flex items-center gap-3">
//               <a
//                 href="https://linkedin.com/in/deepthi-s-k-2b78292a4"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition transform hover:scale-110 duration-300"
//               >
//                 <FaLinkedin />
//               </a>
//               <span className="text-gray-700 dark:text-gray-300">
//                 linkedin.com/in/deepthi-s-k-2b78292a4
//               </span>
//             </li>
//           </ul>
//         </div>

//         {/* Right Column - Contact Form */}
//         <div className="bg-gray-50 dark:bg-[#1f2937] border border-gray-500 dark:border-gray-700 rounded-lg p-6 shadow-lg">

//           <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
//             Get In Touch
//           </h2>
//           <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//             <div>
//               <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-blue-500 dark:bg-[#111827] dark:text-gray-100"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-blue-500 dark:bg-[#111827] dark:text-gray-100"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Message
//               </label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your message"
//                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded focus:ring-2 focus:ring-blue-500 dark:bg-[#111827] dark:text-gray-100"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition transform hover:scale-105"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-[#0b1120] dark:to-[#111827] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div
          className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-md bg-white dark:bg-[#1f2937] transition transform hover:scale-[1.02] duration-300"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Let&apos;s Connect
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <ul className="space-y-4">
            {[
              {
                href: "mailto:deepthisalunkey996@gmail.com",
                icon: <FaEnvelope />,
                label: "deepthisalunkey996@gmail.com",
              },
              {
                href: "https://github.com/deepthi279",
                icon: <FaGithub />,
                label: "github.com/your-github",
              },
              {
                href: "https://linkedin.com/in/deepthi-s-k-2b78292a4",
                icon: <FaLinkedin />,
                label: "linkedin.com/in/deepthi-s-k-2b78292a4",
              },
            ].map((item) => (
              <li key={item.href} className="flex items-center gap-3">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-xl text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 transition transform hover:scale-110"
                >
                  {item.icon}
                </a>
                <span className="text-gray-800 dark:text-gray-200">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <div
          className="bg-white dark:bg-[#1f2937] border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-lg transition transform hover:scale-[1.02] duration-300"
          data-aos="fade-left"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-[#111827] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-[#111827] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-[#111827] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
