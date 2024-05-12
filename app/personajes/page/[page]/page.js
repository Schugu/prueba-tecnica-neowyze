import { Suspense } from "react";
import { fetchCharactersByPage } from "../../../lib/data.js";

import Link from "next/link.js";
import dynamic from "next/dynamic.js";

import SkeletonPersonajes from "../../skeletons/personajes.js";

const Personajes = dynamic(() => import('./personajes.js'), {
  loading: () => <SkeletonPersonajes />,
  ssr: false
});

export default async function Page(params) {
  const indicePage = parseInt(params.params.page);
  const pageNumbers = Array.from({ length: 9 }, (_, index) => index + 1);

  const data = await fetchCharactersByPage(indicePage);
  const info = data;

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <h1 className="border-b border-yellow-500 px-2">Personajes totales: {info.count + 1}</h1>
      <Link href='/personajes/filtrar' className="border border-yellow-500 px-2
      bg-yellow-500 bg-opacity-15 hover:text-yellow-500 hover:bg-white hover:bg-opacity-15
      ">Filtrar</Link>


      <article className="flex gap-2 flex-wrap justify-center">
        <Suspense>
          <Personajes info={info} />
        </Suspense>
      </article>

      <article className="flex flex-col gap-2 items-center p-2">
        <h4>Barra de navegación</h4>

        <div className="flex gap-2 text-xl">
          {info.previous !== null &&
            <Link href={`/personajes/page/${indicePage - 1}`}>
              {`<`}
            </Link>
          }

          {pageNumbers.map((pageNumber) => (
            <Link
              key={pageNumber}
              href={`/personajes/page/${pageNumber}`}
              className={pageNumber === indicePage ? 'text-yellow-500' : ''}
            >{pageNumber}
            </Link>
          ))}

          {info.next !== null &&
            <Link href={`/personajes/page/${indicePage + 1}`}>
              {`>`}
            </Link>
          }
        </div>
      </article>
    </div>
  )
}