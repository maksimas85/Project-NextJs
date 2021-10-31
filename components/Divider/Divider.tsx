import {DividerProps} from "./Divider.props";
import styles from './Divider.module.css';
// @ts-ignore
import cn from 'classnames';

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
    return (
        <hr className={cn(className, styles.hr)} {...props}/>
    );
};