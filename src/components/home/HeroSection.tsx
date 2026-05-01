import { Shield, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-5"></div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your Personal{" "}
              <span className="bg-blue-600 text-white px-3 py-1 rounded-lg">TriNetra</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Anytime, Anywhere. Real-time SOS alerts, geofencing, community helpers, and instant emergency response for women, students, and vulnerable groups.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" className="gradient-hero shadow-glow text-base px-6 py-5" onClick={() => navigate("/auth")}>
                <Smartphone className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-base px-6 py-5">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-xs text-muted-foreground">Active Users</p>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-success">10K+</p>
                <p className="text-xs text-muted-foreground">Lives Protected</p>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-warning">24/7</p>
                <p className="text-xs text-muted-foreground">Monitoring</p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative z-10 bg-card rounded-3xl shadow-2xl p-6 border">
              <img
                src="https://i.postimg.cc/PrcWHDfk/Whats-App-Image-2025-10-10-at-01-52-09-50f32592.jpg"
                alt="TriNetra App Interface"
                className="rounded-2xl w-full"
              />
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground rounded-full p-3 shadow-lg animate-pulse">
                <Shield className="h-6 w-6" />
              </div>
            </div>
            <div className="absolute inset-0 gradient-hero opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
