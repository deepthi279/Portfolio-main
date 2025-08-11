// export default function Experience() {
//   const experiences = [
//     {
//       role: "Application Consultant Trainee",
//       company: "Luminous Pathways",
//       period: "Mar 2025 – Present",
//       description: [
//         "Engineered robust MySQL schemas and Django authentication.",
//         "Integrated dynamic front-end forms with backend logic.",
//         "Guided tech stack selection and solution design.",
//       ],
//       skills: ["Django", "MySQL", "Python"],
//     },
//     {
//       role: "Software Analyst Intern",
//       company: "Luminous Pathways",
//       period: "Dec 2024 – Mar 2025",
//       description: [
//         "Developed reusable Angular components.",
//         "Built REST APIs and data pipelines.",
//         "Documented user flows and technical specs.",
//       ],
//       skills: ["Angular", "Django"],
//     },
//     {
//       role: "Frontend Developer",
//       company: "Spectra IT Solutions",
//       period: "Jan 2020 – Nov 2022",
//       description: [
//         "Delivered mobile-responsive designs.",
//         "Optimized site performance.",
//         "Integrated RESTful APIs.",
//       ],
//       skills: ["React", "Vue", "Django"],
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       className="py-16 px-4 max-w-4xl mx-auto"
//       data-aos="fade-up"
//     >
//       <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
//         Experience
//       </h2>
//       <div className="relative border-l border-blue-500 dark:border-blue-400">
//         {experiences.map((exp, idx) => (
//           <div
//             key={idx}
//             className="relative mb-12 ml-8"
//             data-aos="fade-up"
//             data-aos-delay={idx * 100}
//           >
//             {/* DOT REMOVED */}
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
//               {exp.role}
//             </h3>
//             <p className="text-purple-600 dark:text-purple-400">{exp.company}</p>
//             <p className="italic text-gray-600 dark:text-gray-400">{exp.period}</p>
//             <ul className="list-disc ml-5 mt-3 text-gray-700 dark:text-gray-300 space-y-1">
//               {exp.description.map((line, i) => (
//                 <li key={i}>{line}</li>
//               ))}
//             </ul>
//             <div className="flex flex-wrap gap-2 mt-3">
//               {exp.skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="bg-slate-300 dark:bg-slate-700 text-xs px-2 py-1 rounded text-gray-800 dark:text-gray-200"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function Experience() {
  const experiences = [
    {
      role: "Application Consultant Trainee",
      company: "Luminous Pathways",
      period: "Mar 2025 – Present",
      description: [
        "Engineered robust MySQL schemas and Django authentication.",
        "Integrated dynamic front-end forms with backend logic.",
        "Guided tech stack selection and solution design.",
      ],
      skills: ["Django", "MySQL", "Python"],
    },
    {
      role: "Software Analyst Intern",
      company: "Luminous Pathways",
      period: "Dec 2024 – Mar 2025",
      description: [
        "Developed reusable Angular components.",
        "Built REST APIs and data pipelines.",
        "Documented user flows and technical specs.",
      ],
      skills: ["Angular", "Django"],
    },
    {
      role: "Frontend Developer",
      company: "Isys Technologies",
      period: "Jan 2020 – Nov 2022",
      description: [
        "Delivered mobile-responsive designs.",
        "Optimized site performance.",
        "Integrated RESTful APIs.",
      ],
      skills: ["React", "Vue", "Django"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 px-4 max-w-5xl mx-auto bg-gradient-to-b from-blue-50 to-white dark:from-[#0b1120] dark:to-[#111827] transition-colors duration-500"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
        data-aos="zoom-in"
      >
        Experience
      </h2>

      <div className="relative border-l-4 border-blue-400 dark:border-blue-600 ml-4">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="group relative mb-12 pl-6 transition-all duration-300 transform bg-white dark:bg-[#1f2937] rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:scale-[1.03] hover:shadow-2xl hover:bg-blue-100 dark:hover:bg-[#2a2a2a]"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Dot Indicator */}
            <div className="absolute -left-3 top-4 w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-800"></div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {exp.role}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {exp.company}
            </p>
            <p className="italic text-gray-500 dark:text-gray-400">{exp.period}</p>

            <ul className="list-disc ml-5 mt-3 text-gray-700 dark:text-gray-300 space-y-1">
              {exp.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold transition-transform duration-300 transform group-hover:scale-110"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

