import { Settings } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='p-4 flex justify-between items-center w-full bg-[#0A0A0B]'>
            <div className='flex flex-col gap-3 ml-10'>
                <div className='flex items-center gap-2 bg-[#00363A] border-[#00F0FF] border w-fit p-2 rounded-full'>
                    <div className='w-2 h-2 rounded-full bg-[#00F0FF]' />
                    <p className='text-xs text-[#00F0FF] uppercase font-bold tracking-wide'>Tecnología a tu alcance</p>
                </div>
                <div className='flex flex-col justify-start w-full h-full gap-4'>
                    <h2 className='text-white text-4xl font-bold uppercase leading-tight'>Soluciones tencológicas para tu <strong className='text-[#00F0FF]'>PC</strong> y tu negocio</h2>
                    <p className='text-white font-semibold w-[50%] mt-4 text-sm'>Armamos, optimizamos y desarrollamos tecnología a la medida para estudiantes, gamers, creadores y negocios locales.</p>
                </div>
                <button>
                    <div className='w-44 p-3 bg-transparent border border-[#00F0FF] text-[#00F0FF] rounded-lg flex items-center justify-center gap-2'>
                        <p className='font-bold text-sm text-center uppercase'>Ver servicios</p>
                        <Settings size={16} />
                    </div>
                </button>
            </div>
            <div className='ml-auto mr-10 shadow-2xl hover:shadow-2xl hover:shadow-[white] transition-all ease-in-out duration-800'>
                <Image src={"/images/hero-image.png"} alt='hero-image' width={400} height={400} />
            </div>
        </div>
    )
}

export default Hero