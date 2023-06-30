import { Play } from "phosphor-react";
import { useForm, SubmitHandler } from "react-hook-form"

//todos esses nomes se pegam la no style que esta na mesma pasta que esse arquivo
import { HomeContainer, FormContainer, CouwtdowContainer, Separator, StartButton, TaskInput,Minutes } from './style.ts'


export function Home(){
    //Começando ja com ('') ja reconhece que o valor vai ser string diretamente
   const {register, handleSubmit, watch} = useForm()

   function novoCiclo(data: any){
        console.log(data)
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