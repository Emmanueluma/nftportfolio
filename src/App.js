import Mainapp from "./Mainapp";
import {Routes, Route} from 'react-router-dom'
import Dineroli from "./pages/dineroli/Dineroli";
function App() {
  return (
    <Routes>
          <Route path='/' element={<Mainapp />}/>
          <Route path='/dineroli' element={<Dineroli/>}/>
      </Routes>
  );
}

export default App;
