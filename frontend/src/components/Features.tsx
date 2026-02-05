import { motion } from "motion/react";
import { 
  BarChart3, 
  Users, 
  Clock, 
  TrendingUp, 
  Smartphone,
  Zap,
  Shield,
  Cpu
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "REAL-TIME ANALYTICS",
    description: "Track every metric that matters. Revenue, orders, table turnover—all in one beautiful dashboard.",
    color: "neon-green"
  },
  {
    icon: Users,
    title: "TEAM COORDINATION",
    description: "Keep your entire staff synced with instant updates, shift management, and performance tracking.",
    color: "warm-orange"
  },
  {
    icon: Clock,
    title: "SMART SCHEDULING",
    description: "AI-powered shift planning that optimizes labor costs while ensuring perfect coverage.",
    color: "neon-green"
  },
  {
    icon: TrendingUp,
    title: "PREDICTIVE INSIGHTS",
    description: "Forecast demand, identify trends, and make data-driven decisions before your competitors.",
    color: "warm-orange"
  },
  {
    icon: Smartphone,
    title: "MOBILE-FIRST",
    description: "Manage your restaurant from anywhere. Full functionality on any device, anytime.",
    color: "neon-green"
  },
  {
    icon: Zap,
    title: "LIGHTNING FAST",
    description: "Sub-second response times. Because every second counts during peak hours.",
    color: "warm-orange"
  },
  {
    icon: Shield,
    title: "BANK-LEVEL SECURITY",
    description: "Your data is encrypted, backed up, and protected with enterprise-grade security.",
    color: "neon-green"
  },
  {
    icon: Cpu,
    title: "AI-POWERED",
    description: "Machine learning that gets smarter with every order, optimizing operations automatically.",
    color: "warm-orange"
  }
];

export function Features() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'var(--neon-green)' }} />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'var(--warm-orange)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest gradient-text-green">
              POWERFUL FEATURES
            </span>
          </motion.div>
          
          <h2
            className="gradient-text mb-8"
            style={{
              fontSize: 'var(--text-display)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 1.1
            }}
          >
            Everything You Need.
            <br />
            Nothing You Don't.
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: 'var(--text-body-lg)', lineHeight: 1.7 }}>
            Built from the ground up for modern restaurants. Every feature designed 
            to save you time, increase revenue, and delight your customers.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card rounded-3xl p-6 group cursor-pointer relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: feature.color === 'neon-green'
                      ? 'radial-gradient(circle at top left, var(--neon-green-glow), transparent)'
                      : 'radial-gradient(circle at top left, var(--warm-orange-glow), transparent)'
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: feature.color === 'neon-green'
                        ? 'linear-gradient(135deg, var(--neon-green) 0%, oklch(0.75 0.18 170) 100%)'
                        : 'linear-gradient(135deg, var(--warm-orange) 0%, oklch(0.7 0.2 35) 100%)'
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: 'oklch(0.08 0 0)' }} />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="mb-3 group-hover:gradient-text transition-all"
                    style={{
                      fontSize: 'var(--text-heading-md)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      letterSpacing: 'var(--tracking-wide)'
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors"
                    style={{
                      fontSize: 'var(--text-body-sm)',
                      lineHeight: 1.6
                    }}>
                    {feature.description}
                  </p>

                  {/* Animated arrow */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="mt-4 flex items-center gap-2 text-sm font-semibold"
                    style={{
                      color: feature.color === 'neon-green' ? 'var(--neon-green)' : 'var(--warm-orange)'
                    }}
                  >
                    <span>Learn more</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Border gradient on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: feature.color === 'neon-green'
                      ? 'linear-gradient(135deg, var(--neon-green) 0%, transparent 50%)'
                      : 'linear-gradient(135deg, var(--warm-orange) 0%, transparent 50%)',
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground mb-6"
            style={{ fontSize: 'var(--text-body-lg)' }}>
            And 50+ more features to supercharge your restaurant
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card px-8 py-4 rounded-2xl font-semibold hover:border-neon-green transition-all"
            style={{ fontSize: 'var(--text-body-lg)' }}
          >
            View All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}