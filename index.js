const redux = require ('redux')
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
//useConstant to avoid mistake
const INCREMENT_FN='INCREMENT_FN'
const DECREMENT_FN ='DECREMENT_FN'


//Action type declearation
function incrementFn(){
    return{
        type:INCREMENT_FN,
    }
}

function decrementFn(){
    return{
        type:DECREMENT_FN
    }
}
//SINGLE REDUCER
//Reducers state declaration and upgradtion
const initalState={
    incremented:0,
    decrement:100
}
const reducers=(state=initalState,action)=>{
    switch(action.type){
        case INCREMENT_FN :return{
            ...state,
            incremented:state.incremented + 1
        }
        case  DECREMENT_FN : return{
            ...state,
            decrement:state.decrement -1
        }
        default : return state
    }
}

//SEPERATE REDUCER
const incrementState={
    incremented:0,
    
}
const decrementState={
    decrement:100
}
const incrementReducer =(state=incrementState,action)=>{
    switch(action.type){
        case INCREMENT_FN :return{
            ...state,
            incremented:state.incremented + 1
        }
        
        default : return state
    }
}

const decrementReducer =(state=decrementState,action)=>{
    switch(action.type){
        case DECREMENT_FN :return{
            ...state,
            decrement:state.decrement + 1
        }
        
        default : return state
    }
}

//creating store 
//for single reducer store
//const store = createStore(reducers)

// for multiple reducer we use combine reducers
const rootReducers =combineReducers({
    incre : incrementReducer,
    decre : decrementReducer
})
const store = createStore(rootReducers)
console.log("initial state", store.getState())
const unSubscribe=store.subscribe(()=>{console.log("updated state",store.getState())})
store.dispatch(incrementFn())
store.dispatch(incrementFn())
store.dispatch(incrementFn())
store.dispatch(incrementFn())

store.dispatch(decrementFn())
store.dispatch(decrementFn())
store.dispatch(decrementFn())
store.dispatch(decrementFn())

unSubscribe()