/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    width: {
      full: '100%',
      '11/12': '92%',
      300: '300px',
      '80%': '80%',
      '98%': '98%',
      '300%': '400%',
      '5/6': '83.33%',
      36: '144px',
      40: '160px',
    },
    margin: {
      20: '20px 10px',
      auto: 'auto',
    },
    maxWidth: {
      '100%': '100%',
    },
    minWidth: {
      16: '16px',
      '1/5': '20%',
      '4/5': '80%',
      '1/4': '25%',
      '3/10': '30%',
      36: '36',
    },
    minHeight: {
      40: '40px',
    },
    colors: {
      'dark-blue': '#10024A',
      blue: '#1B4DB1',
      skyBlue: '#F8F7FA',
      white: '#FFFFFF',
      grey: '#B9B9B9',
      grey2: '#6E6A6C',
      black: '#000000',
      yellow: '#EFE168',
      pink: '#E98EAD',
    },
    backgroundImage: {
      footer:
        "url('https://www.modaes.es/files/2020/empresas/ecoalf/ecoalf-tienda-fuera-because-there-is-no-planet-B-948.jpg')",
      main: "url('https://www.launica.mx/wp-content/uploads/2022/08/Queretaro-Metropolitano-Arcos-1024x683.jpg')",
      brands:
        "url('https://img.freepik.com/foto-gratis/vista-al-interior-hotel_1417-1566.jpg?w=826&t=st=1674778082~exp=1674778682~hmac=53cdbe152ffac35977c14a2a9414a69731e0028564358e5ce37cfda5aedfdb14')",
      artist:
        "url('https://img.freepik.com/fotos-premium/vista-trasera-gran-grupo-personas-divirtiendose-concierto-musica-mientras-ven-actuacion-vivo-escenario_637285-628.jpg?w=996')",
      tournaments:
        "url('https://img.freepik.com/foto-gratis/personas-tiro-medio-jugando-videojuegos_23-2149349983.jpg?w=826&t=st=1674778392~exp=1674778992~hmac=c3ebb49cf8228867e54dad681b6156138eea2295db6c58846e46e32576c8e379')",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      '3vmin': '3vmin',
      '2vmin': '2vmin',
      '2.2vmin': '2.2vmin',
      '2.8vmin': '2.8vmin',
      10: '10px',
      12: '12px',
      15: '15px',
      16: '16px',
      20: '20px',
      30: '30px',
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        32: '2rem',
        16: '1rem',
        80: '5rem',
      },
      margin: {
        10: '10px',
        24: '96px',
        30: '30px',
        32: '128px',
        50: '50px',
        '8y0': '8px 0',
        searchBar: '4px -93% 0 0',
      },
      borderRadius: {
        '4xl': '2rem',
        circle: '100%',
      },
      sizing: {
        120: '480px',
      },
    },
  },
  plugins: [],
};
