import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: 'white',
      marginTop: '80px',
      padding: '48px 20px 24px 20px'
    }}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px'
            }}>
              <span style={{fontSize: '24px'}}>🏠</span>
              <span style={{fontSize: '24px', fontWeight: 'bold'}}>LamaEstate</span>
            </div>
            <p style={{
              color: '#d1d5db',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Your trusted partner in finding the perfect home. We connect you with the best properties 
              and provide exceptional service every step of the way.
            </p>
            <div style={{display: 'flex', gap: '16px'}}>
              <a href="#" style={{
                color: '#d1d5db',
                fontSize: '20px',
                textDecoration: 'none',
                transition: 'transform 0.2s'
              }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>📘</a>
              <a href="#" style={{
                color: '#d1d5db',
                fontSize: '20px',
                textDecoration: 'none',
                transition: 'transform 0.2s'
              }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>🐦</a>
              <a href="#" style={{
                color: '#d1d5db',
                fontSize: '20px',
                textDecoration: 'none',
                transition: 'transform 0.2s'
              }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>📷</a>
              <a href="#" style={{
                color: '#d1d5db',
                fontSize: '20px',
                textDecoration: 'none',
                transition: 'transform 0.2s'
              }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>💼</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px',
              color: 'white'
            }}>
              Quick Links
            </h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <Link to="/" style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s'
              }} onMouseEnter={(e) => e.target.style.color = '#fbbf24'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>Home</Link>
              <Link to="/list" style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s'
              }} onMouseEnter={(e) => e.target.style.color = '#fbbf24'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>Properties</Link>
              <Link to="/about" style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s'
              }} onMouseEnter={(e) => e.target.style.color = '#fbbf24'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>About Us</Link>
              <Link to="/agents" style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s'
              }} onMouseEnter={(e) => e.target.style.color = '#fbbf24'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>Our Agents</Link>
              <Link to="/contact" style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s'
              }} onMouseEnter={(e) => e.target.style.color = '#fbbf24'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px',
              color: 'white'
            }}>
              Our Services
            </h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <span style={{color: '#d1d5db', fontSize: '14px'}}>Property Sales</span>
              <span style={{color: '#d1d5db', fontSize: '14px'}}>Property Rentals</span>
              <span style={{color: '#d1d5db', fontSize: '14px'}}>Property Management</span>
              <span style={{color: '#d1d5db', fontSize: '14px'}}>Investment Consulting</span>
              <span style={{color: '#d1d5db', fontSize: '14px'}}>Market Analysis</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px',
              color: 'white'
            }}>
              Contact Info
            </h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <span>📍</span>
                <span style={{color: '#d1d5db', fontSize: '14px'}}>
                  123 Real Estate Avenue<br />Downtown District, City 12345
                </span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <span>📞</span>
                <span style={{color: '#d1d5db', fontSize: '14px'}}>+1 (555) 123-4567</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <span>✉️</span>
                <span style={{color: '#d1d5db', fontSize: '14px'}}>info@lamaestate.com</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <span>🕒</span>
                <span style={{color: '#d1d5db', fontSize: '14px'}}>Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{
            color: '#9ca3af',
            fontSize: '14px',
            margin: 0
          }}>
            © 2024 LamaEstate. All rights reserved.
          </p>
          <div style={{display: 'flex', gap: '24px', flexWrap: 'wrap'}}>
            <a href="#" style={{
              color: '#9ca3af',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s'
            }} onMouseEnter={(e) => e.target.style.color = '#d1d5db'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>Privacy Policy</a>
            <a href="#" style={{
              color: '#9ca3af',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s'
            }} onMouseEnter={(e) => e.target.style.color = '#d1d5db'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>Terms of Service</a>
            <a href="#" style={{
              color: '#9ca3af',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s'
            }} onMouseEnter={(e) => e.target.style.color = '#d1d5db'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;