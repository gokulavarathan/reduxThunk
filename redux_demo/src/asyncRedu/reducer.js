import {FETCH_LOADER,FETCH_ERROR,FETCH_SUCCESS} from './contex'


const initalState={
    loader:false,
    userData:[],
    error:""
}

const reducer=(state=initalState,action)=>{
    switch (action.type){
        case FETCH_LOADER:
            return{
            ...state,
            loader:true
        }
        case FETCH_SUCCESS:
            return{
            ...state,
            userData:action.payload
        }
        case FETCH_ERROR:
            return{
            ...state,
            error:action.payload
        }

        default: return state
    }
}

export default reducer