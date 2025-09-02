import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Calculadora from "./routes/Calculadora"
import Sobre from "./routes/Sobre"
import Carros from "./routes/Carros"
import Home from "./routes/Home"
import Error from './routes/Error'
function App() {
 

  return (
    <>
    <BrowserRouter>
     
     <Nav/>
      <main>
      {/* Gerencia a exibição dos componentes com base na URL */}
      <Routes>
        {/* Rota para chamar o Error */}
        <Route path="*" element={<Error/>}/>

        {/* Rota para chamar o Home */}
        <Route path="/" element={<Home/>}/>

        {/* Rota para chamar o Produto */}
        <Route path="/produto" element={<Carros/>}/>
        
         {/* Rota para chamar o Client */}
        <Route path="/Client" element={<Calculadora/>}/>

        <Route path="/Client" element={<Header/>}/>

        <Route path="/Client" element={<Sobre/>}/>



      </Routes>
    </main>
    {/* Chamando o componente Footer */}
    <Footer/>






    </BrowserRouter>


     
    </>
  )
}

export default App
