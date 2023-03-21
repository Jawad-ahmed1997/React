import {createContext,useReducer} from 'react'
import reducer from './reducer';
const initialState={
    data:[
    ]
}


export const GlobalContext=createContext(initialState);
export const GlobalProvider=({children})=>{

const [state,dispatch]=useReducer(reducer,initialState);

const deleteBookingData=(id)=>{
    dispatch({
        type:'DELETE_BOOKING',
        payload:id  
    })
    }
    const addBookingData=(data)=>{
        dispatch({
            type:'ADD_BOOKING',
            payload:data
        })
        }
return(
        <GlobalContext.Provider value={{
            data:state.data,
            deleteBookingData,addBookingData

        }}>
          {children}
        </GlobalContext.Provider>
    )

}


