import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  color?: "blue" | "emerald" | "rose" | "amber" | "indigo";
}

const colorStyles = {
  blue: "bg-blue-50 text-blue-600 ring-blue-100",
  emerald: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  rose: "bg-rose-50 text-rose-600 ring-rose-100",
  amber: "bg-amber-50 text-amber-600 ring-amber-100",
  indigo: "bg-indigo-50 text-indigo-600 ring-indigo-100",
};

export default function StatCard({ title, value, icon: Icon, trend, trendUp, color = "blue" }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50">
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
          <p className="text-3xl font-bold tracking-tight text-slate-900">{value}</p>
        </div>
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${colorStyles[color]} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <Icon className="h-7 w-7" />
        </div>
      </div>
      
      {trend && (
        <div className="mt-4 flex items-center gap-2 relative z-10">
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
              trendUp ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
            }`}
          >
            {trendUp ? "↑" : "↓"} {trend}
          </span>
          <span className="text-xs text-slate-400">vs mes anterior</span>
        </div>
      )}
      
      {/* Decorative background blur */}
      <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20 ${colorStyles[color]}`} />
    </div>
  );
}
