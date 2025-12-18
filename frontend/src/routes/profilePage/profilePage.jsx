import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import List from "../../components/list/List";
import { Link, useNavigate } from "react-router-dom";

function ProfilePage() {
  const { currentUser } = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState(null);
  const [savedPosts, setSavedPosts] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiRequest.get("/users/profilePosts");
        setUserPosts(response.data.userPosts);
        setSavedPosts(response.data.savedPosts);
      } catch (err) {
        console.log(err);
      }
    };
    if (currentUser) {
      fetchPosts();
    }
  }, [currentUser]);

  const handleUpdate = () => {
    navigate("/profile/update");
  };

  const handleCreatePost = () => {
    navigate("/add");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', paddingBottom: '16px', borderBottom: '1px solid #e5e7eb' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>User Information</h1>
            <button
              onClick={handleUpdate}
              style={{
                padding: '10px 20px',
                backgroundColor: '#fbbf24',
                color: '#333',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>Update Profile</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            {currentUser ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontWeight: '600', color: '#444', minWidth: '80px' }}>Avatar:</span>
                  <img
                    src={currentUser.avatar || "/noavatar.jpg"}
                    alt="User Avatar"
                    style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontWeight: '600', color: '#444', minWidth: '80px' }}>Username:</span>
                  <span style={{ color: '#666' }}>{currentUser.username}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontWeight: '600', color: '#444', minWidth: '80px' }}>E-mail:</span>
                  <span style={{ color: '#666' }}>{currentUser.email}</span>
                </div>
              </>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '40px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px'
              }}>
                <p style={{ color: '#666', fontSize: '16px' }}>Please log in to view your profile.</p>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #e5e7eb' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>My Listings</h2>
            <button
              onClick={handleCreatePost}
              style={{
                padding: '10px 20px',
                backgroundColor: '#333',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>Create New Post</button>
          </div>

          <div style={{
            padding: '40px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            marginBottom: '32px'
          }}>
            <p style={{ color: '#666', fontSize: '16px' }}>No listings yet. Create your first property listing!</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #e5e7eb' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Saved Properties</h2>
          </div>

          <div style={{
            padding: '40px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px'
          }}>
            {savedPosts && savedPosts.length > 0 ? (
              <List posts={savedPosts} />
            ) : (
              <p style={{ color: '#666', fontSize: '16px' }}>No saved properties yet. Start browsing to save your favorites!</p>
            )}
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '24px' }}>Messages</h2>
          <div style={{
            padding: '40px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px'
          }}>
            <p style={{ color: '#666', fontSize: '16px' }}>No messages yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;