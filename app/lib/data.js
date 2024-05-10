
// Todas las pelis
export async function fetchFilms() {
  try {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al hacer fetch');
  }
}

// Peli por ID 
export async function fetchFilmsById(id) {
  try {
    const response = await fetch(`https://swapi.dev/api/films/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al hacer fetch');
  }
}

// Todos los personajes
export async function fetchCharactersByPage(pageNum) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${pageNum}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al hacer fetch');
  }
}

// Personaje por URL
export async function fetchCharacterByUrl(url) {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al hacer fetch');
  }
}

// Personaje por ID
export async function fetchCharacterById(id) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al hacer fetch');
  }
}



export function urlToIdCharacter(url) {
  const numerosUrl = url.match(/\/(\d+)(?=\/[^\/]*$)/);

  if (numerosUrl) {
    const id = numerosUrl[1];
    return id;
  }
}
