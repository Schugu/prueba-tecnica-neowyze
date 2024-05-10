'use client'
import { useEffect, useState } from "react";
import { fetchCharacterById } from "../../lib/data.js";

import Image from "next/image.js";
import Link from "next/link.js";

export default function Page(params) {
  const [personaje, setPersonaje] = useState({});
  const indicePage = parseInt(params.params.pj);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCharacterById(indicePage);
        setPersonaje(data);
      } catch (error) {
        console.log('Error al hacer fetch');
      }
    };
    fetchData();
  }, [indicePage]);

  return (
    <div>
      <Image
        src='/R2D2.png'
        alt="Personaje"
        width={150}
        height={150}
      ></Image>

      <h5 className="text-center">Nombre: {personaje.name}</h5>

      {
        personaje.eye_color !== 'n/a' && personaje.eye_color !== 'unknown' &&
        <h5 className="text-center">Color de ojos: {personaje.eye_color}</h5>
      }

      {
        personaje.birth_year !== 'n/a' && personaje.birth_year !== 'unknown' &&
        <h5 className="text-center">Año de cumpleaños: {personaje.birth_year}</h5>
      }

      {
        personaje.hair_color !== 'n/a' && personaje.hair_color !== 'unknown' &&
        <h5 className="text-center">Color de pelo: {personaje.hair_color}</h5>
      }

      {
        personaje.height !== 'n/a' && personaje.height !== 'unknown' &&
        <h5 className="text-center">Altura: {personaje.height}</h5>
      }

      {
        personaje.skin_color !== 'n/a' && personaje.skin_color !== 'unknown' &&
        <h5 className="text-center">Color de piel: {personaje.skin_color}</h5>
      }

      {
        personaje.mass !== 'n/a' && personaje.mass !== 'unknown' &&
        <h5 className="text-center">Masa: {personaje.mass}</h5>
      }
    </div>
  )
}

