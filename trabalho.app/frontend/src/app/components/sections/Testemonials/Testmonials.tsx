import { useState } from "react";
import { styled } from "@/app/styles/theme";
import { Container } from "@/app/components/ui/Container/Container";

const videos = [
  {
    url: "https://www.youtube.com/embed/iaPJfcnln0s",
    nome: "Jéssica Almeida",
    arroba: "@jessica.ofc",
    status: "Aberta para projetos",
  },
  {
    url: "https://www.youtube.com/embed/AeV6ULvB9lE",
    nome: "Lucas Hssrs",
    arroba: "@lucas_hssrs",
    status: "Aberto para oportunidades",
  },
  {
    url: "https://www.youtube.com/embed/sCy7-WtLCCA",
    nome: "Patrocinado App",
    arroba: "@trabalho.app",
    status: "Transformando vidas",
  },
];

const CarouselWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "$xl 0",
});

const VideoBox = styled("div", {
  width: "100%",
  maxWidth: "720px",
  aspectRatio: "16/9",
  borderRadius: "$md",
  overflow: "hidden",
  marginBottom: "$md",

  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },
});

const ProfileInfo = styled("div", {
  color: "$text",
  marginBottom: "$md",

  h3: {
    fontSize: "$lg",
    fontWeight: "bold",
  },

  p: {
    fontSize: "$sm",
    color: "$muted",
  },
});

const Arrows = styled("div", {
  display: "flex",
  gap: "$md",

  button: {
    background: "none",
    border: "none",
    fontSize: "2rem",
    cursor: "pointer",
    color: "$text",
    transition: "transform 0.2s ease",

    '&:hover': {
      transform: "scale(1.2)",
    }
  }
});

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const { url, nome, arroba, status } = videos[current];

  return (
    <Container>
      <CarouselWrapper>
        <VideoBox>
          <iframe
            src={url}
            title={`Depoimento de ${nome}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoBox>

        <ProfileInfo>
          <h3>{nome}</h3>
          <p>{arroba}</p>
          <p>{status}</p>
        </ProfileInfo>

        <Arrows>
          <button onClick={handlePrev} aria-label="Anterior">
            ⬅
          </button>
          <button onClick={handleNext} aria-label="Próximo">
            ➡
          </button>
        </Arrows>
      </CarouselWrapper>
    </Container>
  );
}
