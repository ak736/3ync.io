// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         landingpage: "url('/img/LandingPage.png')",
//       },
//     },
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         gray: {
//           "100": "#020104",
//           "200": "rgba(255, 255, 255, 0.27)",
//         },
//         white: "#fff",
//         gainsboro: "#e6e6e6",
//         black: "#000",
//         darkgray: "#b1b1b1",
//         darkorchid: "#6a42d8",
//       },
//       spacing: {},
//       fontFamily: {
//         inter: "Inter",
//       },
//       borderRadius: {
//         "181xl": "200px",
//       },
//     },
//     fontSize: {
//       base: "16px",
//       "lgi-2": "19.2px",
//       "mid-6": "17.6px",
//       inherit: "inherit",
//     },
//     screens: {
//       lg: {
//         max: "1200px",
//       },
//       mq750: {
//         raw: "screen and (max-width: 750px)",
//       },
//       mq450: {
//         raw: "screen and (max-width: 450px)",
//       },
//     },
//   },
//   corePlugins: {
//     preflight: false,
//   },
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#020104",
          200: "rgba(255, 255, 255, 0.27)",
        },
        white: "#fff",
        gainsboro: "#e6e6e6",
        black: "#000",
        darkgray: "#b1b1b1",
        darkorchid: "#6a42d8",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "181xl": "200px",
      },
    },
    fontSize: {
      base: "16px",
      "lgi-2": "19.2px",
      "mid-6": "17.6px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};


