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
      <h1 tabIndex={4} className="border-b border-yellow-500 px-2">Personajes totales: {info.count + 1}</h1>
      <Link tabIndex={5} href='/personajes/filtrar' className="border border-yellow-500 px-2
      bg-yellow-500 bg-opacity-15 hover:text-yellow-500 hover:bg-white hover:bg-opacity-15
      ">Filtrar</Link>


      <article className="flex gap-2 flex-wrap justify-center lg:grid lg:grid-cols-5">
        <Suspense>
          <Personajes info={info} />
        </Suspense>
      </article>

      <article className="flex flex-col gap-2 items-center p-2">
        <p tabIndex={300}>Barra de navegación</p>

        <div className="flex gap-2 text-xl">
          {info.previous !== null &&
            <Link tabIndex={301}
              href={`/personajes/page/${indicePage - 1}`} aria-label="Atrás">
              {`<`}
            </Link>
          }

          {pageNumbers.map((pageNumber) => (
            <Link
              tabIndex={`3${pageNumber}1`}
              key={pageNumber}
              href={`/personajes/page/${pageNumber}`}
              className={pageNumber === indicePage ? 'text-yellow-500' : ''}
            >{pageNumber}
            </Link>
          ))}

          {info.next !== null &&
            <Link tabIndex={400}
              href={`/personajes/page/${indicePage + 1}`} aria-label="Siguiente">
              {`>`}
            </Link>
          }
        </div>
      </article>
    </div>
  )
}