import { motion } from "framer-motion";
import { GraduationCap, Target, Code2, Gamepad2, Trophy, Calendar, MapPin } from "lucide-react";
const profileImg = "https://i.postimg.cc/W3t6jRgZ/Whats-App-Image-2026-04-05-at-10-34-30-PM.jpg";

const interests = [
  { icon: Code2, label: "Coding", color: "from-primary/20 to-primary/5" },
  { icon: Gamepad2, label: "Gaming", color: "from-secondary/20 to-secondary/5" },
  { icon: Trophy, label: "Cricket", color: "from-primary/20 to-secondary/5" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

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
            About Me
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Designing Solutions, Not Just <span className="gradient-text">Visuals</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Get to know the person behind the code — my story, passions, and what drives me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden glass p-1">
                <img
                  src={profileImg}
                  alt="Anirban Bagchi"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl border-2 border-primary/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-lg border-2 border-secondary/20 -z-10" />
              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 glass rounded-xl px-4 py-3 text-center"
              >
                <p className="text-2xl font-display font-bold gradient-text">1+</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Year Learning</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm Anirban Bagchi, a B.Tech student in Computer Science & Engineering
                (AI & ML) at JIS College of Engineering. I'm a curious and motivated individual who
                loves to explore the world of technology, build projects, and solve problems through code.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I'm passionate about gaming and cricket. These interests have taught me
              strategic thinking, teamwork, and perseverance — qualities I bring to every project I work on.
            </p>

            {/* Interests */}
            <div className="flex flex-wrap gap-3 pt-2">
              {interests.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className={`glass rounded-xl px-5 py-3 flex items-center gap-3 group hover:glow-shadow transition-all duration-300 bg-gradient-to-br ${item.color}`}
                >
                  <item.icon size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-display font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Education & Goal cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass rounded-xl p-5 group hover:glow-shadow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <h4 className="font-display font-semibold text-foreground">Education</h4>
                </div>
                <p className="text-sm text-foreground font-medium">B.Tech in CSE (AI & ML)</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <MapPin size={12} className="text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">JIS College of Engineering</p>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <Calendar size={12} className="text-primary" />
                  <p className="text-xs text-primary font-display">2024 – 2028</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="glass rounded-xl p-5 group hover:glow-shadow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Target className="text-secondary" size={20} />
                  </div>
                  <h4 className="font-display font-semibold text-foreground">Career Goal</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Becoming a successful software engineer specializing in Python full stack development.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
