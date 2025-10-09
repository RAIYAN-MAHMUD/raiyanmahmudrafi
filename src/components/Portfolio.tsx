import { Award, TrendingUp, Users } from "lucide-react";

const Portfolio = () => {
  const achievements = [
    {
      icon: Briefcase,
      title: "Virtual Assistant for MMA",
      description: "Provided comprehensive administrative support for MMA organization, managing calendars, communications, and operational workflows.",
      impact: "Improved operational efficiency by 40%",
    },
    {
      icon: PhoneCall,
      title: "500+ Successful Sales Calls",
      description: "Executed professional cold calling campaigns resulting in high conversion rates and expanded client portfolios.",
      impact: "Generated qualified leads consistently",
    },
    {
      icon: Building2,
      title: "International Property Management",
      description: "Coordinated property preservation projects, vendor management, and repair pricing across multiple international markets.",
      impact: "Managed 100+ properties successfully",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Notable Achievements & Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Proven track record of delivering exceptional results across diverse projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">{achievement.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-primary font-medium">{achievement.impact}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 bg-gradient-card rounded-2xl p-8 border border-border">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <p className="text-4xl font-bold text-primary mb-2">4+</p>
            <p className="text-foreground/70">Years Experience</p>
          </div>
          <div className="text-center border-x border-border">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <p className="text-4xl font-bold text-accent mb-2">500+</p>
            <p className="text-foreground/70">Successful Calls</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <p className="text-4xl font-bold text-primary mb-2">100+</p>
            <p className="text-foreground/70">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import icons that were referenced
import { Briefcase, PhoneCall, Building2 } from "lucide-react";

export default Portfolio;
