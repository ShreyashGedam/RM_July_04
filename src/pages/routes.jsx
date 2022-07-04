import {  Route, Routes } from "react-router-dom"
import { City } from "./city"
import { Country } from "./country"

import { Home } from "./main"

export const Allroutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/city" element={<City></City>}></Route>
                <Route path="/country" element={<Country></Country>}></Route>
                
            </Routes>
        </div>
    )
}