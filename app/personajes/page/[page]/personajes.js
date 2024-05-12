import Image from "next/image"
import Link from "next/link"
import { urlToIdCharacter } from "../../../lib/data.js";

export default function personaje({ info }) {
  return (
    <>
      {
        (info.results).map((personaje) => (
          <Link
            href={`/personajes/${urlToIdCharacter(personaje.url)}`}
            key={personaje.url}
            className="
              w-40 h-72 flex flex-col items-center justify-start gap-2 
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
    </>
  )
}
