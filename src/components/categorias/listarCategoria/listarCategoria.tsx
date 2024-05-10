import { useEffect, useState } from "react";
import Categoria from "../../../model/Categoria";
import { useNavigate } from "react-router-dom";
import { buscar } from "../../../service/Service";
import {Oval} from 'react-loader-spinner'
import CardCategorias from "../cardCategorias/CardCategorias";


function ListarCategorias() {

  //Usada para armazena os dados que foram trazidos pela Service
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  //Indicamos que a categorias é um Array de Objetos de Categorias, e a iniciamos com um array vazio


  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias)
      // Não esquecer que a URL deve ser a mesma do swagger ou vai dar b.o
    }
    catch (err: any) {
      console.log(err.toString());
    }
  }

  // Função de Efeito Colateral - Sempre que o array de cateogiras for carregado em tela, e o seu tamanho for acessado pelo React,
  //  uma função é disparada, chamando a função que irá fazer uma requisição ao back para carregar as categorias em tela
  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])
  const navigate = useNavigate();


  return (

    <>
      {categorias.length === 0 && (
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      
      <div className="flex justify-center w-full my-4">
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full m-12">
            {/* MAP é o nosso for aqui ,entao ele vai varrer a lista de categorias que foi puxada no metodo buscarCategorias*/ }
            
            {
              categorias.map((itemCategoria)=>(
                <>
                  <CardCategorias key={itemCategoria.id} categoria={itemCategoria}/>
                </>
              ))
            }
          </div>
       
      </div>


    </>
  );
}

export default ListarCategorias;