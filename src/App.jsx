import React from 'react'
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  Percent,
  Clock,
  Star,
  Check
} from 'lucide-react'
import RegisterForm from './components/RegisterForm'

export default function App() {
  const perks = [
    {
      icon: Percent,
      title: '15% de descuento',
      desc: 'En tu primera compra usando el cupón de bienvenida.'
    },
    {
      icon: Truck,
      title: 'Envío prioritario',
      desc: 'Seguimiento en tiempo real de todos tus pedidos.'
    },
    {
      icon: ShieldCheck,
      title: 'Compras 100% seguras',
      desc: 'Protección de datos y garantía de devolución de 30 días.'
    },
    {
      icon: Clock,
      title: 'Acceso anticipado',
      desc: 'Ofertas exclusivas y lanzamientos antes que nadie.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      <header className="border-b border-slate-800/80 bg-slate-900/40 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                NovaStore
              </span>
              <span className="text-[10px] block font-medium uppercase tracking-widest text-indigo-400 -mt-1">
                E-Commerce
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Plataforma en línea
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-6 xl:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                La plataforma de compras elegida por +50,000 clientes
              </div>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight">
                Crea tu cuenta y vive una nueva experiencia de compras.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Regístrate en segundos para disfrutar de envíos rápidos, precios exclusivos y atención personalizada en cada orden.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {perks.map((perk, index) => {
                const IconComponent = perk.icon
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:border-indigo-500/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-sm text-white mb-1">
                      {perk.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">JD</div>
                <div className="w-8 h-8 rounded-full bg-violet-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">MR</div>
                <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">AL</div>
                <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">+5k</div>
              </div>
              <div className="text-xs text-slate-400">
                <span className="text-slate-200 font-semibold">Valoración 4.9/5</span> por compradores verificados
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 w-full flex justify-center">
            <RegisterForm />
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950/60 py-6 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 NovaStore E-Commerce. Tarea 6 - Formulario de Registro con React y Tailwind.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Privacidad</span>
            <span>Términos</span>
            <span>Seguridad</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
