import { Avatar } from './avatar'
import { Comment } from './comment'
import Styles from './post.module.css'

export  function Post(){
    return(
        <article className={Styles.post}> 
            <header>
                <div className={Styles.author}>
                    <Avatar hasBorder
                     src="https://avatars.githubusercontent.com/u/104950258?v=4"
                      /> 
                
                    <div className={Styles.authorInfo}>
                            <strong>Samuel Santana</strong> 
                            <span>Web developer</span>
                    </div>
                </div>

                <time title='11 de maio as 00:13h' dateTime='2022-05-11'>Publicado há 1h </time>
            </header>


            <div className={Styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉{' '} <a href='#'>jane.design/doctorcare</a></p>

            <p>
                <a href='#'>#novoprojeto</a> {' '}
                <a href="#">#nlw</a>{' '}
                <a href="#">#rocketseat</a>
            </p>
            </div>

            <form className={Styles.commentForm}> 
                <strong>Deixe seu feedback</strong>
                
                <textarea 
                    placeholder='Digite um comentario'
                />

                <button className={Styles.submit}> Comentar</button>
            </form>

            <div className={Styles.commentList}>
            <Comment />
            <Comment />
              <Comment />
            </div>
          


        </article>
    )
}
