
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Cart from './Cart';
import Menu from './Menu';
import AboutUs from './AboutUs';
import Contact from './Contact';
import { useState } from 'react';
<<<<<<< HEAD
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
=======
import {Routes, Route, Link} from 'react-router-dom';
import CustomOrder from './CustomOrder';
>>>>>>> 29047f3ec50fd0a066a18091754c93a1a26aeba8
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <>
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={ <Menu addToCart={addToCart} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element ={<Contact />} />
        <Route path="/custom" element ={<CustomOrder />} />
        <Route path="/cart" element ={<Cart cartItems={cart} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      
      <Footer />
      </BrowserRouter>
    </>
  );
}
function NoMatch(){
  return(
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;