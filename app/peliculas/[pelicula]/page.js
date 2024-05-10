'use client'
import { useEffect, useState} from "react";
import { fetchFilmsById, fetchCharacterByUrl, urlToIdCharacter } from "../../lib/data.js";

import Image from "next/image.js";
import Link from "next/link.js";

export default function Page(params) {
  const [pelicula, setPelicula] = useState({});
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFilmsById(parseInt(params.params.pelicula));
        setPelicula(data);

        const personajesDataPromesas = data.characters.map(url => fetchCharacterByUrl(url));
        const personajesData = await Promise.all(personajesDataPromesas);
        setPersonajes(personajesData);
      } catch (error) {
        console.log('Error al hacer fetch');
      }
    };
    fetchData();
  }, [params]);

  return (
    <section className="flex flex-col gap-4 items-center w-full p-4">
      <article className="flex w-full gap-2 justify-center flex-wrap">
        <div>
          <Image
            src='/R2D2.png'
            alt="Pelicula"
            width={250}
            height={250}
          ></Image>
        </div>

        <div className="flex flex-col justify-center ">
          <h2>Titulo: {pelicula.title}</h2>
          <h2>Episodio: {pelicula.episode_id}</h2>
          <h2>Director: {pelicula.director}</h2>
        </div>
      </article>

      <h2>Personajes</h2>

      <article className="flex gap-2 flex-wrap justify-center">
        {
          personajes.map((personaje) => (
            <Link
              href={`/personajes/${urlToIdCharacter(personaje.url)}`}
              key={personaje.url}
              className="
              w-40 h-51 flex flex-col items-center justify-start gap-2 
              border border-solid border-yellow-500
              hover:bg-yellow-500 hover:bg-opacity-15
              cursor-pointer
              ">
              <Image
                src='/R2D2.png'
                alt="Pelicula"
                width={150}
                height={150}
              ></Image>
              <h3 className="w-full text-center">{personaje.name}</h3>
            </Link>
          ))
        }

      </article>
    </section>
  )
}

