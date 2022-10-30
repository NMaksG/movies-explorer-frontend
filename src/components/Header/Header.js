import './Header.css';
import logoHeader from '../../images/header-icon.svg';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderMovies from './HeaderMovies';
import HeaderMobile from '../HeaderMobile/HeaderMobile';

function Header({ onMobileMenuOpen, isMenuOpen, onMobileMenuClose }) {
  
  let location = useLocation();

  return (
    <header className={
      (location.pathname === "/signin"
      || location.pathname === "/signup")
      ? "header header_auth"
      : location.pathname === "/"
      ? "header header_about"
      : "header"}>
      <Switch>
        <Route exact path="/">
          <Link className="header__link-logo" to="/">
            <img className="header__logo" src={logoHeader} alt="Логотип шапки"/>
          </Link>
        <div className="header__nav header__nav_rigth">
          <Link className="header__link" to="/signup">
            Регистрация
          </Link>
          <Link className="header__link header__link_login" to="/signin">
            Войти
          </Link>
            {/* <button
              className="header__button header__button_about"
              type="button"
              aria-label="Войти"
              // onClick={}
            >
              Войти
            </button> */}
        </div>
        </Route>
        <Route path="/movies">
          <HeaderMovies
            onMobileMenuOpen={onMobileMenuOpen}
          />
          <HeaderMobile
            isMenuOpen={isMenuOpen}
            onMobileMenuClose={onMobileMenuClose}
           />
        </Route>
        <Route path="/saved-movies">
          <HeaderMovies
            onMobileMenuOpen={onMobileMenuOpen}
          />
           <HeaderMobile
            isMenuOpen={isMenuOpen}
            onMobileMenuClose={onMobileMenuClose}
           />
        </Route>
        <Route path="/profile">
          <HeaderMovies
            onMobileMenuOpen={onMobileMenuOpen}
          />
           <HeaderMobile
            isMenuOpen={isMenuOpen}
            onMobileMenuClose={onMobileMenuClose}
           />
        </Route>
        <Route path="/signin">
          <div className="header__container-auth">
            <Link className="header__link-logo header__link-logo_auth" to="/">
              <img className="header__logo" src={logoHeader} alt="Логотип шапки"/>
            </Link>
            <h1 className="header__title">Рады видеть!</h1>
          </div>
        </Route>
        <Route path="/signup">
          <div className="header__container-auth">
            <Link className="header__link-logo header__link-logo_auth" to="/">
              <img className="header__logo" src={logoHeader} alt="Логотип шапки"/>
            </Link>
            <h1 className="header__title">Добро пожаловать!</h1>
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;