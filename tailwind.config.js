module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors : {
        "header-bg" : "#2A2A2A",
        "header-link-color" : "#ADADAD",
        "header-link-after-color" : "#0078F2",
        "main-bg-color" : "#121212",
        "grad-bg" : "linear-gradient(to right, #606c88, #3f4c6b)"
     },
     backgroundImage: (theme) => ({
      'gradient-primary': `llinear-gradient(to right, #606c88, #3f4c6b)`,
    }),
    },
          
  
  },
  plugins: [],
  
}