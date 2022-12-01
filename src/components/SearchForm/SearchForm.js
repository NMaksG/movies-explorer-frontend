import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import searchIcon from '../../images/search-icon.svg';
import { useEffect, useState } from 'react';

function SearchForm({ onGetMovies, onCheckedboxClick, onChecked, pageSavedMovies }) {

  const [inputMovies, setInputMovies] = useState({movies: ''});
  const [filterMoviesError, setfilterMoviesError] = useState('Фильм');

  function handleChange(evt) {
    const {name, value} = evt.target
    setInputMovies({
      ...inputMovies,
      [name]: value,
    })
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!inputMovies.movies) {
      setfilterMoviesError('Нужно ввести ключевое слово!')
    } else {
      setfilterMoviesError('Фильм')
      onGetMovies(inputMovies.movies);
    }
  }
  
  useEffect(() => {
    !pageSavedMovies && setInputMovies({movies: localStorage.getItem('inputMovies')});
    }, [pageSavedMovies]);

  return (
    <section className="search">
      <div className="search__container">
        <div className="search__container_form">
          <form
            className="search__form"
            name="search-form-movies"
            id="movies-form"
            noValidate
            onSubmit={handleSubmit}
          >
            <img
              className="search__img"
              src={searchIcon}
              alt="Иконка поиска"
            />
            <input
              required
              id="movies"
              className="search__input"
              name="movies"
              type="text"
              placeholder={filterMoviesError}
              autoComplete="off"
              value={inputMovies.movies || ''}
              onChange={handleChange}
            />
            <button className="search__button" type="submit">
              Найти
            </button>
          </form>
          <FilterCheckbox
            onCheckedboxClick={onCheckedboxClick}
            onChecked={onChecked}
          />
        </div>
        <FilterCheckbox
          onCheckedboxClick={onCheckedboxClick}
          name="mobile"
        />
      </div>
    </section>
  );
}

export default SearchForm;