import {MULTIPLICATION} from './contex'

const initialstate={
    value:2
}

const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case MULTIPLICATION :
            return{
        ...state,
        value:state.value*2
            }

        default: return state
        }

}

export default reducer