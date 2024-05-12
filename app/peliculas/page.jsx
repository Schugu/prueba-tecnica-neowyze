'use client'
import { useEffect, useState, Suspense } from "react";
import { fetchFilms } from "../lib/data.js";

import SkeletonPeliculas from "./skeletons/peliculas.js";
import dynamic from "next/dynamic.js";

const Peliculas = dynamic(() => import('./peliculas.js'), {
  loading: () => <SkeletonPeliculas />,
  ssr: false
});

export default function Page() {
  const [dataPeliculas, setDataPeliculas] = useState([]);
  const [botonActivo, setBotonActivo] = useState('lanzamiento');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFilms();
        setDataPeliculas(data.results);
      } catch (error) {
        console.error("Error al hacer fetch");
      }
    };
    fetchData();
  }, []);

  const handleOrdenLanzamiento = () => {
    setBotonActivo('lanzamiento');
    const ordenLanzamiento = [...dataPeliculas].sort((a, b) => {
      return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
    });
    setDataPeliculas(ordenLanzamiento);
  };

  const handleOrdenCronologia = () => {
    setBotonActivo('cronologia');
    const ordenCronologia = [...dataPeliculas].sort((a, b) => {
      return a.episode_id - b.episode_id;
    });
    setDataPeliculas(ordenCronologia);
  };

  return (
    <div className="p-2 flex flex-col gap-8 items-center">
      <section className="flex flex-col gap-2 items-center">
        <h2>Ordenar por:</h2>
        <article className="flex gap-10">
          <button
            className={botonActivo === 'lanzamiento' ? 'text-yellow-500' : 'text-white'}
            onClick={handleOrdenLanzamiento}>Lanzamiento</button>

          <button
            className={botonActivo === 'cronologia' ? 'text-yellow-500' : 'text-white'}
            onClick={handleOrdenCronologia}>Cronologia</button>
        </article>
      </section>

      <section className="flex flex-col gap-4 items-center w-full">
        <Suspense>
          <Peliculas dataPeliculas={dataPeliculas}/>
        </Suspense>
      </section>
    </div>
  );
}