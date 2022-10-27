import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { useState } from 'react';

function App() {

  const [isMobileMenu, setIsMobileMenu] = useState(false);

  function handleMobileOpenMenu() {
    setIsMobileMenu(true);
  }

  function handleMobileCloseMenu() {
    setIsMobileMenu(false);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/movies">
          <Movies
            onMobileMenuOpen={handleMobileOpenMenu}
            onMobileMenuClose={handleMobileCloseMenu}
            isMenuOpen={isMobileMenu}
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
            onMobileMenuOpen={handleMobileOpenMenu}
            onMobileMenuClose={handleMobileCloseMenu}
            isMenuOpen={isMobileMenu}
          />
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/signin">
          <Login/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
