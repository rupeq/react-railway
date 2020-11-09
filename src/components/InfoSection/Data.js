import img1 from '../../images/svg-1.svg'
import img2 from '../../images/svg-2.svg'
import img3 from '../../images/svg-3.svg'
import img4 from '../../images/svg-4.svg'

export const aboutObj = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Немного информации',
    headLine: 'О нас',
    description: 'Мы - онлайн сервис заказа билетов для железнодорожного транспорта.',
    buttonLabel: 'На главную',
    imgStart: false,
    img: img1,
    alt: 'Train',
    dark: true,
    primary: true,
    darkText: false,
}

export const ticketsObj = {
    id: 'tickets',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Преимущество сервиса',
    headLine: 'Онлайн заказ билетов',
    description: 'Закажи билет невыходя из дома без очередей и суматохи!',
    buttonLabel: 'Выбрать билет',
    imgStart: true,
    img: img2,
    alt: 'Tickets',
    dark: false,
    primary: false,
    darkText: true,
}

export const contactObj = {
    id: 'contact',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Напишите нам!',
    headLine: 'Связаться с нами',
    description: 'Отправьте сообщение и мы вскоре с Вами свяжемся!',
    buttonLabel: 'Связаться',
    imgStart: false,
    img: img3,
    alt: 'Train',
    dark: true,
    primary: true,
    darkText: false,
}

export const registerObj = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Шаг в будущее',
    headLine: 'Регистрация',
    description: 'Пройди регистрацию и открой доступ к функционалу сайта!',
    buttonLabel: 'Зарегистрироваться',
    imgStart: true,
    img: img4,
    alt: 'Registration',
    dark: false,
    primary: false,
    darkText: true,
}