import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

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
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <a 
                href="mailto:rafsonmahud@gmail.com"
                className="flex flex-col items-center gap-2 p-6 bg-background/50 backdrop-blur-sm rounded-xl hover:bg-background/70 transition-all group"
              >
                <Mail className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Email</span>
                <span className="text-sm text-foreground/70 text-center">rafsonmahud@gmail.com</span>
              </a>
              
              <a 
                href="https://bd.linkedin.com/in/raiyan-mahmud-rafi-047a4029b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-6 bg-background/50 backdrop-blur-sm rounded-xl hover:bg-background/70 transition-all group"
              >
                <Linkedin className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                <span className="font-semibold">LinkedIn</span>
                <span className="text-sm text-foreground/70 text-center">Connect with me</span>
              </a>
              
              <a 
                href="https://wa.me/8801916583719"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-6 bg-background/50 backdrop-blur-sm rounded-xl hover:bg-background/70 transition-all group"
              >
                <MessageCircle className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                <span className="font-semibold">WhatsApp</span>
                <span className="text-sm text-foreground/70 text-center">+880 1916 583719</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
