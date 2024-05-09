import styles from './header.module.css'
import Image from "next/image";
import { orbitron } from "../../fonts.js";
import Link from 'next/link';

export default function header() {
  return (
    <section className={styles.header}>
      <Link
        href="/"
        className={`${styles.titulo} ${orbitron.className} antialiased`}
      >Star Wars</Link>

      <article className={styles.botones}>
        <Link href="peliculas" className={styles.boton}>Peliculas</Link>
        <Link href="personajes" className={styles.boton}>Personajes</Link>
      </article>
    </section>
  )
}
