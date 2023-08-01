// Criando um contexto
import React from "react";
import { useContext } from "react";

const MyContext = React.createContext();

// Componente que fornece o valor do contexto
export function MyProvider({ children }) {
  const sharedValue = "Este é um valor compartilhado";

  return (
    <MyContext.Provider value={sharedValue}>
      {children}
    </MyContext.Provider>
  );
}

// Componente funcional que consome o valor do contexto
 export function MyComponent() {
  const sharedValue = React.useContext(MyContext);

  return <div>{sharedValue}</div>;
}


export function UseContext(){
    return(
        <div>
            <MyProvider>
                <MyComponent />
            </MyProvider>
        </div>
    )
}
