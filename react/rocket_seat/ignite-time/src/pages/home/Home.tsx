import { Play } from "phosphor-react";

//todos esses nomes se pegam la no style que esta na mesma pasta que esse arquivo
import { HomeContainer, PararCicloAtual, StartButton } from './style.ts'
import { createContext, useEffect, useState } from "react";
//import { differenceInSeconds } from "date-fns";
import { NewCycleForm } from "./NewCycleForm/NewCycleForm.tsx";
import { Countdown } from "./Countdown/Countdown.tsx";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

interface CyclesContextType {
    activeCycle: Ciclo | undefined
    atividadeCicloId: string | null
    //Signifca que essa funçao nao tem retorno nenhum
    markCycleAsFinished: () => void
    segundoJaRegistrado: number
}

//Necessario fazer exportaçoes 
 export const CyclesContext = createContext({} as CyclesContextType)

export function Home(){

    //Sempre iniciar suas aplicaçoes com o mesmo valor que vai manusear ao olongo do projeto
    const [ cicloAtual, setCyclo] = useState<Ciclo[]>([])    
    const [atividadeCicloId, novaAtividadeCicloId] = useState<string | null>(null)
    const [segundoJaRegistrado, setSegundoJaRegistrado] = useState(0); 

    const activeCycle = cicloAtual.find((valor) => valor.id == atividadeCicloId)

     //Começando ja com ('') ja reconhece que o valor vai ser string diretamente
     const novoCicloForm = useForm<novoCicloFormData>({
        resolver: zodResolver(novoFormularioDeValidaçaoCiclo),

        defaultValues: {
            task: '', 
            //Sempre tomar cuidado com letras maiuscula e minusculas porque isso faz total diferença e talvez nao conecte por conta disso 
            minutes: 0
        }
    })

    const { handleSubmit, watch, reset} = novoCicloForm


    function markCycleAsFinished(){
        setCyclo((state) => state.map(value => {
            //Sempre usar o parametro como organizar e usar como se fosse cada valor do array
            if(value.id == atividadeCicloId){
                return {...value, finalizarData: new Date() }
            } else {
                return value
            }
        }))
    }

   function novoCiclo(data: novoCicloFormData){
        const id = String(new Date().getTime())

         const newCycle: Ciclo = {
            id,
            task: data.task,
            minutes: data.minutes,
            startDate: new Date()
             }
            //Vai coiar o ciclo atual de qualquer um que estiver
            setCyclo((state) =>  [...state, newCycle])
            novaAtividadeCicloId(id)
            setSegundoJaRegistrado(0)

            //Vai limpar todos os dados do formularios 
            reset()
        }

    function interromperCiclo() {
        setCyclo( state => state.map(value => {
            //Sempre usar o parametro como organizar e usar como se fosse cada valor do array
            if(value.id == atividadeCicloId){
                return {...value, interromperData: new Date() }
            } else {
                return value
            }
        }))
    }

    //Serve para nao ter mais nenhum ciclo ativo 
    novaAtividadeCicloId(null)
         
    //Watch quer dizer quer observar
    //Aqui vai ficar o valor do input automaticamente e com a string dentro do watch("task") localiza qual é o input que vai observar 
    const taskValue = watch('task')
    //Aqui fica o processo para o botao ser desabilitado
    const desabilitandoBotao = !taskValue

        return(
            <HomeContainer>
            <form  onSubmit={handleSubmit(novoCiclo)} action="">
            {/*Dessa forma se chama uma funçao, qeu chama outra funçao para dar funcionalidade */}
                    <CyclesContext.Provider 
                    value={{ activeCycle, atividadeCicloId, markCycleAsFinished, segundoJaRegistrado }}
                    >
                        {/*Pega cada uma das propriedades e traz ela pra principal da formaProvider, aí fica disponivel para todas as propriedades serem acessadas */}
                        <FormProvider {...NewCycleForm}>
                            <NewCycleForm />
                        </FormProvider>
                        <Countdown />
                    </CyclesContext.Provider>

                    { activeCycle ? (
                        <PararCicloAtual onClick={interromperCiclo} type="button">
                            <Play size={24}/>
                            Interromper
                        </PararCicloAtual>
                    ) : (
                    <StartButton type="submit" disabled={desabilitandoBotao} >
                        <Play size={24}/>
                        Começar
                    </StartButton>)
                    }   
            </form>
            </HomeContainer>
        )
}

/* disabled={!value} | pode ser feito de outras formas tambem | Quando nao tiver nada escrito nao pode enviar mas quando ja tiver algo escriot o botao vai ficar cliacvel*/
    
    
  
