'use client'
import { useEffect, useState } from "react";
import { fetchCharactersByPage, urlToIdCharacter } from "../../../lib/data.js";

import Image from "next/image.js";
import Link from "next/link.js";

export default function Page(params) {
  const [info, setInfo] = useState({ results: [] });
  const indicePage = parseInt(params.params.page);
  const pageNumbers = Array.from({ length: 9 }, (_, index) => index + 1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCharactersByPage(indicePage);
        setInfo(data);

      } catch (error) {
        console.log('Error al hacer fetch');
      }
    };
    fetchData();
  }, [indicePage]);

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <h1>Personajes totales: {info.count + 1}</h1>
      <Link href='/personajes/filtrar'>Filtrar</Link>


      <article className="flex gap-2 flex-wrap justify-center">
        {
          (info.results).map((personaje) => (
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
                alt="Personaje"
                width={150}
                height={150}
              ></Image>
              <h3 className="w-full text-center">{personaje.name}</h3>
              {
                personaje.eye_color !== 'n/a' && personaje.eye_color !== 'unknown' &&
                <h5 className="text-center">Color de ojos: {personaje.eye_color}</h5>
              }
              {
                personaje.gender !== 'n/a' && personaje.gender !== 'unknown' &&
                <h5 className="text-center">Género: {personaje.gender}</h5>
              }
            </Link>
          ))
        }
      </article>

      <article className="flex flex-col gap-2 items-center p-2">
        <h4>Barra de navegación</h4>

        <div className="flex gap-2 text-xl">
          {info.previous !== null &&
            <Link href={`/personajes/page/${indicePage - 1}`}>
              {`<`}
            </Link>
          }

          {pageNumbers.map((pageNumber) => (
            <Link
              key={pageNumber}
              href={`/personajes/page/${pageNumber}`}
              className={pageNumber === indicePage ? 'text-yellow-500' : ''}
            >{pageNumber}
            </Link>
          ))}

          {info.next !== null &&
            <Link href={`/personajes/page/${indicePage + 1}`}>
              {`>`}
            </Link>
          }
        </div>
      </article>
    </div>
  )
}