import './Techs.css';

function Techs() {
  return (
    <section className="techs" name="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__name">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.
      </p>
      <ul className="techs__container">
        <li><p className="techs__icon">HTML</p></li>
        <li><p className="techs__icon">CSS</p></li>
        <li><p className="techs__icon">JS</p></li>
        <li><p className="techs__icon">React</p></li>
        <li><p className="techs__icon">Git</p></li>
        <li><p className="techs__icon">Express.js</p></li>
        <li><p className="techs__icon">mongoDB</p></li>
      </ul>
    </section>
  );
}

export default Techs;