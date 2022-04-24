import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navigation } from './navigation';
import { Newform } from './newform';
import {Home} from './home'
const App=()=>{
  return (
  <>
   <BrowserRouter>
   <Navigation/>

   <Routes>
     <Route path="/postt" exact element={<Newform/>}>  </Route>
     <Route path="/gett" exact element={<Home/>} ></Route>

   
   </Routes>
   </BrowserRouter>
  </> 
  )
}

export default App;
