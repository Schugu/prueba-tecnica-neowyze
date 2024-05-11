import Image from "next/image";
import Link from "next/link";

import{ urlToIdCharacter } from "../../lib/data.js";

export default async function PersonajesLista({ personajes }) {
  return (
    <>
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
            "
          >
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
    </>
  );
}
