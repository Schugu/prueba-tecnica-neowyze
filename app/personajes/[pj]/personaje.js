import Image from "next/image"

export default async function Personaje ({ dataPersonaje }) {
  return (
    <article className="p-2">
      <Image tabIndex={5}
        src='/R2D2.png'
        alt="Personaje"
        width={240}
        height={240}
      ></Image>

      <section className="flex flex-col items-start">
        <p tabIndex={6} className="text-center"> <span className="text-yellow-500">Nombre:</span> {dataPersonaje.name}</p>

        {
          dataPersonaje.eye_color !== 'n/a' && dataPersonaje.eye_color !== 'unknown' &&
          <p tabIndex={7} className="text-center"><span className="text-yellow-500">Color de ojos:</span> {dataPersonaje.eye_color}</p>
        }

        {
          dataPersonaje.birth_year !== 'n/a' && dataPersonaje.birth_year !== 'unknown' &&
          <p tabIndex={8}className="text-center"><span className="text-yellow-500">Año de cumpleaños: </span> {dataPersonaje.birth_year}</p>
        }

        {
          dataPersonaje.hair_color !== 'n/a' && dataPersonaje.hair_color !== 'unknown' &&
          <p tabIndex={9} className="text-center"><span className="text-yellow-500">Color de pelo:</span> {dataPersonaje.hair_color}</p>
        }

        {
          dataPersonaje.height !== 'n/a' && dataPersonaje.height !== 'unknown' &&
          <p tabIndex={10} className="text-center"><span className="text-yellow-500">Altura:</span> {dataPersonaje.height}</p>
        }

        {
          dataPersonaje.skin_color !== 'n/a' && dataPersonaje.skin_color !== 'unknown' &&
          <p tabIndex={11} className="text-center"><span className="text-yellow-500">Color de piel:</span> {dataPersonaje.skin_color}</p>
        }

        {
          dataPersonaje.mass !== 'n/a' && dataPersonaje.mass !== 'unknown' &&
          <p tabIndex={12} className="text-center"><span className="text-yellow-500">Masa:</span> {dataPersonaje.mass}</p>
        }
      </section>
    </article>
  )
}
