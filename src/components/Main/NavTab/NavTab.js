// import { Link } from 'react-router-dom';
import './NavTab.css';
import Links from '../../common/Link';

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__links">
        {/* <li><Link className="navtab__link">О проекте</Link></li>
        <li><Link className="navtab__link">Технологии</Link></li>
        <li><Link className="navtab__link">Студент</Link></li> */}
        <li><Links
          classN="navtab__link"
          textLink="О проекте"
          way={""}
        /></li>
        <li><Links
          classN="navtab__link"
          textLink="Технологии"
          way={"techs"}
        /></li>
        <li><Links
          classN="navtab__link"
          textLink="Студент"
          way={""}
        /></li>
      </ul>
    </nav>
  );
}

export default NavTab;