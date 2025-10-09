import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-raiyan.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-accent/30 rounded-full animate-float" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-left space-y-6 animate-fade-in">
          <div className="inline-block">
            <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-2">Welcome to my portfolio</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hello, I'm<br />
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Raiyan Mahmud Rafi
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
            Virtual Assistant & Property Management Specialist
          </h2>
          <p className="text-lg text-foreground/70 max-w-xl">
            Highly adaptable BPO specialist with over 4 years of international experience in property preservation, 
            virtual assistance, and cold calling excellence.
          </p>
          <div className="flex gap-4 pt-4">
            <Button 
              onClick={() => scrollToSection("portfolio")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6"
            >
              View Portfolio
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 text-base px-8 py-6"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="relative">
            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-80" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/60 rounded-full" />
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-foreground/10 shadow-2xl">
              <img 
                src={profileImage} 
                alt="Raiyan Mahmud Rafi - Professional Virtual Assistant"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">4+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
