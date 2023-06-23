import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import '../header/header.css';

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <nav  className={`navbar navbar-expand-lg justify-content-center fixed-top px-5 py-4 ${scrolled ? 'scrolled shadow-bottom' : ''}`}>
        <div className="container-fluid row">
          <div className="col-6 text-start">
            <a className="navbar-brand logo fw-bold fs-2" href="/">Libroteca</a>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="bi bi-list fs-1"></i></span>
          </button>

          <div className="col-6 collapse navbar-collapse my-2 my-lg-0 justify-content-end" id="navbarNav">
            <ul className="navbar-nav text-center mt-md-3 mt-lg-0 flex-md-row flex-md-nowrap justify-content-center">
              <li className="nav-item me-lg-3">
                <NavLink to="/libros" className='nav nav-link fs-5 underline'>Libros</NavLink>
              </li>
              <li className="nav-item me-lg-3">
                <a className='nav-link fs-5 underline' href="https://localhost:7107/swagger/index.html" target="_blank">Documentación</a>
              </li>
              <li className="nav-item me-lg-3">
                <a className='nav-link fs-5 underline' href="#">Nosotros</a>
              </li>
            </ul>
            <button className='btn btn-primary rounded-pill fs-5 px-3 py-2' onClick={() => navigate('/admin')}>Administrar</button>
          </div>
        </div>
      </nav>
  );
}

export default Header;
