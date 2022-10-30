import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { movies } from '../../utils/data';


function Movies() {
  return (
    <>
      <main className="content">
        <SearchForm />
        <MoviesCardList movies={movies}/>
      </main>
    </>
  );
}

export default Movies;