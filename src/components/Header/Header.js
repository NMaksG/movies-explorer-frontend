import './Header.css';
import { useState } from 'react';
import logoHeader from '../../images/header-icon.svg';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderMovies from './HeaderMovies';
import HeaderMobile from '../HeaderMobile/HeaderMobile';

function Header({ loggedIn }) {
  
  const { pathname } = useLocation();
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  function handleMobileOpenMenu() {
    setIsMobileMenu(true);
  }

  function handleMobileCloseMenu() {
    setIsMobileMenu(false);
  }

  return (
    <header className={
      (pathname === "/signin"
      || pathname === "/signup")
      ? "header header_auth"
      : pathname === "/"
      ? "header header_about"
      :(pathname === "/movies"
      || pathname === "/saved-movies"
      || pathname === "/profile")
      ? "header"
      : "header_disable"
    }>
      <Switch>
        <Route exact path="/">
          {loggedIn
            ? <>
              <HeaderMovies
                onMobileMenuOpen={handleMobileOpenMenu}
              />
              <HeaderMobile
                isMenuOpen={isMobileMenu}
                onMobileMenuClose={handleMobileCloseMenu}
              />
            </>
            : <>
              <Link className="header__link-logo" to="/">
                <img className="header__logo" src={logoHeader} alt="Логотип шапки" />
              </Link>
              <div className="header__nav header__nav_rigth">
                <Link className="header__link" to="/signup">
                  Регистрация
                </Link>
                <Link className="header__link header__link_login" to="/signin">
                  Войти
                </Link>
              </div>
            </>
          }
        </Route>
        <Route path="/movies">
          <HeaderMovies
            onMobileMenuOpen={handleMobileOpenMenu}
          />
          <HeaderMobile
            isMenuOpen={isMobileMenu}
            onMobileMenuClose={handleMobileCloseMenu}
           />
        </Route>
        <Route path="/saved-movies">
          <HeaderMovies
            onMobileMenuOpen={handleMobileOpenMenu}
          />
           <HeaderMobile
            isMenuOpen={isMobileMenu}
            onMobileMenuClose={handleMobileCloseMenu}
           />
        </Route>
        <Route path="/profile">
          <HeaderMovies
            onMobileMenuOpen={handleMobileOpenMenu}
          />
           <HeaderMobile
            isMenuOpen={isMobileMenu}
            onMobileMenuClose={handleMobileCloseMenu}
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