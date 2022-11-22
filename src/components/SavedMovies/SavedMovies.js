import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect } from 'react';
import MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useState } from 'react';
import { useContext } from 'react';
import { useCallback } from 'react';
// import { savedMovies } from '../../utils/data';

function SavedMovies({ savedMovies, pageSavedMovies, onDelMovie }) {

  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [mySavedMovies, setMySavedMovies] = useState([]);

  function handleCheckedbox() {
    isChecked
      ? setIsChecked(false)
      : setIsChecked(true)
  }

  function handleGetMovies(inputMovies) {
    if (mySavedMovies.length === 0) {
      setMySavedMovies([])
    }
      filter(inputMovies);
  }

  const filter = useCallback((inputMovies) => {
    let filtered = mySavedMovies.filter((element) => element.nameRU
      .toLowerCase()
      .includes(inputMovies.toLowerCase())
      || element.nameEN
      .toLowerCase()
      .includes(inputMovies.toLowerCase())
    );
     
    if(filtered.length === 0) {
      setErrorMessage('Ничего не найдено.');
    } 
    
    if(isChecked) {
      filtered = filtered.filter((element) => element.duration <= 40);
    }
    
    setMySavedMovies(filtered);
  }, [isChecked, mySavedMovies]);
  
  useEffect(() => {
      // setIsChecked(JSON.parse(localStorage.getItem('isChecked')));
      // filter(localStorage.getItem('inputMovies'));
      setMySavedMovies(savedMovies);
    }, [savedMovies, isChecked]);

  return (
    <>
      <main className="content">
        <SearchForm
          pageSavedMovies={pageSavedMovies}
          onGetMovies={handleGetMovies}
          onCheckedboxClick={handleCheckedbox}
          onChecked={isChecked}
        />
        <MoviesCardList
          movies={mySavedMovies}
          iconDelMovie="del"
          errorMessage={errorMessage}
          pageSavedMovies={pageSavedMovies}
          onButtonMovieClick={onDelMovie}
        />
      </main>
    </>
  );
}

export default SavedMovies;