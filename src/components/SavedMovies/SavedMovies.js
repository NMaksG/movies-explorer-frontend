import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import { savedMovies } from '../../utils/data';

function SavedMovies({ movies }) {
  return (
    <>
      <main className="content">
        <SearchForm />
        <MoviesCardList
          movies={movies}
          iconDelMovie="del"
        />
      </main>
    </>
  );
}

export default SavedMovies;