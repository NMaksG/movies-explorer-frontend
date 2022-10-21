import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import foto from '../../../images/Foto.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <h3 className="about-me__name">Максим</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 42 года</p>
        <p className="about-me__description">
        Я родился в г.Губаха, Пермской области. Живу в Ростове-на-Дону, закончил факультет АВТ ТГРТУ.
        Mоя любимая семья это: жена, дочь и сын.
        Я очень люблю проводить с ними время.
        Работаю в компании ООО "ПепсиКо Холдингс".
        Недавно начал кодить.
        Прохожу курс по веб-разработке, в планах сменить работу.
        </p>
        <a
          className="about-me__link"
          href="https://github.com/NMaksG"
          target="_blank"
          rel="noopener noreferrer"
          title="https://github.com"
        >
          Githab
        </a>
        <img className="about-me__foto" src={foto} alt="Фото студента"/>
      </div>
      <Portfolio /> 
    </section>
  );
}

export default AboutMe;