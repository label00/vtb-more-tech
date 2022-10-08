import React, { useState } from 'react';
import s from './Sidebar.module.scss'
import cn from 'classnames';

const Sidebar = () => {
  const [active, setActive] = useState(false)
  const menuItems = [
    {
      title: 'Навигатор',
      active: true,
      img: '/icons/document-info.svg',
      notifications: null,
    },
    {
      title: 'Обучение',
      active: false,
      img: '/icons/target.svg',
      notifications: null,
    },
    {
      title: 'Проверка знаний',
      active: false,
      img: '/icons/users-alt.svg',
      notifications: null,
    },
    {
      title: 'Маркет',
      active: false,
      img: '/icons/shopping-bag.svg',
      notifications: null,
    },
    {
      title: 'Вебинары',
      active: false,
      img: '/icons/notes.svg',
      notifications: null,
    },
    {
      title: 'Обучение',
      active: false,
      img: '/icons/headphones.svg',
      notifications: null,
    },
    {
      title: 'Финансы',
      active: false,
      img: '/icons/suitcase.svg',
      notifications: null,
    },
    {
      title: 'Документы',
      active: false,
      img: '/icons/lightning.svg',
      notifications: null,
    },
    {
      title: 'Идеи',
      active: false,
      img: '/icons/star.svg',
      notifications: null,
    },
    {
      title: 'Объявления',
      active: false,
      img: '/icons/ads.svg',
      notifications: null,
    },
    {
      title: 'Еще',
      active: false,
      img: '/icons/subject.svg',
      notifications: null,
    },
    {
      title: 'Автоматизация',
      active: false,
      img: '/icons/suitcase.svg',
      notifications: null,
    },
  ]
  const user = [
    {
      name: 'Станислав. И',
      role: 'UI/UX Designer',
      img: '/icons/acc.svg'
    }
  ]
  return (
    <div className={active ? s.Sidebar : s.Sidebar_hidden} onClick={() => setActive(!active)}>
      <div className={s.Sidebar_top}>
        <img alt="logo" src="/icons/logo.svg" className={s.logo}/>
        <ul className={s.Sidebar_menu}>
          {menuItems.map((e, index) => {

            return (
              <li key={index} className={cn({ [s.active]: e.active })}>
                <img src={`${e.img}`} alt="icon"/>
                <p>{e.title}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={s.Sidebar_bottom}>
        <li className={s.notification}>
          <img src="/icons/bell.svg" alt="icon"/>
          <p>Уведомления</p>
        </li>
        {user.map(e => {
          return (
            <div className={s.user}>
              <img src={e.img}/>
              <div className={s.text}>
                <h3>{e.name}</h3>
                <p>{e.role}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};
export default Sidebar;
