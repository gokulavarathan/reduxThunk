# reduxThunk
Regarding thunk

Redux is a predictable state container for javascript application (javascript application 
like angular,vue,react,vennila.js)

WHY REDUX 
Manage the state of your application in predictable way redux can help us

REACT => library used to build user interfaces
REDUX => state management library in a predictable way in js application
REACT-REDUX => library that provides binding to use react and redux together in a application


REDUX FLOW :
javascript app => action => reducer => store => back to application

ACTION :
The only way your application can interact with the store (using dispatch methos)
carry some data from your application to the redux store
Its a plain js object having 'type' property that indicates the type of action being performed

action creator => function that returns an action

REDUCER : 
Action describe what happens Rducer describe how the application state changes in the store

function that accepts state as argument and return next state of the application
(previous state,action)=>new state

STORE :
=> one store for entire app
=> Holds application state
=> Provides getstate() method to give access to the state it holds
=> Allows state to update via dispatch(action) method it accept action as arguments
=> Register listeners via subscribe(listeners) method => it accepts a fun as its parameter which is executed any time the state in the redux store changes
=> Unsubscribe the store by calling the function that us returned by the store 

MIDDLEWARE :

=> provides a third party extension point between dispatching an action and the moment it reach the reducer
=> use middleware for logging,crash reporting and perform async task

import it from redux and pass the applyMiddleware function as argument to the store param and pass middleware function as parameter to applyMiddleware like (const store=createReactStore(reducer,applyMiddleware(logger)) )

ASYNC ACTION :
API calls to fetch data from an end point and use that data in our application

STATE :
{
    Loading :true,
    data:[],
    error:""
}
=> loading is initally set to be true until it get response for data or error
=> data : list of users
=> error : display error message

ACTION :
FETCH_USER_REQUEST - fetch list of users
FETCH_USER_SUCCESS - fetched successfully
FETCH_USER_ERROR - error data 

REDUCERS :

case : FETCH_USER_REQUEST
loading : true

case : FETCH_USER_SUCCESS
loading : false
data : response

case : FETCH_USER_ERROR
loading : false
error: error message

REDUX-THUNK :
define async action create and act as middleware

