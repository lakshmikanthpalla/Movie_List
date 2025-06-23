import './Movies.css';
import { useState } from 'react';

const MovieCard = (props) => {
  const { details } = props;
  const { title, year, poster, imdbRating, type } = details;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <li className="movie-item">
      <img src={poster} alt={`${title} poster`} className="movie-poster" />
      <div className="movie-details">
        <div className="movie-info">
          <h1 className="movie-title">{title}</h1>
          <p className="type">Type: {type}</p>
          <p className="para">Year: {year}</p>
          <p className="para">Rating: {imdbRating}</p>
        </div>
        <img
          src={
            isFavorite
              ? 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/512px/2764.png' // Red heart
              : 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/bw/512px/1f90e.png' // Grey heart
          }
          alt="favourite"
          className="favourite-icon"
          onClick={toggleFavorite}
        />
      </div>
    </li>
  );
};

export default MovieCard;