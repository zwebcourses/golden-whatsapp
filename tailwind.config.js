/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'main-bg': 'var(--main-bg)',
        'header': 'var(--header-bg)',
        'section2-color': 'var(--section2-color)'
      },
      backgroundImage: {
        'cta-cover': "url('~@/static/img/section_1/background.webp')",
        'cta-mobile-cover': "url('~@/static/img/mobile/background.webp')",
        'about-mobile-cover': "url('~@/static/img/section_2/background.webp')",
        'features-mobile-cover': "url('~@/static/img/section_3/background.webp')",
        'benefits-cover': "url('~@/static/img/section_4/background.webp')",
        'benefits-mobile-cover': "url('~@/static/img/section_4/background_mobile.webp')",
        'testimonial-mobile-cover': "url('~@/static/img/section_5/background.webp')",
        'price-mobile-cover': "url('~@/static/img/section_6/background.webp')",
        'form-mobile-cover': "url('~@/static/img/section_7/background.webp')",
        'button': "url('~@/static/img/section_1/bottom.webp')"
      },
    }
  },
  plugins: [],
}