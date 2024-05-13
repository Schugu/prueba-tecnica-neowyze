import Image from "next/image"
import Link from "next/link"
import { urlToIdCharacter } from "../../../lib/data.js";

export default function personaje({ info }) {
  return (
    <>
      {
        (info.results).map((personaje, index) => (
          <Link
            tabIndex={`1${index}1`}
            href={`/personajes/${urlToIdCharacter(personaje.url)}`}
            key={personaje.url}
            className="
              w-44 h-72 flex flex-col items-center justify-start gap-2 p-2
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
            <p className="w-full text-center text-lg text-yellow-500">{personaje.name}</p>
            {
              personaje.eye_color !== 'n/a' && personaje.eye_color !== 'unknown' &&
              <p className="text-center text-sm">Color de ojos: {personaje.eye_color}</p>
            }
            {
              personaje.gender !== 'n/a' && personaje.gender !== 'unknown' &&
              <p className="text-center text-sm">Género: {personaje.gender}</p>
            }
          </Link>
        ))
      }
    </>
  )
}
