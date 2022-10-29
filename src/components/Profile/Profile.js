import './Profile.css';
import Header from '../Header/Header';
import HeaderMobile from '../HeaderMobile/HeaderMobile';

function Profile({ isMenuOpen, onMobileMenuOpen, onMobileMenuClose }) {
  return (
    <>
      <Header
        onMobileMenuOpen={onMobileMenuOpen}
        />
      <HeaderMobile
        isMenuOpen={isMenuOpen}
        onMobileMenuClose={onMobileMenuClose}
      />
      <section className="profile">
      <h1 className="profile__title">Привет!!!!</h1>
        <form
          className="profile__form"
          name="form-profile"
          id="name-form"
          // onSubmit={}
        >
          <label className="profile__label">
            Имя
            <input
              required
              id="name"
              minLength="2"
              maxLength="40"
              className="profile__input"
              name="name"
              type="text"
              placeholder="Имя"
              autoComplete="off"
              // value={}
              // onChange={}
            />
          </label>
          <span className="profile__line"></span>
          <label className="profile__label">
            E-mail
            <input
              required
              id="email"
              minLength="2"
              maxLength="40"
              className="profile__input"
              name="email"
              type="email"
              placeholder="E-mail"
              autoComplete="off"
              // value={}
              // onChange={}
            />
          </label>
          <button
            className="profile__button profile__edit-button"
            type="submit"
            // onClick={}
          >
            Редактировать
          </button>
        </form>
          <button
            className="profile__button profile__logout-button"
            type="button"
            // onClick={}
          >
            Выйти из аккаунта
          </button>
      </section>
    </>
  );
}

export default Profile;