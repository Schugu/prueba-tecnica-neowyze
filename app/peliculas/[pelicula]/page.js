import { Suspense } from "react";
import { fetchFilmsById, fetchCharacterByUrl } from "../../lib/data.js";

import dynamic from "next/dynamic.js";

import SkeletonPersonajes from "../skeletons/personajes.js";
import SkeletonPelicula from "../skeletons/pelicula.js";

const PersonajeLista = dynamic(() => import('./personajesLista.js'), {
  loading: () => <SkeletonPersonajes />,
  ssr: false
});
const Pelicula = dynamic(() => import('./pelicula.js'), {
  loading: () => <SkeletonPelicula />,
  ssr: false
});

export default async function Page(params) {
  const data = await fetchFilmsById(parseInt(params.params.pelicula));
  const peliculaData = data;

  const personajesDataPromesas = data.characters.map(url => fetchCharacterByUrl(url));
  const personajesData = await Promise.all(personajesDataPromesas);
  const personajes = personajesData;

  return (
    <section className="flex flex-col gap-4 items-center w-full p-4">
      <Suspense>
        <Pelicula peliculaData={peliculaData}/>
      </Suspense>

      <h2>Personajes</h2>

      <article className="flex gap-2 flex-wrap justify-center w-full">
        <Suspense>
          <PersonajeLista personajes={personajes} />
        </Suspense>

      </article>
    </section>
  )
}