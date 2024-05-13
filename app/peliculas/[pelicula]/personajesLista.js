import Image from "next/image";
import Link from "next/link";

import{ urlToIdCharacter } from "../../lib/data.js";

export default async function PersonajesLista({ personajes }) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      {
        personajes.map((personaje, index) => (
          <Link
            tabIndex={`1${index}1`}
            href={`/personajes/${urlToIdCharacter(personaje.url)}`}
            key={personaje.url}
            className="
              w-40 h-48 flex flex-col items-center justify-start gap-2 
              border border-solid border-yellow-500
              hover:bg-yellow-500 hover:bg-opacity-15
              cursor-pointer rounded-sm
            "
          >
            <Image
              src='/R2D2.png'
              alt="Personaje"
              width={150}
              height={150}
            ></Image>
            <p className="w-full text-center">{personaje.name}</p>
          </Link>
        ))
      }
    </>
  );
}
