import {  Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Cart from './Cart';
import Menu from './Menu';
import AboutUs from './AboutUs';
import Contact from './Contact';
import { useState } from 'react';
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="/menu" element={<Menu addToCart={addToCart}/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartItems={cart} />} /> 
       </Routes>
      <Footer />
    </>
  );
}

export default App;