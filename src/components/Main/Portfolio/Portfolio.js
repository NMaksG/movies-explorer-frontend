import './Portfolio.css';
import portfolioIcon from '../../../images/portfolioIcon.png'

function Portfolio() {
  return (
    <nav className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="##"
            target="_blank"
            rel="noopener noreferrer"
            title="##"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio__link"
            href="##"
            target="_blank"
            rel="noopener noreferrer"
            title="##"
          >
          <img className="portfolio__img" src={portfolioIcon} alt="Иконка ссылки"/>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="##"
            target="_blank"
            rel="noopener noreferrer"
            title="##"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio__link"
            href="##"
            target="_blank"
            rel="noopener noreferrer"
            title="##"
          >
          <img className="portfolio__img" src={portfolioIcon} alt="Иконка ссылки"/>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="##"
            target="_blank"
            rel="noopener noreferrer"
            title="##"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio__link"
            href="##"
            target="_blank"
            rel="noopener noreferrer"
            title="##"
          >
          <img className="portfolio__img" src={portfolioIcon} alt="Иконка ссылки"/>
          </a>
        </li>
      </ul>   
    </nav>
  );
}

export default Portfolio;