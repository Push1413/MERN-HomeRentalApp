function AgentsPage() {
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      experience: "8 years",
      specialties: ["Luxury Homes", "First-Time Buyers"],
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@lamaestate.com",
      image: "/noavatar.jpg",
      bio: "Sarah specializes in luxury properties and has helped over 200 families find their dream homes. Her attention to detail and market expertise make her a top choice for discerning clients.",
      sales: "150+ Properties Sold",
      rating: 4.9
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Commercial Real Estate Specialist",
      experience: "12 years",
      specialties: ["Commercial Properties", "Investment Properties"],
      phone: "+1 (555) 234-5678",
      email: "michael.chen@lamaestate.com",
      image: "/noavatar.jpg",
      bio: "Michael brings over a decade of experience in commercial real estate. He's known for his strategic approach and has facilitated millions in commercial property transactions.",
      sales: "200+ Properties Sold",
      rating: 4.8
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Residential Property Expert",
      experience: "6 years",
      specialties: ["Family Homes", "Condominiums"],
      phone: "+1 (555) 345-6789",
      email: "emily.rodriguez@lamaestate.com",
      image: "/noavatar.jpg",
      bio: "Emily is passionate about helping families find the perfect home. Her warm approach and thorough market knowledge have earned her numerous client referrals.",
      sales: "120+ Properties Sold",
      rating: 4.9
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Investment Property Advisor",
      experience: "10 years",
      specialties: ["Investment Properties", "Property Management"],
      phone: "+1 (555) 456-7890",
      email: "david.thompson@lamaestate.com",
      image: "/noavatar.jpg",
      bio: "David helps investors build their real estate portfolios. His analytical approach and market insights have generated substantial returns for his clients.",
      sales: "180+ Properties Sold",
      rating: 4.7
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "New Construction Specialist",
      experience: "7 years",
      specialties: ["New Construction", "Custom Homes"],
      phone: "+1 (555) 567-8901",
      email: "lisa.park@lamaestate.com",
      image: "/noavatar.jpg",
      bio: "Lisa specializes in new construction and custom homes. She guides clients through the building process and ensures they get exactly what they envision.",
      sales: "90+ Properties Sold",
      rating: 4.8
    },
    {
      id: 6,
      name: "Robert Wilson",
      title: "Luxury Property Consultant",
      experience: "15 years",
      specialties: ["Luxury Estates", "Waterfront Properties"],
      phone: "+1 (555) 678-9012",
      email: "robert.wilson@lamaestate.com",
      image: "/noavatar.jpg",
      bio: "Robert is our most experienced agent, specializing in luxury estates and waterfront properties. His extensive network and negotiation skills are unmatched.",
      sales: "300+ Properties Sold",
      rating: 5.0
    }
  ];

  return (
    <div style={{padding: '40px 20px', maxWidth: '1400px', margin: '0 auto'}}>
      <div style={{textAlign: 'center', marginBottom: '48px'}}>
        <h1 style={{fontSize: '48px', fontWeight: 'bold', color: '#333', marginBottom: '16px'}}>Meet Our Expert Agents</h1>
        <p style={{fontSize: '20px', color: '#666', maxWidth: '600px', margin: '0 auto'}}>Our team of professional real estate agents is here to help you every step of the way</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', marginBottom: '64px'}}>
        {agents.map((agent) => (
          <div key={agent.id} style={{
            backgroundColor: 'white', 
            borderRadius: '16px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              position: 'relative', 
              height: '192px', 
              backgroundColor: '#f3f4f6', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center'
            }}>
              <img src={agent.image} alt={agent.name} style={{
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                objectFit: 'cover', 
                border: '4px solid white'
              }} />
              <div style={{
                position: 'absolute', 
                top: '16px', 
                right: '16px', 
                backgroundColor: '#fbbf24', 
                padding: '4px 8px', 
                borderRadius: '20px', 
                fontWeight: '600', 
                fontSize: '14px'
              }}>
                <span>⭐ {agent.rating}</span>
              </div>
            </div>
            
            <div style={{padding: '32px'}}>
              <h3 style={{fontSize: '24px', marginBottom: '8px', color: '#333'}}>{agent.name}</h3>
              <p style={{fontSize: '16px', color: '#fbbf24', fontWeight: '600', marginBottom: '8px'}}>{agent.title}</p>
              <p style={{fontSize: '14px', color: '#666', marginBottom: '16px'}}>{agent.experience} of experience</p>
              
              <div style={{marginBottom: '16px'}}>
                <h4 style={{fontSize: '16px', marginBottom: '8px', color: '#444'}}>Specialties:</h4>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                  {agent.specialties.map((specialty, index) => (
                    <span key={index} style={{
                      backgroundColor: '#f3f4f6', 
                      padding: '4px 8px', 
                      borderRadius: '16px', 
                      fontSize: '12px', 
                      color: '#666'
                    }}>{specialty}</span>
                  ))}
                </div>
              </div>

              <p style={{fontSize: '14px', lineHeight: '1.5', color: '#666', marginBottom: '16px'}}>{agent.bio}</p>
              
              <div style={{marginBottom: '24px'}}>
                <div style={{textAlign: 'center', padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
                  <strong style={{color: '#333', fontSize: '16px'}}>{agent.sales}</strong>
                </div>
              </div>

              <div>
                <div style={{marginBottom: '16px'}}>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '4px'}}>📞 {agent.phone}</p>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '4px'}}>✉️ {agent.email}</p>
                </div>
                <button style={{
                  width: '100%', 
                  padding: '12px', 
                  backgroundColor: '#fbbf24', 
                  color: '#333', 
                  border: 'none', 
                  borderRadius: '6px', 
                  fontWeight: '600', 
                  cursor: 'pointer'
                }}>Contact Agent</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        textAlign: 'center', 
        padding: '48px 32px', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '16px'
      }}>
        <h2 style={{fontSize: '32px', marginBottom: '16px', color: '#333'}}>Join Our Team</h2>
        <p style={{
          fontSize: '18px', 
          color: '#666', 
          marginBottom: '32px', 
          maxWidth: '600px', 
          margin: '0 auto 32px auto'
        }}>
          Are you a passionate real estate professional looking to join a winning team? 
          We're always looking for talented agents to join LamaEstate.
        </p>
        <button style={{
          padding: '16px 32px', 
          backgroundColor: '#333', 
          color: 'white', 
          border: 'none', 
          borderRadius: '6px', 
          fontSize: '18px', 
          fontWeight: '600', 
          cursor: 'pointer'
        }}>Apply Now</button>
      </div>
    </div>
  );
}

export default AgentsPage;