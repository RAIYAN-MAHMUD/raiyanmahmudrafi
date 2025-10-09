import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">I'm not a seller, I solve problems for you.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am a highly adaptable Virtual Assistant and BPO specialist with over four years of international experience 
              across diverse industries including property preservation, data entry, repair pricing, virtual administrative support, 
              cold calling, and property management coordination.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My background in Computer Science & Engineering (CSE) has equipped me with strong analytical and technical skills, 
              enabling me to deliver efficient, detail-oriented solutions tailored to client needs.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I thrive in fast-paced environments and am committed to providing exceptional service that drives business success.
            </p>
          </div>

          {/* Right - Highlights */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">4+ Years of Experience</h3>
                <p className="text-foreground/70">
                  Proven track record in international BPO operations and virtual assistance
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">CSE Background</h3>
                <p className="text-foreground/70">
                  Strong technical foundation in Computer Science & Engineering
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Detail-Oriented Professional</h3>
                <p className="text-foreground/70">
                  Committed to delivering efficient, tailored solutions for diverse client needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
