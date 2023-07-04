import { Play } from "phosphor-react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'

//todos esses nomes se pegam la no style que esta na mesma pasta que esse arquivo
import { HomeContainer, FormContainer, CouwtdowContainer, Separator, StartButton, TaskInput,Minutes } from './style.ts'

//Aqui estao os meus parametros do formualario 
const novoFormularioDeValidaçaoCiclo = zod.object({
    task: zod.string()
    .min(1, 'informe a tarefa'),

    minutes: zod.number()
    .min(5, 'Informe um numero maior do que 5 minutos')
    .max(60, 'Informe um numero menor que 0 minutos')
})

//Integrando o formulario com o typscript e faz a conversao usando o typeof da variavel javascript pro typscript
type novoCicloFormData = zod.infer<typeof novoFormularioDeValidaçaoCiclo>

export function Home(){
    //Começando ja com ('') ja reconhece que o valor vai ser string diretamente
   const {register, handleSubmit, watch, reset} = useForm<novoCicloFormData>({
    resolver: zodResolver(novoFormularioDeValidaçaoCiclo),
    defaultValues: {
        task: '', 
        //Sempre tomar cuidado com letras maiuscula e minusculas porque isso faz total diferença e talvez nao conecte por conta disso 
        minutes: 0
    }
   })

   function novoCiclo(data: novoCicloFormData){
        //Vai limpar todos os dados do formularios 
        console.log(data)
        reset()
   }    

   //Watch quer dizer quer observar
   //Aqui vai ficar o valor do input automaticamente e com a string dentro do watch("task") localiza qual é o input que vai observar 
   const taskValue = watch('task')
   //Aqui fica o processo para o botao ser desabilitado
   const desabilitandoBotao = !taskValue

    return(
        <HomeContainer>
            {/*Dessa forma se chama uma funçao, qeu chama outra funçao para dar funcionalidade */}
            <form  onSubmit={handleSubmit(novoCiclo)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                    id="task" 
                    placeholder="Qual vai ser a sua tarefa ?" 
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
                     step={5}
                     min={5}
                     max={60}
                    //Essa linha é para retornar todos os metodos do register de uma vez diretamente nao precisou mais ser obrigatorio o name porque ja substituiu automaticamente
                     {...register('minutes', {valueAsNumber: true})}
                      />

                    <span>minutos.</span>
                </FormContainer>

                <CouwtdowContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CouwtdowContainer>

                {/* disabled={!value} | pode ser feito de outras formas tambem | Quando nao tiver nada escrito nao pode enviar mas quando ja tiver algo escriot o botao vai ficar cliacvel  */}
                <StartButton type="submit" disabled={desabilitandoBotao}>
                    <Play size={24}/>
                    Começar
                </StartButton>
            </form>
        </HomeContainer>
    )
}