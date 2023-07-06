import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";

import '../styles/components/MainContent.sass'

export function MainContent(){
    return(
        <main id="main-content">
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
      </main>
    )
}