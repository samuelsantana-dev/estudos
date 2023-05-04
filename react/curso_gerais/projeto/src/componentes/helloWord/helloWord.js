import React from 'react'

//Pode ser retornado de 3 formas por uma arrow function ou por class ou dessa forma padrao

/* const HelloWord () => {return (
    <div>
        <h1> Hello Word</h1>
    </div>
) } pode ser
retornado dessa forma também*/

/* class HelloWord extends React.component { 
		render() {  return <h1> Hello Word </h1>; } 
}  */ 

const HelloWord = () => {
    return(
        <div>
            <h1>Hello Word</h1>
        </div>
    )
}

/*function HelloWord(){
    return (
    <div>
        <h1> Hello Word</h1>
    </div>
)
}*/


export default HelloWord