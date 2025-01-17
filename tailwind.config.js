/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // textColor: {
      //   primary: {
      //     foreground: "hsla(var(--text-secondary))",
      //   },
      // },

      colors: {
        background: {
          DEFAULT: "hsla(var(--background))",
        },

        foreground: "hsla(var(--foreground))",
        card: {
          DEFAULT: "hsla(var(--card))",
          foreground: "hsla(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsla(var(--popover))",
          foreground: "hsla(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsla(var(--primary))",
          foreground: "hsla(var(--primary-foreground))",
          dark: "hsla(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsla(var(--secondary))",
          foreground: "hsla(var(--secondary-foreground))",
        },
        outline: {
          DEFAULT: "hsla(var(--outline))",
          foreground: "hsla(var(--outline-foreground))",
        },

        muted: {
          DEFAULT: "hsla(var(--muted))",
          foreground: "hsla(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsla(var(--accent))",
          foreground: "hsla(var(--accent-foreground))",
        },

        positive: {
          DEFAULT: "hsla(var(--positive))",
          foreground: "hsla(var(--positive-foreground))",
        },
        destructive: {
          DEFAULT: "hsla(var(--destructive))",
          foreground: "hsla(var(--destructive-foreground))",
        },
        border: "hsla(0, 0%, 100%, 0.2)",
        input: "hsla(var(--input))",
        ring: "hsla(var(--ring))",
        chart: {
          1: "hsla(var(--chart-1))",
          2: "hsla(var(--chart-2))",
          3: "hsla(var(--chart-3))",
          4: "hsla(var(--chart-4))",
          5: "hsla(var(--chart-5))",
        },
      },
      animation: {
        gradient: "gradient-rotate 4s ease infinite",
        blink: "alert-blink 1s ease infinite",
      },
      keyframes: {
        "gradient-rotate": {
          "0%, 100%": { transform: "scale(1,1)" },
          "50%": { transform: "scale(3,3)" },
        },
        "alert-blink": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
