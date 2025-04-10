import { Container } from "@/app/components/ui/Container/Container";
import { styled } from "@/app/styles/theme";

const TestimonialsSection = styled("section", {
  backgroundColor: "$background",
  padding: "$sectionMobile 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

const VideoWrapper = styled("div", {
  width: "100%",
  maxWidth: "720px",
  aspectRatio: "16/9",
  borderRadius: "$lg",
  overflow: "hidden",
  boxShadow: "$md",
  marginBottom: "$lg",

  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },
});

const TestimonialText = styled("div", {
  maxWidth: "600px",
  margin: "0 auto",

  h3: {
    fontSize: "$headline3",
    color: "$text",
    fontWeight: 600,
    marginBottom: "$sm",
  },

  p: {
    fontSize: "$body2",
    color: "$text",
  },
});

export function Testimonials() {
  return (
    <TestimonialsSection>
      <Container>
        <VideoWrapper>
          <iframe
            src="https://www.youtube.com/embed/sCy7-WtLCCA"
            title="Depoimento - Trabalho.app"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>

        <TestimonialText>
          <h3>A gente acredita que todo mundo merece uma chance justa.</h3>
          <p>
            Cada depoimento representa mais do que palavras — representa
            transformação. Ouça histórias de quem já faz parte do Trabalho.app.
          </p>
        </TestimonialText>
      </Container>
    </TestimonialsSection>
  );
}
