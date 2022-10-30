import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, iconDelMovie }) {
  
  let location = useLocation();
  return (
    <section className="elements">
        <ul className="elements__element">
          { movies.map((item) =>
          (
            <MoviesCard
              key={item._id}
              movie={item}
              iconDelMovie={iconDelMovie}
            />
          ))}
        </ul>
        
        {
          location.pathname === '/movies'
            ? <div className="elements__item_withButton">
                <button className="elements__button" type="button">
                  Ещё
                </button>
              </div>
            : <div className="elements__item">
              </div>
        }
      </section>
  );
}

export default MoviesCardList;