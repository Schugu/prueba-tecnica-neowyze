import Image from "next/image"

export default async function Personaje ({ dataPersonaje }) {
  return (
    <>
      <Image
        src='/R2D2.png'
        alt="Personaje"
        width={240}
        height={240}
      ></Image>

      <section className="flex flex-col items-start">
        <h5 className="text-center"> <span className="text-yellow-500">Nombre:</span> {dataPersonaje.name}</h5>

        {
          dataPersonaje.eye_color !== 'n/a' && dataPersonaje.eye_color !== 'unknown' &&
          <h5 className="text-center"><span className="text-yellow-500">Color de ojos:</span> {dataPersonaje.eye_color}</h5>
        }

        {
          dataPersonaje.birth_year !== 'n/a' && dataPersonaje.birth_year !== 'unknown' &&
          <h5 className="text-center"><span className="text-yellow-500">Año de cumpleaños: </span> {dataPersonaje.birth_year}</h5>
        }

        {
          dataPersonaje.hair_color !== 'n/a' && dataPersonaje.hair_color !== 'unknown' &&
          <h5 className="text-center"><span className="text-yellow-500">Color de pelo:</span> {dataPersonaje.hair_color}</h5>
        }

        {
          dataPersonaje.height !== 'n/a' && dataPersonaje.height !== 'unknown' &&
          <h5 className="text-center"><span className="text-yellow-500">Altura:</span> {dataPersonaje.height}</h5>
        }

        {
          dataPersonaje.skin_color !== 'n/a' && dataPersonaje.skin_color !== 'unknown' &&
          <h5 className="text-center"><span className="text-yellow-500">Color de piel:</span> {dataPersonaje.skin_color}</h5>
        }

        {
          dataPersonaje.mass !== 'n/a' && dataPersonaje.mass !== 'unknown' &&
          <h5 className="text-center"><span className="text-yellow-500">Masa:</span> {dataPersonaje.mass}</h5>
        }
      </section>
    </>
  )
}
