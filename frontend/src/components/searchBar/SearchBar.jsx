import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState({
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const handleChange = (e) => {
    setQuery((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <div style={{marginBottom: '30px'}}>
      <form style={{
        border: '2px solid #e5e7eb', 
        display: 'flex', 
        height: '56px', 
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <input 
          type="text"
          name="location" 
          placeholder="City Location"
          onChange={handleChange}
          style={{
            flex: 1, 
            padding: '0 20px', 
            border: 'none', 
            outline: 'none',
            fontSize: '16px'
          }}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
          style={{
            flex: 1, 
            padding: '0 20px', 
            border: 'none', 
            outline: 'none', 
            borderLeft: '1px solid #e5e7eb',
            fontSize: '16px'
          }}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={handleChange}
          style={{
            flex: 1, 
            padding: '0 20px', 
            border: 'none', 
            outline: 'none', 
            borderLeft: '1px solid #e5e7eb',
            fontSize: '16px'
          }}
        />
        <Link 
          to={`/list?city=${query.location}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          style={{
            backgroundColor: '#fbbf24', 
            padding: '0 30px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'background-color 0.2s'
          }}
        >
          <button style={{
            border: 'none', 
            cursor: 'pointer', 
            backgroundColor: 'transparent',
            color: '#333',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            🔍 Search
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;