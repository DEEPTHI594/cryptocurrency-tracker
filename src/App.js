import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Coin from './pages/Coin/Coin';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='app'>
    <Navbar></Navbar>  
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/coin/:coinId' element={<Coin/>}></Route>
        </Routes>
        

    </div>
  );
}

export default App;
