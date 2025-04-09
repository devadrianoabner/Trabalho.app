"use client";

import { styled } from "@/app/styles/theme";
import { PrimaryButton } from "@/app/components/ui/Button/PrimaryButton";
import ThemeToggle from "@/app/components/ThemeToggle";

const HeroSection = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "6rem 2rem",
  backgroundColor: "$background",
  color: "$text",
  overflowX: "hidden",
  position: "relative",

  "@md": {
    flexDirection: "row",
    textAlign: "left",
    justifyContent: "space-between",
  },
});

const Content = styled("div", {
  maxWidth: "600px",
  width: "100%",
  padding: "0 1rem",

  "@md": {
    padding: "0",
  },
});

const Title = styled("h1", {
  fontSize: "$headline1",
  fontWeight: 600,
  lineHeight: "1.2",
  marginBottom: "1rem",
  textAlign: "center",
  color: "$text",

  "@lg": {
    fontSize: "3.4rem",
  },
  "@md": {
    fontSize: "3.2rem",
  },
  "@sm": {
    fontSize: "2.5rem",
  },
  "@xs": {
    fontSize: "2rem",
  },
});

const Highlight = styled("span", {
  color: "$primary",
  display: "block",
  fontSize: "inherit",
});

const Subtitle = styled("p", {
  fontSize: "1.25rem",
  lineHeight: "1.6",
  marginBottom: "2rem",
  color: "$text",

  "@sm": {
    fontSize: "1.125rem",
  },
  "@xs": {
    fontSize: "1rem",
  },
});

const Illustration = styled("div", {
  width: "100%",
  maxWidth: "500px",
  marginTop: "3rem",

  "@md": {
    marginTop: "0",
  },

  "& img": {
    width: "100%",
    height: "auto",
  },
});

const ThemeToggleWrapper = styled("div", {
  position: "absolute",
  top: "1rem",
  right: "1rem",
  zIndex: 999,
});

export default function Hero() {
  return (
    <HeroSection>
      <ThemeToggleWrapper>
        <ThemeToggle />
      </ThemeToggleWrapper>

      <Content>
        <Title>
          Transformando conexões em <Highlight>oportunidades reais</Highlight>
        </Title>
        <Subtitle>
          Somos o elo entre trabalhadores presenciais e quem precisa deles.
          Avaliação justa, pagamento seguro e impacto social de verdade.
        </Subtitle>
        <PrimaryButton>Quero contratar agora</PrimaryButton>
      </Content>

      <Illustration>
        <img
          src="/hero-light.svg"
          alt="Ilustração representando conexão e tecnologia"
        />
      </Illustration>
    </HeroSection>
  );
}
