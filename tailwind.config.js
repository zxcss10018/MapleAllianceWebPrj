/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 加上你專案的檔案路徑，例如:
    "./src/**/*.{astro,js,jsx,ts,tsx,md,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // 這一行是重點！
  ],
}