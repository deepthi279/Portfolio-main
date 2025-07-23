// import { 
//   FaCertificate,
//   FaProjectDiagram,
//   FaChartBar,
//   FaPython,
//   FaBookOpen,
//   FaMicrosoft,
// } from "react-icons/fa";
// import { SiJirasoftware } from "react-icons/si";

// export default function Certifications() {
//   const certs = [
//     {
//       name: "Certified Scrum Master (CSM)",
//       icon: FaCertificate,
//       color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
//     },
//     {
//       name: "Microsoft Dynamics 365 CRM",
//       icon: FaMicrosoft,
//       color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
//     },
//     {
//       name: "Tableau Data Analytics",
//       icon: FaChartBar,
//       color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300",
//     },
//     {
//       name: "Project Management",
//       icon: FaProjectDiagram,
//       color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
//     },
//     {
//       name: "Jira Cloud Edition",
//       icon: SiJirasoftware,
//       color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
//     },
//     {
//       name: "Python Programming",
//       icon: FaPython,
//       color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300",
//     },
//     {
//       name: "Business Analysis Foundation",
//       icon: FaBookOpen,
//       color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300",
//     },
//   ];

//   return (
//     <section
//       id="certifications"
//       className="py-16 px-4 max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-white dark:from-[#0b1120] dark:to-[#111827] transition-colors duration-500"
//       data-aos="fade-up"
//     >
//       <h2
//         className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md"
//         data-aos="zoom-in"
//       >
//         Certifications
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {certs.map((cert, index) => (
//           <div
//             key={cert.name}
//             className="group flex items-center gap-4 bg-white dark:bg-[#1c1c1c] border border-gray-300 dark:border-gray-700 p-4 rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300"
//             data-aos="zoom-in"
//             data-aos-delay={index * 100}
//           >
//             <div
//               className={`p-2 rounded-full transition-colors duration-300 group-hover:${cert.color}`}
//             >
//               <cert.icon size={24} />
//             </div>
//             <span className="text-gray-800 dark:text-gray-200 font-medium">
//               {cert.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import {
  FaCertificate,
  FaProjectDiagram,
  FaChartBar,
  FaPython,
  FaBookOpen,
  FaMicrosoft,
} from "react-icons/fa";
import { SiJirasoftware } from "react-icons/si";

export default function Certifications() {
  const certs = [
    {
      name: "Certified Scrum Master (CSM)",
      icon: FaCertificate,
      baseColor: "text-purple-600 dark:text-purple-300",
    },
    {
      name: "Microsoft Dynamics 365 CRM",
      icon: FaMicrosoft,
      baseColor: "text-blue-600 dark:text-blue-300",
    },
    {
      name: "Tableau Data Analytics",
      icon: FaChartBar,
      baseColor: "text-orange-600 dark:text-orange-300",
    },
    {
      name: "Project Management",
      icon: FaProjectDiagram,
      baseColor: "text-green-600 dark:text-green-300",
    },
    {
      name: "Jira Cloud Edition",
      icon: SiJirasoftware,
      baseColor: "text-blue-600 dark:text-blue-300",
    },
    {
      name: "Python Programming",
      icon: FaPython,
      baseColor: "text-yellow-600 dark:text-yellow-300",
    },
    {
      name: "Business Analysis Foundation",
      icon: FaBookOpen,
      baseColor: "text-indigo-600 dark:text-indigo-300",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-16 px-4 max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-white dark:from-[#0b1120] dark:to-[#111827] transition-colors duration-500"
      data-aos="fade-up"
    >
      <h2
        className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md"
        data-aos="zoom-in"
      >
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certs.map((cert, index) => (
          <div
            key={cert.name}
            className="group flex items-center gap-4 border border-gray-300 dark:border-gray-700 p-4 rounded-xl bg-white dark:bg-[#1c1c1c] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-50 dark:hover:bg-[#2a2a2a]"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="p-2 rounded-full bg-white dark:bg-[#1a1a1a]">
              <cert.icon
                size={24}
                className={`transition-colors duration-300 ${cert.baseColor}`}
              />
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium">
              {cert.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
