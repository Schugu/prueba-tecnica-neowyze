
export async function fetchFilms() {
  try {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    return data; 
  } catch (error) {
    console.log('Error al hacer fetch');
  }
}