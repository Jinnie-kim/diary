import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../src/pages/home/Home';
import Login from '../src/pages/login/Login';
import Signup from '../src/pages/signup/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
