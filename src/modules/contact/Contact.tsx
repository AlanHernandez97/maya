'use client'

import { useState, type FormEvent, type ReactNode } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, Bolt, CheckCircle2,
  ChevronDown, Clock3, Mail, MapPin, MessageCircle, Phone, Pin, Send,
  Wrench,
} from 'lucide-react'

const budgets = ['$8,000 - $15,000', '$15,000 - $35,000', '$35,000 - $70,000', 'Más de $70,000']

const faqs = [
  {
    question: '¿Cuánto tiempo tarda un diagnóstico de PC o laptop?',
    answer: <>El diagnóstico preliminar toma entre <strong className="text-white">24 y 48 horas hábiles</strong>. Revisamos la fuente de poder, memoria, placa base y almacenamiento con pruebas controladas para cuidar tus datos.</>,
  },
  {
    question: '¿Tienen garantía las piezas y ensambles de computadoras?',
    answer: <>Los componentes conservan la garantía del fabricante, y el ensamble incluye <strong className="text-white">6 meses de garantía en mano de obra</strong>. Te entregamos las condiciones por escrito.</>,
  },
  {
    question: '¿Hacen envíos de computadoras armadas?',
    answer: <>Sí, enviamos a toda la República Mexicana con protección interna para asegurar los componentes durante el traslado. La cotización incluye el método de envío y su cobertura.</>,
  },
  {
    question: '¿Cómo se gestionan los pagos y cotizaciones de software?',
    answer: <>Los proyectos se cotizan según alcance. Podemos trabajar por etapas, con entregables y criterios de aceptación definidos desde el inicio. Emitimos factura electrónica (CFDI).</>,
  },
]

const workAreas = [
  {
    label: 'Área 01', title: 'Estación Antiestática ESD',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsMG8eUuAOCgveIBnW5Zuv-Nsjv1tc9ofYEH4Nt9EiDACB_vKK-KmMMmDrMarDw3TFpbe9D9E9O-iOuNIYCIcGup8j0HqqJUvdAs3Z-egKCOYZbLeH46Ork3VcvvuaCyuYnfwYvXWGy6wd5bCWmX9MiP4f71VJ4a5diU_uL5jtpR7LdEF9dghIswyjkJO_IAEHy2VEo-yhcbVNynVSPH-cAo5g7gue4NwwyqM2gvA',
  },
  {
    label: 'Área 02', title: 'Cámara de Estrés Térmico',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcyDkSWS1wPpAQ9SKsnyYw2Im_-Ws9paxTWnNptk42VCj6ggzpOYMroupy_WgWD9SOheRFi6swn9xMgR7nn-XZqY3BRDXxKn31uceV_GoUJ9ObFQDITiMGBtI83Tl_GFFMx4n50TQ1xSrB1OwjIRKysc8wMODnAJ3SBpNPkjcUkW8a1XRg-cx6JpZ5wB8lr_ysN3EDYZ8msGh-TYKXytBX_TlSpmEljzkH_oJDxYQ',
  },
  {
    label: 'Área 03', title: 'Telemetría y Benchmarking',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEJdA9VH86H94jPnZaIFGA4AKt2DqROjschbcvgwKbzHkwkjqzEf6JZ5ZTS9Hvg2urha_nhrPCEf1ioQXBrtBVg5n3-oDZjCdEWamlVwBBSR-bX-nwuxLMwbK7oK2naZpTeTEIXz_xoCuIBVAUgTdY4J0_KDjBKe50jhAJ3etJ8OkN1kSohF_gIiXbp2aU-aVBm4Qjxi4a6wDkPxR59yBn3115JAu8LUkqlidufsU',
  },
]

