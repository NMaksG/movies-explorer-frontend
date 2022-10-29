import { Link } from 'react-router-dom';
import './Register.css';
import Header from '../Header/Header';

function Register() {
  return(
    <>
      <Header name="auth" />
      <section className="auth">
        <form
          className="auth__form"
          name="form-register"
          id="name-form"
          // onSubmit={}
        >
          <label className="auth__label">
            Имя
            <input
              required
              id="name"
              minLength="2"
              maxLength="40"
              className="auth__input"
              name="name"
              type="text"
              placeholder="Имя"
              autoComplete="off"
              // value={}
              // onChange={}
            />
            <span className="auth__error">Что-то пошло не так...</span>
          </label>
          <label className="auth__label">
            E-mail
            <input
              required
              id="email"
              minLength="2"
              maxLength="40"
              className="auth__input"
              name="email"
              type="email"
              placeholder="E-mail"
              autoComplete="off"
              // value={}
              // onChange={}
            />
            <span className="auth__error">Что-то пошло не так...</span>
          </label>
          <label className="auth__label">
            Пароль
            <input
              required
              id="password"
              minLength="2"
              maxLength="200"
              className="auth__input"
              name="password"
              type="password"
              placeholder="Пароль"
              autoComplete="off"
              // value={}
              // onChange={}
            />
            <span className="auth__error">Что-то пошло не так...</span>
          </label>
            <button className="auth__button" type="submit">Зарегистрироваться</button>
        </form>
        <p className="auth__text">Уже зарегистрированы?
          <Link className="auth__link" to="/signin">Войти</Link>
        </p>
      </section>
    </>
  );
}

export default Register;
