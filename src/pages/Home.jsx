
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-6 py-16 min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-[#0b1120] dark:to-[#111827] transition-colors duration-500"
    >
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 text-left">
        {/* Badge + Name */}
        <div className="flex flex-col items-start gap-2">
          <div className="px-4 py-1 bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium animate-pulse shadow">
            👋 Hey there! I'm
          </div>

          <h1
            className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent leading-[1.2]"
            style={{
              paddingBottom: '14px',
              lineHeight: '0.8',
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              display: "inline-block",
            }}
          >
            Deepthi Salunkey
                </h1>
        </div>

        {/* Typewriter Subtitle */}
        {/* <div className="mt-6 mb-4 text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-300 h-8 animate-fadeIn"> */}
        <div className="mt-2 mb-4 text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-300 h-8 animate-fadeIn">

          <Typewriter
            words={[
              "Frontend Developer",
              "React.js Specialist",
              "Vue.js Enthusiast",
              "Django Developer",
              "AWS Practitioner",
              "Clean Code Advocate",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>

        {/* Bio */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
          Passionate about crafting elegant, performant web applications. I
          bring designs to life through scalable code and clean architecture.
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "React.js",
            "Vue.js",
            "Angular",
            "Tailwind CSS",
            "Django",
            "Node.js",
            "AWS",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 font-medium transition transform hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mt-4 text-gray-600 dark:text-gray-400">
          <p className="flex items-center gap-2">
            <FaPhone /> +1 (603) 265-2599
          </p>
          <p className="flex items-center gap-2 break-all">
            <FaEnvelope /> deepthisalunkey996@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> Manchester, NH, USA
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="/Deepthi Salunkey-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition hover:scale-105"
          >
            📄 View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700 transition hover:scale-105"
          >
            ✉️ Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/deepthi-s-k-2b78292a4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:deepthisalunkey996@gmail.com"
            className="text-2xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-pink-600 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-800 transition transform hover:scale-125"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* CTA */}
        <p className="mt-6 text-base text-gray-700 dark:text-gray-400 max-w-md animate-fadeInUp">
          💡 Open to freelance projects and collaboration opportunities. Let’s
          build something amazing together!
        </p>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/profile picture.png"
          alt="Deepthi Salunkey"
          className="rounded-full w-80 h-90 object-cover border-4 border-purple-500 shadow-lg hover:scale-105 transform transition duration-500"
        />
      </div>
    </section>
  );
}
