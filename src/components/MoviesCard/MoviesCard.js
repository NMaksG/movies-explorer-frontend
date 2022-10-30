import './MoviesCard.css';

function MoviesCard({ movie, iconDelMovie }) {
  return (
    <li className="elements-item">
      <img
        className="elements-item__img"
        src={movie.pic}
        alt={movie.title}
      />
      <div className="elements-item__group">
        <div className="element-item__row">
          <h2 className="elements-item__title">{movie.title}</h2>
          <button
            className={`elements-item__like elements-item__like_${iconDelMovie}`}
            type="button" aria-label="Лайк"
            // onClick={}          
          >
          </button>
        </div>
          <p className="elements-item__time">{movie.time}</p>
      </div>
    </li>
  );
}

export default MoviesCard;