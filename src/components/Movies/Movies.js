import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { movies } from '../../utils/data';


function Movies() {
  return (
    <>
      <Header />
      <main className="content">
        <SearchForm />
        <MoviesCardList movies={movies}/>
      </main>
      <Footer />
    </>
  );
}

export default Movies;