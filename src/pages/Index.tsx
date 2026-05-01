import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://i.postimg.cc/W4z7VwzW/Gemini-Generated-Image-hczaojhczaojhcza-1.png" alt="TriNetra Logo" className="h-12 w-12" />
            <span className="text-xl font-bold">TriNetra</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-smooth">Features</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-smooth">How It Works</a>
            <Link to="/auth"><Button variant="outline" size="sm">Sign In</Button></Link>
            <Link to="/auth"><Button size="sm" className="gradient-hero">Get Started</Button></Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background border-t px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium hover:text-primary" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary" onClick={() => setMenuOpen(false)}>How It Works</a>
            <Link to="/auth" onClick={() => setMenuOpen(false)}><Button variant="outline" className="w-full">Sign In</Button></Link>
            <Link to="/auth" onClick={() => setMenuOpen(false)}><Button className="w-full gradient-hero">Get Started</Button></Link>
          </div>
        )}
      </header>

      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>

      <footer className="bg-muted py-10 mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <img src="https://i.postimg.cc/W4z7VwzW/Gemini-Generated-Image-hczaojhczaojhcza-1.png" alt="TriNetra Logo" className="h-10 w-10" />
                <span className="font-bold">TriNetra</span>
              </div>
              <p className="text-sm text-muted-foreground">Your Personal Safety Guardian – Anytime, Anywhere</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-primary">How It Works</a></li>
                <li><Link to="/dashboard" className="hover:text-primary">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm">Emergency</h3>
              <p className="text-sm text-muted-foreground mb-2">India Emergency:</p>
              <p className="text-sm font-semibold text-destructive">Police: 100</p>
              <p className="text-sm font-semibold text-destructive">Women: 1091</p>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
            <p>&copy; 2025 TriNetra. Built for India's Safety.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
