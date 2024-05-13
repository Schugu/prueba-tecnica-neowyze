import Image from "next/image"

export default async function Pelicula({peliculaData}) {
  //  await new Promise((resolve) => setTimeout(resolve, 10000));
  return (
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
          <p tabIndex={4} className="text-2xl"><span className="text-yellow-500">Titulo:</span> {peliculaData.title}</p>
          <p tabIndex={5} className="text-2xl"><span className="text-yellow-500">Episodio:</span> {peliculaData.episode_id}</p>
          <p tabIndex={6} className="text-2xl"><span className="text-yellow-500">Director:</span> {peliculaData.director}</p>
        </div>
      </article>
  )
}
