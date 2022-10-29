import './Header.css';
import logoHeader from '../../images/header-icon.svg';
import menuIcon from '../../images/menu-icon.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function HeaderMovies({ onMobileMenuOpen }) {

  function handleMenuClick() {
    onMobileMenuOpen();
  }

  return (
    <>
      <Link className="header__link-logo" to="/">
        <img className="header__logo" src={logoHeader} alt="Логотип шапки"/>
      </Link>
      <Navigation />
      <button
        className="header__button header__button-menu"
        type="button"
        aria-label="Меню"
        onClick={handleMenuClick}
      >
        <img className="header__img-menu" src={menuIcon} alt="Ссылка меню"/>
      </button>
    </>
  );
}

export default HeaderMovies;