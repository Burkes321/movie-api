import './App.scss';

import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import { AuthProvider, useAuthContext } from './contexts/useAuth';
import Default from './pages/Default';
import Login from './pages/Login';
import Search from './pages/Search';

const Pages = () => {
  const { isLoggedIn } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }  
  }, [isLoggedIn, navigate])
  
  return (
      <Routes>
        <Route path='/login' element={<Login />} />
        {
          isLoggedIn ? 
          <>
            <Route path='/' element={<Default />} />
            <Route path='/search' element={<Search />} /> 
          </>
        : null 
        }
      </Routes>

  )
}

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
