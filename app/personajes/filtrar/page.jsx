'use client'

import { useEffect, useState } from "react"
import { fetchAllCharacters, urlToIdCharacter } from "../../lib/data.js";
import { filtros } from "../filtrar/filtros.js";

import Image from "next/image.js";
import Link from "next/link.js";

export default function Page() {
  const [personajes, setPersonajes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangeOption = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllCharacters();
        setPersonajes(data);
      } catch (error) {
        console.log("Error al hacer fetch");
      }
    }
    fetchData();
  }, [])


  return (
    <div className="flex flex-col gap-2 items-center p-2 w-full min-h-screen">
      <h1 tabIndex={4} className="text-yellow-500 text-2xl">Filtrar:</h1>

      <section className="flex flex-wrap gap-6 justify-center border-b border-yellow-500 pb-2 w-96">
        <article className="w-40 flex flex-col gap-2 items-center">
          <h2 tabIndex={5} className="w-full text-center text-xl">Categoria</h2>
          <select tabIndex={6} className="bg-black text-yellow-500 w-full border border-yellow-500 rounded-sm p-1"
            name="category"
            id="category"
            value={selectedCategory}
            onChange={handleChangeCategory}
          >
            <option value="">Select</option>
            <option value="hair_color">Color de pelo</option>
            <option value="skin_color">Color de piel</option>
            <option value="eye_color">Color de ojos</option>
            <option value="gender">Género</option>
          </select>
        </article>

        <article className="w-40 flex flex-col gap-2 items-center">
          <h2 tabIndex={7} className="w-full text-center text-xl">Opción</h2>
          <select
            tabIndex={8}
            className="bg-black text-yellow-500 w-full
            border border-yellow-500 rounded-sm p-1"
            name="option"
            id="option"
            value={selectedOption}
            onChange={handleChangeOption}
          >
            <option value="">Select</option>
            {
              filtros[selectedCategory]?.map((option) => (
                <option value={option} key={option}>{option}</option>
              ))
            }
          </select>
        </article>
      </section>

      <section className="flex justify-center">
        <article className="flex gap-2 flex-wrap justify-center p-2">
          {personajes.map((personaje) =>
            personaje[selectedCategory] === selectedOption ? (
              <Link
                href={`/personajes/${urlToIdCharacter(personaje.url)}`}
                key={personaje.url}
                className="w-80 h-44 c:w-40 c:h-51 flex c:flex-col items-center justify-start gap-2 
            border border-solid border-yellow-500
            hover:bg-yellow-500 hover:bg-opacity-15
            cursor-pointer"
              >
                <Image
                  src="/R2D2.png"
                  alt="Personaje"
                  width={150}
                  height={150}
                />
                <div className="flex flex-col gap-2 w-full">
                  <p className="w-full text-center text-yellow-500">{personaje.name}</p>
                  {personaje.eye_color !== "n/a" && personaje.eye_color !== "unknown" && (
                    <p className="text-center">Color de ojos: {personaje.eye_color}</p>
                  )}
                  {personaje.gender !== "n/a" && personaje.gender !== "unknown" && (
                    <p className="text-center">Género: {personaje.gender}</p>
                  )}
                </div>
              </Link>
            ) : null
          )}
        </article>

        {personajes.every((personaje) => personaje[selectedCategory] !== selectedOption) && (
          <p tabIndex={9}>No se encontró nada</p>
        )}
      </section>
    </div>
  )
}
