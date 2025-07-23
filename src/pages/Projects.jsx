
export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "Responsive portfolio built in React, upgraded with Angular and Node.js.",
    },
    {
      title: "E-commerce Front-End",
      description:
        "Functional online store with product listings, cart, and checkout flows.",
    },
    {
      title: "Weather Application",
      description:
        "Real-time weather insights using OpenWeatherMap API and React.",
    },
    {
      title: "Marketing Dashboard",
      description:
        "Power BI dashboards for marketing analytics and KPI tracking.",
    },
    {
      title: "Malaria Detection",
      description:
        "TensorFlow CNN model deployed with Flask for malaria detection.",
    },
    {
      title: "Eco Loop (Capstone)",
      description:
        "Agile project to build an eco-focused community engagement platform.",
    },
  ];


  return (
    <section
      id="projects"
      className="py-16 px-4 max-w-6xl mx-auto bg-gradient-to-br from-blue-50 to-white dark:from-[#0b1120] dark:to-[#111827] transition-colors duration-500"
      data-aos="fade-up"
    >
      
      <h2
      className="text-5xl font-extrabold text-center mb-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md"
      style={{ paddingBottom: '0.5rem' }}
      data-aos="zoom-in"
    >
      Projects
    </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div
            key={proj.title}
            className="group p-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1f1f1f] shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={i * 100}
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition">
              {proj.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
