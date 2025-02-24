
import { useParams, Link } from "react-router-dom";
import React, {useEffect } from "react";
import animejson from "./animeData";



function AnimeDetails() {
  const { id } = useParams();
  const anime = animejson[id];

 
  useEffect(() => {

    document.body.style.backgroundImage = `url(${anime.image_url})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";

    return () => {
      document.body.style.backgroundImage = ""; 
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundAttachment = "";
    };
  }, [anime]); 

  if (!anime) {
    return <h2 className="text-center mt-5">Anime Not Found</h2>;
  }

  return (
    <div className="container mt-5">
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)", 
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ color: "red" }}>{anime.name}</h2>
        <img
          src={anime.image_url}
          className="img"
          alt={anime.name}
          style={{ maxWidth: "400px", borderRadius: "10px" }}
        />
        <p style={{ color: "white" }}>
          <strong>Genre:</strong> {anime.genre}
        </p>
        <p style={{ color: "white" }}>
          <strong>Type:</strong> {anime.type}
        </p>
        <p style={{ color: "white" }}>
          <strong>Status:</strong> {anime.status}
        </p>
        <p style={{ color: "white" }}>
          <strong>Seasons:</strong> {anime.season.join(", ")}
        </p>
        <p style={{ color: "white" }}>
          <strong>Description:</strong> {anime.description}
        </p>
        <Link to="/anime" className="btn btn-secondary mt-3">
          Back to Anime
        </Link>
      </div>
    </div>
  );
}

export default AnimeDetails;