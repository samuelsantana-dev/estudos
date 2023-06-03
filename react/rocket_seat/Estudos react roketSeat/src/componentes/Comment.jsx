import { useState } from 'react';
import { Avatar } from './avatar'
import Style from './comment.module.css'
import { FaBeer } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';


//Destruturaçao em objetos {}
export function Comment({content, deleteComment}){

    const [valorLikeAtual, novoValorLike] = useState(0)

    function handleDeleteComment(){
        deleteComment(content)
    }

    function Likes(){
        novoValorLike((state) => {
            return state + 1
        })
       // novoValorLike(valorLikeAtual + 1)
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
                            <FaBeer />
                        </button>
                    </header>
                    <p>{content}</p>

                </div>
                
                <footer>
                    <button onClick={Likes}> 
                        <FaThumbsUp /> Aplaudr  <span>{valorLikeAtual}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}