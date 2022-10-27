import './Header.css';
import logoHeader from '../../images/header-icon.svg';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderMovies from './HeaderMovies';


function Header({ name, onMobileMenuOpen }) {
  return (
    <header className={`header header_${name}`}>
      <Switch>
        <Route exact path="/">
          <Link className="header__link-logo" to="/">
            <img className="header__logo" src={logoHeader} alt="Логотип шапки"/>
          </Link>
        <div className="header__nav header__nav_rigth">
          <Link className="header__link" to="/signup">
            Регистрация
          </Link>
            <button
              className="header__button header__button_about"
              type="button"
              aria-label="Войти"
              // onClick={}
            >
              Войти
            </button>
        </div>
        </Route>
        <Route path="/movies">
          <HeaderMovies
            onMobileMenuOpen={onMobileMenuOpen}
          />
        </Route>
        <Route path="/saved-movies">
          <HeaderMovies
            onMobileMenuOpen={onMobileMenuOpen}
          />
        </Route>
        <Route path="/profile">
          <Link className="header__link-logo" to="/">
            <img className="header__logo" src={logoHeader} alt="Логотип шапки"/>
          </Link>
        </Route>
        <Route path="/signin">
          <Link className="header__link-logo" to="/">
            <img className="header__logo" src={logoHeader} alt="Логотип шапки"/>
          </Link>
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