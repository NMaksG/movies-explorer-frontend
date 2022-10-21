import './Header.css';
import logoHeader from '../../images/logoHeader.png';
import { Route, Switch } from 'react-router-dom';
import Links from '../common/Link';
import Button from '../common/Button';


function Header() {
  return (
    <header className="header">
      <Switch>
        <Route exact path="/">
          <Links
            classN="header__link"
            textLink={<img className="header__logo" src={logoHeader} alt="Логотип шапки"/>}
            way={"/"}
          />
          <div className="header__auth">
          <Links
            classN="header__link"
            textLink="Регистрация"
            way={"/signup"}
            />
          <Button
            classN="header__button"
            text="Войти"
          />
          </div>
        </Route>
        <Route path="/movies">
        </Route>
      </Switch>
    </header>
  );
}

export default Header;