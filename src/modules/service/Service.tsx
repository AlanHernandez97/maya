'use client';

import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import {
    Activity, ArrowDown, ArrowRight, BadgeCheck, Boxes, Check, CheckCircle2,
    Clock3, Code2, Cpu, Fan, Gauge, Laptop, MessageCircle, MonitorPlay, MousePointer2, PackageCheck, Phone,
    School, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Thermometer, Wrench, Zap,
    type LucideIcon,
} from 'lucide-react';

type Category = 'all' | 'hardware' | 'mantenimiento' | 'software';

const filters: { id: Category; label: string }[] = [
    { id: 'all', label: 'Todos los servicios' },
    { id: 'hardware', label: 'Hardware & PC' },
    { id: 'mantenimiento', label: 'Mantenimiento' },
    { id: 'software', label: 'Software & web' },
];

const profiles = [
    {
        level: 'Nivel 01', title: 'Escolar / Oficina', icon: School,
        description: 'Productividad rápida, navegación ágil, paquetes contables y suites ofimáticas.',
        specs: ['Intel Core i3 / Ryzen 3 o 5 APU', '16 GB DDR4 3200 MHz', 'SSD NVMe de 500 GB', 'Fuente certificada 80+ White/Bronze'],
        target: 'Office, Zoom, facturación y Canva',
    },
    {
        level: 'Nivel 02', title: 'Gaming básico', icon: MonitorPlay,
        description: 'Una entrada sólida a los esports: Valorant, CS2, Fortnite, League of Legends y emulación.',
        specs: ['Ryzen 5 5600G / Intel i5 12400', 'GTX 1650 / RX 6500 XT / gráficos integrados', '16 GB DDR4 de alta velocidad', 'Gabinete RGB Airflow con 3 ventiladores'],
        target: '60–90 FPS estables en 1080p',
    },
    {
        level: 'Nivel 03', title: 'Gaming Plus', icon: Zap, featured: true,
        description: 'Juego competitivo en 1080p a altos Hz y títulos AAA con ray tracing moderado, DLSS o FSR.',
        specs: ['Intel Core i5 13400F / Ryzen 5 7600', 'RTX 4060 8 GB / RX 7600 XT', '32 GB DDR5 5600 MHz', 'SSD NVMe Gen4 de 1 TB'],
        target: '144+ FPS en 1080p competitivo',
    },
    {
        level: 'Nivel 04', title: 'Gaming Pro', icon: Gauge,
        description: '1440p en calidad ultra, ray tracing, realidad virtual y simuladores exigentes.',
        specs: ['Ryzen 7 7800X3D / Intel i7 14700K', 'RTX 4070 Ti SUPER / RX 7900 GRE', '32 GB DDR5 6000 MHz CL30', 'Enfriamiento líquido de 280 o 360 mm'],
        target: '1440p Ultra / 165 Hz',
    },
    {
        level: 'Workstation', title: 'Creación y 4K', icon: MonitorPlay,
        description: 'Render 3D en Blender o Unreal, video 4K, streaming y cargas de trabajo de IA.',
        specs: ['Ryzen 9 7950X / Intel i9 14900KS', 'RTX 4080 SUPER / RTX 4090 24 GB', '64–128 GB DDR5', 'Almacenamiento NVMe y fuente 1000 W 80+ Gold'],
        target: 'Render en tiempo real y producción 4K',
    },
];

