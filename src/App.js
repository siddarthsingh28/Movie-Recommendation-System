import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
function App() {
  return (
    <>
    <Navbar></Navbar>
     <Banner/> 
    <Favourite></Favourite>
    <Movies></Movies> 
    </>
  );
}

export default App;
