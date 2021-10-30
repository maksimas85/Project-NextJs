import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css';
import {Menu} from "../Menu/Menu";
import Image from 'next/image';
import Logo from '../logo.svg';
import {Search} from "../../components";
// @ts-ignore
import cn from 'classnames';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <div className={styles.logo}>
                <Logo className={styles.logo}/>
            </div>
            <Search/>
            <Menu/>
        </div>
    );
};