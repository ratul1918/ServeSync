import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import {
  BarChart3, Users, Clock, TrendingUp, Smartphone, Zap, Shield, Cpu,
  Bell, Calendar, MapPin, MessageSquare, CreditCard, Package, Settings, Database
} from "lucide-react";

const featureCategories = [
  {
    category: "ANALYTICS & INSIGHTS",
    color: "neon-green",
    features: [
      {
        icon: BarChart3,
        title: "Real-Time Analytics",
        description: "Monitor revenue, orders, and performance metrics as they happen with beautiful, interactive dashboards.",
        benefits: ["Live data updates", "Custom reports", "Export to CSV/PDF"]
      },
      {
        icon: TrendingUp,
        title: "Predictive Intelligence",
        description: "AI-powered forecasting helps you predict busy periods, optimize inventory, and maximize revenue.",
        benefits: ["Demand forecasting", "Trend analysis", "Smart recommendations"]
      },
      {
        icon: Database,
        title: "Advanced Reporting",
        description: "Generate comprehensive reports on every aspect of your business with customizable metrics.",
        benefits: ["Custom dashboards", "Automated reports", "Data visualization"]
      }
    ]
  },
  {
    category: "TEAM & OPERATIONS",
    color: "warm-orange",
    features: [
      {
        icon: Users,
        title: "Team Coordination",
        description: "Keep your entire staff in sync with real-time updates, role management, and performance tracking.",
        benefits: ["Role-based access", "Activity tracking", "Team messaging"]
      },
      {
        icon: Calendar,
        title: "Smart Scheduling",
        description: "AI-optimized shift planning that reduces labor costs while ensuring perfect coverage.",
        benefits: ["Auto-scheduling", "Shift swapping", "Time-off management"]
      },
      {
        icon: Bell,
        title: "Instant Notifications",
        description: "Stay informed with customizable alerts for orders, reservations, and critical events.",
        benefits: ["Push notifications", "SMS alerts", "Custom triggers"]
      }
    ]
  },
  {
    category: "CUSTOMER EXPERIENCE",
    color: "neon-green",
    features: [
      {
        icon: MapPin,
        title: "Table Management",
        description: "Optimize seating, track table turnover, and maximize your dining room capacity.",
        benefits: ["Visual floor plans", "Reservation system", "Waitlist management"]
      },
      {
        icon: MessageSquare,
        title: "Customer Feedback",
        description: "Collect and analyze customer reviews to continuously improve your service.",
        benefits: ["Review collection", "Sentiment analysis", "Response automation"]
      },
      {
        icon: CreditCard,
        title: "Payment Processing",
        description: "Accept payments seamlessly with integrated POS and multiple payment options.",
        benefits: ["Split bills", "Contactless payments", "Tip management"]
      }
    ]
  },
  {
    category: "PLATFORM & SECURITY",
    color: "warm-orange",
    features: [
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Full-featured mobile apps for iOS and Android. Manage everything from your phone.",
        benefits: ["Native apps", "Offline mode", "Sync across devices"]
      },
      {
        icon: Zap,
        title: "Lightning Performance",
        description: "Built for speed with sub-second response times even during peak hours.",
        benefits: ["99.9% uptime", "CDN delivery", "Auto-scaling"]
      },
      {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level encryption, automated backups, and compliance with industry standards.",
        benefits: ["256-bit encryption", "Daily backups", "GDPR compliant"]
      },
      {
        icon: Package,
        title: "Integrations",
        description: "Connect with your favorite tools including accounting, delivery, and marketing platforms.",
        benefits: ["50+ integrations", "API access", "Zapier support"]
      }
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(133, 255, 189, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(133, 255, 189, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ background: 'var(--neon-green)' }} />

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium tracking-wide inline-block"
                style={{
                  background: 'linear-gradient(135deg, var(--neon-green) 0%, var(--warm-orange) 100%)',
                  color: 'oklch(0.08 0 0)'
                }}>
                FULL FEATURE SET
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="gradient-text mb-6"
              style={{
                fontSize: 'var(--text-display)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                letterSpacing: 'var(--tracking-tight)',
                lineHeight: 1.1
              }}
            >
              Every Tool You Need
              <br />
              To Run A Modern Restaurant
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground max-w-3xl mx-auto"
              style={{ fontSize: 'var(--text-body-lg)', lineHeight: 1.7 }}
            >
              From real-time analytics to team coordination, payment processing to customer feedback—
              ServeSync brings everything together in one powerful, intuitive platform.
            </motion.p>
          </div>
        </section>

        {/* Feature Categories */}
        {featureCategories.map((category, catIndex) => (
          <section key={catIndex} className="relative py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2
                  className={`${category.color === 'neon-green' ? 'gradient-text-green' : 'gradient-text-orange'} mb-2`}
                  style={{
                    fontSize: 'var(--text-heading-xl)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    letterSpacing: 'var(--tracking-wide)'
                  }}
                >
                  {category.category}
                </h2>
                <div className="h-1 w-24 rounded-full"
                  style={{
                    background: category.color === 'neon-green' ? 'var(--neon-green)' : 'var(--warm-orange)'
                  }} />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, featureIndex) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="glass-card rounded-3xl p-8 group cursor-pointer relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: category.color === 'neon-green'
                            ? 'radial-gradient(circle at top left, var(--neon-green-glow), transparent)'
                            : 'radial-gradient(circle at top left, var(--warm-orange-glow), transparent)'
                        }}
                      />

                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                          style={{
                            background: category.color === 'neon-green'
                              ? 'linear-gradient(135deg, var(--neon-green) 0%, oklch(0.75 0.18 170) 100%)'
                              : 'linear-gradient(135deg, var(--warm-orange) 0%, oklch(0.7 0.2 35) 100%)'
                          }}
                        >
                          <Icon className="w-8 h-8" style={{ color: 'oklch(0.08 0 0)' }} />
                        </motion.div>

                        <h3
                          className="mb-3"
                          style={{
                            fontSize: 'var(--text-heading-md)',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700
                          }}
                        >
                          {feature.title}
                        </h3>

                        <p className="text-muted-foreground mb-4"
                          style={{ fontSize: 'var(--text-body-sm)', lineHeight: 1.6 }}>
                          {feature.description}
                        </p>

                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full"
                                style={{
                                  background: category.color === 'neon-green' ? 'var(--neon-green)' : 'var(--warm-orange)'
                                }} />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="relative py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-12"
            >
              <h2
                className="gradient-text mb-6"
                style={{
                  fontSize: 'var(--text-heading-xl)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  letterSpacing: 'var(--tracking-tight)'
                }}
              >
                Ready to Transform Your Restaurant?
              </h2>
              <p className="text-muted-foreground mb-8"
                style={{ fontSize: 'var(--text-body-lg)' }}>
                Join 5,000+ restaurants already running smarter with ServeSync
              </p>
              <Link to="/signin">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, var(--neon-green) 0%, var(--warm-orange) 100%)',
                    color: 'oklch(0.08 0 0)',
                    fontSize: 'var(--text-body-lg)'
                  }}
                >
                  Start Your Free Trial
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}