export default function Contact() {
  const [budget, setBudget] = useState(budgets[1])
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const details = [
      `Hola MAYA Tech, soy ${name}.`,
      `Correo: ${formData.get('email')}`,
      `Teléfono: ${formData.get('phone')}`,
      `Servicio: ${formData.get('service')}`,
      `Presupuesto: ${budget} MXN`,
      `Detalles: ${formData.get('details')}`,
    ].join('\n')
    window.open(`https://wa.me/529611549693?text=${encodeURIComponent(details)}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    event.currentTarget.reset()
    setBudget(budgets[1])
  }

  return (
    <main className="contact-page relative isolate overflow-hidden">
      <div aria-hidden="true" className="contact-glow contact-glow-gold" />
      <div aria-hidden="true" className="contact-glow contact-glow-cyan" />

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-10 lg:pb-20 lg:pt-14">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-cyan sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_#7df4ff]" />
            Canales de enlace directo
          </div>
          <h1 className="font-heading text-4xl font-extrabold leading-[1.12] tracking-tight text-ivory sm:text-5xl lg:text-6xl">
            Hablemos de tu próximo <span className="contact-gradient">equipo o sistema</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Visítanos en nuestro taller o déjanos un mensaje. Cuéntanos qué necesitas y te ayudamos a encontrar la mejor solución.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <div className="flex items-center gap-3 rounded-xl border border-white/[.06] bg-white/[.04] px-4 py-3">
              <Bolt size={18} className="text-cyan" />
              <div><p className="text-[9px] font-semibold uppercase tracking-widest text-white/45">Tiempo de respuesta</p><p className="mt-1 text-xs font-bold text-ivory">En horario hábil</p></div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/[.06] bg-white/[.04] px-4 py-3">
              <BadgeCheck size={19} className="text-gold" />
              <div><p className="text-[9px] font-semibold uppercase tracking-widest text-white/45">Atención especializada</p><p className="mt-1 text-xs font-bold text-ivory">Garantía por escrito</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-24">
        <aside className="flex flex-col gap-5 lg:col-span-5">
          <div className="rounded-2xl border border-white/[.07] bg-[#171719]/90 p-6 shadow-2xl sm:p-8">
            <div className="mb-7 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3"><span className="icon-box icon-gold"><Wrench size={20} /></span><h2 className="font-heading text-lg font-bold text-ivory sm:text-xl">Taller Central MAYA</h2></div>
              <span className="rounded-full bg-cyan/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-cyan">Atención directa</span>
            </div>
            <div className="space-y-6">
              <ContactDetail icon={<MapPin size={19} className="text-gold" />} label="Ubicación física">
                <p className="text-sm font-medium leading-6 text-white/85">Chiapas, México</p>
                <p className="text-xs text-white/45">Atendemos con cita previa</p>
              </ContactDetail>
              <ContactDetail icon={<Clock3 size={19} className="text-cyan" />} label="Horarios de atención">
                <p className="text-sm font-medium text-white/85">Viernes, Sábado y Domingo · 9:00 AM – 7:00 PM</p>
                <p className="mt-1 text-xs text-white/45">Escríbenos para confirmar disponibilidad</p>
              </ContactDetail>
              <ContactDetail icon={<Phone size={19} className="text-gold" />} label="Línea directa">
                <div className="flex flex-col gap-1">
                  <a className="text-sm font-bold text-ivory transition hover:text-cyan" href="tel:+529611549693">+52 (961) 154-9693</a>
                  <a className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-cyan transition hover:text-white" href="https://wa.me/529611549693" target="_blank" rel="noreferrer"><MessageCircle size={14} /> Iniciar chat de WhatsApp</a>
                </div>
              </ContactDetail>
              <ContactDetail icon={<Mail size={19} className="text-cyan" />} label="Soporte y cotizaciones">
                <a className="break-all text-sm font-bold text-ivory transition hover:text-gold" href="mailto:contacto@mayatech.mx">contacto@mayatech.mx</a>
              </ContactDetail>
            </div>
          </div>

          {/* <div className="rounded-2xl border border-white/[.07] bg-[#171719]/80 p-5 sm:p-6">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-[9px] font-bold uppercase tracking-[.16em] text-white/45">Encuéntranos</span>
              <span className="font-mono text-[10px] text-cyan">Chiapas, MX</span>
            </div>
            <div className="contact-map relative flex h-44 items-center justify-center overflow-hidden rounded-xl">
              <div className="map-grid absolute inset-0 opacity-40" />
              <div className="relative flex flex-col items-center gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold shadow-[0_0_35px_rgba(255,215,0,.2)]"><Pin size={22} /></span>
                <span className="rounded-md border border-white/10 bg-[#101012]/90 px-3 py-1.5 text-[10px] font-semibold text-white/80">MAYA Tech · Chiapas</span>
              </div>
              <a className="absolute bottom-3 right-3 inline-flex items-center gap-1 text-[10px] font-bold text-cyan hover:text-white" href="https://maps.google.com/?q=Chiapas+Mexico" target="_blank" rel="noreferrer">Abrir mapa <ArrowUpRight size={12} /></a>
            </div>
          </div> */}
        </aside>

        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-2xl border border-white/[.07] bg-[#171719]/95 p-6 shadow-2xl sm:p-9 lg:p-10">
            <div aria-hidden="true" className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gold/[.07] blur-3xl" />
            <div className="relative mb-7">
              <span className="text-[9px] font-extrabold uppercase tracking-[.18em] text-gold">Bandeja de requerimientos técnicos</span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-ivory">Inicia tu solicitud</h2>
              <p className="mt-2 max-w-xl text-xs leading-6 text-white/50 sm:text-sm">Completa los datos de tu requerimiento y nuestro equipo te ayudará a definir los siguientes pasos.</p>
            </div>
            <form className="relative flex flex-col gap-5" onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Nombre completo *" htmlFor="contact-name"><input id="contact-name" name="name" autoComplete="name" placeholder="Ej. Carlos Mendoza" required /></Field>
                <Field label="Correo electrónico *" htmlFor="contact-email"><input id="contact-email" name="email" autoComplete="email" placeholder="tu-correo@empresa.com" required type="email" /></Field>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Teléfono / WhatsApp *" htmlFor="contact-phone">
                  <input id="contact-phone" name="phone" autoComplete="tel" placeholder="+52 961 000 0000" required type="tel" />
                </Field>
                <Field label="Servicio requerido *" htmlFor="contact-service">
                  <div className="relative">
                    <select id="contact-service" name="service" required defaultValue="">
                      <option disabled value="">Selecciona una especialidad</option>
                      <option>Armado de PC Gamer / Oficina</option>
                      <option>Mantenimiento preventivo / correctivo</option>
                      <option>Desarrollo de software / Web</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/35" size={16} />
                  </div>
                </Field>
              </div>
              <fieldset>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <legend className="text-[9px] font-bold uppercase tracking-[.12em] text-white/50">Presupuesto estimado (MXN)</legend>
                  <span className="text-[10px] font-bold text-gold">{budget} MXN</span>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{budgets.map((item, index) => <button key={item} type="button" onClick={() => setBudget(item)} className={`rounded-lg border px-2 py-2.5 text-[10px] font-semibold transition sm:text-[11px] ${budget === item ? 'border-gold/30 bg-gold/10 text-gold' : 'border-white/[.06] bg-white/[.03] text-white/60 hover:bg-white/[.07]'}`}>{['$8k – $15k', '$15k – $35k', '$35k – $70k', '$70k+ / Corp'][index]}</button>)}</div>
              </fieldset>
              <Field label="Cuéntanos los detalles de tu proyecto o falla *" htmlFor="contact-details"><textarea id="contact-details" name="details" placeholder="Describe los componentes, objetivos, síntomas o requerimientos de tu proyecto..." required rows={4} /></Field>
              {submitted && <div role="status" className="flex items-start gap-3 rounded-xl border border-cyan/15 bg-cyan/[.06] p-4 text-xs leading-5 text-white/75"><CheckCircle2 className="mt-0.5 shrink-0 text-cyan" size={17} /><span>Solicitud preparada. Se abrió WhatsApp con los detalles para que puedas enviarla.</span></div>}
              <div className="pt-1">
                <button className="button-gold inline-flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em]" type="submit"><Send size={16} /> Enviar solicitud <ArrowRight size={16} /></button>
                <p className="mt-3 text-center text-[10px] leading-5 text-white/35">Al continuar, tus datos se compartirán en WhatsApp para atender tu solicitud.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-10 lg:pb-24">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><span className="text-[9px] font-extrabold uppercase tracking-[.18em] text-cyan">Capacidad instalada</span><h2 className="mt-2 font-heading text-2xl font-bold text-ivory sm:text-3xl">Trabajo técnico, con cuidado en cada detalle</h2></div>
          <p className="max-w-md text-xs leading-6 text-white/50 sm:text-sm">Cada ensamble y reparación se realiza con procesos de diagnóstico, control térmico y pruebas de estabilidad.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">{workAreas.map((area) => <article key={area.label} className="contact-work-card group relative h-60 overflow-hidden rounded-2xl border border-white/[.07] sm:h-64"><img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={area.image} alt={area.title} loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" /><div className="absolute bottom-5 left-5"><span className="text-[9px] font-bold uppercase tracking-widest text-cyan">{area.label}</span><h3 className="mt-1 font-heading text-base font-bold text-white">{area.title}</h3></div></article>)}</div>
      </section>

      {/* Preguntas frecuentes: se conserva comentada para poder reactivarla después.
      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-10 lg:pb-24">
        <div className="mx-auto mb-10 max-w-2xl text-center"><span className="text-[9px] font-extrabold uppercase tracking-[.18em] text-gold">Claridad técnica</span><h2 className="mt-2 font-heading text-3xl font-bold text-ivory sm:text-4xl">Preguntas frecuentes</h2><p className="mt-3 text-xs leading-6 text-white/50 sm:text-sm">Respuestas sobre nuestros procesos de taller, tiempos y garantías.</p></div>
        <div className="mx-auto flex max-w-3xl flex-col gap-3">{faqs.map((faq, index) => {
          const expanded = openFaq === index
          return <article key={faq.question} className={`overflow-hidden rounded-xl border transition-colors ${expanded ? 'border-cyan/20 bg-white/[.055]' : 'border-white/[.06] bg-white/[.025]'}`}>
            <h3><button type="button" aria-expanded={expanded} onClick={() => setOpenFaq(expanded ? null : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"><span className="font-heading text-sm font-semibold text-ivory sm:text-base">{faq.question}</span><ChevronDown className={`shrink-0 text-cyan transition-transform ${expanded ? 'rotate-180' : ''}`} size={18} /></button></h3>
            {expanded && <div className="px-5 pb-5 text-xs leading-6 text-white/55 sm:px-6 sm:pb-6 sm:text-sm">{faq.answer}</div>}
          </article>
        })}</div>
      </section>
      */}

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-10 lg:pb-24">
        <div className="contact-cta relative flex flex-col items-center justify-between gap-7 overflow-hidden rounded-2xl border border-gold/15 px-7 py-9 text-center sm:px-10 sm:py-12 lg:flex-row lg:text-left">
          <div aria-hidden="true" className="absolute -left-20 -top-24 h-60 w-60 rounded-full bg-cyan/[.07] blur-3xl" /><div aria-hidden="true" className="absolute -bottom-24 -right-16 h-60 w-60 rounded-full bg-gold/[.08] blur-3xl" />
          <div className="relative z-10 max-w-2xl"><div className="mb-3 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.16em] text-cyan"><span className="h-2 w-2 animate-pulse rounded-full bg-cyan" /> Atención personalizada</div><h2 className="font-heading text-2xl font-extrabold leading-tight text-ivory sm:text-3xl">¿Necesitas atención técnica?</h2><p className="mt-3 text-xs leading-6 text-white/55 sm:text-sm">Comunícate directamente por WhatsApp para resolver dudas sobre piezas, compatibilidad o fallas.</p></div>
          <a className="button-gold relative z-10 inline-flex w-full items-center justify-center gap-3 rounded-xl px-7 py-4 text-[10px] font-extrabold uppercase tracking-wider sm:w-auto" href="https://wa.me/529611549693?text=Hola%20MAYA%20Tech%2C%20necesito%20atenci%C3%B3n%20t%C3%A9cnica" target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp en tiempo real <ArrowDownRight size={15} /></a>
        </div>
      </section>
    </main>
  )
}

function ContactDetail({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return <div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[.05] bg-white/[.045]">{icon}</div><div className="min-w-0"><p className="mb-1 text-[9px] font-bold uppercase tracking-[.14em] text-white/40">{label}</p>{children}</div></div>
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return <div className="flex min-w-0 flex-col gap-2"><label className="text-[9px] font-bold uppercase tracking-[.12em] text-white/50" htmlFor={htmlFor}>{label}</label>{children}</div>
}
