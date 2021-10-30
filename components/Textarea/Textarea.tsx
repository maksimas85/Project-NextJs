import {TextareaProps} from "./Textarea.props";
import styles from './Textarea.module.css';

// @ts-ignore
import cn from 'classnames';

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
    return (
        <textarea className={cn(className, styles.textarea)} {...props}/>
    );
};