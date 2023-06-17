//import { format, formatDistanceToNow } from 'date-fns';

import { FormEvent, ChangeEvent, useState, InvalidEvent } from 'react';
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import Styles from './post.module.css'

interface Author {
    nome: string;
    profissao: string;
    avatar_url_img : string;
}

interface Content {
    type: string;
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export  function Post({author ,content}: PostProps){

    const currentDate = new Date();
    //Nova forma de usar o date ver outros exemplos tambem
    const publishDateFormat = new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    }).format(currentDate)

    //Vai retornar um novo estado
    const [comments, setComment] = useState([
        //Aqui esta a quantidade de div que eu vou ter
        'Parabens, excelente serviço!'
    ]) 

    //Vai retornar o valor do meu input dentro de valueCommentText
    const  [newCommentText, valueCommentText] = useState('') 

    //Pega o valor do textArea
    function handleCreateNewComment(event: ChangeEvent<HTMLTextAreaElement>){
        //event.target.setCustomValidty('')
        valueCommentText(event.target.value)
    }

    function enviarComentario(event: FormEvent){
        //Vai tira o padrao do html de recarregar a pagina
        event.preventDefault()


        //Ele vai primeiro ler o array ja escrito e depois vai sempre incrementar mais um
        setComment([...comments, newCommentText])

        //Limpar o valor do txtAREA
        valueCommentText('')
    }

    function novoComentarioInvalido(event: InvalidEvent<HTMLTextAreaElement>){
            event.target.setCustomValidity("Tem que preencher este campo para enviar a mensagem")
            
    }    

    function deleteComment(comment: string){
        const listaSemComentarioApagado = comments.filter(value => {
            return value != comment
        })

        setComment(listaSemComentarioApagado)
    }

    //Aqui foi usado o clean Code
    const enquantoNovoComentarioEstaVazio = newCommentText.length == 0

    return(
        <article className={Styles.post}> 
            <header>
                <div className={Styles.author}>
                    <Avatar hasBorder
                     src="https://avatars.githubusercontent.com/u/104950258?v=4"
                      /> 
                
                    <div className={Styles.authorInfo}>
                            <strong>{author.nome}</strong> 
                            <span>{author.profissao}</span>
                    </div>
                </div>
             
                <time title={publishDateFormat} dateTime={currentDate.toISOString()}>
                     {publishDateFormat}
                 </time>
            </header>

            {/**Faz a diferença de OU para diferencia um paragrafo de link */}
            <div className={Styles.content}>
                {content.map(item => {
                    if(item.type == "paragraph"){
                        return <p key={item.content}>{item.content}</p>
                    } else if(item.type == 'link'){
                        return <p key={item.content}><a href='#'>{item.content}</a></p>
                    }
                })}
    
            </div>

            <form onSubmit={enviarComentario} className={Styles.commentForm}> 
                <strong>Deixe seu feedback</strong>
                
                {/**Chama a funçao e guarda o valor para poder fazer as alteraçoes.
                 * O name="" ele é para ser um localizado(tipo id) do textarea
                 */}
                <textarea 
                    name='comment'
                    placeholder='Digite um comentario'
                    value={newCommentText}
                    onInvalid={novoComentarioInvalido}
                    onChange={handleCreateNewComment}
                    required
                />

                <button type='submit' className={Styles.submit} disabled={enquantoNovoComentarioEstaVazio}>
                    Enviar
                </button>
            </form>

            <div className={Styles.commentList}>
                {/*Faz com que seja armazenado e repetido os comentarios */}
                    {comments.map(value=>{
                        return <Comment key={value} content={value} deleteComment={deleteComment} />
                    })}
            </div>
          


        </article>
    )
}


       
