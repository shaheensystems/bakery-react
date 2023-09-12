import { Link } from 'react-router-dom';
import './Header.css';

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
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
        <button class="icon" onClick={toggleNav}>
    <i class="fa fa-bars"></i>
    </button>
      </nav>
    </header>
  );
}

export default Header;
