import { motion } from "motion/react";
import { ArrowUpRight, ArrowDownRight, Users, DollarSign, ShoppingCart, Clock } from "lucide-react";

const realtimeOrders = [
  { id: "#1248", table: "12", amount: "$84.50", time: "2m ago", status: "preparing" },
  { id: "#1247", table: "8", amount: "$62.30", time: "5m ago", status: "ready" },
  { id: "#1246", table: "15", amount: "$128.90", time: "8m ago", status: "served" },
  { id: "#1245", table: "3", amount: "$45.20", time: "12m ago", status: "completed" }
];

const topItems = [
  { name: "Truffle Pasta", orders: 47, revenue: "$1,410" },
  { name: "Wagyu Burger", orders: 38, revenue: "$1,216" },
  { name: "Caesar Salad", orders: 52, revenue: "$624" },
  { name: "Tiramisu", orders: 29, revenue: "$348" }
];

export function DashboardPreview() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
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
              LIVE DASHBOARD
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
            Your Restaurant's
            <br />
            Command Center
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: 'var(--text-body-lg)', lineHeight: 1.7 }}>
            Every metric, every order, every insight—beautifully organized and 
            updated in real-time. Make decisions with confidence.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 max-w-6xl mx-auto"
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
            <div>
              <h3 className="font-bold mb-1"
                style={{
                  fontSize: 'var(--text-heading-lg)',
                  fontFamily: 'var(--font-heading)'
                }}>
                Today's Performance
              </h3>
              <p className="text-sm text-muted-foreground font-mono-tech">
                THURSDAY, FEB 5, 2026 • 7:42 PM
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: 'var(--neon-green)' }}>
                LIVE
              </span>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { 
                icon: DollarSign, 
                label: "REVENUE", 
                value: "$18,247", 
                change: "+12.5%", 
                positive: true,
                color: "neon-green" 
              },
              { 
                icon: ShoppingCart, 
                label: "ORDERS", 
                value: "487", 
                change: "+8.2%", 
                positive: true,
                color: "warm-orange" 
              },
              { 
                icon: Users, 
                label: "CUSTOMERS", 
                value: "1,243", 
                change: "+15.7%", 
                positive: true,
                color: "neon-green" 
              },
              { 
                icon: Clock, 
                label: "AVG TIME", 
                value: "16m", 
                change: "-4.1%", 
                positive: true,
                color: "warm-orange" 
              }
            ].map((metric, i) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass-card p-5 rounded-2xl group cursor-pointer relative overflow-hidden"
                >
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: metric.color === 'neon-green'
                        ? 'radial-gradient(circle at top right, var(--neon-green-glow), transparent)'
                        : 'radial-gradient(circle at top right, var(--warm-orange-glow), transparent)'
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                        {metric.label}
                      </span>
                      <Icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-bold font-mono-tech"
                        style={{
                          fontSize: 'var(--text-heading-lg)',
                          color: 'var(--foreground)'
                        }}>
                        {metric.value}
                      </span>
                      <span className="text-sm font-semibold flex items-center gap-1"
                        style={{ color: metric.positive ? 'var(--neon-green)' : 'var(--destructive)' }}>
                        {metric.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {metric.change}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Real-time Orders */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h4 className="font-bold mb-4 flex items-center gap-2"
                style={{
                  fontSize: 'var(--text-heading-md)',
                  fontFamily: 'var(--font-heading)'
                }}>
                <span>Real-Time Orders</span>
                <span className="text-xs font-mono-tech text-muted-foreground">
                  LIVE
                </span>
              </h4>

              <div className="space-y-3">
                {realtimeOrders.map((order, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-accent/50 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        order.status === 'preparing' ? 'bg-warm-orange animate-pulse' :
                        order.status === 'ready' ? 'bg-neon-green animate-pulse' :
                        order.status === 'served' ? 'bg-blue-500' :
                        'bg-muted'
                      }`} />
                      <div>
                        <p className="font-semibold font-mono-tech text-sm">
                          {order.id} <span className="text-muted-foreground">• Table {order.table}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{order.time}</p>
                      </div>
                    </div>
                    <span className="font-bold font-mono-tech"
                      style={{ color: 'var(--neon-green)' }}>
                      {order.amount}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Top Performing Items */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h4 className="font-bold mb-4"
                style={{
                  fontSize: 'var(--text-heading-md)',
                  fontFamily: 'var(--font-heading)'
                }}>
                Top Performing Items
              </h4>

              <div className="space-y-4">
                {topItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold">{item.name}</span>
                      <span className="font-mono-tech text-muted-foreground">
                        {item.orders} orders
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(item.orders / 52) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                          className="h-full rounded-full"
                          style={{
                            background: i % 2 === 0
                              ? 'linear-gradient(90deg, var(--neon-green), var(--warm-orange))'
                              : 'linear-gradient(90deg, var(--warm-orange), var(--neon-green))'
                          }}
                        />
                      </div>
                      <span className="font-bold font-mono-tech text-sm"
                        style={{ color: 'var(--neon-green)' }}>
                        {item.revenue}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}