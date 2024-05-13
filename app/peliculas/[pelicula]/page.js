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
    <section className="flex flex-col gap-6 items-center w-full p-4">
      <Suspense>
        <Pelicula peliculaData={peliculaData}/>
      </Suspense>


      <article className="flex gap-2 flex-wrap justify-center w-full">
      <h2 tabIndex={7} className="w-11/12 text-xl border-b-2 border-yellow-500 text-center">Personajes</h2>
        <Suspense>
          <PersonajeLista personajes={personajes} />
        </Suspense>

      </article>
    </section>
  )
}