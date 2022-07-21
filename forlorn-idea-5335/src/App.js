import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar';
import { Home } from './component/Home/Home';
import {Footer} from './component/footer/Footer'

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
