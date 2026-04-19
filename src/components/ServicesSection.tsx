import { motion } from "framer-motion";
import { Globe, Layout, Server, Palette, Database, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  gradient: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Building responsive websites using HTML, CSS, JavaScript, Node.js, and Python.",
    gradient: "from-primary/10 to-secondary/5",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Creating clean UI layouts with modern design patterns and frameworks.",
    gradient: "from-secondary/10 to-primary/5",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Developing APIs and server logic with Python and Node.js.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Designing simple, user-friendly, and visually appealing interfaces.",
    gradient: "from-secondary/10 to-secondary/5",
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Managing and querying databases using SQLite for efficient data storage.",
    gradient: "from-primary/10 to-secondary/5",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />

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
            Services
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From concept to deployment — here's how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass rounded-2xl p-6 group hover:glow-shadow transition-all duration-500 relative overflow-hidden cursor-default ${
                idx === services.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground/0 group-hover:text-primary transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                  />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
