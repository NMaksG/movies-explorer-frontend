import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  movies,
  iconDelMovie,
  iconActiveLikeMovie,
  isloading,
  errorMessage,
  onButtonPaginationClick,
  pagination,
  onButtonMovieClick,
  savedMovies,
  pageSavedMovies
}) {
  
  const { pathname } = useLocation();
  return (
    <section className="elements">
      {isloading
        ? <Preloader />
        : errorMessage
        ? <p className="elements__error">{errorMessage}</p>
        : <ul className="elements__element">
          { movies.map((item) =>
          (
            <MoviesCard
              key={pageSavedMovies ? item._id : item.id}
              movie={item}
              savedMovies={savedMovies}
              iconDelMovie={iconDelMovie}
              iconActiveLikeMovie={iconActiveLikeMovie}
              onButtonMovieClick={onButtonMovieClick}
              pageSavedMovies={pageSavedMovies}
            />
          ))}
        </ul>
      }  
      {
        pathname === '/movies'
          ? <div className="elements__item_withButton">
            {movies.length < pagination.length &&
              <button
                className="elements__button"
                type="button"
                onClick={onButtonPaginationClick}
              >
                Ещё
              </button>
            }
            </div>
          : <div className="elements__item">
            </div>
      }
    </section>
  );
}

export default MoviesCardList;