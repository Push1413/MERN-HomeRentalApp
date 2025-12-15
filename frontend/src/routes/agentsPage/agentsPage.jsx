import "./agentsPage.scss";

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
    <div className="agentsPage">
      <div className="container">
        <div className="header">
          <h1>Meet Our Expert Agents</h1>
          <p>Our team of professional real estate agents is here to help you every step of the way</p>
        </div>

        <div className="agentsGrid">
          {agents.map((agent) => (
            <div key={agent.id} className="agentCard">
              <div className="agentImage">
                <img src={agent.image} alt={agent.name} />
                <div className="rating">
                  <span>⭐ {agent.rating}</span>
                </div>
              </div>
              
              <div className="agentInfo">
                <h3>{agent.name}</h3>
                <p className="title">{agent.title}</p>
                <p className="experience">{agent.experience} of experience</p>
                
                <div className="specialties">
                  <h4>Specialties:</h4>
                  <div className="tags">
                    {agent.specialties.map((specialty, index) => (
                      <span key={index} className="tag">{specialty}</span>
                    ))}
                  </div>
                </div>

                <p className="bio">{agent.bio}</p>
                
                <div className="stats">
                  <div className="stat">
                    <strong>{agent.sales}</strong>
                  </div>
                </div>

                <div className="contact">
                  <div className="contactInfo">
                    <p>📞 {agent.phone}</p>
                    <p>✉️ {agent.email}</p>
                  </div>
                  <button className="contactBtn">Contact Agent</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="joinTeam">
          <h2>Join Our Team</h2>
          <p>
            Are you a passionate real estate professional looking to join a winning team? 
            We're always looking for talented agents to join LamaEstate.
          </p>
          <button className="joinBtn">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default AgentsPage;