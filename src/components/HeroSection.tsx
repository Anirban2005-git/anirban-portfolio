import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Github, Linkedin, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
const profileImg = "https://i.postimg.cc/W3t6jRgZ/Whats-App-Image-2026-04-05-at-10-34-30-PM.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const roles = [
  "Python Full Stack Learner",
  "AI & ML Enthusiast",
  "Web Developer",
  "Problem Solver",
];

const useTypewriter = (texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 1800) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const typedText = useTypewriter(roles);

  const stats = [
    { value: "5+", label: "Projects" },
    { value: "6+", label: "Skills" },
    { value: "1+", label: "Hackathons" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Anirban2005-git", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anirban-bagchi-503a07378", label: "LinkedIn" },
    { icon: Mail, href: "mailto:bagchia059@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(230_80%_60%/0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(270_60%_55%/0.08),transparent_60%)]" />

      {/* Floating orbs */}
      <FloatingOrb className="w-72 h-72 bg-primary top-20 -left-20" delay={0} />
      <FloatingOrb className="w-96 h-96 bg-secondary -bottom-20 right-10" delay={2} />
      <FloatingOrb className="w-48 h-48 bg-primary top-1/2 left-1/3" delay={4} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(230 80% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(230 80% 60% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Social links - vertical bar (desktop) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-primary/50" />
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-shadow transition-all duration-300 group"
            aria-label={link.label}
          >
            <link.icon size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        ))}
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 via-primary/50 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-display text-muted-foreground">Available for Internships & Collaborations</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-primary font-display font-medium mb-3 tracking-wider uppercase text-sm"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-4"
            >
              Anirban{" "}
              <span className="gradient-text">Bagchi</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 mb-3"
            >
              <Code2 size={20} className="text-primary" />
              <p className="text-lg md:text-xl font-display text-foreground">
                <span>{typedText}</span>
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              A passionate Computer Science (AI & ML) student interested in coding, gaming, and cricket.
              Focused on building real-world projects and becoming a successful software engineer.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground gap-2 px-8 rounded-xl glow-shadow hover:shadow-[0_0_40px_hsl(230_80%_60%/0.3)] transition-shadow"
              >
                <a href="#projects">
                  <ExternalLink size={18} />
                  View Projects
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-foreground hover:bg-primary/10 gap-2 px-8 rounded-xl hover:border-primary/70 transition-all"
              >
                <a href="#contact">
                  <Mail size={18} />
                  Contact Me
                </a>
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex gap-8"
            >
              {stats.map((stat, idx) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-display font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Animated ring */}
              <motion.div
                className="absolute inset-[-12px] rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, hsl(230 80% 60%), hsl(270 60% 55%), hsl(230 80% 60% / 0.2), hsl(270 60% 55%), hsl(230 80% 60%))",
                  padding: "2px",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden z-10">
                <img
                  src={profileImg}
                  alt="Anirban Bagchi"
                  className="w-full h-full object-cover"
                  width={512}
                  height={512}
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>

              {/* Floating badge - education */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-3 -right-6 glass rounded-xl px-4 py-2.5 z-20 animate-float"
              >
                <p className="text-xs text-muted-foreground">B.Tech CSE (AI & ML)</p>
                <p className="text-sm font-display font-semibold text-foreground">2024 – 2028</p>
              </motion.div>

              {/* Floating badge - status */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -top-2 -left-8 glass rounded-xl px-3 py-2 z-20"
                style={{ animation: "float 4s ease-in-out infinite 1s" }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-foreground font-display">Open to work</span>
                </div>
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute -z-10 -top-8 -right-8 grid grid-cols-4 gap-2 opacity-20">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-display tracking-widest uppercase">Scroll</span>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
