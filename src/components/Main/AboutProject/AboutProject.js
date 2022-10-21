import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__column">
        <h2 className="about-project__subtitle about-project__subtitle_left">Дипломный проект включал 5 этапов</h2>
        <p className="about-project__text about-project__text_left">Составление плана, работу над бэкендом, вёрстку,
          добавление функциональности и финальные доработки.</p>
        <h2 className="about-project__subtitle about-project__subtitle_right">На выполнение диплома ушло 5 недель</h2>
        <p className="about-project__text about-project__text_right">У каждого этапа был мягкий и жёсткий дедлайн,
          которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__strings">
        <p className="about-project__string about-project__string_left-up">1 неделя</p>
        <p className="about-project__string about-project__string_right-up">4 недели</p>
      </div>
      <div className="about-project__strings">
        <p className="about-project__string about-project__string_left-bottom">Back-end</p>
        <p className="about-project__string about-project__string_right-bottom">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;