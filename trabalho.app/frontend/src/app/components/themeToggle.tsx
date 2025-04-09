"use client";
import { useTheme } from "../contexts/themeContexts";
import { styled } from "@/app/styles/theme";

const ToggleButton = styled("button", {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "$primary",
  color: "$text",
  fontSize: "1.2rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease, background-color 0.3s ease",

  "&:hover": {
    transform: "scale(1.1)",
  },
});

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === "light" ? "🌞" : "🌙"}
    </ToggleButton>
  );
}
