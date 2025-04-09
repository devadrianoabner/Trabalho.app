"use client";

import { styled } from "@/app/styles/theme";
import { PrimaryButton } from "@/app/components/ui/Button/PrimaryButton";

const Section = styled("section", {
  position: "relative",
  width: "100%",
  maxWidth: "100vw",
  minHeight: "100vh",
  backgroundImage: "url('https://i.imgur.com/iOsy1Z3.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$lg",
  color: "$text",

  "@sm": {
    flexDirection: "column",
    justifyContent: "center",
    padding: "$md",
  },
});

const Overlay = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.6)",
  zIndex: 1,
});

const Content = styled("div", {
  position: "relative",
  zIndex: 2,
  maxWidth: "600px",

  h1: {
    fontSize: "$headline2",
    marginBottom: "$sm",
    color: "$background",
  },

  p: {
    fontSize: "$body1",
    lineHeight: 1.6,
    color: "$background",
  },

  "@sm": {
    textAlign: "center",
    h1: {
      fontSize: "$headline3",
    },
  },
});

const FormContainer = styled("form", {
  position: "relative",
  zIndex: 2,
  backgroundColor: "rgba(255, 255, 255, 0.068)",
  color: "$text",
  borderRadius: "20px",
  padding: "$xl",
  width: "100%",
  maxWidth: "460px",
  boxShadow: "$lg",

  h3: {
    fontSize: "$headline4",
    marginBottom: "$md",
    textAlign: "center",
    color: "$background",
  },

  input: {
    width: "100%",
    padding: "$sm",
    borderRadius: "$md",
    backgroundColor: "#fff",
    color: "$text",
    border: "1px solid $shade2",
    fontSize: "$body2",
    marginBottom: "$sm",
    "::placeholder": {
      color: "#6b7280",
    },
  },

  button: {
    marginTop: "$md",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default function InterestCapture() {
  return (
    <Section>
      <Overlay />
      <Content>
        <h1>Calma, a gente sabe que tá difícil.</h1>
        <p>
          Com o Trabalho.app você consegue chegar lá. Estamos aqui pra te ajudar
          a respirar.
        </p>
      </Content>
      <FormContainer>
        <h3>Quero fazer parte</h3>
        <input type="text" placeholder="WhatsApp" />
        <PrimaryButton type="submit">Cadastre-se</PrimaryButton>
      </FormContainer>
    </Section>
  );
}
