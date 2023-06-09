import { Header } from './componentes/Header'
import { Side_bar } from './componentes/Side_bar'
import { Post } from './componentes/Post'


//Estilos
import Style from'./App.module.css'
import './global.css'

//Avtar: { avatar: "", name: "", role: ""}
//Publish: Date
// Comment: String

const post = [
  {
      id: 0,

      author: {
        avatar_url_img: "https://avatars.githubusercontent.com/u/104950258?v=4",
        nome: "Samuel Santana",
        profissao:"Web developer"
      },
        content: [
        { type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: ' 👉 jane.design/doctorcare'},
        {type: 'link', content: '#novoprojeto'},
        {type: 'link', content: ' #nlw'},
        {type: 'link', content: '#rocketseat'}
        ],
        publishedAt: new Date('01/05/2023 20:00')
   },

   {
    id: 1,
    author: {
      avatar_url_img: "https://avatars.githubusercontent.com/u/104950258?v=4https://github.com/professorguanabara.png",
      nome: "Gustavo Guanabara",
      profissao:"Web developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: ' 👉 jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto'},
      {type: 'link', content: ' #nlw'},
      {type: 'link', content: '#rocketseat'}
      ],
      publishedAt: new Date('16/05/2023 22:00')
 }

  ]

function App() {

  return (
    <div>
      <Header />
      <div className={Style.wrapper}> 
          <aside> 
              <Side_bar />
          </aside>
          <main>
              { post.map(posts =>{
                return (
                  <Post 
                        key={posts.id}
                        author={posts.author}
                        content={posts.content}
                        publishedAt={posts.publishedAt}
                   />
                )})
              }    
          </main>
      </div>
    </div>
  )
}

export default App

