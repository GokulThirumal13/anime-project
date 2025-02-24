import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import animejson from './animeData.js';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const filteredAnime = animejson.filter((anime) =>
    anime.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewAllAnime = () => {
    if (isLoggedIn) {
      navigate('/anime'); 
      navigate('/login'); 
    }
  };

  return (
    <div className="container mt-5">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/login" className="nav-link" style={{ color: 'white' }}>Login</Link>
          <Link to="/signup" className="nav-link" style={{ color: 'white' }}>Sign Up</Link>
        </div>
      </nav>

      <h1 className="text-center" style={{ color: 'white' }}>Welcome to Anime Finder</h1>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Search Anime by Name"
          className="form-control"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="text-center mt-4">
        <button onClick={handleViewAllAnime} className="btn btn-primary">
          Weeblist
        </button>
      </div>

      {searchQuery && (
        <div className="anime-grid-container">
          {filteredAnime.length > 0 ? (
            filteredAnime.map((anime, index) => (
              <div key={index} className="anime-box">
                <img src={anime.image_url} alt={anime.name} className="anime-image" />
                <div className="anime-details">
                  <h3>{anime.name}</h3>
                  <p><strong>Genre:</strong> {anime.genre}</p>
                  <p><strong>Type:</strong> {anime.type}</p>
                  <p><strong>Year:</strong> {anime.year}</p>
                  <p><strong>Status:</strong> {anime.status}</p>
                  <p><strong>Description:</strong> {anime.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-3">No anime found. Try a different search!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
