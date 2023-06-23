import '../add/add.css';
import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react';
import FadeUpAnimation from '../../components/animations/fade-up';
import { getGeneros } from '../../endpoints/generoEndpoints';
import { editLibro, getDetalleLibro } from '../../endpoints/librosEnpoints';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAutores } from '../../endpoints/autoresEnpoints';

function Edit() {
  const navigate = useNavigate();
  const location = useLocation();
  const libroId = location.state.libroId;
  const [ libro, setLibro ] = useState();
  const [ generosList, setGenerosList ] = useState([]);
  const [ autoresList, setAutoresList ] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(await editLibro(libro)){
      Swal.fire(
        'Listo!',
        `Libro "${libro.titulo}" editado con éxito.`,
        'success'
      ).then(
        navigate('/admin')
      );
    } else {
      Swal.fire(
        'Error',
        `Hubo un error al editar el libro.`,
        'error'
      )
    }
  }

  const handleChange = (e) => {
    setLibro({...libro, [e.target.name]: e.target.value});
  }

  const handleAutorChange = (e) => {
    let autorObj = autoresList.filter((autor) => autor.id == e.target.value);
    setLibro({...libro, 'autorId': e.target.value, 'autor': autorObj[0]});
  }

  const handleGeneroChange = (e) => {
    let generoObj = generosList.filter((genero) => genero.id == e.target.value);
    setLibro({...libro, 'generoId': e.target.value, 'genero': generoObj[0]});
  }

  useEffect(() => {
    if(!libroId) return;

    const traerDetalleLibro = async () => {
      setGenerosList(await getGeneros());
      setAutoresList(await getAutores());
      setLibro(await getDetalleLibro(libroId));
    }

    traerDetalleLibro();
  }, []);

  return (
    <div className="add">
      <div className="add-container container">
        <FadeUpAnimation>
          {libro?
            <form className='bg-white rounded shadow-lg pt-0' onSubmit={handleSubmit}>
              <h2 className='text-center text-light title rounded py-2 mb-4'>Editar libro</h2>
              <div className='px-5'>
                <div className="fw-bold fs-5 mb-3">
                  <label htmlFor="imagen" className="form-label me-5">Portada</label>
                  <input type="text" className="form-control" id="imagen" name="imagen" onChange={handleChange}></input>
                </div>

                <div className="fw-bold fs-5 mb-3">
                  <label htmlFor="titulo" className="form-label">Título</label>
                  <input type="text" className="form-control fs-5" id="titulo" name="titulo" defaultValue={libro.titulo} onChange={handleChange}></input>
                </div>

                <div className="fw-bold fs-5 mb-3">
                  <label htmlFor="autor" className="form-label">Autor</label>
                  <select defaultValue={libro.autor.id} className="form-select fs-5" name="autorId" onChange={handleAutorChange}>
                    <option value={''}>Selecciona un autor</option>
                      {autoresList? autoresList.map((autor, i) => (
                        <option key={i} value={autor.id}>{autor.nombreApellido}</option>
                      )) : null }
                    </select>
                </div>

                <div className="fw-bold fs-5 mb-3">
                  <label htmlFor="categoria" className="form-label">Género</label>
                  <select defaultValue={libro.genero.id} className="form-select fs-5" name="generoId" onChange={handleGeneroChange}>
                    <option value={''}>Selecciona una categoria</option>
                    {generosList? generosList.map((genero, i) => (
                      <option key={i} value={genero.id}>{genero.nombre}</option>
                    )) : null }
                  </select>
                </div>

                <div className="fw-bold fs-5 mb-3">
                  <label className="form-label" htmlFor="sinopsis">Sinopsis</label>
                  <textarea className="form-control fs-5" id="sinopsis" rows="4" defaultValue={libro.sinopsis} name="sinopsis" onChange={handleChange}></textarea>
                </div>

                <div className='text-end mt-4'>
                  <button type="submit" className="btn rounded-pill confirmar fs-5 mb-4">Confirmar</button>
                </div>
              </div>
            </form>
          : null}
        </FadeUpAnimation>
      </div>
    </div>
  );
}

export default Edit;