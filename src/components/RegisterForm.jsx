import React, { useState } from 'react'
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  RotateCcw
} from 'lucide-react'

export default function RegisterForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [registeredUser, setRegisteredUser] = useState('')
  const [touched, setTouched] = useState({
    nombre: false,
    email: false,
    password: false
  })

  const isNombreValid = nombre.trim().length >= 3
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim())
  const hasMinLength = password.length >= 6
  const hasNumber = /\d/.test(password)
  const hasLetter = /[a-zA-Z]/.test(password)
  const isPasswordValid = hasMinLength && hasNumber && hasLetter

  const isFormValid = isNombreValid && isEmailValid && isPasswordValid

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isFormValid) return

    setRegisteredUser(nombre.trim())
    setSubmitted(true)
  }

  const handleReset = () => {
    setNombre('')
    setEmail('')
    setPassword('')
    setTouched({
      nombre: false,
      email: false,
      password: false
    })
    setSubmitted(false)
    setRegisteredUser('')
  }

  if (submitted) {
    return (
      <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-8 shadow-2xl backdrop-blur-xl max-w-md w-full mx-auto text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-emerald-500/10">
          <CheckCircle2 className="w-10 h-10 animate-bounce" />
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Cuenta Creada Exitosamente
        </span>

        <h2 className="text-2xl font-bold text-white mb-2">
          ¡Registro exitoso!
        </h2>
        <p className="text-xl font-semibold text-indigo-400 mb-6">
          ¡Bienvenido, {registeredUser}!
        </p>

        <div className="bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 mb-6 text-left space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Usuario registrado:</span>
            <span className="text-slate-200 font-medium">{registeredUser}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Correo electrónico:</span>
            <span className="text-slate-200 font-medium">{email}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Estado de cuenta:</span>
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium text-xs bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" /> Activa y Verificada
            </span>
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Cupón de bienvenida:</span>
            <span className="text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded border border-indigo-500/30 tracking-wider">
              BIENVENIDO15
            </span>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="w-full inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <RotateCcw className="w-4 h-4" />
          Registrar otro usuario
        </button>
      </div>
    )
  }

  return (
    <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl max-w-md w-full mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Crear cuenta</h2>
        <p className="text-sm text-slate-400 mt-1">
          Únete a nuestra plataforma de e-commerce y accede a promociones exclusivas.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="nombre" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Nombre de usuario
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-5 h-5" />
            </div>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              onBlur={() => handleBlur('nombre')}
              placeholder="ej. jessica_hernandez"
              className={`w-full pl-10 pr-10 py-2.5 bg-slate-900/80 text-white placeholder-slate-500 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
                touched.nombre
                  ? isNombreValid
                    ? 'border-emerald-500/60 focus:border-emerald-500 focus:ring-emerald-500/30'
                    : 'border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/30'
                  : 'border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/30'
              }`}
            />
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
              {touched.nombre && (
                isNombreValid ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400" />
                )
              )}
            </div>
          </div>
          {touched.nombre && !isNombreValid && (
            <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              El nombre de usuario debe tener al menos 3 caracteres.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Correo electrónico
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-5 h-5" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur('email')}
              placeholder="correo@ejemplo.com"
              className={`w-full pl-10 pr-10 py-2.5 bg-slate-900/80 text-white placeholder-slate-500 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
                touched.email
                  ? isEmailValid
                    ? 'border-emerald-500/60 focus:border-emerald-500 focus:ring-emerald-500/30'
                    : 'border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/30'
                  : 'border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/30'
              }`}
            />
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
              {touched.email && (
                isEmailValid ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400" />
                )
              )}
            </div>
          </div>
          {touched.email && !isEmailValid && (
            <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              Ingresa un correo electrónico válido (ej. usuario@dominio.com).
            </p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Contraseña
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Lock className="w-5 h-5" />
            </div>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handleBlur('password')}
              placeholder="••••••••"
              className={`w-full pl-10 pr-20 py-2.5 bg-slate-900/80 text-white placeholder-slate-500 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
                touched.password
                  ? isPasswordValid
                    ? 'border-emerald-500/60 focus:border-emerald-500 focus:ring-emerald-500/30'
                    : 'border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/30'
                  : 'border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/30'
              }`}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5">
              {touched.password && (
                isPasswordValid ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400" />
                )
              )}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400 hover:text-slate-200 focus:outline-none p-1 rounded-md"
                aria-label={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <div className="mt-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50 space-y-1.5">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Requisitos de la contraseña:
            </p>
            <div className="grid grid-cols-1 gap-1 text-xs">
              <div className={`flex items-center gap-1.5 transition-colors duration-200 ${
                hasMinLength ? 'text-emerald-400 font-medium' : 'text-slate-400'
              }`}>
                <CheckCircle2 className={`w-3.5 h-3.5 ${hasMinLength ? 'opacity-100' : 'opacity-40'}`} />
                <span>Mínimo 6 caracteres</span>
              </div>
              <div className={`flex items-center gap-1.5 transition-colors duration-200 ${
                hasLetter ? 'text-emerald-400 font-medium' : 'text-slate-400'
              }`}>
                <CheckCircle2 className={`w-3.5 h-3.5 ${hasLetter ? 'opacity-100' : 'opacity-40'}`} />
                <span>Al menos una letra</span>
              </div>
              <div className={`flex items-center gap-1.5 transition-colors duration-200 ${
                hasNumber ? 'text-emerald-400 font-medium' : 'text-slate-400'
              }`}>
                <CheckCircle2 className={`w-3.5 h-3.5 ${hasNumber ? 'opacity-100' : 'opacity-40'}`} />
                <span>Al menos un número</span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg ${
            isFormValid
              ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-indigo-500/25 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0'
              : 'bg-slate-700/60 text-slate-400 border border-slate-700/80 cursor-not-allowed opacity-60 shadow-none'
          }`}
        >
          <span>Registrar</span>
          <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isFormValid ? 'group-hover:translate-x-1' : ''}`} />
        </button>

        {!isFormValid && (
          <p className="text-center text-xs text-slate-400">
            Completa todos los campos válidos para habilitar el registro.
          </p>
        )}
      </form>
    </div>
  )
}
