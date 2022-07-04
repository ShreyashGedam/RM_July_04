import { useEffect, useState } from "react"
import { useSelector , useDispatch } from "react-redux"
import { deleteData, fetchData } from "../redux/action"
import "./pages.css"

export const Home = () => {
    return(
        <div className="container">
            <Heading></Heading>
            <Data></Data>
        </div>
    )
}

const Heading = () => {
    return(
        <div className="heading">
                <p>id</p>
                <p>Country</p>
                <p>City</p>
                <p>Population</p>
                <p>Edit</p>
                <p>Delete</p>
            </div>      
    )
}

const Data = () => {

    const data = useSelector( store => store.homeData.data)
    const loading = useSelector( store => store.homeData.loading)    
    const dispatch = useDispatch()

    useEffect( () => {

        dispatch(fetchData())
    
    },[dispatch])

    const deleteDataHandle = (id) => {
        
        dispatch(deleteData(id))
    }

    return(
        <div>
           {loading && <div>...Loading</div>}
            {data.map( (item) => (
                <div className="data" key={item.id}>
                <p>{item.id}</p>
                <p>{item.country}</p>
                <p>{item.city}</p>
                <p>{item.population}</p>
                <p style={{cursor : 'pointer'}}>Edit</p>
                <p style={{cursor : 'pointer'}} onClick={() => deleteDataHandle(item.id)}>Delete</p>
            </div>
            ))}        
        </div>
    )
}