import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: Mail, label: "bagchia059@gmail.com", href: "mailto:bagchia059@gmail.com", subtitle: "Email" },
  { icon: Phone, label: "7439448495", href: "tel:7439448495", subtitle: "Phone" },
  { icon: Github, label: "Anirban2005-git", href: "https://github.com/Anirban2005-git", subtitle: "GitHub" },
  { icon: Linkedin, label: "Anirban Bagchi", href: "https://www.linkedin.com/in/anirban-bagchi-503a07378", subtitle: "LinkedIn" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_04lu8wb",
        "template_8zd4qln",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "AcF-FVxWvgj2kQkSp"
      )
      .then(() => {
        toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast({ title: "Failed to send", description: "Something went wrong. Please try again.", variant: "destructive" });
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

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
            Contact
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project idea or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick info cards */}
            <div className="glass rounded-2xl p-6 space-y-2">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm text-foreground font-display">India</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">Available for freelance & internships</span>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contactInfo.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 group hover:glow-shadow transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-display">{item.subtitle}</p>
                    <p className="text-sm text-foreground font-medium">{item.label}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-5"
          >
            <h3 className="font-display font-semibold text-foreground text-lg mb-2">Send a Message</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground font-display mb-1.5 block">Your Name</label>
                <Input
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary/50 rounded-xl"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-display mb-1.5 block">Your Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary/50 rounded-xl"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-muted-foreground font-display mb-1.5 block">Your Message</label>
              <Textarea
                placeholder="Tell me about your project or idea..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="bg-muted/30 border-border/50 focus:border-primary/50 resize-none rounded-xl"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={sending}
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground gap-2 rounded-xl glow-shadow hover:shadow-[0_0_30px_hsl(230_80%_60%/0.25)] transition-shadow"
            >
              <Send size={16} />
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
