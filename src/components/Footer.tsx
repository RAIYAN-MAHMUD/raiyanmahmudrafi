const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
              Raiyan Rafi
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Professional Virtual Assistant and BPO specialist committed to delivering excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection("home")} className="block text-foreground/70 hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="block text-foreground/70 hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="block text-foreground/70 hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="block text-foreground/70 hover:text-primary transition-colors">
                Portfolio
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-foreground/70">
                Email:{" "}
                <a href="mailto:rafsonmahud@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                  rafsonmahud@gmail.com
                </a>
              </p>
              <p className="text-foreground/70">
                Phone:{" "}
                <a href="tel:+8801916583719" className="text-primary hover:text-primary/80 transition-colors">
                  +880 1916 583719
                </a>
              </p>
              <p className="text-foreground/70">
                <a href="tel:+17867446828" className="text-primary hover:text-primary/80 transition-colors">
                  +1 786 744 6828
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-foreground/60">
          <p>© {new Date().getFullYear()} Raiyan Mahmud Rafi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
