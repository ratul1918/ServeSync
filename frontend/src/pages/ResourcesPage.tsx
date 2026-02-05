import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BookOpen, Video, FileText, Headphones, Code, MessageCircle, Download, ExternalLink } from "lucide-react";

const resourceCategories = [
  {
    title: "DOCUMENTATION",
    icon: BookOpen,
    color: "neon-green",
    resources: [
      {
        title: "Getting Started Guide",
        description: "Learn the basics and set up your restaurant in minutes",
        type: "Guide",
        link: "#"
      },
      {
        title: "API Reference",
        description: "Complete API documentation for developers",
        type: "Documentation",
        link: "#"
      },
      {
        title: "Feature Tutorials",
        description: "Step-by-step guides for every ServeSync feature",
        type: "Tutorial",
        link: "#"
      },
      {
        title: "Best Practices",
        description: "Industry insights and optimization strategies",
        type: "Guide",
        link: "#"
      }
    ]
  },
  {
    title: "VIDEO TUTORIALS",
    icon: Video,
    color: "warm-orange",
    resources: [
      {
        title: "Platform Overview (5:24)",
        description: "Quick tour of ServeSync's main features",
        type: "Video",
        link: "#"
      },
      {
        title: "Setting Up Your First Restaurant",
        description: "Complete walkthrough from signup to first order",
        type: "Video",
        link: "#"
      },
      {
        title: "Advanced Analytics Deep Dive",
        description: "Master the analytics dashboard and reports",
        type: "Video",
        link: "#"
      },
      {
        title: "Team Management 101",
        description: "Efficiently manage staff and permissions",
        type: "Video",
        link: "#"
      }
    ]
  },
  {
    title: "DOWNLOADS",
    icon: Download,
    color: "neon-green",
    resources: [
      {
        title: "Mobile App - iOS",
        description: "Download ServeSync for iPhone and iPad",
        type: "App",
        link: "#"
      },
      {
        title: "Mobile App - Android",
        description: "Download ServeSync for Android devices",
        type: "App",
        link: "#"
      },
      {
        title: "Restaurant Setup Checklist",
        description: "PDF checklist for onboarding your team",
        type: "PDF",
        link: "#"
      },
      {
        title: "Integration Templates",
        description: "Pre-built templates for common integrations",
        type: "Templates",
        link: "#"
      }
    ]
  },
  {
    title: "DEVELOPER RESOURCES",
    icon: Code,
    color: "warm-orange",
    resources: [
      {
        title: "API Documentation",
        description: "RESTful API reference and authentication guide",
        type: "Docs",
        link: "#"
      },
      {
        title: "Webhook Guide",
        description: "Real-time event notifications for your app",
        type: "Guide",
        link: "#"
      },
      {
        title: "SDK Libraries",
        description: "Official SDKs for JavaScript, Python, and Ruby",
        type: "Code",
        link: "#"
      },
      {
        title: "Plugin Development",
        description: "Build custom extensions for ServeSync",
        type: "Guide",
        link: "#"
      }
    ]
  }
];

const supportOptions = [
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our support team is available around the clock",
    action: "Contact Support",
    color: "neon-green"
  },
  {
    icon: MessageCircle,
    title: "Community Forum",
    description: "Connect with other restaurant owners and share tips",
    action: "Join Community",
    color: "warm-orange"
  },
  {
    icon: FileText,
    title: "Knowledge Base",
    description: "Search our comprehensive library of articles",
    action: "Browse Articles",
    color: "neon-green"
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 px-6 overflow-hidden">
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
                LEARNING CENTER
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
              Everything You Need
              <br />
              To Succeed
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
              style={{ fontSize: 'var(--text-body-lg)', lineHeight: 1.7 }}
            >
              Comprehensive guides, video tutorials, and developer documentation to help you
              get the most out of ServeSync.
            </motion.p>
          </div>
        </section>

        {/* Resource Categories */}
        {resourceCategories.map((category, catIndex) => {
          const CategoryIcon = category.icon;
          return (
            <section key={catIndex} className="relative py-20 px-6">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-4 mb-12"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: category.color === 'neon-green'
                        ? 'linear-gradient(135deg, var(--neon-green) 0%, oklch(0.75 0.18 170) 100%)'
                        : 'linear-gradient(135deg, var(--warm-orange) 0%, oklch(0.7 0.2 35) 100%)'
                    }}>
                    <CategoryIcon className="w-7 h-7" style={{ color: 'oklch(0.08 0 0)' }} />
                  </div>
                  <div>
                    <h2
                      className={`${category.color === 'neon-green' ? 'gradient-text-green' : 'gradient-text-orange'}`}
                      style={{
                        fontSize: 'var(--text-heading-xl)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        letterSpacing: 'var(--tracking-wide)'
                      }}
                    >
                      {category.title}
                    </h2>
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.resources.map((resource, resIndex) => (
                    <motion.a
                      key={resIndex}
                      href={resource.link}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: resIndex * 0.05 }}
                      whileHover={{ y: -8 }}
                      className="glass-card rounded-2xl p-6 group cursor-pointer relative overflow-hidden block"
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
                        <div className="flex items-start justify-between mb-4">
                          <span className="px-3 py-1 rounded-lg text-xs font-semibold"
                            style={{
                              background: category.color === 'neon-green' ? 'var(--neon-green)' : 'var(--warm-orange)',
                              color: 'oklch(0.08 0 0)'
                            }}>
                            {resource.type}
                          </span>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                        </div>

                        <h3
                          className="mb-2 group-hover:gradient-text transition-all"
                          style={{
                            fontSize: 'var(--text-heading-md)',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700
                          }}
                        >
                          {resource.title}
                        </h3>

                        <p className="text-muted-foreground text-sm">
                          {resource.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Support Options */}
        <section className="relative py-32 px-6">
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
                Need More Help?
              </h2>
              <p className="text-muted-foreground"
                style={{ fontSize: 'var(--text-body-lg)' }}>
                Our team is here to support you every step of the way
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {supportOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="glass-card rounded-3xl p-8 text-center group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      style={{
                        background: option.color === 'neon-green'
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
                      {option.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 text-sm">
                      {option.description}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 rounded-xl font-semibold text-sm glass-card hover:border-neon-green transition-all"
                    >
                      {option.action}
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
