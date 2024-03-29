import '../Header/Header.css';
import '../HeaderMobile/HeaderMobile.css';
import headerButton from '../../images/header-button.svg';
import { Link } from 'react-router-dom';

function Navigation({ name, onMobileMenuClose, isMenuOpen }) {

  function handleMenuCloseClick() {
    isMenuOpen &&  onMobileMenuClose();
  }

  return (
    <>
      <nav className={`header__nav header__nav_left header__nav_disable header${name}__nav`}>
        <Link 
          className={`header__link header__link_movies header${name}__link`}
          to="/movies"
          onClick={handleMenuCloseClick}
          >
          Фильмы
        </Link>
        <Link
          className={`header__link header__link_save-movies header${name}__link`}
          to="/saved-movies"
          onClick={handleMenuCloseClick}
          >
          Сохраненные фильмы
        </Link>
      </nav>
      <nav className={`heder__nav header__nav_rigth header__nav_disable header${name}__nav`}>
        <Link
          className={`header__button header__button_movies header${name}__button`}
          to="/profile"
          onClick={handleMenuCloseClick}
        >
          <img className="header__button_icon" src={headerButton} alt="Иконка кнопки"/>
          Аккаунт
        </Link>
      </nav>
    </>
  );
}

export default Navigation;