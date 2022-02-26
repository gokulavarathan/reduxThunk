
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import Incrementcomponent from './component'
import Decrementcomponent from './component2'
import Multiplicationcomponent from './component3';
import AsyncComponent from '../src/asyncComponent';


function App() {
  
  return (
    <Provider store={store}>
<AsyncComponent/>
    {/* <Incrementcomponent/>
    <Decrementcomponent/>
    <Multiplicationcomponent/> */}
    </Provider>
  );
}

export default App;
