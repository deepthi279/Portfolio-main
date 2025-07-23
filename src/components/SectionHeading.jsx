// export default function SectionHeading({ children }) {
//   return (
//     <h2
//       className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg"
//       data-aos="zoom-in"
//     >
//       {children}
//     </h2>
//   );
// }
export default function SectionHeading({ title, subtitle }) {
  return (
    <div
      className="text-center mb-12"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      {/* Title */}
      <h2
        className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg transition-transform transform hover:scale-105 duration-300"
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-2 text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium transition-all">
          {subtitle}
        </p>
      )}

      {/* Underline dots like in m-dinesh-30 */}
      <div className="mt-4 flex justify-center items-center gap-2">
        <span className="w-16 h-0.5 bg-blue-400"></span>
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span className="w-16 h-0.5 bg-blue-400"></span>
      </div>
    </div>
  );
}
