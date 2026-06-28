import Image from 'next/image'

type LinkType = {
    title: string;
    path: string;
}

const Navbar = () => {

    const links: LinkType[] = [
        {
            title: "Inicio",
            path: "/"
        },
        {
            title: "Servicios",
            path: "/services"
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
        <nav className='w-full py-2 px-3 flex justify-between items-center bg-[#1A1A1A]'>
            <div className='flex gap-none items-center'>
                <Image src={"/logos/MayaLogoGolden.png"} alt='company-logo' width={130} height={130} />
            </div>
            <div className='text-white flex gap-10 mr-10'>
                {
                    links.map((link, index) => (
                        <a key={index} href={link.path} className='hover:text-[#00F0FF] transition-all ease-in-out duration-200 cursor-pointer font-bold'>{link.title}</a>
                    ))
                }
            </div>
            <div className='flex gap-2'>
                <button className='p-2 bg-amber-300 text-black rounded-lg cursor-pointer'>Seguimiento</button>

            </div>
        </nav>
    )
}

export default Navbar