import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CircuitBoard, Home, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "404 | Página no encontrada | Maya",
  description: "No encontramos la página que buscas. Vuelve al inicio de Maya o explora nuestros servicios.",
};

export default function NotFound() {
  return (
    <main className="not-found-page relative isolate flex min-h-[calc(100svh-8.75rem)] items-center overflow-hidden px-5 py-16 text-white sm:px-8 sm:py-20">
      <div aria-hidden="true" className="tracking-grid pointer-events-none absolute inset-0 opacity-25" />
      <div aria-hidden="true" className="tracking-glow tracking-glow-cyan" />
      <div aria-hidden="true" className="tracking-glow tracking-glow-gold" />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-cyan/20 bg-cyan/[.06] text-cyan shadow-[0_0_80px_rgba(125,244,255,.08)] sm:h-36 sm:w-36">
          <CircuitBoard size={68} strokeWidth={1} className="sm:hidden" />
          <CircuitBoard size={88} strokeWidth={1} className="hidden sm:block" />
          <span className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-[#171719] text-gold"><Search size={19} /></span>
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[.24em] text-gold">Error de navegación</p>
        <h1 className="font-heading text-7xl font-extrabold leading-none tracking-tight text-ivory sm:text-8xl">404</h1>
        <h2 className="mt-5 font-heading text-2xl font-bold text-ivory sm:text-3xl">No encontramos esa página</h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-muted">
          Puede que el enlace haya cambiado o que la dirección esté escrita de otra forma. Volvamos a conectar con lo que necesitas.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="button-gold inline-flex items-center gap-2.5 rounded-xl px-5 py-3.5 text-sm font-bold"><Home size={17} /> Ir al inicio <ArrowRight size={17} /></Link>
          <Link href="/service" className="inline-flex items-center gap-2 rounded-xl border border-cyan/60 px-5 py-3.5 text-sm font-bold text-cyan transition hover:bg-cyan/10"><ArrowLeft size={17} /> Explorar servicios</Link>
        </div>

        <p className="mt-10 text-xs text-white/35">MAYA Tech <span className="mx-2 text-cyan/60">•</span> Tecnología a tu alcance</p>
      </div>
    </main>
  );
}
