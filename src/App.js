import logo from './logo.svg';
import './App.css';
import Mainpage from './components/Mainpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import CartPage from './Pages/Cartpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/loginpage' element={<Login/>}/>
      <Route path='/signinpage' element={<Signup/>}/>
      <Route path='/cartpage' element={<CartPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
