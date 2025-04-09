"use client";
import { createStitches } from "@stitches/react";
import { useEffect, useState } from "react";

export const {
  styled,
  theme,
  createTheme,
  globalCss,
  css,
  keyframes,
  getCssText,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "#22C55E",
      primaryHover: "#16A34A",
      primaryActive: "#15803D",

      secondary: "#374151",
      secondaryHover: "#1F2937",
      secondaryActive: "#111827",

      info: "#3B82F6",

      background: "#F9FAFB",
      text: "#111827",

      highlight: "#EF4444",
      warning: "#F59E0B",
      success: "#10B981",

      shade1: "#16A34A",
      shade2: "#15803D",
      shade3: "#166534",
      shade4: "#14532D",
      shade5: "#064E3B",

      tint1: "#4ADE80",
      tint2: "#6EE7B7",
      tint3: "#A7F3D0",
      tint4: "#D1FAE5",
      tint5: "#ECFDF5",
    },

    fonts: {
      titles: "'Poppins', sans-serif",
      texts: "'Inter', sans-serif",
    },

    fontSizes: {
      headline1: "4rem",
      headline2: "2.25rem",
      headline3: "1.75rem",
      headline4: "1.25rem",
      body1: "1.125rem",
      body2: "1rem",
      body3: "0.875rem",
      body4: "0.75rem",
    },

    lineHeights: {
      headline1: "4.75rem",
      headline2: "2.75rem",
      headline3: "2.25rem",
      headline4: "1.75rem",
      body1: "1.75rem",
      body2: "1.5rem",
      body3: "1.25rem",
      body4: "1rem",
    },

    sizes: {
      container: "75rem",
      containerTablet: "40rem",
    },

    space: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      section: "10rem",
      sectionMobile: "4rem",
    },

    shadows: {
      sm: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      md: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      lg: "0px 10px 15px rgba(0, 0, 0, 0.1)",
      xl: "0px 20px 25px rgba(0, 0, 0, 0.15)",
      xxl: "0px 25px 50px rgba(0, 0, 0, 0.25)",
    },

    radii: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
      full: "50rem",
    },
  },

  media: {
    xs: "(max-width: 480px)",
    sm: "(max-width: 640px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1024px)",
    xl: "(max-width: 1280px)",
  },
});

export const lightTheme = createTheme("light-theme", {
  colors: {
    background: "#F9FAFB",
    text: "#111827",
    primary: "#22C55E",
    secondary: "#374151",
    highlight: "#EF4444",
    success: "#10B981",
    warning: "#F59E0B",
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    background: "#0F172A",
    text: "#F1F5F9",
    primary: "#22C55E",
    secondary: "#94A3B8",
    highlight: "#F87171",
    success: "#34D399",
    warning: "#FBBF24",
  },
});

export const useAutoTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  return theme;
};