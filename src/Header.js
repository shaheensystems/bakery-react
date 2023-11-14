
import './Header.css';
import {Link} from 'react-router-dom';
function Header() {
    function toggleNav() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
  return (
    <header className="header">
      <h1>NZ Bakery</h1>
      <nav className="topnav" id="myTopnav">
        <Link to="/" className=''>Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/custom">Custom Order</Link>
        <Link to="/cart">Cart</Link>
        <button class="icon" onClick={toggleNav}>
    <i class="fa fa-bars"></i>
    </button>
      </nav>
    </header>
  );
}

export default Header;
