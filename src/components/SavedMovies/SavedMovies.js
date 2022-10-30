import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMovies } from '../../utils/data';

function SavedMovies() {
  return (
    <>
      <main className="content">
        <SearchForm />
        <MoviesCardList
          movies={savedMovies}
          iconDelMovie="del"
        />
      </main>
    </>
  );
}

export default SavedMovies;