import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { useTheme } from "../contexts/ThemeContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Resources', path: '/resources' },
    { label: 'About', path: '/about' }
  ];

  const themeOptions = [
    { value: 'dark' as const, label: 'Dark', icon: Moon },
    { value: 'light' as const, label: 'Light', icon: Sun },
    { value: 'embedded' as const, label: 'Embedded', icon: Monitor }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-text cursor-pointer"
                style={{
                  fontSize: 'var(--text-heading-md)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  letterSpacing: 'var(--tracking-tight)'
                }}
              >
                ServeSync
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, i) => (
                <Link key={i} to={item.path}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`text-sm font-medium transition-colors relative ${
                      isActive(item.path) ? 'text-neon-green' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full"
                        style={{ background: 'var(--neon-green)' }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* CTA Buttons & Theme Switcher */}
            <div className="hidden md:flex items-center gap-4">
              {/* Theme Switcher */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowThemeMenu(!showThemeMenu)}
                  className="p-2 rounded-xl glass-card hover:border-neon-green transition-all"
                  title="Change theme"
                >
                  {theme === 'dark' && <Moon className="w-5 h-5" />}
                  {theme === 'light' && <Sun className="w-5 h-5" />}
                  {theme === 'embedded' && <Monitor className="w-5 h-5" />}
                </motion.button>

                <AnimatePresence>
                  {showThemeMenu && (
                    <>
                      {/* Backdrop */}
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowThemeMenu(false)}
                      />
                      
                      {/* Theme Menu */}
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 glass-card rounded-xl p-2 min-w-[140px] z-50"
                      >
                        {themeOptions.map((option) => {
                          const Icon = option.icon;
                          return (
                            <motion.button
                              key={option.value}
                              whileHover={{ x: 4 }}
                              onClick={() => {
                                setTheme(option.value);
                                setShowThemeMenu(false);
                              }}
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                theme === option.value
                                  ? 'bg-accent text-neon-green'
                                  : 'hover:bg-accent/50'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                              <span>{option.label}</span>
                            </motion.button>
                          );
                        })}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/signin">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 text-sm font-semibold hover:text-neon-green transition-colors"
                >
                  Sign In
                </motion.button>
              </Link>
              
              <Link to="/signin">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-xl text-sm font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, var(--neon-green) 0%, var(--warm-orange) 100%)',
                    color: 'oklch(0.08 0 0)'
                  }}
                >
                  Start Free Trial
                </motion.button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pt-4 border-t border-border overflow-hidden"
              >
                <div className="flex flex-col gap-4">
                  {navItems.map((item, i) => (
                    <Link key={i} to={item.path} onClick={() => setIsOpen(false)}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className={`text-sm font-medium transition-colors py-2 ${
                          isActive(item.path) ? 'text-neon-green' : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  ))}

                  {/* Mobile Theme Switcher */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Theme</p>
                    <div className="grid grid-cols-3 gap-2">
                      {themeOptions.map((option) => {
                        const Icon = option.icon;
                        return (
                          <motion.button
                            key={option.value}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setTheme(option.value)}
                            className={`flex flex-col items-center gap-2 px-3 py-3 rounded-xl text-xs font-medium transition-all ${
                              theme === option.value
                                ? 'glass-card border-neon-green text-neon-green'
                                : 'glass-card hover:border-neon-green/50'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span>{option.label}</span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-4 border-t border-border">
                    <Link to="/signin" onClick={() => setIsOpen(false)}>
                      <button className="w-full px-6 py-2 text-sm font-semibold text-left hover:text-neon-green transition-colors">
                        Sign In
                      </button>
                    </Link>
                    <Link to="/signin" onClick={() => setIsOpen(false)}>
                      <button
                        className="w-full px-6 py-3 rounded-xl text-sm font-semibold text-center"
                        style={{
                          background: 'linear-gradient(135deg, var(--neon-green) 0%, var(--warm-orange) 100%)',
                          color: 'oklch(0.08 0 0)'
                        }}
                      >
                        Start Free Trial
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
