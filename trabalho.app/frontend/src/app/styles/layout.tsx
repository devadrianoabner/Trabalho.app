"use client";
import { styled } from "@stitches/react";
import { ThemeProvider } from "../contexts/themeContexts";
import { globalStyles } from "../styles/global";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 1rem",

  "@tablet": {
    maxWidth: "$containerTablet",
  },
});

export const Flex = styled("div", {
  display: "flex",
  gap: "$2",
  alignItems: "center",
});

export const Box = styled("div", {
  width: "100%",
  maxWidth: "100%",
});

export const Grid = styled("div", {
  display: "grid",
  gap: "$md",
  variants: {
    columns: {
      two: { gridTemplateColumns: "repeat(2, 1fr)" },
      three: { gridTemplateColumns: "repeat(3, 1fr)" },
      four: { gridTemplateColumns: "repeat(4, 1fr)" },
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  globalStyles(); //

  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
