import axios from "axios"

export const actionTypes = {
    FETCH_DATA_REQUEST : "FETCH_DATA_REQUEST",
    FETCH_DATA_SUCCESS : "FETCH_DATA_SUCCESS",
    FETCH_DATA_FAILURE : "FETCH_DATA_FAILURE",
    ADD_DATA_REQUEST : "ADD_DATA_REQUEST",
    ADD_DATA_SUCCESS : "ADD_DATA_SUCCESS",
    ADD_DATA_FAILURE : "ADD_DATA_FAILURE",
    DELETE_DATA_REQUEST : "DELETE_DATA_REQUEST",
    DELETE_DATA_SUCCESS : "DELETE_DATA_SUCCESS",
    DELETE_DATA_FAILURE : "DELETE_DATA_FAILURE",
    EDIT_DATA_REQUEST : "EDIT_DATA_REQUEST"
} 

export const fetchDataRequest = () => {
    return {
        type : actionTypes.FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = (payload) => {
    return {
        type : actionTypes.FETCH_DATA_SUCCESS,
        payload
    }
} 

export const fetchDataFailure = () => {
    return {
        type : actionTypes.FETCH_DATA_FAILURE
    }
}

export const fetchData = () => (dispatch) => {

    const dataRequest = fetchDataRequest()
    dispatch(dataRequest)

    axios({
        url : "http://localhost:8000/city",
        method : "GET",
    })
    .then( (res) => {
        const dataSuccess = fetchDataSuccess(res.data)
        dispatch(dataSuccess)
    })
    .catch( (err) => {
        const dataFailure = fetchDataFailure()
        dispatch(dataFailure)
    })
}


// .................................................................................................

export const addDataRequest = () => {
    return {
        type : actionTypes.ADD_DATA_REQUEST    
    }
}

export const addDataSuccess = (payload) => {
    return {
        type : actionTypes.ADD_DATA_SUCCESS,
        payload
    }
}

export const addDataFailure = () => {
    return {
        type : actionTypes.ADD_DATA_FAILURE
    }
}

export const addData = (country,city,population) => dispatch => {

    dispatch(addDataRequest())

    axios({
        url : `http://localhost:8000/city`,
        method : "POST",
        data : {
            country : country,
            city : city,
            population
        }
    })
    .then( r => 
        // console.log(r)
        dispatch(addDataSuccess(r.data))
        )
    .catch( e => dispatch(addDataFailure()))
}


// .................................................................................................

const deleteDataRequest = () => {
    return {
        type : actionTypes.DELETE_DATA_REQUEST,
       
    }
}

const deleteDataSuccess = (payload) => {
    return {
        type : actionTypes.DELETE_DATA_SUCCESS,
        payload
    }
}

const deleteDataFailure = () => {
    return {
        type : actionTypes.DELETE_DATA_FAILURE,
        
    }
}

export const deleteData = (id) => (dispatch) => {
    
    const dataRequest = deleteDataRequest()
    dispatch(dataRequest)

    axios( {
        url : `http://localhost:8000/city/${id}`,
        method : "DELETE"
   
    })
    .then( () => {
        dispatch(fetchData())
    })
    .then ( (res) => {
        const dataSuccess = deleteDataSuccess(res.data)
        // console.log(res.data)
        dispatch(dataSuccess)
    })
    .catch( (err) => {
        const dataFAilure  = deleteDataFailure()
        dispatch(dataFAilure)
    })
}


// .................................................................................................


const editdataSuccess = (payload) => {
    return {
        type : actionTypes.DELETE_DATA_SUCCESS,
        payload
    }
}

