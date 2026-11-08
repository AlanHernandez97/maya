'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ClipboardClock, Menu, X } from 'lucide-react';
import { useState } from 'react';

const siteLinks = [
    { title: 'Inicio', route: '/', anchor: '#inicio' },
    { title: 'Servicios', route: '/service', anchor: '#servicios' },
    //{ title: 'Nosotros', route: '/about', anchor: '#nosotros' },
    { title: 'Contacto', route: '/contact', anchor: '#contacto' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const isHome = pathname === '/';

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#131314]/90 shadow-lg shadow-black/10 backdrop-blur-xl">
            <nav className="mx-auto flex h-[140px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-2" aria-label="Navegación principal">
                <Link href="/" className="flex shrink-0 items-center" aria-label="MAYA Tech, inicio">
                    <Image src="/logos/MayaLogoGolden.png" alt="MAYA Tech" width={180} height={180} priority className="h-[140px] w-[140px] object-contain" />
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {siteLinks.map(({ title, route }) => {

                        const active = (isHome && title === 'Inicio') || (!isHome && pathname === route);
                        return <Link key={title} href={route} className={`border-b-2 py-2 text-sm font-semibold transition ${active ? 'border-cyan text-cyan' : 'border-transparent text-white/75 hover:text-cyan'}`}>{title}</Link>;
                    })}
                </div>

                <Link href="/tracking" className="button-gold hidden items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold sm:inline-flex">
                    <ClipboardClock size={17} /> Seguimiento
                </Link>
                <button type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-ivory sm:ml-3 md:hidden">
                    {menuOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
            </nav>

            {menuOpen && <div className="border-t border-white/10 bg-[#131314] px-5 py-4 shadow-xl md:hidden">
                <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:px-3">
                    {siteLinks.map(({ title, route, anchor }) => <Link key={title} href={isHome ? anchor : route} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-cyan">{title}</Link>)}
                    <Link href="/tracking" onClick={() => setMenuOpen(false)} className="button-gold mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold"><ClipboardClock size={17} /> Seguimiento</Link>
                </div>
            </div>}
        </header>
    );
}
