import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css';
import {Menu} from "../Menu/Menu";
import Image from 'next/image';
import logo from '../logo.png'
// @ts-ignore
import cn from 'classnames';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <div className={styles.logo}>
                <Image src={logo} width={40} height={40}/>
            </div>
            <div>поиск</div>
            <Menu/>
        </div>
    );
};