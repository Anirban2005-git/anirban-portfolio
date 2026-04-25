import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Layers, Users, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Layers, label: "Full Stack" },
  { icon: Users, label: "Team Project" },
  { icon: Smartphone, label: "Responsive" },
];

const techStack = ["HTML", "CSS", "JavaScript", "Python", "Node.js", "SQLite"];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

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
            Portfolio
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Real projects built with real technologies — showcasing hands-on experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl overflow-hidden group">
            {/* Project header / image area */}
            <div className="relative h-72 md:h-96 overflow-hidden bg-slate-900">
              <img
                src="https://i.postimg.cc/8p0ZVtWD/jayda-mandir-jamshedpur-jharkhand-1-attr-hero.jpg?dl=1"
                alt="Jharkhand Tourism Website screenshot"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative z-10 flex h-full flex-col items-center justify-center gap-4 text-center px-4"
              >
                <span className="text-xs font-display text-primary/70 tracking-widest uppercase">Tourism Platform</span>
                <h3 className="text-white font-display text-xl md:text-3xl font-semibold tracking-tight drop-shadow-lg">
                  Jharkhand Tourism Website
                </h3>
                <p className="max-w-xl text-sm text-slate-100/90 leading-relaxed">
                  Real tourism branding for Jharkhand with an immersive UI preview from the actual project image.
                </p>
              </motion.div>

              {/* Floating decorative elements */}
              <div className="absolute top-6 right-8 w-16 h-16 rounded-xl border border-primary/10 rotate-12" />
              <div className="absolute bottom-8 left-10 w-10 h-10 rounded-lg border border-secondary/10 -rotate-6" />
            </div>

            {/* Project content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-display font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  SIH Hackathon
                </span>
                <span className="text-xs bg-secondary/10 text-secondary px-3 py-1.5 rounded-full font-display">
                  Team Project
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Jharkhand Tourism Website
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                A tourism information platform with interactive UI and backend, built during Smart India Hackathon.
                Features include dynamic content, responsive design, and a robust database layer for managing
                tourism data across Jharkhand.
              </p>

              {/* Features row */}
              <div className="flex flex-wrap gap-4 mb-6">
                {features.map((feat) => (
                  <div key={feat.label} className="flex items-center gap-2 text-muted-foreground">
                    <feat.icon size={14} className="text-primary" />
                    <span className="text-xs font-display">{feat.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="text-xs font-display glass rounded-lg px-3 py-1.5 text-muted-foreground"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/80 text-primary-foreground gap-2 rounded-xl glow-shadow hover:shadow-[0_0_30px_hsl(230_80%_60%/0.25)] transition-shadow"
                >
                  <ExternalLink size={16} /> View Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/40 text-foreground hover:bg-primary/10 gap-2 rounded-xl hover:border-primary/70 transition-all"
                  asChild
                >
                  <a href="https://github.com/Anirban2005-git" target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* More projects coming */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-10 font-display"
        >
          More projects coming soon — stay tuned! 🚀
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;
