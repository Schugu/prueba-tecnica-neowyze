import { Suspense } from "react";
import { fetchCharacterById } from "../../lib/data.js";


import SkeletonPersonaje from "../skeletons/personaje.js";
import dynamic from "next/dynamic.js";

const Personaje = dynamic(() => import('./personaje.js'), {
  loading: () => <SkeletonPersonaje />,
  ssr: false
});

export default async function Page(params) {
  const indicePage = parseInt(params.params.pj);

  const data = await fetchCharacterById(indicePage);
  const dataPersonaje = data;


  return (
    <div className="flex flex-col gap-2 items-center w-full p-2 min-h-screen">
      <Suspense>
        <Personaje dataPersonaje={dataPersonaje} />
      </Suspense>
    </div>
  )
}

