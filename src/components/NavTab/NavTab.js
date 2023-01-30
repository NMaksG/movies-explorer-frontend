import './NavTab.css';
import { Link } from 'react-scroll';

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__links">
        <li>
          <Link
            className="navtab__link"
            to="about-project"
            smooth={true}
            duration={1000}
          >
            О проекте
          </Link>
        </li>
        <li>
          <Link
            className="navtab__link"
            to="techs"
            smooth={true}
            duration={1000}
          >
            Технологии
          </Link>
        </li>
        <li>
        <Link
            className="navtab__link"
            to="about-me"
            smooth={true}
            duration={1000}
          >
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;