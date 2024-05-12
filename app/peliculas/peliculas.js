import Image from "next/image.js";
import Link from "next/link.js";

export default async function Peliculas({ dataPeliculas }) {
    //  await new Promise((resolve) => setTimeout(resolve, 10000));
  return (
    <>
      {
        dataPeliculas.map((pelicula) => (
          <article key={pelicula.title} className="flex w-full gap-2 justify-center h-32">
            <Image
              src='/R2D2.png'
              alt="Pelicula"
              width={160}
              height={150}
            ></Image>
            <div className="flex flex-col gap-2 w-80">
              <h2>Título: {pelicula.title}</h2>
              <h2>Episodio: {pelicula.episode_id}</h2>
              <section className="flex justify-end">
                <Link
                  className="text-yellow-500"
                  href={`/peliculas/${pelicula.episode_id}`}>Ver más</Link>
              </section>
            </div>
          </article>
        ))
      }
    </>
  )
}