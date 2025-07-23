

export default function Education() {
  const education = [
    {
      degree: "M.S. Information Technology",
      school: "Southern New Hampshire University",
      period: "2023 – Present",
      description: "Focus on advanced web technologies and cloud computing.",
    },
    {
      degree: "B.E. Computer Science",
      school: "Anna University",
      period: "2019 – 2023",
      description: "Graduated with distinction, specializing in full-stack development.",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 px-4 max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-white dark:from-[#0b1120] dark:to-[#111827] transition-colors duration-500"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md"
        data-aos="zoom-in"
      >
        Education
      </h2>

      <div className="relative border-l-4 border-blue-400 dark:border-blue-600 ml-4">
        {education.map((edu, idx) => (
          <div
            key={idx}
            // className="group relative mb-12 pl-6 transition-transform transform hover:scale-[1.02] hover:shadow-xl bg-white dark:bg-[#1f2937] rounded-xl border border-gray-200 dark:border-gray-700 p-6"
            className="group relative mb-12 pl-6 transition-all duration-300 transform bg-white dark:bg-[#1f2937] rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:scale-[1.03] hover:shadow-2xl hover:bg-blue-100 dark:hover:bg-[#2a2a2a]"

            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Dot Indicator */}
            <div className="absolute -left-3 top-4 w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-800"></div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {edu.degree}
            </h3>
            <p className="text-purple-600 dark:text-purple-400">{edu.school}</p>
            <p className="italic text-gray-600 dark:text-gray-400">{edu.period}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
