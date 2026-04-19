import { motion } from "framer-motion";
import { Code2, Globe, Wrench, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 75 },
      { name: "C", level: 60 },
      { name: "C++", level: 55 },
    ],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "GitHub", level: 70 },
      { name: "VS Code", level: 85 },
      { name: "MS Copilot", level: 60 },
    ],
  },
  {
    title: "Data & Database",
    icon: Database,
    skills: [
      { name: "Power BI", level: 50 },
      { name: "SQLite", level: 60 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(230_80%_60%/0.04),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block glass rounded-full px-4 py-1.5 text-xs font-display text-primary mb-4"
          >
            Skills
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            My <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="glass rounded-2xl p-6 group hover:glow-shadow transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + skillIdx * 0.1 }}
                        className="text-primary font-display font-semibold text-xs"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2.5 rounded-full bg-muted/80 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + skillIdx * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full relative"
                        style={{ background: "var(--gradient-primary)" }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent animate-[shimmer_2s_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {["Python", "C", "C++", "HTML", "CSS", "JS", "GitHub", "VS Code", "Power BI", "SQLite"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.05 }}
              className="text-xs font-display glass rounded-full px-4 py-2 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
