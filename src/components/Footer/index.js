import React from 'react'

import {animateScroll as scroll} from 'react-scroll';
import {FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Официальный сайт</FooterLinkTitle>
                            <FooterLink to="//www.rw.by/">Главная</FooterLink>
                            <FooterLink to="//pass.rw.by/ru/">Расписание</FooterLink>
                            <FooterLink to="//pass.rw.by/ru/railway_stations/minsk_passenger/">Минский вокзал</FooterLink>
                            <FooterLink to="//pass.rw.by/ru/order/payment/">Личный кабинет</FooterLink>
                            <FooterLink to="//pass.rw.by/ru/people_with_disabilities/">Услуги</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Туризм и отдых</FooterLinkTitle>
                            <FooterLink to="//www.rw.by/tourism_and_recreation/about/">О нас</FooterLink>
                            <FooterLink to="//www.rw.by/tourism_and_recreation/services/">Услуги</FooterLink>
                            <FooterLink to="//www.rw.by/tourism_and_recreation/schedule_of_tours/">График экскурсий</FooterLink>
                            <FooterLink to="//www.rw.by/tourism_and_recreation/offers/">Страны</FooterLink>
                            <FooterLink to="//www.rw.by/corporate/social_sphere/sanatorium/">Отдых и лечение</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Грузовые перевозки</FooterLinkTitle>
                            <FooterLink to="//www.rw.by/cargo_transportation/services/">Сервисы</FooterLink>
                            <FooterLink to="//www.rw.by/cargo_transportation/services/raschet_gruzovih_tarifov/">Расчет тарифов</FooterLink>
                            <FooterLink to="//www.rw.by/cargo_transportation/freight_forwarding_company/">Экспедиторские компании</FooterLink>
                            <FooterLink to="//www.rw.by/cargo_transportation/rates_changes/">Изменение тарифов</FooterLink>
                            <FooterLink to="//www.rw.by/corporate/structure/">Структура</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Корпоративный</FooterLinkTitle>
                            <FooterLink to="//www.rw.by/">Пресс-центр</FooterLink>
                            <FooterLink to="//pass.rw.by/ru/">Социальная сфера</FooterLink>
                            <FooterLink to="//pass.rw.by/ru/railway_stations/minsk_passenger/">Недвижимость</FooterLink>
                            <FooterLink to="//pass.rw.by/ru/order/payment/">Молодежный</FooterLink>
                            <FooterLink to="//pass.rw.by/ru/people_with_disabilities/">Контакты</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Железная дорога</SocialLogo>
                    </SocialMediaWrap>
                    <WebsiteRights>Железная дорога © {new Date().getFullYear} Все права защищены</WebsiteRights>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
