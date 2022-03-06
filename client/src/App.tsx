import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Default from './pages/Default';
import Login from './pages/Login';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Default />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
