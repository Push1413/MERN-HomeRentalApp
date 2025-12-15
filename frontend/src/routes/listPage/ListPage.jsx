import { useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import apiRequest from "../../lib/apiRequest";

function ListPage() {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const city = searchParams.get("city") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError("");
        
        // Build query parameters
        const params = new URLSearchParams();
        if (city) params.append("city", city);
        if (minPrice) params.append("minPrice", minPrice);
        if (maxPrice) params.append("maxPrice", maxPrice);
        
        const response = await apiRequest.get(`/post?${params.toString()}`);
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [city, minPrice, maxPrice]);

  return (
    <div style={{padding: '20px', maxWidth: '1200px', margin: '0 auto'}}>
      <div style={{marginBottom: '32px'}}>
        <h1 style={{fontSize: '32px', fontWeight: 'bold', color: '#333', marginBottom: '16px'}}>
          Property Listings
        </h1>
        {(city || minPrice || maxPrice) && (
          <div style={{padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px', marginBottom: '24px'}}>
            <h3 style={{fontSize: '18px', marginBottom: '8px', color: '#444'}}>Search Filters:</h3>
            {city && <p style={{margin: '4px 0', color: '#666'}}>Location: {city}</p>}
            {minPrice && <p style={{margin: '4px 0', color: '#666'}}>Min Price: ${parseInt(minPrice).toLocaleString()}</p>}
            {maxPrice && <p style={{margin: '4px 0', color: '#666'}}>Max Price: ${parseInt(maxPrice).toLocaleString()}</p>}
            <p style={{margin: '8px 0 0 0', fontWeight: '600', color: '#333'}}>
              Found {properties.length} properties
            </p>
          </div>
        )}
      </div>

      {loading ? (
        <div style={{
          textAlign: 'center',
          padding: '48px',
          backgroundColor: '#f9f9f9',
          borderRadius: '12px'
        }}>
          <p style={{color: '#666', fontSize: '18px'}}>Loading properties...</p>
        </div>
      ) : error ? (
        <div style={{
          textAlign: 'center',
          padding: '48px',
          backgroundColor: '#fef2f2',
          borderRadius: '12px',
          border: '1px solid #fecaca'
        }}>
          <p style={{color: '#dc2626', fontSize: '18px'}}>{error}</p>
        </div>
      ) : (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px'}}>
          {properties.length > 0 ? (
            properties.map((property) => (
              <div key={property.id} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}>
                <div style={{
                  height: '200px',
                  backgroundImage: property.img ? `url(${property.img})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: property.img ? 'transparent' : '#e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '16px'
                }}>
                  {!property.img && 'Property Image'}
                </div>
                
                <div style={{padding: '20px'}}>
                  <h3 style={{fontSize: '20px', fontWeight: '600', color: '#333', marginBottom: '8px'}}>
                    {property.title}
                  </h3>
                  <p style={{color: '#666', marginBottom: '12px', fontSize: '14px'}}>
                    📍 {property.address}
                  </p>
                  
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
                    <span style={{fontSize: '24px', fontWeight: 'bold', color: '#fbbf24'}}>
                      ${property.price.toLocaleString()}
                    </span>
                    {property.postDetail?.size && (
                      <span style={{fontSize: '14px', color: '#666'}}>
                        {property.postDetail.size} sqft
                      </span>
                    )}
                  </div>
                  
                  <div style={{display: 'flex', gap: '16px', marginBottom: '16px'}}>
                    <span style={{fontSize: '14px', color: '#666'}}>
                      🛏️ {property.bedroom} beds
                    </span>
                    <span style={{fontSize: '14px', color: '#666'}}>
                      🚿 {property.bathroom} baths
                    </span>
                  </div>
                  
                  <div style={{marginBottom: '16px'}}>
                    <span style={{
                      fontSize: '12px', 
                      color: '#666', 
                      backgroundColor: '#f3f4f6', 
                      padding: '4px 8px', 
                      borderRadius: '12px',
                      textTransform: 'capitalize'
                    }}>
                      {property.property}
                    </span>
                  </div>
                  
                  <Link 
                    to={`/property/${property.id}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '12px',
                      backgroundColor: '#fbbf24',
                      color: '#333',
                      borderRadius: '6px',
                      fontWeight: '600',
                      fontSize: '16px',
                      textAlign: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
          ))
            ) : (
              <div style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '48px',
                backgroundColor: '#f9f9f9',
                borderRadius: '12px'
              }}>
                <h3 style={{fontSize: '24px', color: '#666', marginBottom: '16px'}}>No Properties Found</h3>
                <p style={{color: '#888', fontSize: '16px'}}>
                  Try adjusting your search criteria to find more properties.
                </p>
              </div>
            )}
          </div>
        )
      }
    </div>
  );
}

export default ListPage;