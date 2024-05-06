import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Navbar () {
    let navigate = useNavigate()

    return(
        <div className=" flex flex-row  bg-red-400 w-full justify-around">
             <Link to='/home' className='text-2xl font-bold '>Loja de games</Link>
             <Link to='/cadastroCategoria' className='text-2xl '>Cadastrar</Link>
             <Link to='/categorias' className='text-2xl '>Listar</Link>
        </div>
    )
}

export default Navbar;