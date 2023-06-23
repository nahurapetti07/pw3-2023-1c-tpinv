import React, { useEffect, useState } from 'react';
import FadeDownAnimation from '../../components/animations/fade-down';

import './detail.css';
import { useLocation } from 'react-router-dom';
import { getDetalleLibro } from '../../endpoints/librosEnpoints';

function Detail() {
  const [libro, setLibro] = useState(null);
  const location = useLocation();
  const libroId = location.state.libroId;

  useEffect(() => {
    if(!libroId) return;
    
    const traerDetalleLibro = async () => {
      setLibro(await getDetalleLibro(libroId));
    }
    console.log(libroId);
    traerDetalleLibro();
  }, []);

  return (
    <div className="detail">
      <div className="detail-container container">
        <FadeDownAnimation>
          <div className="card shadow-lg border-0">
            <div className="card-body my-5">
            {libro?
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6">
                  <div className="white-box text-center">
                    <img alt="Tapa de libro" src={libro.imagen}
                      className="img-responsive rounded" width="80%" height="600px"></img>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6">
                  <div className='me-5'>
                    <h2 className="titulo">{libro.titulo}</h2>
                    <h3 className="text-muted fs-5 mb-3 autor">{libro.autor.nombreApellido}</h3>
                    <hr className="border opacity-100"></hr>
                  </div>

                  <div className='sinopsis-container rounded mt-3 me-5'>
                    <span className='fs-4 fw-bold sinopsis'>Sinopsis</span>
                    <p className="contenido mt-3">{libro.sinopsis}</p>
                  </div>

                  <span className="fs-5 fw-bold categoria">Género</span>
                  <p className='border border-dark text-center rounded-pill p-1 mt-3 w-25'>{libro.genero.nombre}</p>
                </div>
              </div>
            : <div className="row"></div>
            }
            </div>
          </div>
        </FadeDownAnimation>
      </div>
    </div>
  );
}

export default Detail;