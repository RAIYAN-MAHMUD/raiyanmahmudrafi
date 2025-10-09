import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-accent/20 rounded-full" />
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-foreground/10 rounded-lg rotate-45" />
          
          <div className="relative z-10 animate-fade-in">
            <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Got A Project? Let's Talk
            </h2>
            <p className="text-lg text-foreground/90 mb-8 max-w-2xl mx-auto">
              Ready to take your business to the next level? I'm here to provide expert virtual assistance 
              tailored to your needs. Let's discuss how we can work together.
            </p>
            <Button
              onClick={() => window.location.href = "mailto:rafsonmahud@gmail.com"}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6 gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
            <p className="mt-6 text-foreground/80">
              <a href="mailto:rafsonmahud@gmail.com" className="hover:text-accent transition-colors">
                rafsonmahud@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
