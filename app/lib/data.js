
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
export async function fetchCharacters() {
  try {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    return data; 
  } catch (error) {
    console.log('Error al hacer fetch');
  }
}

// Personaje por ID
export async function fetchCharacterByUrl(url) {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data; 
  } catch (error) {
    console.log('Error al hacer fetch');
  }
}



