import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Containers from './pages/containers/Contaniers';
import SignUp from './pages/authentication/SingUp';
import SignIn from './pages/authentication/SignIn';
import AuthDetails from './pages/authentication/AuthDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<SignIn />}></Route>
          <Route path='/home' exact element={<Home />}></Route>
          <Route path='/signup' exact element={<SignUp />}></Route>
          <Route path='/signout' exact element={<AuthDetails />}></Route>
          <Route path='/analytics' exact element={<Analytics />}></Route>
          <Route path='/containers' exact element={<Containers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

