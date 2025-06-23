import './Movies.css';
import { Component } from 'react';
import TabItem from './tableitem.js';
import MovieCard from './Moviecard.js';
import FAQ from './faq.js'; // Import the FAQ component
import Footer from './Footer';
import Slider from './slider.js';

const tabsList = [
  { id: 'MARVEL', displayName: 'Marvel' },
  { id: 'FUNNY', displayName: 'Funny' },
  { id: 'ANIMATION', displayName: 'Animation' },
  { id: 'WEB SERIES', displayName: 'Web Series' },
];

class Movies extends Component {
  state = {
    search: 'Marvel',
    moviesList: [],
    isLoading: false,
    displayCount: 8,
  };

  componentDidMount() {
    this.getMovieList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.getMovieList();
    }
  }

  changeSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.getMovieList();
    }
  };

  changeType = (id) => {
    const selectedTab = tabsList.find((tab) => tab.id === id);
    this.setState({
      search: selectedTab.displayName,
    });
  };

  getMovieList = async () => {
    try {
      this.setState({ isLoading: true });
      const { search } = this.state;
      const apiKey = '71d76b30';
      const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();

      if (data.Search) {
        const updatedMovies = data.Search.map((each) => ({
          id: each.imdbID,
          title: each.Title,
          year: each.Year,
          poster: each.Poster,
          imdbRating: each.imdbRating || 'N/A',
          type: each.Type,
        }));
        this.setState({ moviesList: updatedMovies, displayCount: 8 });
      } else {
        this.setState({ moviesList: [], displayCount: 8 });
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      this.setState({ moviesList: [], displayCount: 8 });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleShowMore = () => {
    this.setState((prevState) => ({
      displayCount: prevState.moviesList.length,
    }));
  };

  handleShowLess = () => {
    this.setState({ displayCount: 8 });
  };

  render() {
    const { search, moviesList, isLoading, displayCount } = this.state;
    const displayedMovies = moviesList.slice(0, displayCount);
    const hasMoreMovies = displayCount < moviesList.length;
    const isShowingAll = displayCount === moviesList.length;

    return (
      <div className="bg">
        <h1 className="head">MOVIE LIST</h1>
        <p className="date-time">8:26 PM IST on Sunday, June 15, 2025</p>
        <ul className="tabs-container">
          {tabsList.map((each) => (
            <TabItem
              changeType={this.changeType}
              details={each}
              key={each.id}
            />
          ))}
        </ul>
        <div className="search-container">
          <img
            src="https://static-00.iconduck.com/assets.00/search-icon-512x497-4nz4jz2p.png"
            alt="search"
            className="search-icon"
          />
          <input
            type="search"
            value={search}
            onChange={this.changeSearch}
            onKeyDown={this.handleKeyPress}
            placeholder="Search here..."
            className="search-input"
          />
          <img
            src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png"
            alt="mic"
            className="mic-icon"
          />
        </div>
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <>
            <ul className="movies-container">
              {displayedMovies.map((each) => (
                <MovieCard details={each} key={each.id} />
              ))}
            </ul>
            {moviesList.length > 8 && (
              isShowingAll ? (
                <button className="show-less-button" onClick={this.handleShowLess}>
                  Show Less
                </button>
              ) : hasMoreMovies ? (
                <button className="show-more-button" onClick={this.handleShowMore}>
                  Show More
                </button>
              ) : null
            )}
            <Slider/>
            <FAQ /> {/* Add the FAQ component here */}
          </>
        )}
        <hr style={{ border: '2px solid white', margin: '2rem 0', width: '100%' }} />

      <Footer />
      </div>
    );
  }
}

export default Movies;