import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      tempErrors["name"] = "Name cannot be empty";
    }

    if (!email) {
      formIsValid = false;
      tempErrors["email"] = "Emial cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      tempErrors["email"] = "Email is not valid";
    }

    if (!message) {
      formIsValid = false;
      tempErrors["message"] = "Message cannot be empty";
    }

    setErrors(tempErrors);
    return formIsValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      alert("You have same message already")
    }
  }

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
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send us a Message:</h3>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <textarea 
          placeholder="Your Message" 
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <div className="error">{errors.message}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
