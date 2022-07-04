import { useState } from "react"
import { useDispatch } from "react-redux"
import { addData } from "../redux/action"
import "./pages.css"

export const Country = () => {

    const [city,setCity] = useState("")
    const [country,setCountry] = useState('')
    const [population,setPopulation] = useState(0)

    const dispatch = useDispatch()

    const handleAdd = (country,city,population) => {

        if(city.length == 0 && country.length == 0 && population == 0)
        {
            alert("Enter all the Details")
        }
        else
        {
            // console.log(country,city,population)
            dispatch(addData(country,city,population))
        }   
    }

    return(
        <div className="addMain">
            <h2 >Add City</h2>
                <div>
                <span>ADD COUNTRY</span>
                <input type={"text"} onChange={ e => setCountry(e.target.value)} ></input>
                </div>
                <div><span>ADD CITY</span>
                <input type={"text"} onChange={ e => setCity(e.target.value)} ></input>
                </div>
                <div><span>ADD POPULATION</span>
                <input type={'number'} onChange={ e => setPopulation(e.target.value)} ></input>
                </div>
                <input type={'submit'} onClick={ () => handleAdd(country,city,population)}></input>                
        </div>
    )
}