/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBg: "#F7F6EF",
        myTextPrimary: "#363531",
        myAttention: "#4169E1",
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },

      backgroundImage: {
        //ADV
        allegrini: "url(@/assets/1_Allegrini4.webp)",
        barilla: "url(@/assets/1_Barilla3.webp)",
        mos: "url(@/assets/1_Mos2.webp)",
        parmacotto: "url(@/assets/1_ParmaCotto2.webp)",
        pedretti: "url(@/assets/1_Pedretti3.webp)",
        qcterme: "url(@/assets/1_Terme5.webp)",
        sease: "url(@/assets/1_Sease1.webp)",
        //RES
        romero: "url(@/assets/2_Romero2.jpg)",
        boer: "url(@/assets/2_Boer2.webp)",
        rei: "url(@/assets/2_Rei1.webp)",
        magenes: "url(@/assets/2_Magenes2.webp)",
        taproom: "url(@/assets/2_Tap3.jpg)",
        //DES
        angiolieri: "url(@/assets/3_Angiolieri1.jpg)",
        maison: "url(@/assets/3_Maison12.jpg)",
        //BOOKS (change)
        annamo: "url(@/assets/4_Annamo6.webp)",
        trabocchi: "url(@/assets/4_Trabocchi4.webp)",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      xl: "1400px",
    },
  },
  plugins: [],
}
