import SearchBar from "../../components/searchBar/SearchBar";

function HomePage() {
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
            <h3 style={{fontSize: '36px', fontWeight: 'bold', color: '#fbbf24', margin: '0 0 8px 0'}}>16+</h3>
            <p style={{color: '#666', margin: 0, fontSize: '16px'}}>Years of Experience</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <h3 style={{fontSize: '36px', fontWeight: 'bold', color: '#fbbf24', margin: '0 0 8px 0'}}>200+</h3>
            <p style={{color: '#666', margin: 0, fontSize: '16px'}}>Awards Gained</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <h3 style={{fontSize: '36px', fontWeight: 'bold', color: '#fbbf24', margin: '0 0 8px 0'}}>2000+</h3>
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
          Property Image Placeholder
        </div>
      </div>
    </div>
  )
}

export default HomePage;