import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, iconDelMovie, isloading, errorMessage, onClick, pagination }) {
  
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
              key={item.id}
              movie={item}
              iconDelMovie={iconDelMovie}
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
                onClick={onClick}
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