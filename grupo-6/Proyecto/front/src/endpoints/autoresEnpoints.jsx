import { fetchGET } from "../helpers/FetchMicroservice";

export const getAutores = async () => {
  const response = await fetchGET('/Autor');
  return response;
}

export const getDetalleAutor = async (id) => {
  const response = await fetchGET(`/Autor/${id}`);
  return response;
}