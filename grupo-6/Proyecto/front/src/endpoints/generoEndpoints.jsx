import { fetchGET } from "../helpers/FetchApi";

export const getGeneros = async () => {
  const response = await fetchGET('/Genero');
  return response;
}