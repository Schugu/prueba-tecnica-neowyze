'use client'

import styles from './Header.module.css'
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
          href="/peliculas"
          className={`
            ${styles.boton}
            ${ pathname.includes('/peliculas') ? 'text-yellow-500' : ''}
          `}
        >Peliculas</Link>

        <Link
          href="/personajes/page/1"
          className={`
          ${styles.boton}
          ${ pathname.includes('/personajes') ? 'text-yellow-500' : ''}
        `}
        >Personajes</Link>
      </article>
    </section>
  )
}
