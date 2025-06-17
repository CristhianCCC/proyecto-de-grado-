//import React from 'react';
import Header from "../features/landing/Header";
import Hero from "../features/landing/Hero";
import Home from "../features/landing/Home";
import Beneficios from "../features/landing/Beneficios";
import TestimonialSection from "../features/landing/TestimonialSection";
import FAQSection from "../features/landing/FAQSection";
import Footer from "../features/landing/Footer";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Home />
      <Beneficios />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
}