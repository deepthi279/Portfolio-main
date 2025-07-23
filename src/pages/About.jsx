
// export default function About() {
//   return (
//     <section
//       id="about"
//       className="py-20 px-4 max-w-6xl mx-auto text-center bg-gradient-to-b from-blue-50 to-white dark:from-[#0d1220] dark:to-[#0a0f1c] transition-colors duration-500"
//       data-aos="fade-up"
//     >
//       {/* Section Heading */}
//       <h2
//         className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 drop-shadow-xl"
//         data-aos="zoom-in"
//       >
//         About Me
//       </h2>

//       {/* Subtext */}
//       <p
//         className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 mb-6"
//         data-aos="fade-up"
//         data-aos-delay="100"
//       >
//         Passionate Frontend Developer crafting elegant, responsive applications and solving real-world problems.
//       </p>

//       {/* Bio Paragraphs */}
//       <p
//         className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-3xl mx-auto"
//         data-aos="fade-up"
//         data-aos-delay="200"
//       >
//         👋 Hi, I'm{" "}
//         <span className="font-semibold text-blue-600 dark:text-blue-400">
//           Deepthi Salunkey
//         </span>
//         , a Frontend Developer with 3+ years experience building high-performing web apps. I specialize in{" "}
//         <span className="font-medium">React.js, Vue.js, Angular, Django, and AWS</span> — and thrive in clean code, smooth UI, and scalable design.
//       </p>

//       <p
//         className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-3xl mx-auto"
//         data-aos="fade-up"
//         data-aos-delay="300"
//       >
//         With expertise in{" "}
//         <span className="font-medium">
//           JavaScript, Python, REST APIs, and modern UI frameworks
//         </span>
//         , I’m passionate about delivering results that matter — both to users and businesses.
//       </p>

//       {/* Skills Badges */}
//       <div
//         className="flex flex-wrap justify-center gap-3 mb-10"
//         data-aos="fade-up"
//         data-aos-delay="400"
//       >
//         {[
//           "React.js", "Vue.js", "Angular", "Django", "Node.js",
//           "AWS", "Tailwind CSS", "Figma", "REST APIs",
//         ].map((skill) => (
//           <span
//             key={skill}
//             className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 shadow hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-200 dark:hover:bg-blue-800"
//           >
//             {skill}
//           </span>
//         ))}
//       </div>

//       {/* CTA */}
//       <a
//         href="#contact"
//         className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-full font-bold hover:scale-105 transition transform duration-300 shadow-lg"
//         data-aos="zoom-in"
//       >
//         🚀 Let's collaborate on impactful products
//       </a>

//       {/* Info Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 text-left">
//         {[
//           {
//             icon: "👤",
//             title: "Who I Am",
//             description: [
//               "Frontend Developer passionate about software engineering.",
//               "Enjoy solving complex problems and building scalable applications.",
//               "Dedicated to continuous learning and self-improvement.",
//             ],
//           },
//           {
//             icon: "💻",
//             title: "What I Do",
//             description: [
//               "Develop high-performance web apps using modern tech stacks.",
//               "Integrate APIs and create responsive user experiences.",
//               "Follow best practices in Agile and Scrum methodologies.",
//             ],
//           },
//           {
//             icon: "🎯",
//             title: "My Goals",
//             description: [
//               "Lead impactful frontend projects.",
//               "Expand expertise into full-stack development.",
//               "Mentor and empower the next generation of developers.",
//             ],
//           },
//           {
//             icon: "💡",
//             title: "My Philosophy",
//             description: [
//               "Technology should simplify and empower.",
//               "Empathy and innovation are the keys to success.",
//               "Continuous learning fuels professional growth.",
//             ],
//           },
//         ].map((card, i) => (
//           <div
//             key={card.title}
//             className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111827] shadow hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition duration-300"
//             data-aos="fade-up"
//             data-aos-delay={i * 100}
//           >
//             <div className="flex items-center mb-3">
//               <span className="text-2xl group-hover:animate-pulse">{card.icon}</span>
//               <h3 className="ml-3 text-lg font-semibold text-gray-800 dark:text-white">
//                 {card.title}
//               </h3>
//             </div>
//             <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-1">
//               {card.description.map((point) => (
//                 <li key={point}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 max-w-6xl mx-auto text-center bg-gradient-to-b from-blue-50 to-white dark:from-[#0d1220] dark:to-[#0a0f1c] transition-colors duration-500"
      data-aos="fade-up"
    >
      {/* Section Heading */}
      <h2
        className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 drop-shadow-xl"
        data-aos="zoom-in"
      >
        About Me
      </h2>

      {/* Subtext */}
      <p
        className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Passionate Frontend Developer crafting elegant, responsive applications and solving real-world problems.
      </p>

      {/* Bio Paragraphs */}
      <p
        className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        👋 Hi, I'm{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Deepthi Salunkey
        </span>

        , a Frontend Developer with 3+ years experience building high-performing web apps. I specialize in{" "}
        <span className="font-medium">React.js, Vue.js, Angular, Django, and AWS</span> — and thrive in clean code, smooth UI, and scalable design.
      </p>

      <p
        className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        With expertise in{" "}
        <span className="font-medium">
          JavaScript, Python, REST APIs, and modern UI frameworks
        </span>
        , I’m passionate about delivering results that matter — both to users and businesses.
      </p>

      {/* Skills Badges */}
      <div
        className="flex flex-wrap justify-center gap-3 mb-10"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {["React.js", "Vue.js", "Angular", "Django", "Node.js", "AWS", "Tailwind CSS", "Figma", "REST APIs"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 shadow hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-full font-bold hover:scale-105 transition transform duration-300 shadow-lg"
        data-aos="zoom-in"
      >
        🚀 Let's collaborate on impactful products
      </a>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 text-left">
        {[{
          icon: "👤",
          title: "Who I Am",
          description: [
            "Frontend Developer passionate about software engineering.",
            "Enjoy solving complex problems and building scalable applications.",
            "Dedicated to continuous learning and self-improvement.",
          ],
        },
        {
          icon: "💻",
          title: "What I Do",
          description: [
            "Develop high-performance web apps using modern tech stacks.",
            "Integrate APIs and create responsive user experiences.",
            "Follow best practices in Agile and Scrum methodologies.",
          ],
        },
        {
          icon: "🎯",
          title: "My Goals",
          description: [
            "Lead impactful frontend projects.",
            "Expand expertise into full-stack development.",
            "Mentor and empower the next generation of developers.",
          ],
        },
        {
          icon: "💡",
          title: "My Philosophy",
          description: [
            "Technology should simplify and empower.",
            "Empathy and innovation are the keys to success.",
            "Continuous learning fuels professional growth.",
          ],
        }].map((card, i) => (
          <div
            key={card.title}
            className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] shadow transition duration-300 transform hover:-translate-y-2 hover:scale-[1.03] hover:bg-blue-50 dark:hover:bg-[#2a2a2a] cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl group-hover:animate-pulse">{card.icon}</span>
              <h3 className="ml-3 text-lg font-semibold text-gray-800 dark:text-white">
                {card.title}
              </h3>
            </div>
            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-1">
              {card.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

