import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Mail, Lock, ArrowRight, Chrome, Github } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', {
        email,
        password
      });
      console.log("Sign in success:", response.data);
      alert("Login successful!");
      navigate('/'); // Redirect to home or dashboard
    } catch (error: any) {
      console.error("Sign in error:", error);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
          {/* Background elements */}
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
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ background: 'var(--warm-orange)' }} />

          <div className="relative z-10 w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1
                className="gradient-text mb-4"
                style={{
                  fontSize: 'var(--text-heading-xl)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  letterSpacing: 'var(--tracking-tight)'
                }}
              >
                Welcome Back
              </h1>
              <p className="text-muted-foreground"
                style={{ fontSize: 'var(--text-body)' }}>
                Sign in to your ServeSync account
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card rounded-3xl p-8"
            >
              {/* Social Sign In */}
              <div className="space-y-3 mb-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glass-card px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 hover:border-neon-green transition-all"
                >
                  <Chrome className="w-5 h-5" />
                  <span>Continue with Google</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glass-card px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 hover:border-neon-green transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span>Continue with GitHub</span>
                </motion.button>
              </div>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-card text-muted-foreground">Or continue with email</span>
                </div>
              </div>

              {/* Email Sign In Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@restaurant.com"
                      className="w-full pl-12 pr-4 py-3 rounded-xl glass-card focus:border-neon-green outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-sm font-semibold">
                      Password
                    </label>
                    <a href="#" className="text-sm text-neon-green hover:underline">
                      Forgot?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-3 rounded-xl glass-card focus:border-neon-green outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 rounded border-border"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-muted-foreground">
                    Remember me for 30 days
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, var(--neon-green) 0%, var(--warm-orange) 100%)',
                    color: 'oklch(0.08 0 0)'
                  }}
                >
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>

              {/* Sign Up Link */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-neon-green font-semibold hover:underline">
                    Start free trial
                  </Link>
                </p>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-center"
            >
              <p className="text-xs text-muted-foreground mb-4">
                Trusted by 5,000+ restaurants worldwide
              </p>
              <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-green" />
                  <span>256-bit SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-green" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-green" />
                  <span>SOC 2 Type II</span>
                </div>
              </div>
            </motion.div>

            {/* Back to home */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <Link to="/">
                <motion.div
                  whileHover={{ x: -4 }}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>←</span>
                  <span>Back to home</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
