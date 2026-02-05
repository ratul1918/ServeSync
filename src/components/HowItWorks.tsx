import { motion } from "motion/react";
import { Sparkles, Rocket, TrendingUp, Check } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Sparkles,
    title: "Sign Up in 60 Seconds",
    description: "No credit card required. No lengthy setup. Just your email and you're in.",
    features: ["Instant access", "Pre-configured templates", "Sample data included"]
  },
  {
    number: "02",
    icon: Rocket,
    title: "Customize Your Workspace",
    description: "Tailor ServeSync to match your restaurant's unique workflow and brand.",
    features: ["Custom menus", "Team roles & permissions", "Integration setup"]
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Watch Your Business Grow",
    description: "Start making smarter decisions with real-time insights from day one.",
    features: ["Live analytics", "Automated reports", "24/7 support"]
  }
];

export function HowItWorks() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at center, var(--neon-green) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest gradient-text-orange">
              SIMPLE ONBOARDING
            </span>
          </motion.div>
          
          <h2
            className="gradient-text"
            style={{
              fontSize: 'var(--text-display)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 1.1
            }}
          >
            From Zero to Hero
            <br />
            in Three Steps
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Number & Content */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  {/* Oversized number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mb-8"
                  >
                    <span
                      className="gradient-text text-glow-green opacity-20 absolute -top-8 -left-4"
                      style={{
                        fontSize: 'clamp(8rem, 15vw, 12rem)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        lineHeight: 1
                      }}
                    >
                      {step.number}
                    </span>
                    <div className="relative z-10 flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          background: index === 0
                            ? 'linear-gradient(135deg, var(--neon-green) 0%, oklch(0.75 0.18 170) 100%)'
                            : index === 1
                            ? 'linear-gradient(135deg, var(--warm-orange) 0%, oklch(0.7 0.2 35) 100%)'
                            : 'linear-gradient(135deg, var(--neon-green) 0%, var(--warm-orange) 100%)'
                        }}
                      >
                        <Icon className="w-8 h-8" style={{ color: 'oklch(0.08 0 0)' }} />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: 'var(--text-heading-xl)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      letterSpacing: 'var(--tracking-tight)'
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Animated underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-1 rounded-full mb-6"
                    style={{
                      background: index % 2 === 0
                        ? 'var(--neon-green)'
                        : 'var(--warm-orange)'
                    }}
                  />

                  {/* Description */}
                  <p className="text-muted-foreground mb-6"
                    style={{
                      fontSize: 'var(--text-body-lg)',
                      lineHeight: 1.7
                    }}>
                    {step.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-3">
                    {step.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: index % 2 === 0
                              ? 'var(--neon-green)'
                              : 'var(--warm-orange)'
                          }}>
                          <Check className="w-4 h-4" style={{ color: 'oklch(0.08 0 0)' }} />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={isEven ? 'lg:col-start-2' : 'lg:col-start-1'}
                >
                  <div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: index % 2 === 0
                          ? 'radial-gradient(circle at center, var(--neon-green-glow), transparent)'
                          : 'radial-gradient(circle at center, var(--warm-orange-glow), transparent)'
                      }}
                    />

                    <div className="relative z-10">
                      {/* Placeholder visualization based on step */}
                      {index === 0 && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full"
                              style={{ background: 'var(--neon-green)' }} />
                            <div className="flex-1 space-y-2">
                              <div className="h-3 bg-muted rounded-full w-3/4" />
                              <div className="h-2 bg-muted/50 rounded-full w-1/2" />
                            </div>
                          </div>
                          {[1, 2, 3].map((i) => (
                            <motion.div
                              key={i}
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                              className="h-12 glass-card rounded-2xl"
                            />
                          ))}
                        </div>
                      )}

                      {index === 1 && (
                        <div className="grid grid-cols-2 gap-4">
                          {[1, 2, 3, 4].map((i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="glass-card rounded-2xl p-6 aspect-square flex items-center justify-center"
                            >
                              <div className="text-center">
                                <div className="w-12 h-12 rounded-xl mx-auto mb-3"
                                  style={{
                                    background: i % 2 === 0 ? 'var(--neon-green)' : 'var(--warm-orange)'
                                  }} />
                                <div className="h-2 bg-muted rounded-full w-16 mx-auto" />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {index === 2 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-3 gap-3 mb-6">
                            {[
                              { label: "Revenue", value: "$24K", color: "neon-green" },
                              { label: "Orders", value: "856", color: "warm-orange" },
                              { label: "Rating", value: "4.9★", color: "neon-green" }
                            ].map((stat, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="glass-card rounded-2xl p-4 text-center"
                              >
                                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                                  {stat.label}
                                </div>
                                <div className="font-bold font-mono-tech"
                                  style={{
                                    fontSize: 'var(--text-heading-lg)',
                                    color: stat.color === 'neon-green' ? 'var(--neon-green)' : 'var(--warm-orange)'
                                  }}>
                                  {stat.value}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          <div className="h-32 glass-card rounded-2xl flex items-end gap-1 p-4">
                            {Array.from({ length: 12 }).map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 + i * 0.05, duration: 0.4 }}
                                className="flex-1 rounded-sm"
                                style={{
                                  background: i % 2 === 0 ? 'var(--neon-green)' : 'var(--warm-orange)'
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}