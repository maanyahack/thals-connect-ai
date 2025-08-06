import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { UserTypeCard } from "@/components/UserTypeCard";
import { Button } from "@/components/ui/button";
import { Heart, Stethoscope, Users, Building2, Activity, Shield, Zap, Globe } from "lucide-react";

const Index = () => {
  const userTypes = [
    {
      icon: Heart,
      title: "Patients",
      description: "Find compatible donors and manage your treatment journey with AI assistance",
      features: [
        "AI-powered donor matching",
        "Treatment tracking & reminders",
        "Direct communication with healthcare team",
        "Emergency blood request system"
      ],
      buttonText: "Patient Portal",
      gradient: "bg-gradient-to-br from-primary/20 to-primary-glow/20"
    },
    {
      icon: Activity,
      title: "Donors",
      description: "Save lives by connecting with patients who need your blood type",
      features: [
        "Instant patient matching alerts",
        "Donation history tracking",
        "Health screening reminders",
        "Community impact dashboard"
      ],
      buttonText: "Donor Hub",
      gradient: "bg-gradient-to-br from-secondary/20 to-accent/20"
    },
    {
      icon: Stethoscope,
      title: "Doctors",
      description: "Comprehensive patient management with AI-driven insights and analytics",
      features: [
        "Patient progress monitoring",
        "AI diagnostic assistance",
        "Treatment optimization",
        "Collaborative care coordination"
      ],
      buttonText: "Doctor Dashboard",
      gradient: "bg-gradient-to-br from-accent/20 to-primary/20"
    },
    {
      icon: Building2,
      title: "NGOs & Blood Banks",
      description: "Streamline operations and maximize impact with intelligent resource management",
      features: [
        "Inventory management system",
        "Donor recruitment tools",
        "Impact analytics & reporting",
        "Multi-location coordination"
      ],
      buttonText: "Organization Portal",
      gradient: "bg-gradient-to-br from-secondary/20 to-primary-glow/20"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description: "Advanced algorithms ensure the fastest, most accurate donor-patient connections."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "HIPAA-compliant platform with end-to-end encryption for all medical data."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with healthcare providers and blood banks worldwide for better outcomes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-trust">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* User Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Choose Your Role
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of healthcare professionals, patients, and donors in the world's 
              most advanced Thalassemia care network
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {userTypes.map((userType, index) => (
              <UserTypeCard
                key={index}
                {...userType}
                onClick={() => console.log(`Selected: ${userType.title}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose ThalsAI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionary technology meets compassionate care to transform Thalassemia treatment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-medical transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Thalassemia Care?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our global community and experience the future of connected healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="trust" size="lg" className="min-w-[200px]">
              Start Free Trial
            </Button>
            <Button variant="hero" size="lg" className="min-w-[200px] bg-white/20 hover:bg-white/30">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-foreground text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">ThalsAI</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm opacity-80">
                © 2024 ThalsAI. Transforming Thalassemia care through AI.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;