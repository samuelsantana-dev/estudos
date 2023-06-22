import { Route, Routes  } from "react-router-dom"
import {Home} from "../src/pages/Home"
import { History } from "../src/pages/History"
import { DefaultLayout } from "./layout/defautlLayouts"


export function Router(){
    return(
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/History" element={<History />} />
                </Route>  
            </Routes>
    )
}

//https://reactrouter.com/en/6.13.0/components/routes

