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
          <h2 className="text-2xl"><span className="text-yellow-500">Titulo:</span> {peliculaData.title}</h2>
          <h2 className="text-2xl"><span className="text-yellow-500">Episodio:</span> {peliculaData.episode_id}</h2>
          <h2 className="text-2xl"><span className="text-yellow-500">Director:</span> {peliculaData.director}</h2>
        </div>
      </article>
  )
}
