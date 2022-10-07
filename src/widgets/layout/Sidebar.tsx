import React, {useState} from 'react';
import s from './Sidebar.module.scss'

const Sidebar = () => {
    const [active,setActive] = useState(false)
    const menuItems = [
        {
            title: 'Навигатор',
            active: true,
            img: 'public/icons/document-info.svg',
            notifications: null,
        },
        {
            title: 'Обучение',
            active: false,
            img: 'public/icons/target.svg',
            notifications: null,
        },
        {
            title: 'Проверка знаний',
            active: false,
            img: 'public/icons/users-alt.svg',
            notifications: null,
        },
        {
            title: 'Маркет',
            active: false,
            img: 'public/icons/shopping-bag.svg',
            notifications: null,
        },
        {
            title: 'Вебинары',
            active: false,
            img: 'public/icons/notes.svg',
            notifications: null,
        },
        {
            title: 'Обучение',
            active: false,
            img: 'public/icons/headphones.svg',
            notifications: null,
        },
        {
            title: 'Финансы',
            active: false,
            img: 'public/icons/suitcase.svg',
            notifications: null,
        },
        {
            title: 'Документы',
            active: false,
            img: 'public/icons/lightning.svg',
            notifications: null,
        },
        {
            title: 'Идеи',
            active: false,
            img: 'public/icons/star.svg',
            notifications: null,
        },
        {
            title: 'Объявления',
            active: false,
            img: 'public/icons/ads.svg',
            notifications: null,
        },
        {
            title: 'Еще',
            active: false,
            img: 'public/icons/subject.svg',
            notifications: null,
        },
        {
            title: 'Автоматизация',
            active: false,
            img: 'public/icons/suitcase.svg',
            notifications: null,
        },
        {
            title: 'Уведомления',
            active: false,
            img: 'public/icons/bell.svg',
            notifications: null,
        },
    ]
    const user = [
        {
            name: 'Станислав. И',
            role: 'UI/UX Designer',
            img: 'public/icons/acc.svg'
        }
    ]
    return(
        <div className={active ? s.Sidebar : s.Sidebar_hidden} onClick={() => setActive(!active)}>
            <div className={s.Sidebar_top}>
                <img alt='logo' src='public/icons/logo.svg' className={s.logo}/>
                <ul className={s.Sidebar_menu}>
                    {menuItems.map((e, index) => {
                        if (index === menuItems.length - 1){
                            null
                        }
                        else return(
                            <li key={index} className={ e.active ? s.active : null}>
                                <img src={`${e.img}`} alt='icon'/>
                                <p>{e.title}</p>
                            </li>
                        )})}
                </ul>
            </div>
            <div className={s.Sidebar_bottom}>
                {menuItems.map((e, index) => {
                    if (index === menuItems.length - 1){
                        return(
                            <li key={index} className={s.notification}>
                                <img src={`${e.img}`} alt='icon'/>
                                <p>{e.title}</p>
                            </li>
                        )}})}
                {user.map(e =>
                { return(
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