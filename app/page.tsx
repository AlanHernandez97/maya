import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Cpu,
  Eye,
  Handshake,
  MapPin,
  MonitorCog,
  PackageCheck,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  X,
} from "lucide-react";

const whatsapp = "https://wa.me/529611549693";

const serviceCards = [
  {
    title: "Armado de PC Pro",
    description:
      "Diseñamos y ensamblamos equipos de alto rendimiento, desde estaciones de trabajo hasta máquinas de gaming y streaming.",
    icon: Cpu,
    accent: "cyan",
    tags: ["Gaming", "Office", "Streaming", "Workstation"],
    wide: true,
  },
  {
    title: "Software a la Medida",
    description: "Transformamos tus procesos en herramientas digitales eficientes.",
    icon: Code2,
    accent: "gold",
    tags: ["Web apps", "Dashboards", "Automatización"],
  },
  {
    title: "Upgrades y mantenimiento",
    description: "Extiende la vida útil de tu equipo con servicios preventivos y correctivos.",
    icon: Wrench,
    accent: "cyan",
    tags: ["Limpieza interna", "Cambio de pasta térmica", "Optimización de hardware"],
  },
];

const maintenancePlans = [
  {
    name: "Básico",
    note: "Ideal para equipos de oficina",
    items: ["Limpieza interna", "Optimización del sistema operativo"],
    excludes: ["Cambio de pasta térmica"],
  },
  {
    name: "Plus",
    note: "Para usuarios exigentes",
    items: ["Todo lo del Básico", "Cambio de pasta térmica", "Instalación de SSD"],
    excludes: ["Formateo y respaldo"],
    featured: true,
  },
  {
    name: "Pro",
    note: "Restauración total",
    items: ["Todo lo del Plus", "Limpieza profunda", "Formateo y respaldo", "Gestión de drivers"],
    excludes: [],
  },
];

const pcBuilds = [
  {
    name: "MAYA Starter",
    label: "Escolar / Oficina",
    description: "Productividad fluida y multitarea para estudiantes y profesionales.",
    price: "Desde $8,500 MXN",
    image: "/images/hero-image.png",
  },
  {
    name: "MAYA Gaming Plus",
    label: "Top ventas",
    description: "Juega a 1080p competitivo con los FPS que necesitas para ganar.",
    price: "Desde $14,900 MXN",
    image: "/images/hero-image.png",
    popular: true,
  },
  {
    name: "MAYA Elite 4K",
    label: "Streamer / Creator",
    description: "Sin límites para renderizado de video, diseño 3D y streaming 4K.",
    price: "Desde $28,000 MXN",
    image: "/images/hero-image.png",
  },
];

const processSteps = [
  ["Cuéntanos qué necesitas", "Hablamos para entender tus objetivos, presupuesto y necesidades técnicas."],
  ["Recibe tu cotización", "Te entregamos un presupuesto claro y detallado, sin costos sorpresa."],
  ["Ejecución experta", "Armamos tu equipo o desarrollamos tu software con atención a cada detalle."],
  ["Entrega y soporte", "Probamos, instalamos y te orientamos. El soporte después de la entrega también cuenta."],
];

const values = [
  { title: "Diagnóstico transparente", text: "Conoce qué necesita tu equipo con una revisión clara y reportes técnicos.", icon: Eye },
  { title: "Sin costos ocultos", text: "Cotizaciones claras. Te explicamos qué conviene reparar o mejorar.", icon: Handshake },
  { title: "Comunidad y cercanía", text: "Atención personalizada y soluciones prácticas hechas a tu medida.", icon: Users },
];

