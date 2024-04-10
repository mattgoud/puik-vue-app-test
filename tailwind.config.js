/** @type {import('tailwindcss').Config} */
// import { puikTailwindPreset } from '@prestashopcorp/puik'
import { puikTailwindPreset } from '@prestashopcorp/puik-tailwind-preset'
export default {
  presets : [puikTailwindPreset],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}