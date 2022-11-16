import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
// import Header from '../Header/Header';
import FormWithValidation from '../FormWithValidation/FormWithValidation';

function Register({ onRegister }) {

  const { values, handleChange, errors, isValid, resetForm } = FormWithValidation();

  // const [registerData, setRegisterData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  // function handleChange(evt) {
  //   const {name, value} = evt.target;
  //   setRegisterData({
  //     ...registerData,
  //     [name]: value,
  //   });
  // }

  function handleSubmit(evt) {
    evt.preventDefault();

    onRegister(values);
    resetForm();
  }

  return(
    <>
      {/* <Header name="auth" /> */}
      <section className="auth">
        <form
          className="auth__form"
          name="form-register"
          id="name-form"
          onSubmit={handleSubmit}
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
              value={values.name || ''}
              onChange={handleChange}
            />
            <span className="auth__error">{errors.name}</span>
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
          <span className="auth__error">{errors.name}</span>
          <button
            className="auth__button"
            type="submit"
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="auth__text">Уже зарегистрированы?
          <Link className="auth__link" to="/signin">Войти</Link>
        </p>
      </section>
    </>
  );
}

export default Register;
