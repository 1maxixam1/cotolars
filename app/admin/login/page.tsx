"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (password === "123456") {
        router.push("/admin");
      } else {
        setError("Contraseña incorrecta. Por favor intente de nuevo.");
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px]" />
      
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="p-8 pb-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center">
            <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <ShieldCheck className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight mb-2">Panel de Administración</h1>
            <p className="text-blue-100 text-sm">Acceso restringido solo para personal autorizado</p>
          </div>
          
          <div className="p-8">
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 text-sm font-medium text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 block">Correo Electrónico Autorizado</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@cto.org.ar"
                    required
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 bg-slate-50 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 block">Contraseña de Acceso</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••"
                    required
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 bg-slate-50 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 text-slate-900"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !email || !password}
                className="w-full h-12 flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/30 group"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Ingresar de forma segura
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-sm text-slate-500">
              <Lock className="h-4 w-4" />
              <span>Conexión cifrada de extremo a extremo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
