"use client"
import { styled } from "@stitches/react";

export const fadeIn = styled("div", {
  opacity: 0,
  transform: "translateY(10px)",
  animation: "fadeIn 0.3s ease-in forwards",
  variants: {
    duration: {
      slow: { animationDuration: "0.6s" },
      normal: { animationDuration: "0.3s" },
      fast: { animationDuration: "0.1s" },
    },
  },
  "@keyframes fadeIn": {
    to: { opacity: 1, transform: "translateY(0)" },
  },
});