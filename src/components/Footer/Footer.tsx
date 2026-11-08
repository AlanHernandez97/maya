import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="services-footer border-t border-white/[.08] bg-[#111113] px-4 py-10 sm:px-8 lg:px-10">
            <div className="mx-auto flex max-w-7xl flex-col gap-7">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    <Link href="/" className="flex items-center" aria-label="MAYA Tech, inicio">
                        <Image src="/logos/MayaLogoGolden.png" alt="MAYA Tech" width={180} height={180} className="h-[140px] w-[140px] object-contain" />
                    </Link>
                    <nav aria-label="Navegación del pie de página" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55">
                        <Link className="transition hover:text-cyan" href="/">Inicio</Link>
                        <Link className="transition hover:text-cyan" href="/service">Servicios</Link>
                        <Link className="transition hover:text-cyan" href="/about">Nosotros</Link>
                        <Link className="transition hover:text-cyan" href="/contact">Contacto</Link>
                    </nav>
                </div>
                <div className="h-px bg-white/[.08]" />
                <div className="flex flex-col items-start justify-between gap-3 text-xs text-white/40 sm:flex-row sm:items-center">
                    <p>Armado de PC, mantenimiento y desarrollo de software a la medida.</p>
                    <p>© {new Date().getFullYear()} MAYA Tech. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
