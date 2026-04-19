import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Anirban2005-git", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anirban-bagchi-503a07378", label: "LinkedIn" },
  { icon: Mail, href: "mailto:bagchia059@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 pt-16 pb-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="font-display text-2xl font-bold gradient-text">
              Anirban
            </a>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
              Aspiring Software Engineer building meaningful projects and growing every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-shadow transition-all duration-300 group"
                >
                  <item.icon size={16} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Anirban Bagchi. Made with
            <Heart size={12} className="text-primary fill-primary" />
          </p>

          <a
            href="#home"
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-shadow transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
