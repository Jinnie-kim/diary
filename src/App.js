import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from '../src/pages/home/Home';
import Login from '../src/pages/login/Login';
import Signup from '../src/pages/signup/Signup';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { isAuthReady } = useAuthContext();
  return (
    <div>
      {isAuthReady ? (
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        'Loading ...'
      )}
    </div>
  );
}

export default App;
