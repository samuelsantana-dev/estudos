import Style from "./style.module.css"

import IginiteLogo from "../assets/ignite-logo.svg"


export function Header() {
    return (
      <div className={Style.header}>
        <img src={IginiteLogo} alt="Logo da ignite" />
        <h3>ignite Feed</h3>
       
        
      </div>
    )
  }

