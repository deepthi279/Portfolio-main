// export default {
//   darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#6366F1', // Indigo
//         secondary: '#A855F7', // Purple
//       },
//     },
//   },
//   plugins: [],
// };




export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1', // Indigo
        secondary: '#A855F7', // Purple

        lightHover: '#DBEAFE', // Light blue hover (light mode)
        darkHover: '#1E40AF',  // Darker blue for dark mode
      },
    },
  },
  plugins: [],
};
