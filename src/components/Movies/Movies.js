import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState } from 'react';
import MoviesApi from '../../utils/MoviesApi';
import { useEffect } from 'react';
import { useCallback } from 'react';

function Movies({ onButtonMovieClick, savedMovies, loggedIn }) {

  const [movies, setMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const width = window.innerWidth;
  const [pagination, setPagination] = useState(() => {
    if (width < 590) {
      return 5;
    } else if (width <= 768) {
      return 8;
    } else if (width > 768) {
      return 12;
    }});

  const handlePagination = useCallback(() => {
    if (width < 590) {
      setPagination(5);
    } else if (width <= 768) {
      setPagination(8);
    } else if (width > 768) {
      setPagination(12);
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener("resize", function() {
      this.setTimeout(handlePagination, 1000);
    })
  }, [handlePagination]);

  function handleClickPagination() {
    if (width < 590) {
      setPagination(pagination + 1);
    } else if (width <= 768) {
      setPagination(pagination + 2);
    } else if (width > 768) {
      setPagination(pagination + 4);
    }
  }

  function handleCheckedbox() {
    if(isChecked) {
      localStorage.setItem('isChecked', false);
      setIsChecked(JSON.parse(localStorage.getItem('isChecked')));
    } else {
      localStorage.setItem('isChecked', true);
      setIsChecked(JSON.parse(localStorage.getItem('isChecked')));
    }
    filter(localStorage.getItem('inputMovies'));
  }

  function handleGetMovies(inputMovies) {
    if (!movies) {
      setIsLoading(true);
      MoviesApi.getInitialMovies()
      .then((res) => {
          localStorage.setItem('movies', JSON.stringify(res));
          filter(inputMovies);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
        })
        .finally(() => setIsLoading(false));
    }
      filter(inputMovies);
  }

  const filter = useCallback((inputMovies) => {
    let filtered = JSON.parse(localStorage.getItem('movies'));
    handlePagination();
    setErrorMessage('');
    if (filtered) {
      filtered = filtered.filter((element) => element.nameRU
        .toLowerCase()
        .includes(inputMovies.toLowerCase())
        || element.nameEN
        .toLowerCase()
        .includes(inputMovies.toLowerCase())
      );
       
      localStorage.setItem('inputMovies', inputMovies);
      if(filtered.length === 0) {
        setErrorMessage('Ничего не найдено.');
      } 
      
      if(JSON.parse(localStorage.getItem('isChecked'))) {
        filtered = filtered.filter((element) => element.duration <= 40);
      }
      
      setMovies(filtered);
      localStorage.setItem('saveMovies', JSON.stringify(filtered));
    }
  }, [handlePagination]);
  
  useEffect(() => {
      setMovies(JSON.parse(localStorage.getItem('saveMovies')));
    }, []);

  useEffect(() => {
    JSON.parse(localStorage.getItem('isChecked'))
    && setIsChecked(JSON.parse(localStorage.getItem('isChecked')));
    }, []);

  const moviesPagination = handleMoviesPagination();
  function handleMoviesPagination() {
    if (movies === null) {
      return []
    } else {
      return movies.slice(0, pagination);
    }
  }

  return (
    <>
      <main className="movies-content">
        <SearchForm
          onGetMovies={handleGetMovies}
          onCheckedboxClick={handleCheckedbox}
          onChecked={isChecked}
        />
        <MoviesCardList
          movies={moviesPagination}
          savedMovies={savedMovies}
          isloading={isloading}
          errorMessage={errorMessage}
          onButtonPaginationClick={handleClickPagination}
          pagination={movies === null ? [] : movies}
          onButtonMovieClick={onButtonMovieClick}
          iconActiveLikeMovie="active"
        />
      </main>
    </>
  );
}

export default Movies;