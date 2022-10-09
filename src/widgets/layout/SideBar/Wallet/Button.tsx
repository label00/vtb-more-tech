import cn from 'classnames';

type Props = {icon: string, text: string, onClick?: () => void, disabled?: boolean};

const Button = ({icon, text, onClick, disabled}: Props) => {
    return (
        <li className={cn('sidebar__buttons-item', { '--disabled': disabled })} onClick={onClick}>
            <div className="sidebar__buttons-icon">
                <img src={icon} alt={text} />
            </div>
            <p className="sidebar__buttons-text">{text}</p>
        </li>
    );
}

export default Button;
