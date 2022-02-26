
import {INCREMENT,DECREMENT,MULTIPLICATION} from './contex'

export const increment=()=>{
    return {
        type :INCREMENT
    }
}

export const decrement=()=>{
    return {
        type :DECREMENT
    }
}

export const multiplication=()=>{
    return {
        type :MULTIPLICATION
    }
}