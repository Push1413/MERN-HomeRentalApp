import SearchBar from "../../components/searchBar/SearchBar";
import { useState, useEffect } from "react";
import apiRequest from "../../lib/apiRequest";

function HomePage() {
  const [stats, setStats] = useState({
    totalProperties: 0,
    totalUsers: 0,
    yearsOfExperience: 16,
    awards: 200
  });
  const [featuredProperty, setFeaturedProperty] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch statistics
        const statsResponse = await apiRequest.get("/post/stats");
        setStats(statsResponse.data);
        
        // Fetch a featured property for the image
        const propertiesResponse = await apiRequest.get("/post?limit=1");
        if (propertiesResponse.data.length > 0) {
          setFeaturedProperty(propertiesResponse.data[0]);
        }
      } catch (err) {
        console.error("Error fetching homepage data:", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{display: 'flex', gap: '40px', alignItems: 'center', minHeight: '70vh'}}>
      <div style={{flex: 1, paddingRight: '40px'}}>
        <h1 style={{
          fontSize: '48px', 
          fontWeight: 'bold', 
          color: '#333', 
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          Find Real Estate & Get Your Dream Place
        </h1>
        <p style={{
          fontSize: '18px', 
          color: '#666', 
          lineHeight: '1.6', 
          marginBottom: '30px'
        }}>
          Discover your perfect home with our comprehensive real estate platform. 
          Whether you're looking for a cozy apartment, spacious house, or luxury condo, 
          we connect you with the best properties in your desired location.
        </p>
        
        <SearchBar />
        
        <div style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: '40px',
          gap: '20px'
        }}>
          <div style={{textAlign: 'center'}}>
            <h3 style={{fontSize: '36px', fontWeight: 'bold', color: '#fbbf24', margin: '0 0 8px 0'}}>
              {stats.yearsOfExperience}+
            </h3>
            <p style={{color: '#666', margin: 0, fontSize: '16px'}}>Years of Experience</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <h3 style={{fontSize: '36px', fontWeight: 'bold', color: '#fbbf24', margin: '0 0 8px 0'}}>
              {stats.awards}+
            </h3>
            <p style={{color: '#666', margin: 0, fontSize: '16px'}}>Awards Gained</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <h3 style={{fontSize: '36px', fontWeight: 'bold', color: '#fbbf24', margin: '0 0 8px 0'}}>
              {stats.totalProperties}+
            </h3>
            <p style={{color: '#666', margin: 0, fontSize: '16px'}}>Properties Available</p>
          </div>
        </div>
      </div>
      
      <div style={{
        flex: 1, 
        backgroundColor: '#fcf5f3', 
        borderRadius: '12px',
        padding: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px'
      }}>
        {featuredProperty ? (
          <div style={{
            width: '100%',
            height: '300px',
            backgroundImage: `url(${featuredProperty.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            position: 'relative'
          }}>
            <div style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              color: 'white',
              padding: '20px',
              borderRadius: '0 0 8px 8px',
              width: '100%'
            }}>
              <h4 style={{margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600'}}>
                {featuredProperty.title}
              </h4>
              <p style={{margin: '0', fontSize: '14px', opacity: 0.9}}>
                📍 {featuredProperty.address}
              </p>
              <p style={{margin: '8px 0 0 0', fontSize: '16px', fontWeight: 'bold'}}>
                ${featuredProperty.price.toLocaleString()}
              </p>
            </div>
          </div>
        ) : (
          <div style={{
            width: '100%',
            height: '300px',
            backgroundColor: '#e5e7eb',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '18px'
          }}>
            Loading Featured Property...
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage;