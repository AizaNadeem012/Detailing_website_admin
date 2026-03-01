import { motion } from "framer-motion";
import { FileText, CheckCircle, Clock } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: number;
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
}

function MetricCard({ title, value, icon: Icon, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <span className="text-4xl font-heading font-bold text-foreground">{value}</span>
      </div>
      <h3 className="font-heading font-semibold text-muted-foreground">{title}</h3>
    </motion.div>
  );
}

interface DashboardMetricsProps {
  totalListings: number;
  submitted: number;
  pending: number;
}

export function DashboardMetrics({ totalListings, submitted, pending }: DashboardMetricsProps) {
  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-h2 font-heading font-bold text-foreground mb-8"
      >
        Dashboard Overview
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Total Listings" value={totalListings} icon={FileText} delay={0.1} />
        <MetricCard title="Submitted" value={submitted} icon={CheckCircle} delay={0.2} />
        <MetricCard title="Pending" value={pending} icon={Clock} delay={0.3} />
      </div>
    </section>
  );
}