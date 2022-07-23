import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar';
import { Home } from './component/Home/Home';
import {Footer} from './component/footer/Footer'
import { Taketosucceed } from './component/Home/Taketosucceed';
import { Topratedcalories } from './component/Home/Topratedcalories';
import { Premium } from './component/Home/Premium';
import { Slideshow } from './component/Home/slideshow';
import {Route,Routes} from 'react-router-dom'
import { Features } from './component/Features/Features';
import { Diets } from './component/Diets/Diets';
import { Ragister } from './component/Ragister/Ragister';
import { Ragister2 } from './component/Ragister/Register2';
import { Login } from './component/Login';
import { Food } from './component/Food/Food';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="home" element={<Features/>}></Route>  
      <Route path="/signup" element={<Ragister/>}></Route>
      <Route path="/sign" element={<Ragister2/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/food" element={<Food/>}></Route>
      </Routes>
      {/* <Food/> */}
      <Footer/>
    </div>
  );
}

export default App;
