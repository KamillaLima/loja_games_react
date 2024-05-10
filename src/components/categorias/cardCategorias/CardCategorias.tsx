import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../model/Categoria'

//Criamos uma interface  que tem como propriedade uma categoria
interface CardCategoriaProps {
  categoria :  Categoria 
}

function CardCategorias({categoria}: CardCategoriaProps) {
  // Definimos que a função CardCategorias recebe uma propriedade chamada categoria e sua estrutura segue a Interface CardCategoriaProps
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.tipo}</p>
      <div className="flex">
                {/* Essa rota envia o usuário para o formulário de edição, passando em sua url, o id do Tema que vai ser editado */}
                <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                {/* Essa rota envia o usuário para o formulário de exclusão, passando em sua url, o id do Tema que vai ser excluído */}
                <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>

            </div>
    </div>
  )
}

export default CardCategorias