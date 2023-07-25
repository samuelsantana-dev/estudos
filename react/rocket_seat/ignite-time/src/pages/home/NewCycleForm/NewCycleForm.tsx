import { FormContainer, Minutes, TaskInput } from "./style";

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'


export function NewCycleForm(){


    //Integrando o formulario com o typscript e faz a conversao usando o typeof da variavel javascript pro typscript
    type novoCicloFormData = zod.infer<typeof novoFormularioDeValidaçaoCiclo>

    //Aqui estao os meus parametros do formualario 
    const novoFormularioDeValidaçaoCiclo = zod.object({
        task: zod.string()
        .min(1, 'informe a tarefa'),
        minutes: zod.number()
        .min(1, 'Informe um numero maior do que 5 minutos')
        .max(60, 'Informe um numero menor que 0 minutos')
    })

    //Começando ja com ('') ja reconhece que o valor vai ser string diretamente
    const {register, handleSubmit, watch, reset} = useForm<novoCicloFormData>({
        resolver: zodResolver(novoFormularioDeValidaçaoCiclo),

        defaultValues: {
            task: '', 
            //Sempre tomar cuidado com letras maiuscula e minusculas porque isso faz total diferença e talvez nao conecte por conta disso 
            minutes: 0
        }
    })

 

    return(
            <FormContainer>
                <label htmlFor="task">Vou trabalhar em</label>
                <TaskInput 
                id="task" 
                placeholder="Qual vai ser a sua tarefa ?" 
                // o !! vai converter se tiver para true ou para false no caso um bolean
                //Impede de digitar algo nos inputs
                disabled={!!activeCycle}
                //Mostra as listas as sugestoes que aparece logo abaixo
                list="sugestoes"
                //Essa linha é para retornar todos os metodos do register de uma vez diretamente
                {...register('task')}
                />

                <datalist id="sugestoes">
                    <option>Projeto 1</option>
                    <option>Projeto 2</option>
                    <option>Projeto 3</option>
                    <option>Projeto 4</option>
                    <option>Projeto 5</option>
                </datalist>

                <label htmlFor="minutes">durante</label>

                <Minutes
                 type="number"
                 id="minutes" 
                 placeholder="00" 
                 // o !! vai converter se tiver para true ou para false no caso um bolean
                 //Impede de digitar algo nos inputs
                 disabled={!!activeCycle}
                 step={5}
                 min={1}
                 max={60}
                //Essa linha é para retornar todos os metodos do register de uma vez diretamente nao precisou mais ser obrigatorio o name porque ja substituiu automaticamente
                 {...register('minutes', {valueAsNumber: true})}
                  />

                <span>minutos.</span>
            </FormContainer>
           
    )
}