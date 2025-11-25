import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_q6nvn7w',
        'template_9y75gci',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '_exXoRNCEBJmjtAr2'
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mt-8 p-8 bg-background rounded-2xl border-2 border-accent">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows={6}
                    required
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full md:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
