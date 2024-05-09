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



  const handleOrdenLanzamiento = () => {
    const ordenLanzamiento = [...peliculas].sort((a, b) => {
      return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
    });

    setPeliculas(ordenLanzamiento);
  };


  const handleOrdenCronologia = () => {
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
          <button onClick={handleOrdenLanzamiento}>Lanzamiento</button>
          <button onClick={handleOrdenCronologia}>Cronologia</button>
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
          <article className="flex flex-col gap-2">
            <h2>Título: {pelicula.title}</h2>
            <h2>Capitulo: {pelicula.episode_id}</h2>
          </article>
        </article>
      ))}
      </section>
    </div>
  );
}