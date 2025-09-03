import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Calculadora from '../routes/Calculadora'
import Carros from '../routes/Carros'
import Error from '../routes/Error'
import Home from '../routes/Home'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <div>
      <header className="bg-black text-white p-4 flex justify-between items-center">
        {/* Logo e Título Alinhados à Esquerda */}
        <div className="flex items-center space-x-2"> 
          <img 
            src={logo}  // Usando a variável logo diretamente
            alt="Logo"
            className="h-10"  // Ajuste o tamanho do logo conforme necessário
          />
          <h1 className="text-2xl font-bold">Loja Carrões</h1>
        </div>
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
