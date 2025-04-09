import { styled } from "@/app/styles/theme";
export const SecundaryButton = styled("button", {
  all: "unset",
  borderRadius: "8px",
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: 500,
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",

  backgroundColor: "transparent",
  color: "$primary",
  border: "2px solid $primary",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",

  "&:hover": {
    backgroundColor: "$primaryLight", // cor de hover opcional
  },

  "&:focus": {
    outline: "2px solid $primary",
    outlineOffset: "2px",
  },

  "&:disabled": {
    color: "$gray400",
    borderColor: "$gray400",
    cursor: "not-allowed",
    opacity: 0.7,
  },
});
