import { useState } from "react";

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
    <div style={{padding: '40px 20px', maxWidth: '1200px', margin: '0 auto'}}>
      <div style={{textAlign: 'center', marginBottom: '48px'}}>
        <h1 style={{fontSize: '48px', fontWeight: 'bold', color: '#333', marginBottom: '16px'}}>Contact Us</h1>
        <p style={{fontSize: '20px', color: '#666'}}>Get in touch with our real estate experts</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start'}}>
        <div>
          <h2 style={{fontSize: '32px', marginBottom: '16px', color: '#444'}}>Get In Touch</h2>
          <p style={{fontSize: '18px', lineHeight: '1.6', color: '#666', marginBottom: '32px'}}>
            Ready to find your dream property? Have questions about our services? 
            We're here to help! Contact us through any of the methods below.
          </p>

          <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
            <div style={{display: 'flex', alignItems: 'flex-start', padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
              <div style={{fontSize: '32px', marginRight: '16px', flexShrink: 0}}>📍</div>
              <div>
                <h3 style={{fontSize: '20px', marginBottom: '8px', color: '#333'}}>Office Address</h3>
                <p style={{margin: 0, fontSize: '16px', color: '#666', lineHeight: '1.4'}}>123 Real Estate Avenue<br />Downtown District, City 12345</p>
              </div>
            </div>

            <div style={{display: 'flex', alignItems: 'flex-start', padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
              <div style={{fontSize: '32px', marginRight: '16px', flexShrink: 0}}>📞</div>
              <div>
                <h3 style={{fontSize: '20px', marginBottom: '8px', color: '#333'}}>Phone Number</h3>
                <p style={{margin: 0, fontSize: '16px', color: '#666', lineHeight: '1.4'}}>+1 (555) 123-4567<br />Mon-Fri: 9AM-6PM</p>
              </div>
            </div>

            <div style={{display: 'flex', alignItems: 'flex-start', padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
              <div style={{fontSize: '32px', marginRight: '16px', flexShrink: 0}}>✉️</div>
              <div>
                <h3 style={{fontSize: '20px', marginBottom: '8px', color: '#333'}}>Email Address</h3>
                <p style={{margin: 0, fontSize: '16px', color: '#666', lineHeight: '1.4'}}>info@lamaestate.com<br />support@lamaestate.com</p>
              </div>
            </div>

            <div style={{display: 'flex', alignItems: 'flex-start', padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
              <div style={{fontSize: '32px', marginRight: '16px', flexShrink: 0}}>🕒</div>
              <div>
                <h3 style={{fontSize: '20px', marginBottom: '8px', color: '#333'}}>Business Hours</h3>
                <p style={{margin: 0, fontSize: '16px', color: '#666', lineHeight: '1.4'}}>Monday - Friday: 9:00 AM - 6:00 PM<br />
                   Saturday: 10:00 AM - 4:00 PM<br />
                   Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{backgroundColor: 'white', padding: '32px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
          <h2 style={{fontSize: '32px', marginBottom: '32px', color: '#444'}}>Send Us a Message</h2>
          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%', 
                  padding: '16px', 
                  border: '2px solid #ddd', 
                  borderRadius: '6px', 
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%', 
                  padding: '16px', 
                  border: '2px solid #ddd', 
                  borderRadius: '6px', 
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  width: '100%', 
                  padding: '16px', 
                  border: '2px solid #ddd', 
                  borderRadius: '6px', 
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%', 
                  padding: '16px', 
                  border: '2px solid #ddd', 
                  borderRadius: '6px', 
                  fontSize: '16px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="">Select Subject</option>
                <option value="buying">Buying Property</option>
                <option value="selling">Selling Property</option>
                <option value="renting">Renting Property</option>
                <option value="investment">Investment Opportunities</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: '100%', 
                  padding: '16px', 
                  border: '2px solid #ddd', 
                  borderRadius: '6px', 
                  fontSize: '16px',
                  outline: 'none',
                  resize: 'vertical',
                  minHeight: '120px'
                }}
              ></textarea>
            </div>

            <button type="submit" style={{
              width: '100%', 
              padding: '16px', 
              backgroundColor: '#fbbf24', 
              color: '#333', 
              border: 'none', 
              borderRadius: '6px', 
              fontSize: '18px', 
              fontWeight: '600', 
              cursor: 'pointer'
            }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;