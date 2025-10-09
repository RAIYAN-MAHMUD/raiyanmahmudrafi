const Skills = () => {
  const skillsData = [
    { name: "Google Workspace", level: 95 },
    { name: "Lead Generation", level: 90 },
    { name: "CRM Management", level: 88 },
    { name: "Email Handling", level: 92 },
    { name: "Property Management", level: 85 },
    { name: "Office Administration", level: 93 },
    { name: "Telesales & Cold Calling", level: 90 },
    { name: "Data Entry & Processing", level: 94 },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Competencies</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Proficient in essential tools and techniques for exceptional virtual assistance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="space-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground">{skill.name}</span>
                <span className="text-sm text-primary font-medium">{skill.level}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
