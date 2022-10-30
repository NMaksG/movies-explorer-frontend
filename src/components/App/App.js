import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { useState } from 'react';
import Error from '../Error/Error';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {

  const location = useLocation();
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  function handleMobileOpenMenu() {
    setIsMobileMenu(true);
  }

  function handleMobileCloseMenu() {
    setIsMobileMenu(false);
  }

  return (
    <div className="page">
      <Header
        onMobileMenuOpen={handleMobileOpenMenu}
        onMobileMenuClose={handleMobileCloseMenu}
        isMenuOpen={isMobileMenu}
      />
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/movies">
          <Movies
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
          />
        </Route>
        <Route path="/profile">
          <Profile
          />
        </Route>
        <Route path="/signin">
          <Login/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
      </Switch>
      { (location.pathname === "/"
      || location.pathname === "/movies"
      || location.pathname === "/saved-movies")
      && <Footer />
      }
      <Error/>
    </div>
  );
}

export default App;
