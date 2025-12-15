import "./aboutPage.scss";

function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="container">
        <div className="textContainer">
          <h1>About LamaEstate</h1>
          <div className="content">
            <section className="intro">
              <h2>Your Trusted Real Estate Partner</h2>
              <p>
                With over 16 years of experience in the real estate industry, LamaEstate 
                has been helping families and individuals find their dream homes. We pride 
                ourselves on providing exceptional service, expert market knowledge, and 
                personalized attention to every client.
              </p>
            </section>

            <section className="mission">
              <h2>Our Mission</h2>
              <p>
                To make the process of buying, selling, and renting properties as smooth 
                and stress-free as possible. We believe that everyone deserves to find a 
                place they can truly call home, and we're here to make that happen.
              </p>
            </section>

            <section className="values">
              <h2>Why Choose Us?</h2>
              <div className="valuesList">
                <div className="value">
                  <h3>🏆 Award-Winning Service</h3>
                  <p>Over 200 industry awards recognizing our excellence in real estate services.</p>
                </div>
                <div className="value">
                  <h3>🏠 Extensive Portfolio</h3>
                  <p>2000+ properties ready for viewing, from apartments to luxury estates.</p>
                </div>
                <div className="value">
                  <h3>👥 Expert Team</h3>
                  <p>Professional agents with deep local market knowledge and negotiation skills.</p>
                </div>
                <div className="value">
                  <h3>💡 Innovation</h3>
                  <p>Cutting-edge technology and tools to streamline your property search.</p>
                </div>
              </div>
            </section>

            <section className="stats">
              <h2>Our Track Record</h2>
              <div className="statsGrid">
                <div className="stat">
                  <h3>5000+</h3>
                  <p>Happy Families</p>
                </div>
                <div className="stat">
                  <h3>98%</h3>
                  <p>Customer Satisfaction</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Cities Covered</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>Customer Support</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;