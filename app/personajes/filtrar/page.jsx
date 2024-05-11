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
    <div className="flex flex-col gap-2 items-center p-2 w-full">
      <h2>Filtrar:</h2>

      <section className="flex flex-wrap gap-10 justify-around w-full">
        <article className="w-1/3 flex flex-col gap-2 items-center">
          <label htmlFor="category" className="w-full">Categoria</label>
          <select className="bg-black text-yellow-500 w-full"
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

        <article className="w-1/3">
          <label htmlFor="option" className="w-full">Opción</label>
          <select
            className="bg-black text-yellow-500 w-full"
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
        <article className="flex gap-2 flex-wrap justify-center">
          {personajes.map((personaje) =>
            personaje[selectedCategory] === selectedOption ? (
              <Link
                href={`/personajes/${urlToIdCharacter(personaje.url)}`}
                key={personaje.url}
                className="
            w-40 h-51 flex flex-col items-center justify-start gap-2 
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
                <h3 className="w-full text-center">{personaje.name}</h3>
                {selectedCategory === "eye_color" && personaje.eye_color !== "n/a" && personaje.eye_color !== "unknown" && (
                  <h5 className="text-center">Color de ojos: {personaje.eye_color}</h5>
                )}
                {selectedCategory === "gender" && personaje.gender !== "n/a" && personaje.gender !== "unknown" && (
                  <h5 className="text-center">Género: {personaje.gender}</h5>
                )}
              </Link>
            ) : null
          )}
          {personajes.every((personaje) => personaje[selectedCategory] !== selectedOption) && (
            <h2>No se encontró nada</h2>
          )}
        </article>
      </section>
    </div>
  )
}
