import { createStore } from "redux";
import  reducer1  from "./redux/reducer";
import reducer2 from './redux/anotherReducer';
import reducer3 from './asyncRedu/reducer';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers  } from "redux";

const reducer=combineReducers({
    add:reducer1,
    mult:reducer2,
    async:reducer3
})
const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

export default store