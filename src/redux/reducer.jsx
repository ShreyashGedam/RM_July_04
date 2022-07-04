import { actionTypes } from "./action"

const initState = {
    loading : false,
    data : [],
    error : false,
} 

export const dataReducer = (state = initState , action) => {

    switch(action.type){
        case actionTypes.FETCH_DATA_REQUEST :
            return {
                ...state,
                error : false,
                loading : true
            }
         
        case actionTypes.FETCH_DATA_SUCCESS :
            return {
                ...state,
                data : action.payload,
                loading : false,
                error : false
            }  
         
        case actionTypes.FETCH_DATA_FAILURE :
            return {
                ...state,
                error : true,
                loading : fasle                    
            }
// .................................................................................................
            case actionTypes.ADD_DATA_REQUEST :
                return {
                    ...state,
                    loading : true,
                    error : false
                }
    
            case actionTypes.ADD_DATA_SUCCESS : 
            return {
                ...state,
                data : [...state , action.payload],
                loading : false
            }  
            
            case actionTypes.ADD_DATA_FAILURE :
                return {
                    ...state,
                    error : true
                }    
               
// .....................................................................................................  


        case actionTypes.DELETE_DATA_REQUEST : 
            return {
                ...state,
                error : "",
                loading : true
            }
    
        case actionTypes.DELETE_DATA_SUCCESS : 
            return {
                ...state,
                error : false,
                loading : false
            } 


// .....................................................................................................   

         
         
        default :
            return state    
    }

}