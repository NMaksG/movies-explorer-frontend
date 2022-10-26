import './Header.css';
import logoHeader from '../../images/header-icon.svg';
import headerButton from '../../images/header-button.svg';
import { Link } from 'react-router-dom';


function HeaderMovies() {
  return (
    <>
      <Link className="header__link-logo" to="/">
        <img className="header__logo" src={logoHeader} alt="Логотип шапки"/>
      </Link>
      <div className="header__nav">
        <Link className="header__link header__link_movies" to="/movies">
          Фильмы
        </Link>
        <Link className="header__link header__link_save-movies" to="/saved-movies">
          Сохраненные фильмы
        </Link>
      </div>
      <div className="heder__nav header__nav_rigth">
        <button
          className="header__button header__button_movies"
          type="button"
          aria-label="Аккаунт"
          // onClick={}
        >
          <img className="header__button_icon" src={headerButton} alt="Иконка кнопки"/>
          Аккаунт
        </button>
      </div>
    </>
  );
}

export default HeaderMovies;