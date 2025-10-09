import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Raiyan Rafi
          </h2>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Skills
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
