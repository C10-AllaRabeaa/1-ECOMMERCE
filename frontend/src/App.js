import React, { createContext, useState } from 'react'

import "./App.css";
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Product from './components/Product'
import Data from './components/Data/Data';
import AddFavorites from './components/AddFavorites/AddFavorites';

import { Routes, Route, Link } from 'react-router-dom';


export const UserContex = createContext()


const App = () => {

  const [login, setLogin] = useState()

  const [token, setToken] = useState(localStorage.getItem("token"))

  return (
    <UserContex.Provider value={{ login, setLogin,token, setToken }}>
      <Navbar />
      
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/data/:id' element={<Data />} />

      <Route path='/AddFavorites/:id' element={<AddFavorites />} />
      
      </Routes>
    </UserContex.Provider>
  )
}

export default App
