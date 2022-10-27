// import './.css';
import '../Header/Header.css';
import '../HeaderMobile/HeaderMobile.css';
import headerButton from '../../images/header-button.svg';
import { Link } from 'react-router-dom';

function Navigation({ name, onMobileMenuClose}) {

  function handleMenuClick() {
    onMobileMenuClose();
  }

  return (
    <>
      <nav className={`header__nav header__nav_disable header${name}__nav`}>
        <Link 
          className={`header__link header__link_movies header${name}__link`}
          to="/movies"
          onClick={handleMenuClick}
        >
          Фильмы
        </Link>
        <Link
          className={`header__link header__link_save-movies header${name}__link`}
          to="/saved-movies"
          onClick={handleMenuClick}
        >
          Сохраненные фильмы
        </Link>
      </nav>
      <nav className={`heder__nav header__nav_rigth header__nav_disable header${name}__nav`}>
        <button
          className={`header__button header__button_movies header${name}__button`}
          type="button"
          aria-label="Аккаунт"
          // onClick={}
        >
          <img className="header__button_icon" src={headerButton} alt="Иконка кнопки"/>
          Аккаунт
        </button>
      </nav>
    </>
  );
}

export default Navigation;