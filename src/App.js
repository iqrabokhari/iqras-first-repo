


import Navbar from './comp/Navbar.js';
import Home from './comp/Home.js'
import Latest from './comp/Latest.js'
import National from './comp/National.js'
import World from './comp/World.js'
import Sports from './comp/Sports.js'
import Entertainment from './comp/Entertainment.js'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {



  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
 <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/latest" element={<Latest/>}/>
  <Route exact path="/national" element={<National/>}/>
  <Route exact path="/entertainment" element={<Entertainment/>}/>
  <Route exact path="/sports" element={<Sports/>}/>
  <Route exact path="/World" element={<World/>}/>
  
 </Routes>
</BrowserRouter>
      
    </div>
    
  );
}


export default App;