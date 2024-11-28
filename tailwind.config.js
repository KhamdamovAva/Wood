/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'category_img1': "url('./src/assets/images/Category_img1.png')",
        'category_img2': "url('./src/assets/images/Category_img2.png')",
        'category_img3': "url('./src/assets/images/Category_img3.png')",
        'category_img4': "url('./src/assets/images/Category_img4.png')",
        'category_img5': "url('./src/assets/images/Category_img5.png')",
        'category_img6': "url('./src/assets/images/Category_img6.png')",
        'category_img7': "url('./src/assets/images/Category_img7.png')",
        'category_img8': "url('./src/assets/images/Category_img8.png')",
      }
    },
  },
  plugins: [],
}
