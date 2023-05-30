import { Avatar } from './avatar'
import Style from './comment.module.css'

//Destruturaçao em objetos {}
export function Comment({content, deleteComment}){

    function handleDeleteComment(){
        deleteComment(content)
    }


    return(
        <div className={Style.comment}>
            <Avatar src='https://github.com/professorguanabara.png' />
            
            <div className={Style.commentBox}>
                <div className={Style.commentContent}>
                    <header>
                        <div className={Style.authorAndTime}>
                            <strong>Samuel Santana</strong>
                            <time title='11 de maio as 00:13h' dateTime='2022-05-11'>Publicado há 1h </time>
                        </div>

                        <button onClick={handleDeleteComment}  title='Deletar Comentario' >
                            Deletar
                        </button>
                    </header>
                    <p>{content}</p>

                </div>
                <footer>
                    <button> 
                        curti <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}