import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode palette
        "vertex-light": "#FAFAFA",
        "vertex-gray": "#F5F5F7",
        "vertex-text": "#1A1A1A",
        "vertex-text-secondary": "#6B6B6B",

        // Dark mode palette (existing/premium sections)
        "vertex-dark": "#0A0A0A",
        "vertex-surface": "#1A1A1A",

        // XP Colors (vibrant accents)
        "logic-indigo": "#6366F1",
        "routine-orange": "#FB923C",
        "health-pink": "#EC4899",

        // Task states
        "task-complete": "#10B981",
        "task-progress": "#3B82F6",
        "task-pending": "#9CA3AF",
        "task-skipped": "#EF4444",

        // Keep legacy vertex colors for backward compatibility
        vertex: {
          bg: '#0A0A0A',
          indigo: '#6366F1',
          orange: '#FB923C',
          pink: '#EC4899',
          glass: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      backgroundImage: {
        "gradient-light": "linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)",
        "gradient-dark": "linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)",
        "gradient-hero": "linear-gradient(135deg, #F5F5F7 0%, #FFFFFF 50%, #F0F0F2 100%)",
      },
      backdropBlur: {
        "glass-light": "20px",
        "glass-dark": "40px",
        'glass-sm': '4px',
        'glass-md': '10px',
        'glass-lg': '20px',
      },
      boxShadow: {
        "glass-light": "0 8px 32px rgba(0, 0, 0, 0.08)",
        "glass-dark": "0 8px 32px rgba(0, 0, 0, 0.37)",
        "glow-indigo": "0 0 20px rgba(99, 102, 241, 0.5)",
        "glow-orange": "0 0 20px rgba(251, 146, 60, 0.5)",
        "glow-pink": "0 0 20px rgba(236, 72, 153, 0.5)",
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 8px 40px 0 rgba(99, 102, 241, 0.15)',
        'neon': '0 0 20px -5px rgba(99, 102, 241, 0.5)',
      },
      fontFamily: {
        display: ["var(--font-sf-pro)", "Inter", "system-ui", "sans-serif"],
        sans: ['var(--font-sf-pro)', 'Inter', 'sans-serif'],
        mono: ['var(--font-sf-mono)', 'SF Mono', 'monospace'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
