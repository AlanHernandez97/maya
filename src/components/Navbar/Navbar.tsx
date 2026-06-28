'use client'
import { ClipboardClock } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type LinkType = {
    title: string;
    path: string;
}

const Navbar = () => {

    const pathname = usePathname();

    const links: LinkType[] = [
        {
            title: "Inicio",
            path: "/"
        },
        {
            title: "Servicios",
            path: "/service"
        },
        {
            title: "Nosotros",
            path: "/about"
        },
        {
            title: "Contacto",
            path: "/contact"
        },
    ]

    return (
        <nav className='w-full px-3 flex justify-between items-center bg-[#1A1A1A]'>
            <div className='flex gap-none items-center'>
                <Image loading='eager' src={"/logos/MayaLogoGolden.png"} alt='company-logo' width={140} height={140} />
            </div>
            <div className='text-white flex gap-10 mr-10'>
                {
                    links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className={`hover:text-[#00F0FF] transition-all ease-in-out duration-200 cursor-pointer font-bold ${pathname === link.path ? "text-[#00F0FF] underline" : ""}`}
                        >
                            {link.title}
                        </Link>
                    ))
                }
            </div>
            <div className='flex gap-2'>
                <button className='p-2 bg-[#FFD700] text-[#1A1A1A] hover:bg-[#FFD700]/80 transition-all ease-in-out duration-200 cursor-pointer rounded-xl'>
                    <Link href={"/tracking"} className='flex gap-2 items-center'>
                        <ClipboardClock size={16} />
                        <span className='font-bold text-sm'>Seguimiento</span>
                    </Link>
                </button>

            </div>
        </nav>
    )
}

export default Navbar