import StatCard from "@/components/admin/StatCard";
import { Users, Mail, CheckCircle, Clock, TrendingUp, Calendar } from "lucide-react";
import Link from "next/link";

const recentMatriculados = [
  { id: 1, name: "Ana Martínez", mp: "1056", status: "Activo" },
  { id: 2, name: "Carlos López", mp: "1057", status: "Activo" },
  { id: 3, name: "Lucía Gómez", mp: "1058", status: "Inactivo" },
  { id: 4, name: "Martín Díaz", mp: "1059", status: "Activo" },
];

const recentMensajes = [
  { id: 1, sender: "Carlos Rodríguez", preview: "Consulta sobre los requisitos de matriculación anual...", time: "Hace 2h", unread: true },
  { id: 2, sender: "María Fernández", preview: "Problema con el pago de cuota mensual...", time: "Hace 5h", unread: true },
  { id: 3, sender: "Colegio de Kinesiólogos", preview: "Invitación a jornada interdisciplinaria 2024...", time: "Ayer", unread: false },
  { id: 4, sender: "Julia Ramos", preview: "Solicitud de actualización de datos de contacto...", time: "12 May", unread: false },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">
            Resumen general del Colegio de Terapeutas Ocupacionales de La Rioja.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-sm">
          <Calendar className="h-4 w-4 text-slate-400" />
          <span>Junio 2025</span>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Matriculados Activos" value="1,248" icon={Users} trend="12%" trendUp={true} color="blue" />
        <StatCard title="Nuevos Mensajes" value="42" icon={Mail} trend="5%" trendUp={false} color="amber" />
        <StatCard title="Cuotas al Día" value="98%" icon={CheckCircle} trend="2%" trendUp={true} color="emerald" />
        <StatCard title="Trámites Pendientes" value="15" icon={Clock} color="rose" />
      </div>

      {/* Activity Overview + Quick Actions */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Chart placeholder */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <h2 className="font-semibold text-slate-900 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-500" />
              Evolución de Matriculados
            </h2>
            <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">Últimos 6 meses</span>
          </div>
          <div className="p-6">
            {/* Simulated bar chart */}
            <div className="flex items-end gap-3 h-32">
              {[60, 75, 55, 90, 80, 100].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-blue-400 transition-all duration-500 hover:from-indigo-600 hover:to-indigo-400"
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[10px] text-slate-400">
                    {["Ene", "Feb", "Mar", "Abr", "May", "Jun"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
            <h2 className="font-semibold text-slate-900">Acciones Rápidas</h2>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <Link href="/admin/matriculados" className="flex items-center gap-3 rounded-xl p-3 hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-colors group">
              <div className="h-9 w-9 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-medium">Nuevo matriculado</div>
                <div className="text-xs text-slate-400">Agregar profesional</div>
              </div>
            </Link>
            <Link href="/admin/mensajes" className="flex items-center gap-3 rounded-xl p-3 hover:bg-amber-50 text-slate-700 hover:text-amber-700 transition-colors group">
              <div className="h-9 w-9 rounded-lg bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                <Mail className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <div className="text-sm font-medium">Ver mensajes</div>
                <div className="text-xs text-slate-400">42 sin responder</div>
              </div>
            </Link>
            <Link href="/admin/settings" className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-100 text-slate-700 transition-colors group">
              <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                <CheckCircle className="h-4 w-4 text-slate-600" />
              </div>
              <div>
                <div className="text-sm font-medium">Configuración</div>
                <div className="text-xs text-slate-400">Ajustes del sistema</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Matriculados */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 px-6 py-5 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-base font-semibold text-slate-900">Últimas Matriculaciones</h2>
            <Link href="/admin/matriculados" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">Ver todos →</Link>
          </div>
          <div className="divide-y divide-slate-100">
            {recentMatriculados.map((m) => (
              <div key={m.id} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors">
                <div className="h-9 w-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {m.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">{m.name}</p>
                  <p className="text-xs text-slate-500">M.P. {m.mp}</p>
                </div>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border flex-shrink-0 ${m.status === "Activo" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-100 text-slate-600 border-slate-200"}`}>
                  {m.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Messages */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 px-6 py-5 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-base font-semibold text-slate-900">Mensajes Recientes</h2>
            <Link href="/admin/mensajes" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">Ir a bandeja →</Link>
          </div>
          <div className="divide-y divide-slate-100">
            {recentMensajes.map((msg) => (
              <div key={msg.id} className="flex items-start gap-4 px-6 py-4 hover:bg-slate-50 transition-colors cursor-pointer">
                <div className={`mt-1.5 h-2 w-2 rounded-full flex-shrink-0 ${msg.unread ? "bg-blue-500" : "bg-transparent"}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <p className={`text-sm truncate ${msg.unread ? "font-semibold text-slate-900" : "font-medium text-slate-700"}`}>{msg.sender}</p>
                    <p className="text-xs text-slate-400 flex-shrink-0 ml-2">{msg.time}</p>
                  </div>
                  <p className="text-xs text-slate-500 truncate">{msg.preview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
