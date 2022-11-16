import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error from '../Error/Error';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import * as auth from '../../utils/auth.js';
import MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import React from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState({name: '', email: ''});
  const { pathname } = useLocation();
  // const [userInfo, setUserInfo] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState(false);
  const history = useHistory();

  // React.useEffect(() => {
  //   if(loggedIn) {
  //     mainApi.getUserInfo()
  //       .then((res) => {
  //         setCurrentUser(res);
  //         history.push('/movies');
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
        
  //     // api.getInitialCards()
  //     //   .then((res) => {
  //     //     setCards(res);
  //     //   })
  //     //   .catch((err) => {
  //     //     console.log(err);
  //     //   });
  //       }
  //   }, [history, loggedIn]);
  
  useEffect(() => {
    auth.getContent()
      .then((res) => {
        // setUserInfo(res);
        setLoggedIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        localStorage.clear();
      });
    }, []);

  useEffect(() => {
    if(loggedIn) {
      history.push('/movies');
    }
  }, [loggedIn, history]);

  function handleLogin(data) {
    return auth.authorize(data)
      .then((res) => {
      // setUserInfo(res);
        setLoggedIn(true);
      setCurrentUser(res);
      })
      .catch((err) => {
      // setIsInfoTooltipPopupOpen(true);
      // setIsInfoTooltip(false);
        console.log(err);
      });
  }
  
  function handleRegister(data) {
    return auth.register(data)
      .then((res) => {
      // setIsInfoTooltipPopupOpen(true);
      // setIsInfoTooltip(true)
        setLoggedIn(true);
        setCurrentUser(res);
      // history.push('/movies');
      })
      .catch((err) => {
      // setIsInfoTooltipPopupOpen(true);
      // setIsInfoTooltip(false);
        console.log(err);
      });
  }

  function handleUpdateUser(data) {
    MainApi.setUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        setMessage(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    return auth.logout()
      .then((res) => {
        history.push('/');
        setLoggedIn(false);
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onLogout={handleLogout}
            onUpdateUser={handleUpdateUser}
            message={message}
          />
          {/* <Route path="/movies">
            <Movies
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies
              // movies={movies}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onLogout={handleLogout}
            />
          </Route> */}
          <Route path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        { (pathname === "/"
        || pathname === "/movies"
        || pathname === "/saved-movies")
        && <Footer />
        }
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
