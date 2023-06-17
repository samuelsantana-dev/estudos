import React from "react"
import Style from "./style.module.css"

import IginiteLogo from "../assets/ignite-logo.svg"

export function Header(props) {
    return (
      <div className={Style.header}>
        <img src={IginiteLogo} alt="Logo da ignite" />
        <h3>ignite Feed</h3>
       
        
      </div>
    )
  }

  //<h1 className={Style.h1}> {props.titulo} </h1>