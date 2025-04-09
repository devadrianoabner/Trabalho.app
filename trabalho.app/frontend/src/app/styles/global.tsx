"use client";
import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    scrollBehavior: "smooth",
  },

  "#__next": {
    overflowX: "hidden",
    width: "100%",
    maxWidth: "100vw",
  },

  "html, body": {
    minHeight: "100%",
    width: "100%", //  Garante que não ultrapasse a viewport
    maxWidth: "100vw", // Impede rolagem horizontal
    overflowX: "hidden", // Remove a barra lateral
    backgroundColor: "$background",
    fontFamily: "'Inter', sans-serif",
    color: "$text",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    lineHeight: 1.6,
  },

  h1: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: "2.5rem",
    color: "$primary",
  },

  h2: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: "2rem",
    color: "$text",
  },

  h3: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    fontSize: "1.5rem",
    color: "$text",
  },

  p: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: "$text",
  },

  a: {
    color: "$primary",
    textDecoration: "none",
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      color: "$primaryHover",
    },
  },

  button: {
    fontFamily: "'Inter', sans-serif",
    cursor: "pointer",
  },

  ul: {
    listStyle: "none",
    paddingLeft: 0,
  },

  img: {
    maxWidth: "100%",
    display: "block",
  },
});

export const media = {
  mobile: "@media (max-width: 600px)",
  tablet: "@media (max-width: 1024px)",
  desktop: "@media (min-width: 1025px)",
};
