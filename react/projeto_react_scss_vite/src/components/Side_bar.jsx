import Avatar from '../assets/pessoal.jpg'

import '../styles/components/side_bar.sass'

export function Side_bar(){
    return(
        <aside id="sidebar">
        <img src={Avatar} alt="Matheus Battisti" />

        <p className="title">Desenvolvedor</p>

           

        <a href="#" className="btn">
          Download currículo
        </a>
      </aside>
    )
}