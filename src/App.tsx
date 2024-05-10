
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../src/components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import ListaCategorias from './components/categorias/listarCategoria/listarCategoria'
import FormularioCategoria from './components/categorias/FormCategoria/FormCategoria'
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
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
        <Footer/>
      </BrowserRouter>


    </>
  )
}

export default App;
/*<BrowserRouter> - O componente BrowserRouter é importado da biblioteca React Router DOM e é usado para envolver todo o conteúdo que precisa de roteamento.
<Routes> - O componente Routes é importado da biblioteca React Router DOM e é usado para definir as rotas do aplicativo.
<Route path="/" element={<Home />} /> - Uma rota que é definida usando o componente Route. O caminho da rota é definido como '/' (que representa a página inicial do aplicativo) e o elemento a ser renderizado é definido como <Home /> (o componente que representa a página inicial).
<Route path="/login" element={<Login />} /> - Uma rota que é definida usando o componente Route. O caminho da rota é definido como '/login' e o elemento a ser renderizado é definido como <Login /> (o componente que representa a página de login).
<Route path="/home" element={<Home />} /> - Uma rota que é definida usando o componente Route. O caminho da rota é definido como '/home' e o elemento a ser renderizado é definido como <Home /> (o componente que representa a página inicial).**/ 