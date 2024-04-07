import React, { createContext, useState } from 'react'

import "./App.css";
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Test from './components/Test';

import { Routes, Route, Link } from 'react-router-dom';


export const UserContex = createContext()


const App = () => {

  const [login, setLogin] = useState()

  const [token, setToken] = useState(localStorage.getItem("token"))

  return (
    <UserContex.Provider value={{ login, setLogin,token, setToken }}>
      <Navbar />
      
      <Routes>
      <Route path='/Register' element={<Register />} />
      <Route path='/Test' element={<Test />} />
      <Route path='/Home' element={<Home />} />
      
      
      </Routes>
    </UserContex.Provider>
  )
}

export default App
