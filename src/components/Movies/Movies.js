import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState } from 'react';
import MoviesApi from '../../utils/MoviesApi';
// import { useEffect } from 'react';
// import { useCallback } from 'react';
// import { movies } from '../../utils/data';


function Movies() {

  const [movies, setMovies] = useState([]);
  const [inputMov, setInputMov] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isloading, setIsLoading] = useState(false);

  
  function handleCheckedbox() {
    isChecked
      ? setIsChecked(false)
      : setIsChecked(true)
  }

  function handleGetMovies(inputMovies) {
    if (movies.length === 0) {
      setIsLoading(true);
      MoviesApi.getInitialMovies()
      .then((res) => {
          localStorage.setItem('movies', JSON.stringify(res));
          // localStorage.setItem('inputMovies', inputMovies);
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

  const filter = (inputMovies) => {
    let filtered = JSON.parse(localStorage.getItem('movies'));
    
    if(filtered.length === 0) {
      setErrorMessage('Ничего не найдено.');
    } else {
      filtered = filtered.filter((element) => element.nameRU
       .toLowerCase()
       .includes(inputMovies.toLowerCase()));

      isChecked && (filtered = filtered.filter((element) => element.duration <= 40));
    }

    localStorage.setItem('inputMovies', inputMovies);
    localStorage.setItem('isCheckedDis', isChecked);
    localStorage.setItem('filerMovies', JSON.stringify(filtered));
  
    setMovies(filtered);
  }
  
  // useEffect(() => {
  //     setInputMov(localStorage.getItem('inputMovies'));

  //     setMovies(JSON.parse(localStorage.getItem('filterMovies')));
  //     // filter(qqq);
  //   }, [setInputMov, setMovies]);

  return (
    <>
      <main className="movies-content">
        <SearchForm
          onGetMovies={handleGetMovies}
          onCheckedboxClick={handleCheckedbox}
          input={inputMov}
        />
        <MoviesCardList
          movies={movies}
          isloading={isloading}
          errorMessage={errorMessage}
        />
      </main>
    </>
  );
}

export default Movies;