import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  Cpu,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Seguimiento en progreso | MAYA Tech",
  description: "El centro de seguimiento de reparaciones de MAYA Tech estará disponible pronto.",
};

const steps = [
  { title: "Recibimos tu equipo", description: "Registramos tu equipo y sus accesorios." },
  { title: "Revisión técnica", description: "Diagnosticamos la falla y te contactamos." },
  { title: "Reparación y entrega", description: "Te mantenemos al tanto hasta entregártelo." },
];

export default function TrackingPage() {
  return (
    <main className="tracking-page relative isolate flex min-h-[calc(100svh-8.75rem)] items-center overflow-hidden px-5 py-16 text-white sm:px-8 sm:py-20">
      <div aria-hidden="true" className="tracking-grid pointer-events-none absolute inset-0 opacity-30" />
      <div aria-hidden="true" className="tracking-glow tracking-glow-cyan" />
      <div aria-hidden="true" className="tracking-glow tracking-glow-gold" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <section>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-cyan">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[.18em]">Módulo en desarrollo</span>
          </div>

          <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-gold">Seguimiento MAYA Tech</p>
          <h1 className="max-w-2xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-ivory sm:text-5xl lg:text-6xl">
            Estamos preparando algo <span className="tracking-gradient">para tu equipo.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Pronto podrás consultar el avance de tu reparación desde aquí. Estamos construyendo un espacio claro y sencillo para que sepas en qué etapa está tu equipo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://wa.me/529611549693" target="_blank" rel="noreferrer" className="button-gold inline-flex items-center gap-2.5 rounded-xl px-5 py-3.5 text-sm font-bold">
              <MessageCircle size={18} /> Consultar por WhatsApp <ArrowRight size={17} />
            </Link>
            <Link href="/service" className="inline-flex items-center gap-2 rounded-xl border border-cyan/60 px-5 py-3.5 text-sm font-bold text-cyan transition hover:bg-cyan/10">
              Ver servicios
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/55 sm:text-sm">
            <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-cyan" /> Atención directa y transparente</span>
            <span className="inline-flex items-center gap-2"><Clock3 size={16} className="text-gold" /> Actualizaciones durante el proceso</span>
          </div>
        </section>

        <section aria-label="Vista previa del seguimiento" className="glass-card relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl p-5 sm:p-7">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-cyan">Tu reparación</p>
              <h2 className="mt-2 font-heading text-xl font-bold text-ivory sm:text-2xl">En seguimiento</h2>
            </div>
            <div className="icon-box icon-cyan"><Cpu size={23} /></div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/[.08] bg-black/20 p-4 sm:p-5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/55">Estado del módulo</span>
              <span className="rounded-full border border-gold/20 bg-gold/10 px-2.5 py-1 font-semibold text-gold">En progreso</span>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-gold to-cyan" />
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-white/35"><span>Diseño</span><span>Desarrollo</span><span>Lanzamiento</span></div>
          </div>

          <div className="mt-7 space-y-0">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              return (
                <div key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                  {!isLast && <span aria-hidden="true" className="absolute left-[15px] top-8 h-[calc(100%-1rem)] w-px bg-white/10" />}
                  <span className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${index === 0 ? "border-cyan/30 bg-cyan/10 text-cyan" : "border-white/10 bg-white/[.04] text-white/40"}`}>
                    {index === 0 ? <Check size={15} /> : <span className="text-xs font-semibold">0{index + 1}</span>}
                  </span>
                  <div className="pt-0.5">
                    <h3 className={`text-sm font-semibold ${index === 0 ? "text-ivory" : "text-white/55"}`}>{step.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/40">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex items-center gap-3 rounded-xl border border-cyan/10 bg-cyan/[.045] px-4 py-3">
            <Wrench size={17} className="shrink-0 text-cyan" />
            <p className="text-xs leading-5 text-white/55">Mientras tanto, nuestro equipo puede darte una actualización por WhatsApp.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
