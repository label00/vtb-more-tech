import { FC } from 'react';
type Props = {icon: string, text: string};

const Button: FC<Props> = ({icon, text}): JSX.Element => {
    return (
        <li className="sidebar__buttons-item">
            <div className="sidebar__buttons-icon">
                <img src={icon} alt={text} />
            </div>
            <p className="sidebar__buttons-text">{text}</p>
        </li>
    );
}

export default Button;