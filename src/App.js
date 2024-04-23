import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Components/Home/Home';
import Favorites from './Components/Favorites/Favorites';
import Details from './Components/Details/Details';
import Navbar from './Components/NavBar/Navigation';

function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/details/:id' element={<Details />} />
          </Routes>

      </div>
    </div>
  );
}

export default App;
