import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./reducer";


const rootReducer = combineReducers( {
    homeData : dataReducer
})

export const store = createStore(rootReducer,
    applyMiddleware(thunk))