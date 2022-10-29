import './HeaderMobile.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';


function HeaderMobile({ isMenuOpen, onMobileMenuClose }) {

  function handleMenuClickClose() {
    onMobileMenuClose();
  }

  return (
    <div className={`header-mobile ${isMenuOpen ? "header-mobile_active" : ""}`}>
      <div className="header-mobile__container">
        <button
          className="header-mobile__button-close"
          type="button"
          aria-label="Закрыть"
          onClick={handleMenuClickClose}
        >
        </button>
        <Link className="header-mobile__link" to="/">
          Главная
        </Link>
        <Navigation
          name="-mobile"
          onMobileMenuClose={onMobileMenuClose}
          isMenuOpen={isMenuOpen}
          />
      </div>
    </div>
  );
}

export default HeaderMobile;