import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Calculadora from '../routes/Calculadora'
import Carros from '../routes/Carros'
import Error from '../routes/Error'
import Home from '../routes/Home'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Loja carrões</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-red-400">Home</Link>
          <Link to="/carros" className="hover:text-red-400">Carros</Link>
          <Link to="/calculadora" className="hover:text-red-400">Calculadora</Link>
        </nav>
      </header>
    </div>
  )
}

export default Nav
