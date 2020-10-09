export const API_ROOT = "https://rickandmortyapi.com/api";
export const CHARACTERS_ENDPOINT = `${API_ROOT}/character`;

export async function getRequest(endpoint) {
  const response = await fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .catch(console.error);


  return response;
}
