import { fetchFilms } from "../lib/data.js";

export default async function page() {
  const data = await fetchFilms();
  const peliculas = data.results;
  console.log(peliculas);

  return (
    <div>
      <h2>Peliculas Page</h2>
      
      {peliculas.map((pelicula) => (
        <section key={pelicula.title}>
          <h2>{pelicula.title}</h2>
          <h2>{pelicula.episode_id}</h2>
        </section>
      ))}

    </div>
  );
}