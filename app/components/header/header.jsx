'use client'

import styles from './Header.module.css'
import Image from "next/image";
import { orbitron } from "../../fonts.js";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <section className={styles.header}>
      <Link
        href="/"
        className={`${styles.titulo} ${orbitron.className} antialiased`}
      >Star Wars</Link>

      <article className={styles.botones}>
        <Link
          href="peliculas"
          className={`
            ${styles.boton}
            ${pathname === '/peliculas' ? 'text-yellow-500' : ''}
          `}
        >Peliculas</Link>

        <Link
          href="personajes"
          className={`
          ${styles.boton}
          ${pathname === '/personajes' ? 'text-yellow-500' : ''}
        `}
        >Personajes</Link>
      </article>
    </section>
  )
}
