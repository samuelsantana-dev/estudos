import { useState } from 'react'

function UseState() {
  const [state, setstate] = useState(0)
  
  function Adicionar(){
      //setstate( state + 1  ) OU
      setstate(props => props + 1)
  }

  return (
    <>
        <h1>{state}</h1>
        <button onClick={Adicionar}>Adicionar</button>
    </>
  )
}

export default UseState