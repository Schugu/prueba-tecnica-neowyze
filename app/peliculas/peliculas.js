import Image from "next/image.js";
import Link from "next/link.js";

export default async function Peliculas({ dataPeliculas }) {
  //  await new Promise((resolve) => setTimeout(resolve, 10000));
  return (
    <>
      {
        dataPeliculas.map((pelicula, index) => (
          <article key={pelicula.title} className="flex min-w-32 max-w-2xl gap-2 items-end justify-center h-32
            border-b border-yellow-500 
          ">
            <Image
              src='/R2D2.png'
              alt="Pelicula"
              width={160}
              height={150}
            ></Image>
            <div className="flex flex-col gap-2 w-80">
              <p tabIndex={`1${index}1`}><span className="text-yellow-500">Título:</span> {pelicula.title}</p>
              <p tabIndex={`1${index}2`}><span className="text-yellow-500">Episodio:</span> {pelicula.episode_id}</p>
              <section className="flex justify-end">
                <Link tabIndex={`1${index}3`}
                  className="text-yellow-500 hover:text-white transition duration-200 ease-in-out pr-2"
                  href={`/peliculas/${pelicula.episode_id}`}>Ver más</Link>
              </section>
            </div>
          </article>
        ))
      }
    </>
  )
}