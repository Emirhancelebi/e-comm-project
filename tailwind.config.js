export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {

    container: {
      center: true, // Her zaman mx-auto yapar
      padding: '2rem', // Mobilde kenarlardan otomatik boşluk bırakır
      screens: {
        sm: '100%',
        md: '728px',
        lg: '1050px', // Senin Figma tasarımındaki ana genişlik
      },
    },
    fontSize: {
      h1: ["58px", { lineHeight: "80px", fontWeight: "700", letterSpacing: "0.0125em" }],
      h2: ["40px", { lineHeight: "50px", fontWeight: "700", letterSpacing: "0.0125em" }],
      h3: ["24px", { lineHeight: "32px", fontWeight: "700", letterSpacing: "0.00625em" }],
      h4: ["20px", { lineHeight: "30px", fontWeight: "400", letterSpacing: "0.00625em" }],
      h5: ["16px", { lineHeight: "24px", fontWeight: "700", letterSpacing: "0.00625em" }],
      h6li: ["14px", { lineHeight: "24px", fontWeight: "700", letterSpacing: "0.0125em" }],
      p: ["14px", { lineHeight: "20px", fontWeight: "400", letterSpacing: "0.0125em" }],
      btn: ["14px", { lineHeight: "22px", fontWeight: "700", letterSpacing: "0.0125em" }],
      small: ["12px", { lineHeight: "16px", fontWeight: "400", letterSpacing: "0.0125em" }],
      mobilmenu: ["30px", { lineHeight: "45px", fontWeight: "400", letterSpacing: "0.0625em" }],
    },
    fontFamily: {
      main: ["Montserrat"],
    },
    colors: {
      primary: "#252B42",
      secondary: "#737373",
      blu: "#23A6F0",
      light: "#FFFFFF",
      success: "#2DC071",
      gray: "#FAFAFA"
    },
  },

  plugins: [],
}
