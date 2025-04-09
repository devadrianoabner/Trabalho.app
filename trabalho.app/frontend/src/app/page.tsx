"use client";
import Hero from "@/app/components/sections/Hero/Hero";
import InterestCapture from "@/app/components/sections/InterestCapture/InterestCapture";
import { TestimonialsCarousel } from "./components/sections/Testemonials/Testmonials";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <InterestCapture />
      <TestimonialsCarousel />
    </main>
  );
}
