import { Link } from 'react-router-dom';
import '../Register/Register.css';
// import Header from '../Header/Header';

function Login() {
  return(
    <>
      {/* <Header name="auth" /> */}
      <section className="auth">
        <form
          className="auth__form"
          name="form-login"
          id="name-form"
          // onSubmit={}
        >
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
          </label>
            <button className="auth__button" type="submit">Войти</button>
        </form>
        <p className="auth__text">Уже зарегистрированы?
          <Link className="auth__link" to="/signup">Регистрация</Link>
        </p>
      </section>
    </>
  );
}

export default Login;