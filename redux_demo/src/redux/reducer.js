import {INCREMENT,DECREMENT} from './contex'

const initalState={
    increment:0,
    decrement:100
}

const reducer=(state=initalState,action)=>{
    switch(action.type){
        case INCREMENT :
            return{
        ...state,
        increment:state.increment+1
            }

        case DECREMENT :
                return{
            ...state,
            decrement:state.decrement-1
                }

        default :return state
    }
    
}
export default reducer