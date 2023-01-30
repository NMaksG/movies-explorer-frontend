import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__copyright">
        <p className="footer__year">&copy; 2022</p>
        <nav className="footer__links">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru"
            target="_blank"
            rel="noopener noreferrer"
            title="https://practicum.yandex.ru"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            title="https://github.com"
          >
            Githab
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
