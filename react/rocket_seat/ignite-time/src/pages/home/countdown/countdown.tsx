import { useEffect, useState } from "react";
import { CouwtdowContainer, Separator } from "./style";
import { differenceInSeconds } from "date-fns";

interface CountdownProps {
  activeCycle: any
}


export function Countdown({ activeCycle }: CountdownProps){
  const [segundoJaRegistrado, setSegundoJaRegistrado] = useState(0); //useEffect(0)
  

  function novoCiclo(data: novoCicloFormData){
    const id = String(new Date().getTime())
  
    

  useEffect(()=>{
    let interval: number;

    //So quero fazer a reduçao do coutdown se tiuver um ciclo ativo
    //Vai fazer a reduçao de um ciclo ativo
    if(activeCycle){
       interval = setInterval(() => {
        const secondsDiference = differenceInSeconds(new Date(), activeCycle.startDate)

        if(secondsDiference >= totalSeconds){
            setCyclo(state => state.map(value => {
                //Sempre usar o parametro como organizar e usar como se fosse cada valor do array
                if(value.id == atividadeCicloId){
                    return {...value, finalizarData: new Date() }
                } else {
                    return value
                }
            }))
            
            setSegundoJaRegistrado(segundoJaRegistrado)
            clearInterval(interval)
        } else {
            setSegundoJaRegistrado(secondsDiference)
          }
        }, 1000)
    }

    return () => {
        //Limpar intervalo
        clearInterval(interval)
    }

}, [activeCycle, totalSeconds, cicloAtual])




  return(
    <CouwtdowContainer>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>

        <Separator>:</Separator>

        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
    </CouwtdowContainer>
  )
}
