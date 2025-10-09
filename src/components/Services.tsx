import { Briefcase, PhoneCall, Building2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Virtual Assistant Services",
      description: "Comprehensive administrative support including email management, calendar coordination, data entry, and document preparation for seamless business operations.",
    },
    {
      icon: Building2,
      title: "Property Management Coordination",
      description: "Expert property preservation services, repair pricing, vendor coordination, and comprehensive property management support across international markets.",
    },
    {
      icon: PhoneCall,
      title: "Cold Calling & Telesales",
      description: "Professional outbound calling services with proven track record of 500+ successful sales calls, lead generation, and client relationship building.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Expertise Services! Let's Check It Out</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Delivering exceptional virtual assistance and BPO services tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
