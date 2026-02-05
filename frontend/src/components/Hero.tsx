import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(133, 255, 189, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(133, 255, 189, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ background: 'var(--neon-green)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ background: 'var(--warm-orange)' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium tracking-wide"
                style={{
                  background: 'linear-gradient(135deg, var(--neon-green) 0%, var(--warm-orange) 100%)',
                  color: 'oklch(0.08 0 0)'
                }}>
                WHERE RESTAURANTS RUN SMARTER
              </span>
            </motion.div>

            {/* Hero headline with staggered animation */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="gradient-text text-glow-green"
                style={{
                  fontSize: 'var(--text-hero)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  letterSpacing: 'var(--tracking-tighter)',
                  lineHeight: 0.95
                }}
              >
                ServeSync
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  fontSize: 'var(--text-hero-sub)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  letterSpacing: 'var(--tracking-tight)',
                  lineHeight: 1.1,
                  color: 'var(--foreground)'
                }}
              >
                Restaurant Management,
                <span className="gradient-text-orange"> Elevated.</span>
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-muted-foreground max-w-xl"
              style={{
                fontSize: 'var(--text-body-lg)',
                lineHeight: 1.7
              }}
            >
              Transform your restaurant operations with AI-powered insights, real-time analytics, 
              and seamless team coordination. Built for modern restaurateurs who demand excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/signin">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, var(--neon-green) 0%, var(--warm-orange) 100%)',
                    color: 'oklch(0.08 0 0)',
                    fontSize: 'var(--text-body-lg)'
                  }}
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  
                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0, opacity: 1 }}
                    whileHover={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:border-neon-green/50 transition-all"
                style={{
                  fontSize: 'var(--text-body-lg)'
                }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-8 pt-8 border-t border-border"
            >
              {[
                { value: "5,000+", label: "Restaurants" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="gradient-text-green font-bold"
                    style={{
                      fontSize: 'var(--text-heading-lg)',
                      fontFamily: 'var(--font-heading)'
                    }}>
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Floating Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Main dashboard card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card rounded-3xl p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold tracking-wide" style={{ fontSize: 'var(--text-heading-md)' }}>
                  Today's Overview
                </h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" />
                  <span className="text-sm text-muted-foreground">Live</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Revenue", value: "$12,847", change: "+12.5%", positive: true },
                  { label: "Orders", value: "324", change: "+8.2%", positive: true },
                  { label: "Avg. Time", value: "18m", change: "-3.1%", positive: true },
                  { label: "Tables", value: "28/32", change: "87.5%", positive: true }
                ].map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="glass-card p-4 rounded-2xl hover:border-neon-green/30 transition-all"
                  >
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                      {metric.label}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold font-mono-tech" style={{ fontSize: 'var(--text-heading-lg)' }}>
                        {metric.value}
                      </span>
                      <span className="text-sm text-neon-green font-medium">
                        {metric.change}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mini chart visualization */}
              <div className="h-24 glass-card rounded-2xl p-4 flex items-end gap-1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.random() * 60 + 20}%` }}
                    transition={{ delay: 1.2 + i * 0.02, duration: 0.4 }}
                    className="flex-1 rounded-sm"
                    style={{
                      background: i % 3 === 0
                        ? 'var(--neon-green)'
                        : i % 2 === 0
                        ? 'var(--warm-orange)'
                        : 'var(--muted)'
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating notification card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              animate-float={{ y: [0, -8, 0] }}
              transition-float={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-8 top-32 glass-card rounded-2xl p-4 max-w-xs"
            >
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎉</span>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">New Order #847</p>
                  <p className="text-xs text-muted-foreground">Table 12 • $84.50</p>
                </div>
              </div>
            </motion.div>

            {/* Floating alert card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 }}
              className="absolute -right-8 bottom-32 glass-card rounded-2xl p-4 max-w-xs"
            >
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-warm-orange/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Peak Hour Alert</p>
                  <p className="text-xs text-muted-foreground">Staff optimized • All systems go</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}