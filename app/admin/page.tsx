import StatCard from "@/components/admin/StatCard";
import { Users, Mail, CheckCircle, Clock } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Bienvenido al Panel</h1>
        <p className="mt-2 text-slate-500">Resumen general de la plataforma del Colegio de Terapeutas Ocupacionales.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Matriculados Activos"
          value="1,248"
          icon={Users}
          trend="12%"
          trendUp={true}
          color="blue"
        />
        <StatCard
          title="Nuevos Mensajes"
          value="42"
          icon={Mail}
          trend="5%"
          trendUp={false}
          color="amber"
        />
        <StatCard
          title="Cuotas al Día"
          value="98%"
          icon={CheckCircle}
          trend="2%"
          trendUp={true}
          color="emerald"
        />
        <StatCard
          title="Trámites Pendientes"
          value="15"
          icon={Clock}
          color="rose"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Matriculados Box */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 px-6 py-5 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-lg font-semibold text-slate-900">Últimas Matriculaciones</h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Ver todos</button>
          </div>
          <div className="divide-y divide-slate-100">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors">
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                  {`M${i}`}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">María González</p>
                  <p className="text-xs text-slate-500 truncate">M.P. 104{i}</p>
                </div>
                <div className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                  Activa
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Messages Box */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 px-6 py-5 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-lg font-semibold text-slate-900">Mensajes Recientes</h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Ir a bandeja</button>
          </div>
          <div className="divide-y divide-slate-100">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors">
                <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="text-sm font-medium text-slate-900 truncate">Carlos Rodríguez</p>
                    <p className="text-xs text-slate-400">Hace 2h</p>
                  </div>
                  <p className="text-xs text-slate-500 truncate">Consulta sobre los requisitos de matriculación anual...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
