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
          <h2>Titulo: {peliculaData.title}</h2>
          <h2>Episodio: {peliculaData.episode_id}</h2>
          <h2>Director: {peliculaData.director}</h2>
        </div>
      </article>
  )
}
