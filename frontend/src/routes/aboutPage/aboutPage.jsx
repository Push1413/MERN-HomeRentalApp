function AboutPage() {
  return (
    <div style={{padding: '40px 20px', maxWidth: '1200px', margin: '0 auto'}}>
      <div style={{textAlign: 'center', marginBottom: '48px'}}>
        <h1 style={{fontSize: '48px', fontWeight: 'bold', color: '#333', marginBottom: '32px'}}>About LamaEstate</h1>
        
        <section style={{marginBottom: '48px', textAlign: 'left'}}>
          <h2 style={{fontSize: '32px', marginBottom: '16px', color: '#444'}}>Your Trusted Real Estate Partner</h2>
          <p style={{fontSize: '18px', lineHeight: '1.6', color: '#666', marginBottom: '16px'}}>
            With over 16 years of experience in the real estate industry, LamaEstate 
            has been helping families and individuals find their dream homes. We pride 
            ourselves on providing exceptional service, expert market knowledge, and 
            personalized attention to every client.
          </p>
        </section>

        <section style={{marginBottom: '48px', textAlign: 'left'}}>
          <h2 style={{fontSize: '32px', marginBottom: '16px', color: '#444'}}>Our Mission</h2>
          <p style={{fontSize: '18px', lineHeight: '1.6', color: '#666', marginBottom: '16px'}}>
            To make the process of buying, selling, and renting properties as smooth 
            and stress-free as possible. We believe that everyone deserves to find a 
            place they can truly call home, and we're here to make that happen.
          </p>
        </section>

        <section style={{marginBottom: '48px', textAlign: 'left'}}>
          <h2 style={{fontSize: '32px', marginBottom: '16px', color: '#444'}}>Why Choose Us?</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '32px'}}>
            <div style={{padding: '24px', borderRadius: '8px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #fbbf24'}}>
              <h3 style={{marginBottom: '16px', fontSize: '20px', color: '#444'}}>🏆 Award-Winning Service</h3>
              <p style={{margin: 0, fontSize: '16px', color: '#666'}}>Over 200 industry awards recognizing our excellence in real estate services.</p>
            </div>
            <div style={{padding: '24px', borderRadius: '8px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #fbbf24'}}>
              <h3 style={{marginBottom: '16px', fontSize: '20px', color: '#444'}}>🏠 Extensive Portfolio</h3>
              <p style={{margin: 0, fontSize: '16px', color: '#666'}}>2000+ properties ready for viewing, from apartments to luxury estates.</p>
            </div>
            <div style={{padding: '24px', borderRadius: '8px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #fbbf24'}}>
              <h3 style={{marginBottom: '16px', fontSize: '20px', color: '#444'}}>👥 Expert Team</h3>
              <p style={{margin: 0, fontSize: '16px', color: '#666'}}>Professional agents with deep local market knowledge and negotiation skills.</p>
            </div>
            <div style={{padding: '24px', borderRadius: '8px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #fbbf24'}}>
              <h3 style={{marginBottom: '16px', fontSize: '20px', color: '#444'}}>💡 Innovation</h3>
              <p style={{margin: 0, fontSize: '16px', color: '#666'}}>Cutting-edge technology and tools to streamline your property search.</p>
            </div>
          </div>
        </section>

        <section style={{marginBottom: '48px', textAlign: 'left'}}>
          <h2 style={{fontSize: '32px', marginBottom: '16px', color: '#444'}}>Our Track Record</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginTop: '32px'}}>
            <div style={{textAlign: 'center', padding: '32px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '36px', color: '#fbbf24', marginBottom: '8px'}}>5000+</h3>
              <p style={{fontSize: '18px', color: '#666', margin: 0}}>Happy Families</p>
            </div>
            <div style={{textAlign: 'center', padding: '32px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '36px', color: '#fbbf24', marginBottom: '8px'}}>98%</h3>
              <p style={{fontSize: '18px', color: '#666', margin: 0}}>Customer Satisfaction</p>
            </div>
            <div style={{textAlign: 'center', padding: '32px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '36px', color: '#fbbf24', marginBottom: '8px'}}>50+</h3>
              <p style={{fontSize: '18px', color: '#666', margin: 0}}>Cities Covered</p>
            </div>
            <div style={{textAlign: 'center', padding: '32px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '36px', color: '#fbbf24', marginBottom: '8px'}}>24/7</h3>
              <p style={{fontSize: '18px', color: '#666', margin: 0}}>Customer Support</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;