const maintenance = [
    {
        tier: 'Nivel esencial', name: 'Paquete Básico', icon: Sparkles,
        intro: 'Para laptops de oficina y equipos con calentamiento leve o polvo superficial.',
        items: ['Limpieza interna con aire a presión regulada', 'Cambio de pasta térmica de alta pureza', 'Revisión de fuente, voltajes y puertos', 'Inspección de ventiladores'],
        action: 'Agendar mantenimiento básico', message: 'quiero agendar mantenimiento básico',
    },
    {
        tier: 'Alto rendimiento', name: 'Paquete Plus', icon: Fan, featured: true,
        intro: 'Para laptops gaming, equipos de diseño y computadoras con alta exigencia térmica.',
        items: ['Limpieza profunda y aire seco filtrado', 'Pasta térmica Arctic MX-6 o Noctua NT-H2', 'Optimización del sistema y arranque', 'Actualización de BIOS, UEFI y drivers'],
        action: 'Agendar paquete Plus', message: 'quiero agendar mantenimiento Plus',
    },
    {
        tier: 'Revisión integral', name: 'Paquete Pro', icon: ShieldCheck,
        intro: 'Servicio completo con renovación de interfaz térmica y cuidado de tus datos.',
        items: ['Todo lo incluido en el Paquete Plus', 'Cambio de thermal pads en VRAM y VRM', 'Instalación limpia de sistema operativo', 'Respaldo de archivos y revisión de unidades'],
        action: 'Agendar paquete Pro', message: 'quiero agendar mantenimiento Pro',
    },
];

const softwareServices: { number: string; title: string; icon: LucideIcon; text: string; points: string[]; message: string; wide?: boolean }[] = [
    {
        number: 'Solución 01', title: 'Páginas web y landing pages', icon: MousePointer2, wide: true,
        text: 'Sitios rápidos y adaptables, preparados para buscadores y diseñados para convertir visitas en clientes. Conecta tus formularios con WhatsApp o tu CRM.',
        points: ['Next.js, Astro y Tailwind', 'SEO y analítica', 'Diseño adaptable a móvil'], message: 'cotizar una página web o landing page',
    },
    {
        number: 'Solución 02', title: 'Sistemas administrativos y punto de venta', icon: ShoppingCart,
        text: 'Software para tiendas, talleres, cafeterías y distribuidoras. Administra inventario, ventas y operación desde un solo lugar.',
        points: ['Control de inventario y reposición', 'Ventas, devoluciones y tickets', 'Lectores de código de barras'], message: 'conocer el sistema POS administrativo',
    },
    {
        number: 'Solución 03', title: 'Dashboards y visualización de datos', icon: Activity,
        text: 'Tableros de control para concentrar las métricas de tu negocio. Convierte hojas de cálculo dispersas en reportes interactivos.',
        points: ['Indicadores a la medida', 'Filtros y reportes exportables', 'Datos claros para decidir'], message: 'cotizar un dashboard de datos',
    },
    {
        number: 'Solución 04', title: 'Desarrollo de aplicaciones móviles', icon: Smartphone, wide: true,
        text: 'Diseñamos aplicaciones para iOS y Android que ponen tus servicios al alcance de tus clientes. Creamos experiencias intuitivas, conectadas con tus sistemas y preparadas para crecer junto con tu negocio.',
        points: ['Experiencia para iOS y Android', 'Integración con tus servicios y datos', 'Publicación y acompañamiento'], message: 'cotizar una aplicación móvil para mi negocio',
    },
];

const workflow = [
    { title: 'Recepción y diagnóstico', text: 'Entendemos tu necesidad por WhatsApp o en el taller y definimos el alcance del servicio.' },
    { title: 'Propuesta transparente', text: 'Recibes un presupuesto detallado, con componentes, tiempos y entregables claros.' },
    { title: 'Ejecución y pruebas', text: 'Realizamos el ensamble, mantenimiento o desarrollo con revisiones durante el proceso.' },
    { title: 'Entrega y respaldo', text: 'Entregamos tu equipo probado o el sistema listo, con acompañamiento posterior.' },
];

function whatsappUrl(message: string) {
    return `https://wa.me/529611549693?text=${encodeURIComponent(`Hola Maya, ${message}.`)}`;
}

function WhatsAppLink({ message, children, className }: { message: string; children: ReactNode; className: string }) {
    return <a className={className} href={whatsappUrl(message)} target="_blank" rel="noreferrer noopener">{children}</a>;
}

