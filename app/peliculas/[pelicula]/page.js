import { Suspense } from "react";
import { fetchFilmsById, fetchCharacterByUrl } from "../../lib/data.js";

import Image from "next/image.js";
import dynamic from "next/dynamic.js";

const PersonajeLista = dynamic(() => import('./personajesLista.js'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

export default async function Page(params) {
  const data = await fetchFilmsById(parseInt(params.params.pelicula));
  const pelicula = data;

  const personajesDataPromesas = data.characters.map(url => fetchCharacterByUrl(url));
  const personajesData = await Promise.all(personajesDataPromesas);
  const personajes = personajesData;

  return (
    <section className="flex flex-col gap-4 items-center w-full p-4">
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
          <h2>Titulo: {pelicula.title}</h2>
          <h2>Episodio: {pelicula.episode_id}</h2>
          <h2>Director: {pelicula.director}</h2>
        </div>
      </article>

      <h2>Personajes</h2>

      <article className="flex gap-2 flex-wrap justify-center">
        <Suspense>
          <PersonajeLista personajes={personajes} />
        </Suspense>

      </article>
    </section>
  )
}