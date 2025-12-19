import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import DOMPurify from "dompurify";
import { AuthContext } from "../../context/AuthContext";
import Card from "../../components/card/Card";

export default function SinglePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [similarPosts, setSimilarPosts] = useState([]);
  const [nearbyPosts, setNearbyPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: property.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await apiRequest.get(`/post/${id}`);
        setProperty(response.data);
        setSaved(response.data.isSaved);
      } catch (err) {
        console.error("Error fetching property:", err);
        setError("Failed to load property details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (!property) return;

      try {
        // Fetch Similar Properties
        const similarRes = await apiRequest.get(`/post/${property.id}/similar`);
        setSimilarPosts(similarRes.data);

        // Fetch Nearby Properties if lat/lng are available
        if (property.latitude && property.longitude) {
          const nearbyRes = await apiRequest.get(`/post/nearby?lat=${property.latitude}&lng=${property.longitude}`);
          // Filter out the current property from nearby results if it shows up
          const filteredNearby = nearbyRes.data.filter(p => p.id !== property.id);
          setNearbyPosts(filteredNearby);
        }
      } catch (err) {
        console.error("Error fetching recommendations:", err);
      }
    };

    fetchRecommendations();
  }, [property]);

  if (loading) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '48px',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px'
      }}>
        <p style={{ color: '#666', fontSize: '18px' }}>Loading property details...</p>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '48px',
        backgroundColor: '#fef2f2',
        borderRadius: '12px',
        border: '1px solid #fecaca'
      }}>
        <p style={{ color: '#dc2626', fontSize: '18px' }}>{error || "Property not found"}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 20px',
          backgroundColor: '#f3f4f6',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '24px',
          fontSize: '16px',
          color: '#333'
        }}
      >
        ← Back to Listings
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        {/* Main Content */}
        <div>
          {/* Image Gallery */}
          <div style={{ marginBottom: '32px' }}>
            {property.postDetail?.images && property.postDetail.images.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: '8px',
                height: '400px',
                borderRadius: '12px',
                overflow: 'hidden'
              }}>
                <div style={{
                  backgroundImage: `url(${property.postDetail.images[0]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
                <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '8px' }}>
                  {property.postDetail.images.slice(1, 3).map((img, index) => (
                    <div key={index} style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} />
                  ))}
                </div>
              </div>
            ) : (
              <div style={{
                height: '400px',
                backgroundColor: '#e5e7eb',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                fontSize: '18px'
              }}>
                No Images Available
              </div>
            )}
          </div>

          {/* Property Info */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
              {property.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '18px' }}>📍</span>
              <span style={{ fontSize: '18px', color: '#666' }}>{property.address}</span>
            </div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fbbf24', marginBottom: '24px' }}>
              ${property.price.toLocaleString()}
            </div>

            {property.postDetail?.desc && (
              <div style={{
                padding: '20px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                marginBottom: '24px'
              }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(property.postDetail.desc),
                  }}
                  style={{ color: '#666', lineHeight: '1.6' }}
                />
              </div>
            )}
          </div>

          {/* Similar Properties Section */}
          {similarPosts.length > 0 && (
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
                Similar Properties
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {similarPosts.map(post => (
                  <Card key={post.id} item={post} />
                ))}
              </div>
            </div>
          )}

          {/* Nearby Properties Section */}
          {nearbyPosts.length > 0 && (
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
                Nearby Properties
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nearbyPosts.map(post => (
                  <Card key={post.id} item={post} />
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div>
          {/* Property Features */}
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '24px'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
              Property Details
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>🛏️ Bedrooms:</span>
                <span style={{ fontWeight: '600' }}>{property.bedroom}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>🚿 Bathrooms:</span>
                <span style={{ fontWeight: '600' }}>{property.bathroom}</span>
              </div>
              {property.postDetail?.size && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666' }}>📐 Size:</span>
                  <span style={{ fontWeight: '600' }}>{property.postDetail.size} sqft</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>🏠 Type:</span>
                <span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{property.property}</span>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          {property.postDetail && (
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              marginBottom: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
                Features & Amenities
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {property.postDetail.utilities && (
                  <div>
                    <span style={{ color: '#666', fontSize: '14px' }}>⚡ Utilities:</span>
                    <p style={{ margin: '4px 0 0 0', fontWeight: '500' }}>{property.postDetail.utilities}</p>
                  </div>
                )}
                {property.postDetail.pet && (
                  <div>
                    <span style={{ color: '#666', fontSize: '14px' }}>🐕 Pet Policy:</span>
                    <p style={{ margin: '4px 0 0 0', fontWeight: '500' }}>{property.postDetail.pet}</p>
                  </div>
                )}
                {property.postDetail.income && (
                  <div>
                    <span style={{ color: '#666', fontSize: '14px' }}>💰 Income Requirement:</span>
                    <p style={{ margin: '4px 0 0 0', fontWeight: '500' }}>{property.postDetail.income}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Nearby Places */}
          {property.postDetail && (
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              marginBottom: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
                Nearby Places
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {property.postDetail.school && (
                  <div>
                    <span style={{ color: '#666', fontSize: '14px' }}>🏫 School:</span>
                    <p style={{ margin: '4px 0 0 0', fontWeight: '500' }}>{property.postDetail.school}</p>
                  </div>
                )}
                {property.postDetail.bus && (
                  <div>
                    <span style={{ color: '#666', fontSize: '14px' }}>🚌 Bus Stop:</span>
                    <p style={{ margin: '4px 0 0 0', fontWeight: '500' }}>{property.postDetail.bus}</p>
                  </div>
                )}
                {property.postDetail.restaurant && (
                  <div>
                    <span style={{ color: '#666', fontSize: '14px' }}>🍽️ Restaurant:</span>
                    <p style={{ margin: '4px 0 0 0', fontWeight: '500' }}>{property.postDetail.restaurant}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button style={{
              width: '100%',
              padding: '16px',
              backgroundColor: '#fbbf24',
              color: '#333',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              💬 Send Message
            </button>
            <button
              onClick={handleSave}
              style={{
                width: '100%',
                padding: '16px',
                backgroundColor: saved ? "#fece51" : "white",
                color: '#333',
                border: '1px solid #fece51',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
              {saved ? "❤️ Property Saved" : "🤍 Save Property"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
