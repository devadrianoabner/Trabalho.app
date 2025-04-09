import { styled } from "@stitches/react";

export const PrimaryButton = styled("button", {
  all: "unset",
  borderRadius: "8px",
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: 500,
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
  backgroundColor: "$primary",
  color: "$white",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",

  "&:hover": {
    backgroundColor: "$primaryDark",
  },

  "&:focus": {
    outline: "2px solid $primary",
    outlineOffset: "2px",
  },

  "&:disabled": {
    backgroundColor: "$gray400",
    cursor: "not-allowed",
    opacity: 0.7,
  },
});