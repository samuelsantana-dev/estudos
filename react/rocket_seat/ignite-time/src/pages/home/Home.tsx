import { Play } from "phosphor-react";


//todos esses nomes se pegam la no style que esta na mesma pasta que esse arquivo
import { HomeContainer, PararCicloAtual } from './style.ts'
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";
import { NewCycleForm } from "./NewCycleForm/NewCycleForm.tsx";
import { Countdown } from "./Countdown/Countdown.tsx";

 //Vai guardar os dados em que cada um vai receber
 interface Ciclo {
    id: string, 
    task: string,
    minutes: number,
    startDate: Date,
    // ?: deixa essa como opcional
    interromperData?: Date,
    finalizarData?: Date
}

export function Home(){

    //Sempre iniciar suas aplicaçoes com o mesmo valor que vai manusear ao olongo do projeto
    const [ cicloAtual, setCyclo] = useState<Ciclo[]>([])
    const [atividadeCicloId, novaAtividadeCicloId] = useState<string | null>(null)
   


    const activeCycle = cicloAtual.find((valor) => valor.id == atividadeCicloId)
    const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0;


    const newCycle: Ciclo = {
        id,
        task: data.task,
        minutes: data.minutes,
        startDate: new Date()
        
//Vai coiar o ciclo atual de qualquer um que estiver
setCyclo((state) =>  [...state, newCycle])
novaAtividadeCicloId(id)
setSegundoJaRegistrado(0)

//Vai limpar todos os dados do formularios 
reset()

}


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

    function interromperCiclo() {
        setCyclo( state => state.map(value => {
            //Sempre usar o parametro como organizar e usar como se fosse cada valor do array
            if(value.id == atividadeCicloId){
                return {...value, interromperData: new Date() }
            } else {
                return value
            }
        }))

         //Serve para nao ter mais nenhum ciclo ativo 
         novaAtividadeCicloId(null)
    }
    
  

   //Watch quer dizer quer observar
   //Aqui vai ficar o valor do input automaticamente e com a string dentro do watch("task") localiza qual é o input que vai observar 
   const taskValue = watch('task')
   //Aqui fica o processo para o botao ser desabilitado
   const desabilitandoBotao = !taskValue

   console.log(cicloAtual)
   
    return(
        <HomeContainer>
        <form  onSubmit={handleSubmit(novoCiclo)}>
        {/*Dessa forma se chama uma funçao, qeu chama outra funçao para dar funcionalidade */}
                <NewCycleForm />
                <Countdown  activeCycle={activeCycle}/>

                { activeCycle ? (
                    <PararCicloAtual onClick={interromperCiclo} type="button">
                        <Play size={24}/>
                        Interromper
                    </PararCicloAtual>
                ) : (
                 <StartButton type="submit" disabled={desabilitandoBotao}>
                    <Play size={24}/>
                    Começar
                 </StartButton>)
                 }   
         </form>
        </HomeContainer>
    )
}
}


/* disabled={!value} | pode ser feito de outras formas tambem | Quando nao tiver nada escrito nao pode enviar mas quando ja tiver algo escriot o botao vai ficar cliacvel*/