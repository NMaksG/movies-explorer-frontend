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
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorsMessage, setErrorsMessage] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const history = useHistory();
  const pageSavedMovies = true;

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
        setLoggedIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        localStorage.clear();
      });
    }, [loggedIn]);

  useEffect(() => {
    if(loggedIn) {
      history.push('/movies');
    }
  }, [loggedIn, history]);

  function handleLogin(data) {
    return auth.authorize(data)
      .then((res) => {
        setLoggedIn(true);
        // setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
        err === "Ошибка: 401"
        ? setErrorsMessage('Вы ввели неправильный логин или пароль')
        : setErrorsMessage('При авторизации произошла ошибка');
      });
  }
  
  function handleRegister(data) {
    return auth.register(data)
      .then((res) => {
        setLoggedIn(true);
        // setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
        err === "Ошибка: 409" 
        ? setErrorsMessage('Пользователь с таким Email уже существует')
        : setErrorsMessage('При регистрации пользователя произошла ошибка');
      });
  }

  function handleUpdateUser(data) {
    MainApi.setUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        setErrorsMessage('Обновление профиля прошло успешно');
      })
      .catch((err) => {
        console.log(err);
        err === "Ошибка: 409" 
        ? setErrorsMessage('Пользователь с таким Email уже существует')
        : setErrorsMessage('При обновлении профиля произошла ошибка');
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
  
    // const handleSavedAndDeleteMovies = (data) => {
    //   const isLikedAndSaved = likedAndSavedMovies.some(
    //     (m) => data.movieId === m.movieId,
    //   );
  
    //   if (!isLikedAndSaved) {
    //     mainApi
    //       .likedAndSavedMovie(data)
    //       .then((res) => {
    //         setLikedAndSavedMovies([res, ...likedAndSavedMovies]);
    //       })
    //       .catch((err) => {
    //         if (err === 'Ошибка: 401') {
    //           setIsLogin(false);
    //           setMovies([]);
    //           setLikedAndSavedMovies([]);
    //           setSavedMoviesForRender([]);
    //           history.push('/');
    //           localStorage.clear();
    //         } else {
    //           setIsPopupErrorOpen(true);
    //         }
    //         console.log(err);
    //       });
    //   }
  
    //   if (isLikedAndSaved) {
    //     const movie = likedAndSavedMovies.find((i) => i.movieId === data.movieId);
    //     mainApi
    //       .deleteSavedMovie(movie)
    //       .then((res) => {
    //         setLikedAndSavedMovies(
    //           likedAndSavedMovies.filter((m) => m._id !== movie._id && res),
    //         );
    //       })
    //       .catch((err) => {
    //         if (err === 'Ошибка: 401') {
    //           setIsLogin(false);
    //           setMovies([]);
    //           setLikedAndSavedMovies([]);
    //           setSavedMoviesForRender([]);
    //           history.push('/');
    //           localStorage.clear();
    //         } else {
    //           setIsPopupErrorOpen(true);
    //         }
    //         console.log(err);
    //       });
    //   }
    // };
  
    // const handleRemoveSavedMovies = (data) => {
    //   mainApi
    //     .deleteSavedMovie(data)
    //     .then((res) => {
    //       setLikedAndSavedMovies(
    //         likedAndSavedMovies.filter((m) => m._id !== data._id && res),
    //       );
    //     })
    //     .catch((err) => {
    //       setIsPopupErrorOpen(true);
    //       console.log(err);
    //     });
    // };

  function handleLikeMovies(movie) {
    const isLiked = savedMovies.some((item) => item.movieId === movie.id);
    if (!isLiked) {
      MainApi.setLikeMovies(movie)
        .then((res) => {
          // const userMovies = res.filter((movie) => movie.owner === currentUser._id)
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => {
          console.log(err);
      });
   }

    if (isLiked) {
      const savedMovie = savedMovies.find((item) => item.movieId === movie.id);
      // MainApi.delMovies(savedMovie)
      // .then((res) => {
      //   setSavedMovies((savedMovies) => savedMovies.filter((item) => !(item.movieId === movie.id)));
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
      handleDelMovies(savedMovie);
    }
  }

  function handleDelMovies(movie) {
    const savedMovie = savedMovies.find((item) => item.movieId === movie.movieId);
    MainApi.delMovies(savedMovie)
      .then((res) => {
        setSavedMovies((savedMovies) => savedMovies.filter((item) => !(item.movieId === movie.movieId)));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    MainApi.getInitialSavedMovies()
      .then((res) => {
        setSavedMovies(res.filter((movie) => movie.owner === currentUser._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser._id]);

//   useEffect(() => {
//     setSavedMovies(savedMovies);
// }, [savedMovies, setSavedMovies]);

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
            onButtonMovieClick={handleLikeMovies}
            savedMovies={savedMovies}
            />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            pageSavedMovies={pageSavedMovies}
            onDelMovie={handleDelMovies}
            />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onLogout={handleLogout}
            onUpdateUser={handleUpdateUser}
            errorsMessage={errorsMessage}
            setErrorsMessage={setErrorsMessage}
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
            <Login
              onLogin={handleLogin}
              errorsMessage={errorsMessage}
              setErrorsMessage={setErrorsMessage}
            />
          </Route>
          <Route path="/signup">
            <Register
              onRegister={handleRegister}
              errorsMessage={errorsMessage}
              setErrorsMessage={setErrorsMessage}
            />
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
