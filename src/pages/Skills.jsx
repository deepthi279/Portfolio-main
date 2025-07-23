


import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaAws,
  FaGit,
  FaGithub,
  FaBootstrap,
  FaFileExcel,
  FaChartPie,
} from "react-icons/fa";
import {
  SiDjango,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiGooglecloud,
  SiJirasoftware,
  SiTableau,
  SiCanva,
  SiJavascript,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={36} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={36} color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript size={36} color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size={36} color="#61DAFB" /> },
    { name: "Vue.js", icon: <FaVuejs size={36} color="#42B883" /> },
    { name: "Angular", icon: <FaAngular size={36} color="#DD0031" /> },
    { name: "Django", icon: <SiDjango size={36} color="#44FFAA" /> },
    { name: "Node.js", icon: <FaNodeJs size={36} color="#339933" /> },
    { name: "Python", icon: <SiPython size={36} color="#3776AB" /> },
    { name: "AWS", icon: <FaAws size={36} color="#FF9900" /> },
    { name: "Google Cloud", icon: <SiGooglecloud size={36} color="#4285F4" /> },
    { name: "MySQL", icon: <SiMysql size={36} color="#4479A1" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={36} color="#336791" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={36} color="#7952B3" /> },
    { name: "Git", icon: <FaGit size={36} color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub size={36} color="#CCCCCC" /> },
    { name: "Jira", icon: <SiJirasoftware size={36} color="#0052CC" /> },
    { name: "Tableau", icon: <SiTableau size={36} color="#E97627" /> },
    { name: "Excel", icon: <FaFileExcel size={36} color="#217346" /> },
    { name: "Canva", icon: <SiCanva size={36} color="#00C4CC" /> },
    { name: "VS Code", icon: <DiVisualstudio size={36} color="#007ACC" /> },
    { name: "Power BI", icon: <FaChartPie size={36} color="#F2C811" /> },
  ];

  return (
    <section
      id="skills"
      className="py-16 px-4 max-w-6xl mx-auto"
      data-aos="fade-up"
    >
      <h2
        className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg"
        data-aos="zoom-in"
      >
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((s, i) => (
          <div
            key={s.name}
            className="group flex flex-col items-center p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-blue-50 dark:bg-[#0d1b2a] shadow hover:shadow-2xl transform hover:scale-105 transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={i * 50}
          >
            <div className="transition-transform duration-300 group-hover:scale-125">
              {s.icon}
            </div>
            <p className="mt-2 text-gray-800 dark:text-gray-200 text-sm font-medium">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
