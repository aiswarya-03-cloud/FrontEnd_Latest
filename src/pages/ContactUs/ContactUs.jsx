// import React from 'react'
// import './ContactUs.css'


// const ContactUs = () => {
//   return (
//     <div>
//        <h1>CONTACT US</h1>

//     </div>
//   )
// }

// export default ContactUs



// import React, { useState } from 'react';
// import './ContactUs.css';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Form submission logic goes here (like sending data to a server)
//     alert("Message sent!");
//   };

//   return (
//     <div className="contact-us-container">
//       <header className="header">
//         <h1>Sizzle Bytes Food Delivery</h1>
//         <p>Delicious Meals Delivered To Your Doorstep</p>
//       </header>

//       <div className="contact-info-container">
//         {/* Company Info */}
//         <div className="contact-info">
//           <h2>Contact Information</h2>
//           <p><strong>Address:</strong> 123 Food Street, City Name, State, Country</p>
//           <p><strong>Phone:</strong> +123-456-7890</p>
//           <p><strong>Email:</strong> contact@sizzlebytes.com</p>
//           <p><strong>Hours:</strong> Mon-Sun, 9:00 AM - 11:00 PM</p>
//         </div>

//         {/* Google Map */}
//         <div className="map-container">
//           <h2>Our Location</h2>
//           <iframe 
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.057297287097!2d-122.41941608468188!3d37.774929779759295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858178f8d6f5b9%3A0x6b679d3a8e18f63d!2sSizzle%20Bytes!5e0!3m2!1sen!2sus!4v1612252340582!5m2!1sen!2sus" 
//             allowfullscreen="" 
//             loading="lazy">
//           </iframe>
//         </div>
//       </div>

//       {/* Contact Form */}
//       <div className="form-container">
//         <h2>Get in Touch</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="6"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Send Message</button>
//         </form>
//       </div>

//       {/* Footer */}
//       {/* <footer>
//         <p>Follow us on social media</p>
//         <div className="social-links">
//           <a href="https://facebook.com/sizzlebytes" target="_blank" rel="noopener noreferrer">Facebook</a>
//           <a href="https://twitter.com/sizzlebytes" target="_blank" rel="noopener noreferrer">Twitter</a>
//           <a href="https://instagram.com/sizzlebytes" target="_blank" rel="noopener noreferrer">Instagram</a>
//         </div>
//         <p>&copy; 2025 Sizzle Bytes. All rights reserved.</p>
//       </footer> */}
//     </div>
//   );
// };

// export default ContactUs;

// import React, { useState } from 'react';
// import './ContactUs.css';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent!");
//   };

//   return (
//     <div className="contact-us-wrapper">
//       <header className="header">
//         <h1>Sizzle Bytes</h1>
//         <p>Delicious Meals Delivered to Your Doorstep</p>
//       </header>

//       {/* Contact Form */}
//       <div className="contact-form-container">
//         <h3>💬 Get in Touch</h3>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Send Message</button>
//         </form>
//       </div>

//       {/* Contact Info & Location */}
//       <div className="contact-bottom-section">
//         {/* Contact Info Card */}
//         <div className="contact-card">
//           <h3>📞 Contact Info</h3>
//           <p><strong>📍 Address:</strong> 123 Food Street, City</p>
//           <p><strong>📞 Phone:</strong> +123-456-7890</p>
//           <p><strong>📧 Email:</strong> contact@sizzlebytes.com</p>
//           <p><strong>🕒 Hours:</strong> Mon-Sun, 9 AM - 11 PM</p>
//         </div>

//         {/* Location Card */}
//         <div className="contact-card">
//           <h3>📍 Our Location</h3>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.057297287097!2d-122.41941608468188!3d37.774929779759295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858178f8d6f5b9%3A0x6b679d3a8e18f63d!2sSizzle%20Bytes!5e0!3m2!1sen!2sus!4v1612252340582!5m2!1sen!2sus"
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="contact-us-wrapper">
      <header className="header">
        <h1>Sizzle Bytes</h1>
        <p>Delicious Meals Delivered to Your Doorstep</p>
      </header>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h3>💬 Get in Touch</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Contact Info & Location */}
      <div className="contact-bottom-section">
        {/* Contact Info Card */}
        <div className="contact-card">
          <h3>📞 Contact Info</h3>
          <p><strong>📍 Address:</strong> 123 Food Street, City</p>
          <p><strong>📞 Phone:</strong> +123-456-7890</p>
          <p><strong>📧 Email:</strong> contact@sizzlebytes.com</p>
          <p><strong>🕒 Hours:</strong> Mon-Sun, 9 AM - 11 PM</p>
        </div>

        {/* Location Card (Wider) */}
        <div className="location-card">
          <h3>📍 Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.057297287097!2d-122.41941608468188!3d37.774929779759295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858178f8d6f5b9%3A0x6b679d3a8e18f63d!2sSizzle%20Bytes!5e0!3m2!1sen!2sus!4v1612252340582!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
