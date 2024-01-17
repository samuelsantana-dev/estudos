import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

//Adiantou todos os icones e nome em um lugar so para ficar mais facil a manutençao 
const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

//O id vai ficar paraa que possa mudar de um por um a cor dos estilos de cada um o key= significa chave, e o react pede chaves para quando se usa o metodo e para ficar dessa forma que esta aqui tem que ser um dado que nao se repete ai pode ficar dessa forma 
const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
          {network.icon /*Aqui chama o icone diretamente*/}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;