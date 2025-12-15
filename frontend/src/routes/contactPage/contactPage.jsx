import { useState } from "react";
import "./contactPage.scss";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contactPage">
      <div className="container">
        <div className="header">
          <h1>Contact Us</h1>
          <p>Get in touch with our real estate experts</p>
        </div>

        <div className="content">
          <div className="contactInfo">
            <h2>Get In Touch</h2>
            <p>
              Ready to find your dream property? Have questions about our services? 
              We're here to help! Contact us through any of the methods below.
            </p>

            <div className="infoItems">
              <div className="infoItem">
                <div className="icon">📍</div>
                <div className="details">
                  <h3>Office Address</h3>
                  <p>123 Real Estate Avenue<br />Downtown District, City 12345</p>
                </div>
              </div>

              <div className="infoItem">
                <div className="icon">📞</div>
                <div className="details">
                  <h3>Phone Number</h3>
                  <p>+1 (555) 123-4567<br />Mon-Fri: 9AM-6PM</p>
                </div>
              </div>

              <div className="infoItem">
                <div className="icon">✉️</div>
                <div className="details">
                  <h3>Email Address</h3>
                  <p>info@lamaestate.com<br />support@lamaestate.com</p>
                </div>
              </div>

              <div className="infoItem">
                <div className="icon">🕒</div>
                <div className="details">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                     Saturday: 10:00 AM - 4:00 PM<br />
                     Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formGroup">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formGroup">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="formGroup">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="buying">Buying Property</option>
                  <option value="selling">Selling Property</option>
                  <option value="renting">Renting Property</option>
                  <option value="investment">Investment Opportunities</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="formGroup">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submitBtn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;