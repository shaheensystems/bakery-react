import './Contact.css';

function CustomOrder() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>If you have any inquiries or feedback, feel free to reach out. We'd love to hear from you!</p>
      
      <div className="contact-details">
        <h3>Reach Us At:</h3>
        <p>Email: support@nzbakery.co.nz</p>
        <p>Phone: 09-123-4567</p>
        <p>Address: 123 Bakery Street, Wellington</p>
      </div>
      
      <div className="contact-form">
        <h3>Send us a Message:</h3>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default CustomOrder;
