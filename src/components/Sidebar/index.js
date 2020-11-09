import React from 'react';
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarWrapper,
        SidebarMenu,
        SidebarLink,
        SideBtnWrap,
        SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>Главная</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>О нас</SidebarLink>
                    <SidebarLink to="tickets" onClick={toggle}>Билеты</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Обратная связь</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Регистрация</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Войти</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
