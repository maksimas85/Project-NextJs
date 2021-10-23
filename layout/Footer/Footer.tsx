import {FooterProps} from "./Footer.props";
import styles from './Footer.module.css';
import {format} from 'date-fns';
// @ts-ignore
import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>
                {format(new Date(), 'yyyy')} - Все права защищены
            </div>
            <a href="#" target="_blank">Пользоватльское соглашени</a>
            <a href="#" target="_blank">Политика безопасности</a>
        </footer>
    );
};