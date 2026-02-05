import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Code, Heart, Rocket, Users, Award, Target } from "lucide-react";
import { Link } from "react-router";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make starts with our customers. Your success is our success.",
    color: "neon-green"
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    color: "warm-orange"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great things happen when passionate people work together towards a common goal.",
    color: "neon-green"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We set high standards and continuously strive to exceed them in everything we do.",
    color: "warm-orange"
  },
  {
    icon: Target,
    title: "Impact",
    description: "We're committed to making a real difference in the restaurant industry.",
    color: "neon-green"
  },
  {
    icon: Code,
    title: "Quality Code",
    description: "Clean, maintainable, and efficient code is at the heart of our platform.",
    color: "warm-orange"
  }
];

const stats = [
  { value: "5,000+", label: "Restaurants Served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support Available" },
  { value: "50+", label: "Integrations" }
];

export default function AboutPage() {
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

          <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ background: 'var(--warm-orange)' }} />

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
                ABOUT US
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
              Building The Future
              <br />
              Of Restaurant Management
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground max-w-3xl mx-auto"
              style={{ fontSize: 'var(--text-body-lg)', lineHeight: 1.7 }}
            >
              ServeSync was born from a simple idea: restaurants deserve technology that works as hard as they do.
              We're on a mission to empower restaurant owners with tools that are powerful, intuitive, and built for the modern world.
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="gradient-text mb-2"
                    style={{
                      fontSize: 'var(--text-heading-xl)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800
                    }}>
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="relative py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-12 text-center"
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
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-6"
                style={{ fontSize: 'var(--text-body-lg)', lineHeight: 1.7 }}>
                To revolutionize the restaurant industry by providing cutting-edge technology that empowers
                restaurant owners to make smarter decisions, optimize operations, and deliver exceptional
                customer experiences. We believe that with the right tools, every restaurant can thrive.
              </p>
              <div className="flex items-center justify-center gap-2 text-neon-green">
                <Heart className="w-5 h-5" fill="currentColor" />
                <span className="font-semibold">Built with passion for restaurants</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="gradient-text mb-4"
                style={{
                  fontSize: 'var(--text-heading-xl)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  letterSpacing: 'var(--tracking-tight)'
                }}
              >
                Our Values
              </h2>
              <p className="text-muted-foreground"
                style={{ fontSize: 'var(--text-body-lg)' }}>
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="glass-card rounded-3xl p-8 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: value.color === 'neon-green'
                          ? 'linear-gradient(135deg, var(--neon-green) 0%, oklch(0.75 0.18 170) 100%)'
                          : 'linear-gradient(135deg, var(--warm-orange) 0%, oklch(0.7 0.2 35) 100%)'
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: 'oklch(0.08 0 0)' }} />
                    </motion.div>

                    <h3
                      className="mb-3"
                      style={{
                        fontSize: 'var(--text-heading-md)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700
                      }}
                    >
                      {value.title}
                    </h3>

                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="relative py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-12 text-center relative overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
                  style={{ background: 'var(--neon-green)' }} />
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl"
                  style={{ background: 'var(--warm-orange)' }} />
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, var(--neon-green) 0%, var(--warm-orange) 100%)'
                  }}
                >
                  <Code className="w-12 h-12" style={{ color: 'oklch(0.08 0 0)' }} />
                </motion.div>

                <h2
                  className="gradient-text mb-4"
                  style={{
                    fontSize: 'var(--text-heading-xl)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    letterSpacing: 'var(--tracking-tight)'
                  }}
                >
                  Meet The Developer
                </h2>

                <div className="mb-6">
                  <p
                    className="mb-2"
                    style={{
                      fontSize: 'var(--text-heading-lg)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      color: 'var(--foreground)'
                    }}
                  >
                    Rafiur Rahman
                  </p>
                  <p className="text-neon-green font-semibold mb-4"
                    style={{ fontSize: 'var(--text-body-lg)' }}>
                    Full Stack Developer
                  </p>
                </div>

                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto"
                  style={{ fontSize: 'var(--text-body)', lineHeight: 1.7 }}>
                  Passionate about creating elegant solutions to complex problems. With expertise in modern
                  web technologies and a deep understanding of the restaurant industry, I built ServeSync to
                  help restaurants operate more efficiently and profitably. Every line of code is crafted with
                  care, every feature designed with purpose.
                </p>

                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <div className="px-4 py-2 rounded-xl glass-card">
                    <span className="text-sm font-semibold">React & TypeScript</span>
                  </div>
                  <div className="px-4 py-2 rounded-xl glass-card">
                    <span className="text-sm font-semibold">Node.js & APIs</span>
                  </div>
                  <div className="px-4 py-2 rounded-xl glass-card">
                    <span className="text-sm font-semibold">UI/UX Design</span>
                  </div>
                  <div className="px-4 py-2 rounded-xl glass-card">
                    <span className="text-sm font-semibold">Cloud Architecture</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                Join Us On This Journey
              </h2>
              <p className="text-muted-foreground mb-8"
                style={{ fontSize: 'var(--text-body-lg)' }}>
                Ready to transform your restaurant operations?
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