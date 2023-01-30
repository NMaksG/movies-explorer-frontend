import './Portfolio.css';
import portfolioIcon from '../../images/portfolio-icon.svg';

function Portfolio() {
  return (
    <nav className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/NMaksG/how-to-learn.git"
            target="_blank"
            rel="noopener noreferrer"
            title="https://github.com/NMaksG/how-to-learn.git"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio__link"
            href="https://github.com/NMaksG/how-to-learn.git"
            target="_blank"
            rel="noopener noreferrer"
            title="https://github.com/NMaksG/how-to-learn.git"
          >
          <img className="portfolio__img" src={portfolioIcon} alt="Иконка ссылки"/>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/NMaksG/russian-travel.git"
            target="_blank"
            rel="noopener noreferrer"
            title="https://github.com/NMaksG/russian-travel.git"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio__link"
            href="https://github.com/NMaksG/russian-travel.git"
            target="_blank"
            rel="noopener noreferrer"
            title="https://github.com/NMaksG/russian-travel.git"
          >
          <img className="portfolio__img" src={portfolioIcon} alt="Иконка ссылки"/>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/NMaksG/react-mesto-auth.git"
            target="_blank"
            rel="noopener noreferrer"
            title="https://github.com/NMaksG/react-mesto-auth.git"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio__link"
            href="https://github.com/NMaksG/react-mesto-auth.git"
            target="_blank"
            rel="noopener noreferrer"
            title="https://github.com/NMaksG/react-mesto-auth.git"
          >
          <img className="portfolio__img" src={portfolioIcon} alt="Иконка ссылки"/>
          </a>
        </li>
      </ul>   
    </nav>
  );
}

export default Portfolio;