function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-cyan">{eyebrow}</p>}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-ivory sm:text-4xl">{title}</h2>
      {text && <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-ink text-white">
      <section id="inicio" className="relative flex min-h-[calc(100svh-8.75rem)] scroll-mt-[140px] items-center py-16 sm:py-24">
        <div className="scanlines pointer-events-none absolute inset-0 opacity-40" />
        <div className="glow-cyan pointer-events-none absolute -right-48 top-0 h-[34rem] w-[34rem] rounded-full" />
        <div className="glow-gold pointer-events-none absolute -bottom-56 -left-48 h-[36rem] w-[36rem] rounded-full" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-cyan">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" />
              <span className="text-xs font-bold uppercase tracking-[.16em]">Tecnología a tu alcance</span>
            </div>
            <h1 className="max-w-2xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-ivory sm:text-5xl lg:text-6xl">
              Soluciones tecnológicas para tu <span className="text-cyan">PC</span> y tu negocio
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Armamos, optimizamos y desarrollamos tecnología a la medida para estudiantes, gamers, creadores y negocios locales.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={whatsapp} target="_blank" rel="noreferrer" className="group button-gold inline-flex items-center gap-3 rounded-xl px-6 py-4 font-bold">
                Cotizar por WhatsApp <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1.5" size={18} />
              </Link>
              <Link href="#servicios" className="inline-flex items-center gap-3 rounded-xl border border-cyan px-6 py-4 font-bold text-cyan transition hover:bg-cyan/10">
                Ver servicios <Settings2 size={18} />
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={17} className="text-cyan" /> Diagnóstico claro</span>
              <span className="inline-flex items-center gap-2"><BadgeCheck size={17} className="text-gold" /> Atención personalizada</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="glow-cyan absolute inset-8 rounded-full" />
            <div className="glass-card relative rounded-[2rem] p-3 sm:p-4">
              <Image src="/images/hero-image.png" alt="Equipo de cómputo MAYA Tech" width={757} height={736} priority className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[500px]" />
              <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-8">
                <div><p className="text-xs uppercase tracking-widest text-cyan">Ensamble a tu medida</p><p className="mt-1 font-heading text-lg font-bold text-ivory">Rendimiento con propósito</p></div>
                <Cpu className="text-gold" size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="scroll-mt-[140px] bg-panel py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Lo que hacemos" title="Nuestros servicios" text="Soluciones integrales desde hardware hasta software personalizado, siempre con un enfoque técnico y profesional." />
          <div className="grid gap-5 md:grid-cols-3">
            {serviceCards.map(({ title, description, icon: Icon, accent, tags, wide }) => (
              <article key={title} className={`service-card ${wide ? "md:col-span-2" : ""}`}>
                <div className="flex h-full flex-col">
                  <div className={`icon-box ${accent === "gold" ? "icon-gold" : "icon-cyan"}`}><Icon size={27} /></div>
                  <h3 className="mt-6 font-heading text-xl font-bold text-ivory">{title}</h3>
                  <p className="mt-3 max-w-xl leading-7 text-muted">{description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-cyan/90">{tag}</span>)}
                  </div>
                  {wide && <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{["/images/hero-image.png", "/images/hero-image.png"].map((src, index) => <div key={index} className="relative h-24 overflow-hidden rounded-lg"><Image src={src} alt="Detalle de ensamble de computadora" fill className="object-cover opacity-60 transition hover:scale-105 hover:opacity-100" /></div>)}</div>}
                </div>
              </article>
            ))}
            <article className="service-card flex flex-col justify-between md:col-span-2 md:flex-row md:items-center md:gap-10">
              <div><p className="text-xs font-bold uppercase tracking-[.2em] text-cyan">Garantía MAYA</p><h3 className="mt-3 font-heading text-2xl font-bold text-ivory">Diagnóstico transparente</h3><p className="mt-3 max-w-lg leading-7 text-muted">Revisamos tu equipo y te compartimos un informe técnico claro, con una cotización sin compromisos ocultos.</p><Link href="/service" className="group mt-5 inline-flex items-center gap-2 font-semibold text-gold">Conoce nuestro proceso <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1.5" size={17} /></Link></div>
              <div className="mt-8 flex h-40 w-full items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/10 to-gold/10 md:mt-0 md:max-w-[260px]"><MonitorCog size={72} strokeWidth={1} className="text-cyan/70" /></div>
            </article>
          </div>
        </div>
      </section>

      <section id="paquetes" className="scroll-mt-[140px] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading title="Paquetes de mantenimiento" text="Elige el nivel de cuidado que tu equipo necesita." />
          <div className="grid items-stretch gap-7 md:grid-cols-3">
            {maintenancePlans.map((plan) => <article key={plan.name} className={`plan-card min-h-120 ${plan.featured ? "plan-featured" : ""}`}>
              {plan.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1.5 text-[11px] font-extrabold tracking-widest text-black">RECOMENDADO</span>}
              <div><h3 className="font-heading text-2xl font-bold text-ivory">{plan.name}</h3><p className={`mt-2 text-sm ${plan.featured ? "text-gold" : "text-muted"}`}>{plan.note}</p></div>
              <ul className="mt-8 flex-1 space-y-4">{plan.items.map((item) => <li key={item} className="flex gap-3 text-sm text-white/85"><Check size={18} className="shrink-0 text-cyan" />{item}</li>)}{plan.excludes.map((item) => <li key={item} className="flex gap-3 text-sm text-red-400"><X size={18} className="shrink-0 text-red-400" />{item}</li>)}</ul>
              <Link href={whatsapp} target="_blank" rel="noreferrer" className={`mt-9 block rounded-xl px-5 py-3.5 text-center text-sm font-bold transition ${plan.featured ? "button-gold" : "border border-cyan/70 text-cyan hover:bg-cyan/10"}`}>Solicitar por WhatsApp</Link>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#101011] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-cyan">Equipos a tu medida</p><h2 className="font-heading text-3xl font-bold text-ivory sm:text-4xl">Configuraciones de PC</h2><p className="mt-4 text-muted">Equipos optimizados para cada necesidad específica.</p></div>
            <Link href={whatsapp} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 self-start font-semibold text-gold sm:self-auto">Cotiza tu configuración <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1.5" size={17} /></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pcBuilds.map((build) => <article key={build.name} className="build-card group">
              <div className="relative h-56 overflow-hidden bg-[#17191a]"><Image src={build.image} alt={`Configuración ${build.name}`} fill className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" /><span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-xs backdrop-blur">{build.label}</span></div>
              <div className="p-6"><h3 className="font-heading text-xl font-bold text-ivory">{build.name}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-muted">{build.description}</p><div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5"><span className={`font-bold ${build.popular ? "text-gold" : "text-cyan"}`}>{build.price}</span><ChevronRight className="text-cyan transition-transform duration-200 group-hover:translate-x-1.5" size={19} /></div></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="proceso" className="scroll-mt-[140px] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-cyan">Así trabajamos</p><h2 className="font-heading text-3xl font-bold text-ivory sm:text-4xl">Nuestro proceso</h2><p className="mt-4 text-lg text-muted">Tecnología sin complicaciones, de principio a fin.</p>
            <div className="mt-10 space-y-7">{processSteps.map(([title, text], index) => <div key={title} className="flex gap-5"><div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-heading text-lg font-bold ${index === 0 ? "bg-cyan text-[#062023]" : "border border-cyan/60 bg-white/5 text-cyan"}`}>{index + 1}</div><div><h3 className="font-heading text-lg font-semibold text-ivory">{title}</h3><p className="mt-1.5 leading-6 text-muted">{text}</p></div></div>)}</div>
          </div>
          <div className="glass-card flex min-h-[420px] flex-col items-center justify-center rounded-3xl p-10 text-center"><div className="mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-cyan/20 bg-cyan/10 text-cyan"><ShieldCheck size={54} strokeWidth={1.3} /></div><p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-gold">Respaldo y confianza</p><h3 className="font-heading text-2xl font-bold text-ivory">Garantía por escrito</h3><p className="mt-4 max-w-md leading-7 text-muted">Trabajamos con honestidad y te explicamos cada paso. Si un equipo no tiene una solución conveniente, te lo decimos con claridad.</p></div>
        </div>
      </section>

      <section id="nosotros" className="relative scroll-mt-[140px] overflow-hidden border-y border-white/5 bg-panel py-20 sm:py-24">
        <div className="glow-gold pointer-events-none absolute -left-48 -top-60 h-[36rem] w-[36rem] rounded-full" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Sobre MAYA Tech" title="Pasión por el hardware, compromiso con la comunidad" text="Nacimos para cambiar la experiencia del soporte técnico con transparencia, tecnología y atención personal para creadores, gamers y negocios locales." />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div><h3 className="font-heading text-2xl font-bold text-ivory">Nuestra misión y valores</h3><p className="mt-4 leading-7 text-muted">Creemos que cada estudiante, creador y empresa merece tecnología confiable y bien aprovechada. Tratamos cada equipo con cuidado, atención al detalle y una explicación honesta de cada decisión.</p><div className="mt-7 grid grid-cols-2 gap-4"><div className="rounded-xl border border-white/10 bg-white/5 p-5"><p className="font-heading text-3xl font-extrabold text-gold">100%</p><p className="mt-2 text-sm leading-5 text-muted">Diagnóstico claro y cotización transparente</p></div><div className="rounded-xl border border-white/10 bg-white/5 p-5"><p className="font-heading text-3xl font-extrabold text-cyan">+500</p><p className="mt-2 text-sm leading-5 text-muted">Equipos optimizados y ensambles realizados</p></div></div></div>
            <div className="glass-card rounded-2xl p-7 sm:p-9"><div className="flex items-center gap-4"><div className="icon-box icon-cyan"><PackageCheck size={25} /></div><div><h3 className="font-heading text-xl font-bold text-ivory">Trato directo y local</h3><p className="mt-1 text-sm text-muted">Soporte cercano y personalizado</p></div></div><p className="mt-6 leading-7 text-muted">Entendemos tus metas, tus tiempos y los retos de tu negocio. Te mantenemos al tanto del diagnóstico y del trabajo realizado en cada componente.</p><div className="mt-6 flex items-center gap-2 text-sm text-cyan"><Sparkles size={17} /> Atención que habla claro</div></div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">{values.map(({ title, text, icon: Icon }, index) => <article key={title} className="value-card"><div className={`icon-box ${index === 1 ? "icon-cyan" : "icon-gold"}`}><Icon size={24} /></div><h3 className="mt-5 font-heading text-lg font-bold text-ivory">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-[140px] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-cyan">Hablemos</p><h2 className="font-heading text-3xl font-bold text-ivory sm:text-4xl">Inicia tu proyecto hoy</h2><p className="mt-5 max-w-lg text-lg leading-7 text-muted">Cuéntanos qué necesitas y te orientamos para encontrar la mejor solución técnica.</p><div className="mt-9 space-y-5"><div className="flex items-center gap-4"><span className="icon-box icon-cyan"><MapPin size={21} /></span><span className="text-white/85">Atención local con cita previa</span></div><div className="flex items-center gap-4"><span className="icon-box icon-cyan"><Clock3 size={21} /></span><span className="text-white/85">Lunes a sábado · 9:00 a 19:00</span></div></div><div className="mt-8 flex min-h-44 items-center gap-5 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/10 to-transparent p-6"><MapPin size={32} className="text-cyan" /><div><p className="font-semibold text-ivory">Servicio cercano y personalizado</p><p className="mt-1 text-sm text-muted">Escríbenos para coordinar una visita o entrega.</p></div></div></div>
          <div className="glass-card rounded-3xl p-7 sm:p-10"><h3 className="font-heading text-2xl font-bold text-ivory">¿Qué podemos hacer por ti?</h3><p className="mt-2 text-sm leading-6 text-muted">Envíanos un mensaje por WhatsApp y te responderemos para conocer tu proyecto.</p><Link href={whatsapp} target="_blank" rel="noreferrer" className="group button-gold mt-7 flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 font-bold">Escribir por WhatsApp <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1.5" size={18} /></Link><div className="mt-6 rounded-xl border border-white/10 bg-white/[.03] p-5"><p className="text-sm font-semibold text-ivory">Para agilizar tu cotización, cuéntanos:</p><ul className="mt-4 space-y-3 text-sm text-muted"><li className="flex gap-2"><CheckCircle2 size={17} className="shrink-0 text-cyan" /> Qué equipo o servicio necesitas</li><li className="flex gap-2"><CheckCircle2 size={17} className="shrink-0 text-cyan" /> El uso que le darás y tu presupuesto aproximado</li><li className="flex gap-2"><CheckCircle2 size={17} className="shrink-0 text-cyan" /> Cuándo te gustaría tenerlo listo</li></ul></div></div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12"><div className="cta-panel mx-auto max-w-7xl rounded-4xl px-6 py-14 text-center sm:px-12 sm:py-20"><p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-gold">El siguiente paso empieza aquí</p><h2 className="mx-auto max-w-4xl font-heading text-3xl font-extrabold leading-tight text-ivory sm:text-5xl">¿Listo para mejorar tu equipo o crear tu sistema?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-muted">Hablemos de tu idea. Te ayudamos a convertirla en una solución que funcione para ti.</p><Link href={whatsapp} target="_blank" rel="noreferrer" className="button-gold mt-8 inline-flex items-center gap-3 rounded-xl px-8 py-4 font-bold">Hablar por WhatsApp <Rocket size={19} /></Link></div></section>

      <footer className="border-t border-white/10 bg-[#0e0e0f] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-5 text-center sm:px-8 md:flex-row md:text-left lg:px-12">
          <Link href="#inicio" className="flex items-center" aria-label="Volver al inicio"><Image src="/logos/MayaLogoGolden.png" alt="MAYA Tech" width={140} height={140} className="h-[140px] w-[140px] object-contain" /></Link>
          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted"><Link href="#inicio" className="hover:text-cyan">Inicio</Link><Link href="#servicios" className="hover:text-cyan">Servicios</Link><Link href="#nosotros" className="hover:text-cyan">Nosotros</Link><Link href="#contacto" className="hover:text-cyan">Contacto</Link></nav>
          <p className="text-xs text-muted">© {new Date().getFullYear()} MAYA Tech. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
