import { motion } from "framer-motion";
import { Rocket, BookOpen, Users, Trophy, Zap, ArrowRight } from "lucide-react";

const milestones = [
  {
    icon: BookOpen,
    title: "Started B.Tech Journey",
    desc: "Enrolled in CSE (AI & ML) at JIS College of Engineering",
    date: "2024",
    active: true,
  },
  {
    icon: Trophy,
    title: "Smart India Hackathon",
    desc: "Built Jharkhand Tourism Website with a team during SIH",
    date: "2024",
    active: true,
  },
  {
    icon: Zap,
    title: "Python Full Stack Learning",
    desc: "Deep diving into Python, web frameworks, and database management",
    date: "Present",
    active: true,
  },
  {
    icon: Rocket,
    title: "Internship Ready",
    desc: "Actively seeking opportunities to apply skills in real-world projects",
    date: "2025",
    active: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />

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
            Experience
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Every expert was once a beginner — here's my timeline so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-8">
            {milestones.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative pl-16 md:pl-20 group"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full border-2 ${
                  item.active
                    ? "border-primary bg-primary/20"
                    : "border-muted-foreground/30 bg-muted"
                } transition-colors`}>
                  {item.active && (
                    <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                  )}
                </div>

                <div className={`glass rounded-xl p-5 group-hover:glow-shadow transition-all duration-300 ${
                  !item.active ? "opacity-60" : ""
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <item.icon size={16} className="text-primary" />
                      <h4 className="font-display font-semibold text-foreground text-sm">{item.title}</h4>
                    </div>
                    <span className="text-xs text-primary font-display font-medium glass rounded-full px-2.5 py-0.5">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm text-muted-foreground font-display">
            <Users size={16} className="text-primary" />
            Fresher — Actively seeking internship opportunities
            <ArrowRight size={14} className="text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