export default function Service() {
    const [activeFilter, setActiveFilter] = useState<Category>('all');

    function selectFilter(category: Category) {
        setActiveFilter(category);
        if (category !== 'all') {
            window.setTimeout(() => document.getElementById(`${category}-section`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
        } else {
            window.setTimeout(() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
        }
    }

    return (
        <main id="servicios" className="services-page -mt-[140px] pt-[140px] text-white">
            <div className="services-filter sticky top-[140px] z-40 border-y border-white/5 bg-[#101012]/90 px-4 py-4 backdrop-blur-xl sm:px-8">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div className="flex w-full gap-2 overflow-x-auto pb-1 sm:w-auto" aria-label="Filtrar servicios">
                        {filters.map(({ id, label }) => <button key={id} type="button" aria-pressed={activeFilter === id} onClick={() => selectFilter(id)} className={`shrink-0 rounded-lg px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider transition ${activeFilter === id ? 'bg-gold text-[#342b00] shadow-[0_0_22px_rgba(255,215,0,.15)]' : 'bg-white/[.055] text-white/60 hover:bg-white/10 hover:text-cyan'}`}>{label}</button>)}
                    </div>
                    <p className="hidden items-center gap-2 font-mono text-[10px] tracking-wide text-white/45 md:flex"><span className="h-2 w-2 animate-pulse rounded-full bg-cyan" />TALLER ACTIVO <span className="text-white/20">//</span> RESPUESTA PERSONALIZADA</p>
                </div>
            </div>

            <section className="services-hero relative overflow-hidden px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                <div className="services-glow services-glow-cyan" aria-hidden="true" />
                <div className="services-glow services-glow-gold" aria-hidden="true" />
                <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
                    <div className="flex flex-col items-start gap-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-cyan"><Cpu size={15} /> Ingeniería tecnológica MAYA</div>
                        <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-ivory sm:text-5xl lg:text-6xl">Tecnología diseñada para <span className="services-gradient-text">llegar más lejos.</span></h1>
                        <p className="max-w-2xl text-base leading-7 text-white/65 sm:text-lg">Armamos y optimizamos computadoras, damos mantenimiento especializado y desarrollamos soluciones digitales para personas y negocios.</p>
                        <div className="flex flex-wrap gap-3 pt-1">
                            <WhatsAppLink message="quiero cotizar un servicio personalizado" className="button-gold inline-flex items-center gap-2.5 rounded-xl px-5 py-3.5 text-xs font-extrabold uppercase tracking-wide"><MessageCircleIcon /> Cotizar por WhatsApp <ArrowRight size={16} /></WhatsAppLink>
                            <a href="#hardware-section" onClick={() => setActiveFilter('all')} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.045] px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-white/80 transition hover:border-cyan/30 hover:text-cyan"><ArrowDown size={15} /> Explorar servicios</a>
                        </div>
                        <div className="grid w-full max-w-lg grid-cols-3 gap-3 pt-3">
                            {[['+1,200', 'equipos optimizados', 'text-gold'], ['100%', 'garantía en taller', 'text-cyan'], ['A medida', 'soluciones reales', 'text-ivory']].map(([stat, label, color]) => <div key={label} className="rounded-xl border border-white/[.06] bg-white/[.035] p-3.5"><div className={`font-heading text-lg font-extrabold ${color}`}>{stat}</div><div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-white/45 sm:text-[10px]">{label}</div></div>)}
                        </div>
                    </div>
                    <div className="services-hero-image relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-2xl shadow-black/50">
                        <Image src="/images/hero-image.png" alt="Computadora personalizada en un taller tecnológico" width={1000} height={800} priority className="h-[300px] w-full object-cover sm:h-[390px]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
                        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#171719]/85 p-4 backdrop-blur-lg sm:inset-x-6 sm:bottom-6">
                            <div><span className="text-[9px] font-bold uppercase tracking-[.18em] text-cyan">Protocolo de ensamblaje</span><p className="mt-1 text-xs font-bold text-ivory sm:text-sm">Pruebas de estabilidad y temperatura</p></div>
                            <span className="shrink-0 rounded-md bg-cyan/10 px-2.5 py-1.5 font-mono text-[9px] font-bold text-cyan">TEST QC</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="hardware-section" className={`service-section scroll-mt-[220px] bg-[#0e0e0f] px-4 py-16 sm:px-8 sm:py-20 lg:px-10 ${activeFilter !== 'all' && activeFilter !== 'hardware' ? 'hidden' : ''}`}>
                <div className="mx-auto flex max-w-7xl flex-col gap-9">
                    <SectionHeading icon={Cpu} eyebrow="Módulo 01 // Hardware personalizado" title="Armado y ensamblaje de PC a la medida" description="Construimos cada equipo con componentes seleccionados para tu uso y presupuesto. Cuidamos el flujo de aire, el cableado y la configuración antes de probarlo." badge="Ensamble probado" />
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">{[
                        [Boxes, 'Cableado ordenado'], [Thermometer, 'Pruebas térmicas'], [Gauge, 'Perfiles XMP / EXPO'], [BadgeCheck, 'Garantía de componentes'],
                    ].map(([Icon, label]) => { const FeatureIcon = Icon as LucideIcon; return <div key={label as string} className="flex items-center gap-2.5 rounded-xl border border-white/[.05] bg-white/[.025] p-3 text-[10px] font-medium text-white/70 sm:gap-3 sm:p-3.5 sm:text-xs"><FeatureIcon size={17} className="shrink-0 text-cyan" />{label as string}</div>; })}</div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                        {profiles.map((profile) => <article key={profile.title} className={`service-profile relative flex flex-col justify-between rounded-2xl border p-5 ${profile.featured ? 'border-gold/30 bg-[#1b1a17] shadow-[0_15px_45px_rgba(255,215,0,.07)]' : 'border-white/[.07] bg-white/[.035]'}`}>
                            {profile.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#342b00]">Más solicitado</span>}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between"><span className={`rounded-md px-2 py-1 font-mono text-[9px] uppercase tracking-wider ${profile.featured ? 'bg-gold/10 text-gold' : 'bg-cyan/10 text-cyan'}`}>{profile.level}</span><profile.icon size={18} className={profile.featured ? 'text-gold' : 'text-white/40'} /></div>
                                <div><h3 className="font-heading text-base font-bold text-ivory">{profile.title}</h3><p className="mt-1.5 text-[11px] leading-5 text-white/55">{profile.description}</p></div>
                                <ul className="flex flex-col gap-2">{profile.specs.map(spec => <li key={spec} className="flex items-start gap-2 text-[10px] leading-4 text-white/70"><span className="text-cyan">›</span>{spec}</li>)}</ul>
                            </div>
                            <div className="mt-5 rounded-xl bg-black/25 p-3"><span className="text-[9px] uppercase tracking-wide text-white/40">Uso recomendado</span><p className="mt-1 text-[10px] font-bold leading-4 text-ivory">{profile.target}</p><WhatsAppLink message={`me interesa una PC ${profile.title}`} className={`mt-3 flex justify-center rounded-lg px-3 py-2.5 text-[10px] font-bold uppercase tracking-wide transition ${profile.featured ? 'bg-gold text-[#342b00] hover:brightness-110' : 'bg-white/[.07] text-white hover:bg-cyan hover:text-[#052326]'}`}>Cotizar perfil</WhatsAppLink></div>
                        </article>)}
                    </div>
                </div>
            </section>

            <section id="mantenimiento-section" className={`service-section scroll-mt-[220px] bg-[#131314] px-4 py-16 sm:px-8 sm:py-20 lg:px-10 ${activeFilter !== 'all' && activeFilter !== 'mantenimiento' ? 'hidden' : ''}`}>
                <div className="mx-auto flex max-w-7xl flex-col gap-9">
                    <SectionHeading icon={Wrench} eyebrow="Módulo 02 // Laboratorio de mantenimiento" title="Mantenimiento preventivo y correctivo" description="Ayudamos a que tu laptop o computadora recupere rendimiento y trabaje a mejor temperatura. Cada intervención comienza con una revisión del equipo." badge="Servicio para PC y laptop" />
                    <div className="grid items-stretch gap-5 md:grid-cols-3">
                        {maintenance.map((pack) => <article key={pack.name} className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 ${pack.featured ? 'border-cyan/30 bg-[#172022] shadow-[0_15px_45px_rgba(0,240,255,.06)]' : 'border-white/[.07] bg-white/[.035]'}`}>
                            {pack.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-cyan px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#00363a]">Recomendado para gaming</span>}
                            <div><div className="flex items-start justify-between"><div><span className={`text-[10px] font-bold uppercase tracking-widest ${pack.featured ? 'text-cyan' : 'text-white/45'}`}>{pack.tier}</span><h3 className="mt-1 font-heading text-xl font-bold text-ivory">{pack.name}</h3></div><span className={`rounded-xl p-2.5 ${pack.featured ? 'bg-cyan/10 text-cyan' : 'bg-white/[.06] text-gold'}`}><pack.icon size={20} /></span></div>
                                <p className="mt-4 text-xs leading-6 text-white/55">{pack.intro}</p><div className="my-5 h-px bg-white/[.08]" /><ul className="flex flex-col gap-3">{pack.items.map(item => <li key={item} className="flex items-start gap-2.5 text-[11px] leading-5 text-white/75"><CheckCircle2 size={15} className={`mt-0.5 shrink-0 ${pack.featured ? 'text-cyan' : 'text-gold'}`} />{item}</li>)}</ul></div>
                            <WhatsAppLink message={pack.message} className={`mt-7 flex justify-center rounded-lg px-4 py-3 text-[10px] font-bold uppercase tracking-wider transition ${pack.featured ? 'bg-cyan text-[#00363a] hover:brightness-110' : 'bg-white/[.07] text-ivory hover:bg-white/[.12]'}`}>{pack.action}</WhatsAppLink>
                        </article>)}
                    </div>
                    <div className="flex flex-col items-start gap-4 rounded-2xl border border-white/[.07] bg-white/[.045] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div className="flex gap-4"><span className="rounded-xl bg-white/[.07] p-3 text-cyan"><Laptop size={22} /></span><div><h3 className="font-heading text-sm font-bold text-ivory">¿Tu equipo no da video, se apaga o tuvo contacto con líquido?</h3><p className="mt-1 text-xs leading-5 text-white/55">Cuéntanos qué ocurre y coordinamos un diagnóstico para encontrar la causa.</p></div></div><WhatsAppLink message="necesito un diagnóstico correctivo para mi equipo" className="ml-[60px] shrink-0 rounded-lg bg-white/[.07] px-4 py-3 text-[10px] font-bold uppercase tracking-wide text-cyan transition hover:bg-cyan/10 sm:ml-0">Solicitar diagnóstico</WhatsAppLink></div>
                </div>
            </section>

            <section id="software-section" className={`service-section scroll-mt-[220px] bg-[#0e0e0f] px-4 py-16 sm:px-8 sm:py-20 lg:px-10 ${activeFilter !== 'all' && activeFilter !== 'software' ? 'hidden' : ''}`}>
                <div className="mx-auto flex max-w-7xl flex-col gap-9">
                    <SectionHeading icon={Code2} eyebrow="Módulo 03 // Arquitectura de software" title="Desarrollo de software a la medida" description="Creamos herramientas digitales que simplifican la operación, ordenan tus datos y ayudan a que tu negocio llegue a más clientes." badge="Diseño adaptable y escalable" />
                    <div className="grid gap-5 md:grid-cols-2">
                        {softwareServices.map((service) => <article key={service.number} className={`flex flex-col justify-between rounded-2xl border border-white/[.07] bg-white/[.035] p-6 transition hover:border-cyan/25 hover:bg-white/[.055] sm:p-8 ${service.wide ? 'md:col-span-2' : ''}`}>
                            <div><div className="flex items-center justify-between"><span className="rounded-md bg-cyan/10 px-2.5 py-1.5 font-mono text-[9px] text-cyan">{service.number}</span><service.icon size={21} className="text-cyan" /></div><h3 className="mt-5 font-heading text-lg font-bold text-ivory sm:text-xl">{service.title}</h3><p className="mt-2 max-w-3xl text-xs leading-6 text-white/55 sm:text-sm">{service.text}</p>
                                <div className={`mt-5 grid gap-2 ${service.wide ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>{service.points.map((point) => <div key={point} className="flex items-center gap-2 rounded-lg bg-black/25 p-3 text-[10px] font-medium text-white/70"><Check size={14} className="text-gold" />{point}</div>)}</div>
                            </div><WhatsAppLink message={service.message} className="mt-6 inline-flex items-center gap-2 self-start text-[10px] font-extrabold uppercase tracking-wide text-cyan transition hover:text-gold">Cotizar solución <ArrowRight size={15} /></WhatsAppLink>
                        </article>)}
                    </div>
                </div>
            </section>

            <section className="bg-[#131314] px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
                <div className="mx-auto max-w-7xl"><div className="mx-auto mb-10 max-w-2xl text-center"><span className="text-[10px] font-extrabold uppercase tracking-[.2em] text-cyan">Metodología MAYA Tech</span><h2 className="mt-2 font-heading text-2xl font-extrabold text-ivory sm:text-3xl">Así trabajamos contigo</h2></div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{workflow.map((step, index) => <article key={step.title} className="rounded-2xl border border-white/[.06] bg-white/[.03] p-5 sm:p-6"><span className={`font-heading text-2xl font-extrabold ${index === workflow.length - 1 ? 'text-gold' : 'text-white/20'}`}>0{index + 1}</span><h3 className="mt-3 font-heading text-sm font-bold text-ivory">{step.title}</h3><p className="mt-2 text-[11px] leading-5 text-white/50">{step.text}</p></article>)}</div>
                </div>
            </section>

            <section id="contacto-directo" className="relative overflow-hidden bg-[#0e0e0f] px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
                <div className="services-glow services-glow-gold" aria-hidden="true" /><div className="services-cta relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-3xl p-7 text-center sm:p-10 lg:flex-row lg:p-14 lg:text-left">
                    <div className="max-w-2xl"><span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-gold"><span className="h-2 w-2 animate-pulse rounded-full bg-gold" /> Atención personalizada</span><h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-ivory sm:text-4xl">¿Listo para llevar tu equipo o negocio al <span className="text-cyan">siguiente nivel?</span></h2><p className="mt-4 text-sm leading-6 text-white/55">Escríbenos y te ayudamos a encontrar la configuración, reparación o solución digital que necesitas.</p><div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] text-white/55 lg:justify-start"><span className="inline-flex items-center gap-1.5"><Clock3 size={13} className="text-cyan" /> Atención directa</span><span className="inline-flex items-center gap-1.5"><PackageCheck size={13} className="text-gold" /> Cotización personalizada</span></div></div>
                    <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col"><WhatsAppLink message="deseo recibir asesoría personalizada" className="button-gold inline-flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-[10px] font-extrabold uppercase tracking-wide"><MessageCircleIcon /> Iniciar asesoría</WhatsAppLink><a href="tel:+529611549693" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[.06] px-5 py-3.5 text-[10px] font-bold uppercase tracking-wide text-white/75 transition hover:bg-white/10"><Phone size={15} /> Llamar al taller</a></div>
                </div>
            </section>
        </main>
    );
}

function MessageCircleIcon() {
    return <MessageCircle size={17} aria-hidden="true" />;
}

function SectionHeading({ icon: Icon, eyebrow, title, description, badge }: { icon: LucideIcon; eyebrow: string; title: string; description: string; badge: string }) {
    return <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><div className="mb-2 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.17em] text-gold"><Icon size={15} />{eyebrow}</div><h2 className="max-w-3xl font-heading text-2xl font-extrabold tracking-tight text-ivory sm:text-3xl lg:text-4xl">{title}</h2><p className="mt-2 max-w-2xl text-xs leading-6 text-white/55 sm:text-sm">{description}</p></div><div className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/[.06] bg-white/[.04] px-3.5 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-white/70"><BadgeCheck size={15} className="text-cyan" />{badge}</div></div>;
}
