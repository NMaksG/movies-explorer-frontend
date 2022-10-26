import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { savedMovies } from '../../utils/data';

function SavedMovies() {
  return (
    <>
      <Header />
      <main className="content">
        <SearchForm />
        <MoviesCardList
          movies={savedMovies}
          iconDelMovie="del"
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;