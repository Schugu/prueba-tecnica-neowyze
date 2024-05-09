'use client'
import { useEffect, useState } from "react";
import { fetchFilms } from "../lib/data.js";
import Image from "next/image.js";

export default function Page() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFilms();
        setPeliculas(data.results);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="p-2 flex flex-col gap-4">
      <h2>Ordenar por:</h2>
      <section>
        <button >Lanzamiento</button>
        <button >Cronologia</button>
      </section>

      {peliculas.map((pelicula) => (
        <section key={pelicula.title} className="flex gap-2">
          <Image
            src='/R2D2.png'
            alt="Pelicula"
            width={150}
            height={150}
          ></Image>
          <article className="flex flex-col gap-2">
            <h2>Título: {pelicula.title}</h2>
            <h2>Capitulo: {pelicula.episode_id}</h2>
          </article>

        </section>
      ))}

    </div>
  );
}