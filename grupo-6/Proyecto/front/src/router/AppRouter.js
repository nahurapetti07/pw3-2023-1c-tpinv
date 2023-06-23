import React from 'react'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../views/home/home';
import Add from '../views/add/add';
import Books from '../views/search/search';
import Detail from '../views/detail/detail';
import Header from '../components/header/Header';
import AdminLibros from '../views/admin/adminLibros';
import Edit from '../views/edit/edit';
 
export const AppRouter = () => { 

  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/libros' element={<Books />}/>
        <Route  path='/libro/detalle' element={<Detail />}/>
        <Route  path='/libro/agregar' element={<Add />}/>
        <Route  path='/libro/editar' element={<Edit />}/>
        <Route  path='/admin' element={<AdminLibros />}/>
      </Routes>
    </Router>
  )
} 
