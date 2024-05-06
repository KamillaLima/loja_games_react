
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../src/components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import ListaCategorias from './components/categorias/listaCategoria/listaCategoria'
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria'
import DeletarCategoria  from './components/categorias/deletarCategoria/DeletarCategoria';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastroCategoria" element = {<FormularioCategoria/>} />
              <Route path="/categorias" element={<ListaCategorias/>}  />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletaCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
        <Footer/>
      </BrowserRouter>


    </>
  )
}

export default App;
