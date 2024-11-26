import { Routes, Route } from 'react-router-dom';
import "./css/App.css";
import Home from './pages/Home';
import Favorite from './pages/Favorites';
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/NavBar';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App