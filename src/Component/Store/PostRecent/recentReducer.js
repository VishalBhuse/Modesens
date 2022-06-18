import { DELETERECENT, POSTRECENTERROR, POSTRECENTLOADING, POSTRECENTSUCCESS } from "./recenttype"

let initialstate = {
    loading:false,
    error:false,
    data:[],
}

export const recentReducer = (state = initialstate, action) => {
    switch(action.type){

        case POSTRECENTLOADING:{
            return{
                ...state,
                loading:true,
                error:false,
            }
        }

        case POSTRECENTSUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                data:action.payload,
            }
        }

        case POSTRECENTERROR:{
            return{
                ...state,
                loading:false,
                error:true,
            }
        }

        case DELETERECENT:{
            return{
                ...state,
                loading:false,
                error:false,
                data:action.payload,
            }
        }

        default:{
            return{
                state
            }
        }
    }
}