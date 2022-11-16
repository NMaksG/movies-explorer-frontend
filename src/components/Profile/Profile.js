import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import FormWithValidation from '../FormWithValidation/FormWithValidation';
import { useContext, useEffect, useState } from 'react';

function Profile({ onLogout, onUpdateUser, message }) {

  const currentUser = useContext(CurrentUserContext);
  const [isButtonVisibility, setIsButtonVisibility] = useState(false);
  const [isProfileValid, setIsProfileValid] = useState(false);
  const { values, handleChange, errors, isValid, resetForm, setValues } = FormWithValidation();

  useEffect(() => {
    ((values.name === currentUser.name
      && values.email === currentUser.email)
      || !isValid
    )
      ? setIsProfileValid(false)
      : setIsProfileValid(true)
    
  }, [currentUser, isValid, values]);

  useEffect(() => {
    message && setIsButtonVisibility(false);
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser, message, setValues]);

  function handleButtonClick(evt) {
    evt.preventDefault();
    setIsButtonVisibility(true);
  }

  function handleButtonFormClick(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
    resetForm();
  }

  return (
    <>
      <section className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form
          className="profile__form"
          name="form-profile"
          id="name-form"
          onSubmit={handleButtonFormClick}
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
              value={values.name || ''}
              onChange={handleChange}
            />
          </label>
            <span className="profile__error">{errors.name}</span>
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
              value={values.email || ''}
              onChange={handleChange}
            />
          </label>
          <span className="profile__error">{errors.email}</span>
          {isButtonVisibility
            ? <button
              className="auth__button "
              type="submit"
              disabled={!isProfileValid}
            >
              Сохранить
            </button>
            : <><button
              className="profile__button profile__edit-button"
              type="button"
              onClick={handleButtonClick}
            >
              Редактировать
            </button><button
              className="profile__button profile__logout-button"
              type="button"
              onClick={onLogout}
            >
                Выйти из аккаунта
              </button></>
          }
        </form>
      </section>
    </>
  );
}

export default Profile;