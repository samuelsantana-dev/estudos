import { Header } from "../../componentes/header/Header"
import { Outlet } from "react-router-dom"
import { LayoutContainer } from "./style"

export function DefaultLayout(){
    return(
        <div>
            <LayoutContainer>
                <Header />
                <Outlet />
            </LayoutContainer>
        </div>
    )
}