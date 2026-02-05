import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'var(--neon-green)' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="gradient-text mb-4 cursor-pointer"
                style={{
                  fontSize: 'var(--text-heading-lg)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  letterSpacing: 'var(--tracking-tight)'
                }}
              >
                ServeSync
              </motion.h3>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Where restaurants run smarter. Built for the modern restaurateur.
            </p>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-neon-green transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm"
              style={{ fontFamily: 'var(--font-heading)' }}>
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Features', path: '/features' },
                { label: 'Pricing', path: '/pricing' },
                { label: 'Integrations', path: '/features' },
                { label: 'Changelog', path: '/resources' },
                { label: 'Roadmap', path: '/resources' }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer"
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm"
              style={{ fontFamily: 'var(--font-heading)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', path: '/about' },
                { label: 'Blog', path: '/resources' },
                { label: 'Careers', path: '/about' },
                { label: 'Press', path: '/about' },
                { label: 'Partners', path: '/about' }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer"
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm"
              style={{ fontFamily: 'var(--font-heading)' }}>
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Documentation', path: '/resources' },
                { label: 'Help Center', path: '/resources' },
                { label: 'Community', path: '/resources' },
                { label: 'Contact', path: '/about' },
                { label: 'Status', path: '/resources' }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer"
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 ServeSync. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -2 }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}