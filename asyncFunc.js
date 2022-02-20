const redux = require ('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware


const initalState={
    loading : false,
    data:[],
    error:""
}
//usecontext
const FETCH_USER_REQUEST= 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS= 'FETCH_USER_SUCCESS'
const FETCH_USER_ERROR= 'FETCH_USER_ERROR'

//action declearation
const fetchUserRequest =()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}
const fetchUserSuccess =(data)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:data
    }
}
const fetchUserError =(err)=>{
    return{
        type:FETCH_USER_ERROR,
        payload:err
    }
}
//reducer
const reducer=(state=initalState,action)=>{
    switch (action.type){
        case FETCH_USER_REQUEST : return{
            ...state,
            loading:true
        }
        case FETCH_USER_SUCCESS : return{
            ...state,
            data:action.payload,
            error:""
        }
        case FETCH_USER_ERROR : return{
            ...state,
            
            error:action.payload,
            data:[]
        }
    }
}

//action creation
const apiCallFn=()=>{
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            dispatch(fetchUserSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(fetchUserError(err.message))
        })
    }
}

const store =createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(apiCallFn())