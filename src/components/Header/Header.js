import './Header.css';
import logoHeader from '../../images/header-icon.svg';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderMovies from './HeaderMovies';


function Header({ name }) {
  return (
    <header className={`header header_${name}`}>
      <Switch>
        <Route exact path="/">
          <Link className="header__link-logo" to="/">
            <img className="header__logo" src={logoHeader} alt="Логотип шапки"/>
          </Link>
        <div className="header__nav header__nav_rigth">
          <Link className="header__link" to="/signin">
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
          <HeaderMovies/>
        </Route>
        <Route path="/saved-movies">
          <HeaderMovies/>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;