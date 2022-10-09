import React, { useState } from 'react';
import s from './Sidebar.module.scss'
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    title: 'Главная',
    active: false,
    img: '/icons/target.svg',
    link: '/',
    end: true,
  },
  {
    title: 'Маркет',
    active: false,
    img: '/icons/shopping-bag.svg',
    link: '/market',
    end: false,
  },
  {
    title: 'Обучение',
    active: false,
    img: '/icons/headphones.svg',
    link: '/education',
    end: false,
  },
  {
    title: 'Проверка знаний',
    active: false,
    img: '/icons/users-alt.svg',
    link: '/404',
    end: false,
  },
  {
    title: 'Вебинары',
    active: false,
    img: '/icons/notes.svg',
    link: '/404',
    end: false,
  },
  {
    title: 'Финансы',
    active: false,
    img: '/icons/suitcase.svg',
    link: '/404',
    end: false,
  },
  {
    title: 'Документы',
    active: false,
    img: '/icons/lightning.svg',
    link: '/404',
    end: false,
  },
  {
    title: 'Идеи',
    active: false,
    img: '/icons/star.svg',
    link: '/404',
    end: false,
  },
  {
    title: 'Объявления',
    active: false,
    img: '/icons/ads.svg',
    link: '/404',
    end: false,
  },
  {
    title: 'Еще',
    active: false,
    img: '/icons/subject.svg',
    link: '/404',
    end: false,
  },
  {
    title: 'Автоматизация',
    active: false,
    img: '/icons/suitcase.svg',
    link: '/404',
    end: false,
  },
]


export const SidebarLeft = () => {
  const [active, setActive] = useState(false)

  return (
    <div
      className={cn(s.Sidebar, { [s.Sidebar_hidden]: active })}
      onMouseEnter={() => setActive(false)}
      onMouseLeave={() => setActive(true)}
    >
      <div className={s.Sidebar_top}>
        <img alt="logo" src="/icons/logo.svg" className={s.logo}/>
        <ul className={s.Sidebar_menu}>
          {menuItems.map((e, index) => (
            <NavLink end={e.end} to={e.link} key={index} className={({ isActive }) => cn(s.link, s.primary, { [s.active]: isActive })}>
              <div className={cn(s.img, 'flex-shrink-0')}>
                <img  src={`${e.img}`} alt="icon"/>
              </div>

              <p>{e.title}</p>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className={s.Sidebar_bottom}>
        <a className={cn(s.link, s.notification)}>
          <img src="/icons/bell.svg" alt="icon"/>
          <p>Уведомления</p>
        </a>
        <NavLink to="/profile" className={({ isActive }) => cn(s.user, { [s.active]: isActive, [s.user__active]: isActive })}>
          <img className="rounded-full" src="/icons/acc.svg"/>
          <div className={s.text}>
            <h3>Станислав. И</h3>
            <p>UI/UX Designer</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
