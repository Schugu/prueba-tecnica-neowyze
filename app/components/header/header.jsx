'use client'

import { orbitron } from "../../fonts.js";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <section className="w-full bg-black flex flex-col items-center border-b-2 border-yellow-400 py-2">
      <Link
        href="/"
        className={`titulo ${orbitron.className} antialiased`}
      >Star Wars</Link>

      <article className="botones flex flex-wrap justify-center gap-20 cursor-pointer">
        <Link
          href="/peliculas"
          className={` transition duration-200 ease-in-out               
          boton text-xl
            ${pathname.includes('/peliculas') ? 'text-yellow-500' : 'text-white hover:text-yellow-500'}
          `}
        >Peliculas</Link>

        <Link
          href="/personajes/page/1"
          className={` transition duration-200 ease-in-out 
          boton text-xl
          ${pathname.includes('/personajes') ? 'text-yellow-500' : 'text-white hover:text-yellow-500'}
        `}
        >Personajes</Link>
      </article>
    </section>
  )
}
