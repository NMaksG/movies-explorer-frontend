import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState } from 'react';
import MoviesApi from '../../utils/MoviesApi';
import { useEffect } from 'react';
import { useCallback } from 'react';
// import { movies } from '../../utils/data';


function Movies({ onButtonMovieClick, savedMovies }) {

  const [movies, setMovies] = useState([]);
  // const [inputMov, setInputMov] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const width = window.innerWidth;
  const [pagination, setPagination] = useState(null);

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
    isChecked
      ? setIsChecked(false)
      : setIsChecked(true)
      localStorage.setItem('isChecked', !isChecked);
  }

  function handleGetMovies(inputMovies) {
    if (movies.length === 0) {
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
    // localStorage.setItem('filerMovies', JSON.stringify(filtered));
    if(filtered.length === 0) {
      setErrorMessage('Ничего не найдено.');
    } 
    
    if(isChecked) {
      filtered = filtered.filter((element) => element.duration <= 40);
      // localStorage.setItem('filerCheckedMovies', JSON.stringify(filtered));
    }
    
    setMovies(filtered);}
  }, [handlePagination, isChecked]);
  
  useEffect(() => {
      setIsChecked(JSON.parse(localStorage.getItem('isChecked')));
      filter(localStorage.getItem('inputMovies'));
    }, [filter, isChecked]);

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
          pagination={movies}
          onButtonMovieClick={onButtonMovieClick}
          iconActiveLikeMovie="active"
        />
      </main>
    </>
  );
}

export default Movies;