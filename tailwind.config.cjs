/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        base1: "hsl(140, 10%, 10%)",
        base1fg: "hsl(0, 0%, 85%)",
        base2: "hsl(140, 10%, 12%)",
        base3: "hsl(140, 13%, 13%)",
        neutral: "hsl(140, 10%, 11%)",
        ghost: "hsl(0, 0%, 50%)",
        accent: "hsl(37, 67%, 58%)",
        accent2: "hsl(40, 67%, 40%)",
        success: "hsl(100, 100%, 50%)",
        herogradient: "gr"
      },
    },
  },
	plugins: [],
}
