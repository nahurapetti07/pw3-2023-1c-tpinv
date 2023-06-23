import { fetchDELETE, fetchGET, fetchPOST, fetchPUT } from "../helpers/FetchApi";

export const getLibros = async () => {
  const response = await fetchGET('/Libroteca');
  return response;
}

export const getDetalleLibro = async (id) => {
  const response = await fetchGET(`/Libroteca/${id}`);
  return response;
}

export const addLibro = async (libro) => {
  const response = await fetchPOST(`/Libroteca`, libro);
  return response;
}

export const editLibro = async (libro) => {
  const response = await fetchPUT(`/Libroteca/${libro.id}`, libro);
  return response;
}

export const deleteLibro = async (id) => {
  const response = await fetchDELETE(`/Libroteca/${id}`);
  return response;
}