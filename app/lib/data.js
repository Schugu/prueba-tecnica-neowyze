
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

// TODOS los personajes
export async function fetchAllCharacters() {
  try {
    const promises = [];

    for (let i = 1; i <= 9; i++) {
      promises.push(fetchCharactersByPage(i));
    }

    const responses = await Promise.all(promises);
    const allCharacters = responses.flatMap(response => response.results);

    return allCharacters;
  } catch (error) {
    console.error('Error al hacer fetch:', error);
    throw error;
  }
}


export function urlToIdCharacter(url) {
  const numerosUrl = url.match(/\/(\d+)(?=\/[^\/]*$)/);

  if (numerosUrl) {
    const id = numerosUrl[1];
    return id;
  }
}



