import './Promo.css';
// import logoPromo from '../../../images/logoPromo.png';
import NavTab from '../NavTab/NavTab';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
      <NavTab /> 
    </section>
  );
}

export default Promo;