import portfolioIcon from '../image/arrow.svg';
import picmovie from '../images/picmovie.png';

const techs = [
  { titile: 'HTML', id: 1 },
  { titile: 'CSS', id: 2 },
  { titile: 'JS', id: 3 },
  { titile: 'React', id: 4 },
  { titile: 'Git', id: 5 },
  { titile: 'Express.js', id: 6 },
  { titile: 'mongoDB', id: 7 },
];

const portfolio = [
  {
    title: 'Статичный сайт',
    icon: portfolioIcon,
    id: 1,
    link: 'https://github.com/NMaksG/how-to-learn.git',
  },
  {
    title: 'Адаптивный сайт',
    icon: portfolioIcon,
    id: 2,
    link: 'https://nmaksg.github.io/russian-travel',
  },
  {
    title: 'Одностраничное приложение',
    icon: portfolioIcon,
    id: 3,
    link: 'https://github.com/NMaksG/react-mesto-auth.git',
  },
];

const student = {
  name: 'Максим',
  profi: 'Фронтенд-разработчик, 42 лет',
  summary:
    'Начинающий Frontend разработчик',
  email: 'NMaximus@yandex.ru',
};

const movies = [
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 1 },
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 2 },
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 3 },
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 4 },
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 5 },
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 6 },
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 7 },
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 8 },
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 9 },
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 10 },
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 11 },
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 12 },
];

const savedMovies = [
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 1 },
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 2 },
  { title: 'Области тьмы', time: '105', pic: picmovie, id: 3 },
];

export { portfolio, techs, student, movies, savedMovies };