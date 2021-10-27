import {TopPageComponentProps} from "./TopPageCompomemt.props";

// @ts-ignore
import cn from 'classnames';

export const TopPageComponent = ({ page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
        <>
            {products && products.length}
        </>
    );
};