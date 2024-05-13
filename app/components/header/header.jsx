'use client'

import { orbitron } from "../../fonts.js";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <section className="w-full bg-black flex flex-col items-center border-b-2 border-yellow-400 py-2">
      <Link
        tabIndex='1'
        href="/"
        className={`titulo ${orbitron.className} antialiased text-center`}
      >Star Wars</Link>

      <article className="botones flex flex-wrap justify-center cursor-pointer text-2xl">
        <Link
        tabIndex='2'
          href="/peliculas"
          className={` transition duration-200 ease-in-out               
          boton border-r border-yellow-500 pr-4
            ${pathname.includes('/peliculas') ? 'text-yellow-500' : 'text-white hover:text-yellow-500'}
          `}
        >Peliculas</Link>

        <Link
        tabIndex='3'
          href="/personajes/page/1"
          className={` transition duration-200 ease-in-out 
          boton border-l border-yellow-500 pl-4
          ${pathname.includes('/personajes') ? 'text-yellow-500' : 'text-white hover:text-yellow-500'}
        `}
        >Personajes</Link>
      </article>
    </section>
  )
}
