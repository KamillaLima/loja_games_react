import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { cadastrar } from '../../../service/Service';
import Categoria from '../../../model/Categoria';

function FormCategoria() {

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const navigate = useNavigate();


  // Função que através do evento de mudança de um Input, captura o que foi digitado e através da função setCategoria() atualiza o estado/objeto de Categoria
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

    setCategoria({       // atualiza o objeto/estado Tema com os dados digitados no input
      ...categoria,    //  o spread operator (...) espalha os atributos do objeto para facilitar a atualização
      [e.target.name]: e.target.value // O lado esquerdo, representa qual input chamou essa função e qual atributo do Objeto Tema que será acessado, a parte direita pega o valor digitado
    })
  }


  async function cadastroEdicaoCategoria(e:ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      cadastrar(`/categorias`, categoria, setCategoria);
      alert("CADASTRO COM SUCESSO")
    } catch (error: any) {
      console.log(error)
    } retornar();
  }


  function retornar() {
    navigate("/categorias")
  }
  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        Cadastro de categoria
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={cadastroEdicaoCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="tipo">Tipo da categoria</label>
          <input
            type="text"
            placeholder="tipo"
            name='tipo'
            value={categoria.tipo}
            className="border-2 border-slate-700 rounded p-2"
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;