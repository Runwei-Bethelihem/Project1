import NavBar from './NavBar';
import Pages from './pages';
import Boxes from './boxes';
import Pictures from './pics';
import Footerr from './footer';
import End from './end'

//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <>
  <NavBar/> 
  <Pages/>
  <Boxes/>
  <Pictures/>
  <div className="backgroundcolor">
  <Footerr/>
  <div className="custom-divider"></div>
  <End/>
 </div>
  </>
  );
}

export default App
