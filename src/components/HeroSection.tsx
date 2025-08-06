import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            ThalsAI
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Unified AI-Driven Smart Platform
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-80 leading-relaxed">
            Connecting Thalassemia patients, donors, doctors, NGOs, and blood bank systems 
            under one intelligent interface powered by artificial intelligence.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="min-w-[200px]">
            Get Started
          </Button>
          <Button variant="trust" size="lg" className="min-w-[200px]">
            Learn More
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-70">
          <div className="text-sm">🏥 Healthcare Certified</div>
          <div className="text-sm">🔒 HIPAA Compliant</div>
          <div className="text-sm">🤖 AI-Powered</div>
          <div className="text-sm">🌍 Global Network</div>
        </div>
      </div>
    </section>
  );
};