//import React from 'react';
import Hero from "../features/landing/Hero";
import Beneficios from "../features/landing/Beneficios";
import TestimonialSection from "../features/landing/TestimonialSection";
import FAQSection from "../features/landing/FAQSection";
import Footer from "../features/landing/Footer";
import NavBar from "../components/NavBar";


export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Beneficios />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
}