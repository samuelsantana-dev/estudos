//import { format, formatDistanceToNow } from 'date-fns';

import { useState } from 'react';
import { Avatar } from './avatar'
import { Comment } from './comment'
import Styles from './post.module.css'

export  function Post({author, publishedAt, content}){

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
    function handleCreateNewComment(){
        valueCommentText(event.target.value)
    }

    function enviarComentario(){
        //Vai tira o padrao do html de recarregar a pagina
        event.preventDefault()


        //Ele vai primeiro ler o array ja escrito e depois vai sempre incrementar mais um
        setComment([...comments, newCommentText])

        //Limpar o valor do txtAREA
        valueCommentText('')
    }




   
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


            <div className={Styles.content}>

                {content.map(item => {
                    if(item.type == "paragraph"){
                        return <p>{item.content}</p>
                    } else if(item.type == 'link'){
                        return <p><a href='#'>{item.content}</a></p>
                    }
                })}
    
            </div>

            <form onSubmit={enviarComentario} className={Styles.commentForm}> 
                <strong>Deixe seu feedback</strong>
                
                <textarea 
                    name='comment'
                    placeholder='Digite um comentario'
                    value={newCommentText}
                    onChange={handleCreateNewComment}
                />

                <button type='submit' className={Styles.submit}>Enviar</button>
            </form>

            <div className={Styles.commentList}>
                    {comments.map(value=>{
                        return <Comment content={value} />
                    })}
            </div>
          


        </article>
    )
}


       
  /*  Jeito antigfo
  
  const publishDateFormat = format(publishedAt, "a 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR, // Utilize o localizador corretamente
      });
      
      const currentDate = new Date();

      
   const  publishedDataPost = formatDistanceToNow(publishedAt, {
    locale:ptBR,
    addSuffix: true
   }) 
  */