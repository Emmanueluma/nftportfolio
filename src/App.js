import Mainapp from "./Mainapp";
import {Routes, Route} from 'react-router-dom'
import Dineroli from "./pages/dineroli/Dineroli";
import Form from "./pages/form/Form";
import Crypto from "./pages/about/component/Crypto";
function App() {
  return (
    <Routes>
          <Route path='/' element={<Mainapp />}/>
          <Route path='/dineroli' element={<Dineroli/>}>
            <Route path='/dineroli/cryptobasic' element={<Crypto />}/>
          </Route>
          <Route path='/form' element={<Form/>}/>
      </Routes>
  );
}

export default App;
