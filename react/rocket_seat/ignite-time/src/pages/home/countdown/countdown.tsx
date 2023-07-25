import { useContext, useEffect, useState } from "react";
import { CouwtdowContainer, Separator } from "./style";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../Home";

export function Countdown(){
  const { activeCycle, atividadeCicloId, markCycleAsFinished} = useContext(CyclesContext)
  const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0;

  useEffect(()=>{
    let interval: number;
    
    //So quero fazer a reduçao do coutdown se tiuver um ciclo ativo
    //Vai fazer a reduçao de um ciclo ativo
    if(activeCycle){
       interval = setInterval(() => {
        const secondsDiference = differenceInSeconds(new Date(), activeCycle.startDate)

        if(secondsDiference >= totalSeconds){
            markCycleAsFinished()
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

}, [activeCycle, totalSeconds, atividadeCicloId, markCycleAsFinished ])

    const currentSeconds = activeCycle ? totalSeconds - segundoJaRegistrado : 0

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondAmount = currentSeconds % 60;
    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondAmount).padStart(2, '0');     

    useEffect(() => {
        if(activeCycle){
            document.title = ` ${minutes}:${seconds}`
        }
    }, [minutes,seconds, activeCycle])



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
