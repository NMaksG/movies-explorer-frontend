import { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../Register/Register.css';
import FormWithValidation from '../FormWithValidation/FormWithValidation';
// import Header from '../Header/Header';

function Login({ onLogin }) {

  const { values, handleChange, errors, isValid, resetForm } = FormWithValidation();

  // const [loginData, setLoginData] = useState({
  //   email: '',
  //   password: '',
  // });

  // function handleChange(evt) {
  //   const {name, value} = evt.target;
  //   setLoginData({
  //     ...loginData,
  //     [name]: value,
  //   });
  // }

  function handleSubmit(evt) {
    evt.preventDefault();
    // if(!values.email || !values.password) {
    //   return
    // }
    onLogin(values);
    resetForm();
  }

  return(
    <>
      {/* <Header name="auth" /> */}
      <section className="auth">
        <form
          className="auth__form"
          name="form-login"
          id="name-form"
          onSubmit={handleSubmit}
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
              value={values.email || ''}
              onChange={handleChange}
            />
          <span className="auth__error">{errors.email}</span>
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
              value={values.password || ''}
              onChange={handleChange}
            />
          <span className="auth__error">{errors.password}</span>
          </label>
          <span className="auth__error">{errors.email}</span>
          <button
            className="auth__button"
            type="submit"
            disabled={!isValid}
          >
            Войти
          </button>
        </form>
        <p className="auth__text">Уже зарегистрированы?
          <Link className="auth__link" to="/signup">Регистрация</Link>
        </p>
      </section>
    </>
  );
}

export default Login;