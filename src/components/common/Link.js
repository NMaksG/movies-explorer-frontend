// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

function Links({ textLink, classN, way }) {
  return (
      <Link className={classN} to={way}
      smooth={true}
      duration={1000}
      >
        {textLink}
      </Link>
  );
}

export default Links;
