import type { Config } from "tailwindcss";

// Дизайн-токены проекта. Все цвета берутся только отсюда,
// произвольные hex в компонентах запрещены.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBFAF6", // фон основной, тёплый белый
        sage: "#EEF1E8", // фон вторичный, светлый шалфейный
        olive: {
          DEFAULT: "#6B7A2E", // акцент из логотипа: рамки, иконки, декор
          deep: "#57641F", // акцентный текст и заливка кнопок (контраст ≥ 4.5:1)
          dark: "#46511A", // ховеры
        },
        ink: "#1C1C18", // текст основной
        moss: "#5C5E50", // текст вторичный, серо-оливковый
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        base: ["1.0625rem", { lineHeight: "1.6" }], // 17px / 1.6
      },
      maxWidth: {
        prose: "68ch",
        site: "75rem", // контейнер 1200px
      },
      borderRadius: {
        card: "1rem", // скругление 16px
      },
      spacing: {
        section: "6rem", // вертикальный отступ секций от 96px на десктопе
      },
    },
  },
  plugins: [],
};

export default config;
