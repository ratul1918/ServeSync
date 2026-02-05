import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { Check, Sparkles, Building2, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Sparkles,
    price: "$49",
    period: "/month",
    description: "Perfect for small cafes and new restaurants",
    color: "neon-green",
    features: [
      "Up to 10 tables",
      "Basic analytics dashboard",
      "Team management (5 users)",
      "Mobile app access",
      "Email support",
      "Standard integrations",
      "Daily reports",
      "Payment processing"
    ],
    popular: false
  },
  {
    name: "Professional",
    icon: Rocket,
    price: "$149",
    period: "/month",
    description: "For growing restaurants that need more power",
    color: "warm-orange",
    features: [
      "Unlimited tables",
      "Advanced analytics & AI insights",
      "Team management (unlimited)",
      "Mobile + tablet apps",
      "Priority support (24/7)",
      "All integrations + API access",
      "Real-time reports & alerts",
      "Payment processing",
      "Custom branding",
      "Multi-location support",
      "Inventory management",
      "Customer loyalty program"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "",
    description: "Tailored solutions for restaurant groups",
    color: "neon-green",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security & compliance",
      "SLA guarantee (99.99%)",
      "White-label options",
      "Training & onboarding",
      "Custom development",
      "Priority feature requests",
      "Volume discounts"
    ],
    popular: false
  }
];

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the difference."
  },
  {
    question: "Is there a free trial?",
    answer: "Absolutely. We offer a 14-day free trial on all plans—no credit card required. Experience the full power of ServeSync risk-free."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and ACH transfers for annual plans. Enterprise customers can also pay by invoice."
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes! Save 20% when you choose annual billing. Plus, you'll get 2 months free and priority support upgrades."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data is always yours. You can export everything before canceling, and we'll keep your data for 90 days in case you change your mind."
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees, ever. We believe in transparent pricing. What you see is what you pay."
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 px-6 overflow-hidden">
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
                TRANSPARENT PRICING
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
              Simple Pricing,
              <br />
              Powerful Results
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
              style={{ fontSize: 'var(--text-body-lg)', lineHeight: 1.7 }}
            >
              Choose the plan that fits your restaurant. All plans include core features,
              with no hidden fees or surprises.
            </motion.p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`glass-card rounded-3xl p-8 relative overflow-hidden ${
                      plan.popular ? 'border-2' : ''
                    }`}
                    style={plan.popular ? {
                      borderColor: 'var(--warm-orange)'
                    } : {}}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-2xl text-xs font-bold"
                        style={{
                          background: 'var(--warm-orange)',
                          color: 'oklch(0.08 0 0)'
                        }}>
                        MOST POPULAR
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: plan.color === 'neon-green'
                            ? 'linear-gradient(135deg, var(--neon-green) 0%, oklch(0.75 0.18 170) 100%)'
                            : 'linear-gradient(135deg, var(--warm-orange) 0%, oklch(0.7 0.2 35) 100%)'
                        }}>
                        <Icon className="w-6 h-6" style={{ color: 'oklch(0.08 0 0)' }} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: 'var(--text-heading-md)',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700
                          }}
                        >
                          {plan.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6">
                      {plan.description}
                    </p>

                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        <span
                          className="gradient-text"
                          style={{
                            fontSize: 'var(--text-heading-xl)',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 800
                          }}
                        >
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-xl font-semibold mb-8 ${
                        plan.popular ? '' : 'glass-card hover:border-neon-green'
                      }`}
                      style={plan.popular ? {
                        background: 'linear-gradient(135deg, var(--neon-green) 0%, var(--warm-orange) 100%)',
                        color: 'oklch(0.08 0 0)'
                      } : {}}
                    >
                      {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                    </motion.button>

                    <div className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{
                              background: plan.color === 'neon-green' ? 'var(--neon-green)' : 'var(--warm-orange)'
                            }}>
                            <Check className="w-3 h-3" style={{ color: 'oklch(0.08 0 0)' }} />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-32 px-6">
          <div className="max-w-4xl mx-auto">
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
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground"
                style={{ fontSize: 'var(--text-body-lg)' }}>
                Everything you need to know about pricing and billing
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: 'var(--text-heading-md)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700
                    }}
                  >
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground"
                    style={{ fontSize: 'var(--text-body)', lineHeight: 1.6 }}>
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}