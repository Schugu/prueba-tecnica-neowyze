'use client'
import { useEffect, useState } from "react";
import { fetchFilms } from "../lib/data.js";
import Image from "next/image.js";
import Link from "next/link.js";

export default function Page() {
  const [peliculas, setPeliculas] = useState([]);
  const [botonActivo, setBotonActivo] = useState('lanzamiento');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFilms();
        setPeliculas(data.results);
      } catch (error) {
        console.error("Error al hacer fetch");
      }
    };
    fetchData();
  }, []);

  const handleOrdenLanzamiento = () => {
    setBotonActivo('lanzamiento');
    const ordenLanzamiento = [...peliculas].sort((a, b) => {
      return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
    });
    setPeliculas(ordenLanzamiento);
  };

  const handleOrdenCronologia = () => {
    setBotonActivo('cronologia');
    const ordenCronologia = [...peliculas].sort((a, b) => {
      return a.episode_id - b.episode_id;
    });
    setPeliculas(ordenCronologia);
  };

  return (
    <div className="p-2 flex flex-col gap-8 items-center">
      <section className="flex flex-col gap-2 items-center">
        <h2>Ordenar por:</h2>
        <article className="flex gap-10">
          <button
            className={botonActivo === 'lanzamiento' ? 'text-yellow-500' : 'text-white'}
            onClick={handleOrdenLanzamiento}>Lanzamiento</button>

          <button
            className={botonActivo === 'cronologia' ? 'text-yellow-500' : 'text-white'}
            onClick={handleOrdenCronologia}>Cronologia</button>
        </article>
      </section>

        <section className="flex flex-col gap-4 items-center w-full">
          {peliculas.map((pelicula) => (
            <article key={pelicula.title} className="flex w-full gap-2 justify-start">
              <Image
                src='/R2D2.png'
                alt="Pelicula"
                width={150}
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
          ))}
        </section>
    </div>
  );
}