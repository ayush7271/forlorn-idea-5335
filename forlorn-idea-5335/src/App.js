import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar';
import { Home } from './component/Home/Home';
import {Footer} from './component/footer/Footer'
import { Taketosucceed } from './component/Home/Taketosucceed';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Taketosucceed/>
      <Footer/>
    </div>
  );
}

export default App;
