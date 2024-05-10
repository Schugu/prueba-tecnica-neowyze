'use client'
import { useEffect, useState } from "react";
import { fetchCharactersByPage } from "../../../lib/data.js";

import Image from "next/image.js";

export default function Page( params ) {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCharactersByPage(parseInt(params.params.page));
        setPersonajes(data.results);

      } catch (error) {
        console.log('Error al hacer fetch');
      }
    };
    fetchData();
  }, [params]);

  console.log(personajes);

  return (
    <div>Personajes Page
      


      <article className="flex gap-2 flex-wrap justify-center">
        {
          personajes.map((personaje) => (
            <div
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
            </div>
          ))
        }

      </article>
    </div>
  )
}