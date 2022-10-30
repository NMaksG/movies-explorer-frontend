import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import searchIcon from '../../images/search-icon.svg';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <div className="search__container_form">
          <form
            className="search__form"
            name="search-form-movies"
            id="movies-form"
            // onSubmit={}
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
              placeholder="Фильм"
              autoComplete="off"
              // value={}
              // onChange={}
            />
            <button className="search__button" type="submit">
              Найти
            </button>
          </form>
          <FilterCheckbox/>
        </div>
        <FilterCheckbox name="mobile"/>
      </div>
    </section>
  );
}

export default SearchForm;