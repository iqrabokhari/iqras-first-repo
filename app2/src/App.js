import Navbar from './comp/Navbar.js';
import Home from './comp/Home.js'
import Bitcoin from './comp/Bitcoin.js'
import Technology from './comp/Technology.js'
import Sports from './comp/Sports.js'
import Business from './comp/Business.js'
import { SearchProvider } from './comp/Searchcontext.js';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {



  return (
    
    <div className="App">
      <BrowserRouter>
      <SearchProvider>
      <Navbar/>
 <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/tech" element={<Technology/>}/>
  <Route exact path="/Bitcoin" element={<Bitcoin/>}/>
  <Route exact path="/sports" element={<Sports/>}/>
  <Route exact path="/business" element={<Business/>}/>
  
 </Routes>
 </SearchProvider>
</BrowserRouter>
      
    </div>
    
  );
}


export default App;