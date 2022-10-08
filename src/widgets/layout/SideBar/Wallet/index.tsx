import { FC } from 'react';
import SideBarTop from '../SideBarTop';

import Balance from './Balance';
import Button from './Button';

const Wallet: FC = (): JSX.Element => {
    return (
        <div className="sidebar__item sidebar__wallet">
            <SideBarTop type="icon" title="Кошелек" />
            <div className="sidebar__balance-wrapper">
                <Balance icon="/img/global/layout/sidebar/wallet/balance/matic-icon.svg" sum="3,435 MATIC" link="#" />
                <Balance icon="/img/global/layout/sidebar/wallet/balance/rub-icon.svg" sum="23 004 ₽" link="#" />
            </div>
            <ul className="sidebar__buttons">
                <Button icon="/img/global/layout/sidebar/wallet/buttons/top-up-icon.svg" text="Пополнить" />
                <Button icon="/img/global/layout/sidebar/wallet/buttons/send-icon.svg" text="Отправить" />
                <Button icon="/img/global/layout/sidebar/wallet/buttons/exchange-icon.svg" text="Обменять" />
                <Button icon="/img/global/layout/sidebar/wallet/buttons/withdraw-icon.svg" text="Вывести" />
            </ul>
        </div>
    );
}

export default Wallet;