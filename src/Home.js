import { Link } from 'react-router-dom';
import './Home.css';
import Newsletter from './Newsletter';
import Pricing from './Pricing';

function Home() {
  return (
    <div className="home">
      <section className="banner">
        <img src="banner.jpg" alt="NZ Bakery banner" />
        <h1>Welcome to NZ Bakery</h1>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <p>Check out some of our bestsellers!</p>
        <Link to="/menu">Lamington - $3</Link>
        <Link to="/menu">Pavlova - $4.5</Link>
        <Link to="/menu">Croissant - $2.5</Link>
        <Link to="/menu">See Full Menu</Link>
      </section>

      <section className="about-us-preview">
        <h2>About Us</h2>
        <p>We've been serving New Zealand's finest pastries and bread since 1995...</p>
        <Link to="/about">Learn More</Link>
      </section>

        <Newsletter />
        <Pricing />
    </div>
  );
}

export default Home;
