import './MoviesCard.css';

function MoviesCard({
  movie,
  savedMovies,
  iconDelMovie,
  iconActiveLikeMovie,
  onButtonMovieClick,
  pageSavedMovies
}) {

  const isLiked = savedMovies && savedMovies.some((item) => item.movieId === movie.id);

  function handleButtonClick(evt) {
    evt.preventDefault();
    onButtonMovieClick(movie);
  }

  return (
    <li className="elements-item">
      <img
        className="elements-item__img"
        src={pageSavedMovies ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`}
        alt={movie.nameRU}
      />
      <div className="elements-item__group">
        <div className="element-item__row">
          <h2 className="elements-item__title">{movie.nameRU}</h2>
          <button
            className={`elements-item__like elements-item__like_${isLiked ? iconActiveLikeMovie : iconDelMovie}`}
            type="button" aria-label="Лайк"
            onClick={handleButtonClick}          
          >
          </button>
        </div>
          <p className="elements-item__time">{movie.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;