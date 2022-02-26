import  {ApiCall,loader} from './asyncRedu/action'
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from 'react';
import {connect} from 'react-redux'


function Asynccomponet() {

const dispatch = useDispatch();



useEffect(async()=>{
    dispatch(ApiCall())
    
},[])

return(
<div>
<p>hello</p>
<p>
    {useSelector(state=>state.async.useData)}
</p>

</div>
)
}

export default Asynccomponet;