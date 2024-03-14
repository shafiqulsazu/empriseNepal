/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Color
      colors: {
        Color: '#1D293F',
        hover: '#28B0A6',
        RankColor: '#F5A623',
        RankBg: '#FEF2DE',
        Badge_Bg: '#F9C7D2',
        Badge_Bg: '#F9C7D2',
        Badge_Color: '#EE5879',
        lable_Color: '#546179'
      },
      // Color

      // Font Family
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      // Font Family

      // backgroundImage
      backgroundImage: {
        bennar: "url('assets/bennar.jpg')",
        bennar2: "url('assets/bennar2.jpg')",
        bennar3: "url('assets/bennar3.jpg')",
        bennar4: "url('assets/bennar4.jpg')",
        bennar5: "url('assets/bennar5.jpg')",
        Contain: "url('assets/Contain.png')",
      },
      // backgroundImage
    },
  },
  plugins: [],
}

