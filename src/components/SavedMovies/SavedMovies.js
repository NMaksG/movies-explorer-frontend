import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

function SavedMovies({ savedMovies, pageSavedMovies, onDelMovie, loggedIn }) {

  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [myFilterSavedMovies, setMyFilterSavedMovies] = useState([]);
  const [mySavedMovies, setMySavedMovies] = useState([]);
  const [inputSavedMovies, setInputSavedMovies] = useState('');

  function handleCheckedbox() {
    setIsChecked(!isChecked);
  }

  function handleGetMovies(inputMovies) {
    if (mySavedMovies.length === 0) {
      setMySavedMovies([])
    }
      filter(inputMovies);
  }

  const filter = useCallback((inputMovies) => {
    setInputSavedMovies(inputMovies);
    let filtered = mySavedMovies;
    if (inputMovies) {
    filtered = mySavedMovies.filter((element) => element.nameRU
      .toLowerCase()
      .includes(inputMovies.toLowerCase())
      || element.nameEN
      .toLowerCase()
      .includes(inputMovies.toLowerCase())
    );
     
    if(filtered.length === 0) {
      setErrorMessage('Ничего не найдено.');
    }} 
    
    if(isChecked) {
      filtered = filtered.filter((element) => element.duration <= 40);
    }
    
    setMyFilterSavedMovies(filtered);
  }, [isChecked, mySavedMovies, setInputSavedMovies]);
  
  useEffect(() => {
      setMySavedMovies(savedMovies);
      filter(inputSavedMovies);
    }, [filter, inputSavedMovies, savedMovies, isChecked]);

    useEffect(() => {
      if(!loggedIn) {
        setMySavedMovies([]);
        setMyFilterSavedMovies([]);
        setInputSavedMovies('');
        setIsChecked(false);
        setErrorMessage('');
      }
    },[loggedIn])

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
          movies={myFilterSavedMovies}
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