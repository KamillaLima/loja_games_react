import axios from 'axios';


// callback : chamada de retorno 
//js executa as linhas por sequência

// await só é válido em funções async
//async converte o retorno para uma promise
//Promises são promessas que o js faz, então a função pode retornar algo ou não
/*Existem algumas formas de se trabalhar com processamento assíncrono (ou seja, Promises) em JavaScript: 
utilizando o método .then(), as palavras-chave async e await ou o objeto Promise e seus métodos.*/
const api = axios.create({
    baseURL: "https://lojagames-spring.onrender.com/"
})
//O axios fica responsável pelo nosso meio-campo entre as nossas requisições HTTP do backend com o frontend.
//Com ele nós podemos chamar os métodos HTTP(get,post,put,delete)


//funções assíncronas retornam uma promise.Essas promises podem conter um valor,caso a o método tenha um retorno de valor

export const buscar = async (url: string, setDados: Function) => {
    //url do caminho para a requisição que iremos fazer
    //SetDados : salvando os dados que forem retornados durante a chamada da requisição
    const resposta = await api.get(url)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    //Preciso passar o objeto que eu quero armazenar no meu banco
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
/*
  Vamos pensar em uma agencia dos correios : eu vou buscar a encomenda,vou pedir pro atendente a 
  encomenda,ele vai pedir pro estoquista ir la pegar ,o estoquista vai pegar e entregar pro atendente e ele irá me entregar
  a encomenda. O estoquista é a nossa controller no java ; O atendente são as nossas pages no React

*/

export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
}

export const deletar = async (url: string) => {
    await api.delete(url)
}