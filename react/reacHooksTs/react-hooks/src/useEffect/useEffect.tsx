import { useEffect, useState } from 'react'


function FunctuionUseEffect() {
  //Vai receber uma lista de string
  const [list, novaLista] = useState<string[]>([])

  const [filtro, novoFiltro] = useState('')

  function avisarApi(){
    console.log('Api avisada')
  }
  
  //Metodo useEffect ele monitora tudo 
  useEffect(() => {
      avisarApi()
  }, [list])

  useEffect(() => {
    fetch('https://api.github.com/users/Samuel-Santana109/repos')
      .then(resposta => resposta.json())
      .then(value => {
        novaLista(value.map((item: any) => item.full_name))
      })
  }, [])

    //Adiciona a lista
    function addToDoList(){
            // Vai retornar minha lista atual com um novo item adicionado  
            novaLista(item => [...item, 'Novo Item'])
    } 
    
    //É como se fosse um mecanismo de busca
    //É para ele pesquisar cada palavra da minha list que eu difitar no meu input 
    const filterList = list.filter(value => value.includes(filtro))

  return (
    <div>

            <input 
            type='text' 
            onChange={e => novoFiltro(e.target.value)}
             />

            <ul>
              {list.map(item => <li>{item}</li>)}
            </ul>
              <hr></hr>
              {/*Aqui vai aparecer a sua pesquisa  */}
            <ul>
              {filterList.map(item => <li>{item}</li>)}
            </ul>

            <button type='submit' onClick={addToDoList}>Adicionar a lista</button>
    </div>
  )
}

export default FunctuionUseEffect
