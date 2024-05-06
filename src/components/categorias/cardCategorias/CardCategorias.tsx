import React from 'react'
import { Link } from 'react-router-dom'

interface CardCategoriaProps {
}

function CardTemas({ }: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{ }</p>
      <div className="flex">

        <button>Editar</button>
        <button>Deletar</button>

      </div>
    </div>
  )
}

export default CardTemas