import { Play } from "phosphor-react";

//todos esses nomes se pegam la no style que esta na mesma pasta que esse arquivo
import { HomeContainer, FormContainer, CouwtdowContainer, Separator, StartButton, TaskInput,Minutes } from './style.ts'


export function Home(){
    return(
        <HomeContainer>
            <form >
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                    id="task" 
                    placeholder="Qual vai ser a sua tarefa ?" 
                    list="sugestoes"
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

                <StartButton type="submit" disabled>
                    <Play size={24}/>
                    Começar
                </StartButton>
            </form>
        </HomeContainer>
    )
}