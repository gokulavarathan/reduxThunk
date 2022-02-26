import { increment } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";


import reducer from "./redux/reducer";
function Component() {
    const selectedValue = useSelector(state=>state.add.increment)
    console.log("------------------")
    console.log(selectedValue)

    const dispatch =useDispatch()
    const dispatchFn=()=>{
        dispatch(increment())
    }
    return (
    <div className="App">
    <h3>INCREMENT - {selectedValue}</h3>
    <button onClick={dispatchFn}> click here to add </button>
    </div>
    );
}

export default Component
