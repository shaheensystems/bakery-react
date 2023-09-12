import './Newsletter.css'
export default function Newsletter(){

    return(
        <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with our latest offerings and promotions.</p>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </section>
    );
}