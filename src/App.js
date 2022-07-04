import { useState } from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';


function App() {
  const [authenticate, setAuthenticate] = useState(false);

  const PrivateRoute = () => {
    return authenticate == true?<UserPage/>:<Navigate to="/login"/>
  }

  return (
    <div>
      <h1>안녕하세요</h1>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/products/:id' element={<ProductDetailPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/user' element={<PrivateRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
