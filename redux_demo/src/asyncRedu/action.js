import {FETCH_LOADER,FETCH_ERROR,FETCH_SUCCESS} from './contex'

import axios from 'axios'
import { useDispatch } from "react-redux";


export  const  loader=()=>{
return{
    type:FETCH_LOADER
}
}

export  const fetchSuccess=(data)=>{
    return{
        type:FETCH_SUCCESS,
        payload:data
    }
    }

    export  const  fetchError=(err)=>{
        return{
            type:FETCH_ERROR,
            payload:err
        }
        }

    export const ApiCall=()=>{
        return(dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            dispatch(fetchSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(fetchError(err.message))
        })
    }
        }