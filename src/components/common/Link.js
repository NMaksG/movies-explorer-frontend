import { Link } from 'react-router-dom';

function Links({ textLink, classN, way }) {
  return (
      <Link className={classN} to={way}>
        {textLink}
      </Link>
  );
}

export default Links;
