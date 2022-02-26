import { multiplication } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";


import reducer from "./redux/reducer";
function Component() {
    const selectedValue = useSelector(state=>state.mult.value)
    console.log("------------------")
    console.log(selectedValue)

    const dispatch =useDispatch()
    const dispatchFn=()=>{
        dispatch(multiplication())
    }
    return (
    <div className="App">
    <h3>MULTIPLICATION - {selectedValue}</h3>
    <button onClick={dispatchFn}> click here to add </button>
    </div>
    );
}

export default Component
