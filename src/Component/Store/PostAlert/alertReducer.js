import { DELETEALERT, POSTALERTERROR, POSTALERTLOADING, POSTALERTSUCCESS } from "./alerttype"

let initialstate = {
    loading:false,
    error:false,
    data:[],
}

export const alertReducer = (state = initialstate, action) => {
    switch(action.type){

        case POSTALERTLOADING:{
            return{
                ...state,
                loading:true,
                error:false,
            }
        }

        case POSTALERTSUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                data:action.payload,
            }
        }

        case POSTALERTERROR:{
            return{
                ...state,
                loading:false,
                error:true,
            }
        }

        case DELETEALERT:{
            console.log(action.payload)
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