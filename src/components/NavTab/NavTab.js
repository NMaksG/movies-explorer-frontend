// import { Link } from 'react-router-dom';
import './NavTab.css';
import Links from '../common/Link';

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__links">
        <li><Links
          classN="navtab__link"
          textLink="О проекте"
          way={"about-project"}
        /></li>
        <li><Links
          classN="navtab__link"
          textLink="Технологии"
          way={"techs"}
        /></li>
        <li><Links
          classN="navtab__link"
          textLink="Студент"
          way={"about-me"}
        /></li>
      </ul>
    </nav>
  );
}

export default NavTab;