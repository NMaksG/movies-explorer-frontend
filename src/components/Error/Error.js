import { useHistory } from 'react-router-dom';
import './Error.css';

const Error = () => {

  const history = useHistory();

  const handleButtonClick = () => history.go(-1);

  return (
    <div className="error">
        <h2 className="error__title">404</h2>
        <p className="error__text">Страница не найдена</p>
        <button
          className="error__button"
          type="button"
          onClick={handleButtonClick}
        >
          Назад
        </button>
    </div>
  );
};

export default Error;