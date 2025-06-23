import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.js';
import './FlickFinder.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FlickFinder = () => {
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  const handleChange = (direction) => {
    setId((prev) => (prev + direction + 4) % 4);
  };

  const handleDotClick = (index) => {
    setId(index);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setId((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timerId);
  }, []);

  const classNames = [
    'https://t4.ftcdn.net/jpg/05/18/41/91/360_F_518419158_yXXBww2r5Z3XoutBxRX8KHNZOpPjhC03.jpg',
    'https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1410.jpg',
    'https://img.freepik.com/premium-vector/abstract-red-light-hexagon-line-grey-modern-luxury-futuristic_33869-1345.jpg?semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149142669.jpg',
  ];

  return (
    <div
      className="flick-container"
      style={{ backgroundImage: `url(${classNames[id]})` }}
    >
      <Header />
      <button onClick={() => handleChange(-1)} className="nav-button left">
        <ArrowBackIosNewIcon />
      </button>
      <div className="text-content">
        <h1 className="head">Bring the Big Screen to Your Screen</h1>
        <p className="para1">
          Discover, critique, and celebrate movies with honest reviews and
          fresh takes on every film.
        </p>
        <button className="discover" onClick={() => navigate('/Movies')}>
          Discover More
        </button>
      </div>
      <button onClick={() => handleChange(1)} className="nav-button right">
        <ArrowForwardIosIcon />
      </button>
      <div className="carousel-dots">
        {classNames.map((_, index) => (
          <span
            key={index}
            className={`dot ${id === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FlickFinder;