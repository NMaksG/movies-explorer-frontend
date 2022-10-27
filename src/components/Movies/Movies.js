import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { movies } from '../../utils/data';
import HeaderMobile from '../HeaderMobile/HeaderMobile';


function Movies({ isMenuOpen, onMobileMenuOpen, onMobileMenuClose }) {
  return (
    <>
      <Header
        onMobileMenuOpen={onMobileMenuOpen}
        />
      <HeaderMobile
        isMenuOpen={isMenuOpen}
        onMobileMenuClose={onMobileMenuClose}
      />
      <main className="content">
        <SearchForm />
        <MoviesCardList movies={movies}/>
      </main>
      <Footer />
    </>
  );
}

export default Movies;