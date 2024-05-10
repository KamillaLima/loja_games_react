import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { buscar,deletar } from '../../../service/Service'
import Categoria from '../../../model/Categoria'





function DeletarCategoria() {

    const [categorias, setCategoria] = useState<Categoria>({} as Categoria);// Iniciamos um objeto vazio da Model Categoria

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>() // Aqui, pegamos da URL um parametro/variavel chamado ID. Veja a rota de editarTema no APP.tsx 
    // useParams = Esse hook serve para pegarmos parametros que veem na url do FRONT
    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        }
        catch (error: any) {
            console.log(error)
        }
    }
    
    
    
    // Função de Efeito Colateral - Sempre que o ID for montado pelo React dentro do Componente,
    //  uma função é disparada, iremos verificar se o ID é diferente de undefined, se sim, quer dizer que iremos atualizar um Tema, 
    // por isso, precisamos chamar a função que irá fazer uma requisição ao back para carregar os dados do Tema em tela
    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id) // esse ID, é o que vem pela a URL da rota do Front End
        }
    }, [id])
    
    function retornar() {
        navigate("/categorias")
    }
    
    
    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`)
            alert("REMOVIDO COM SUCESSO! ")
        } catch (error :any) {
            console.log(error)
        }
    
        retornar()
    }
    



    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categorias.tipo}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarCategoria} >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria