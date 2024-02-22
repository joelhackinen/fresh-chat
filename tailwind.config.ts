import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "480px",
      },
    },
  },
} satisfies Config;
