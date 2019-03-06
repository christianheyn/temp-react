import React from 'react';
import Proptypes from 'prop-types';
import classnames from 'classnames';

export const Button = ({ children, onClick, className }) => {
    if (
        typeof children !== 'string'
        || typeof onClick !== 'function'
    ) return null;

    const buttonClassName = classnames({
        button: true,
        'is-active': false,
        [className]: className
    });

    return (
        <div
            className={buttonClassName}
            onClick={onClick}
            onKeyDown={onClick}
            role="button"
            tabIndex="0"
        >
            { children }
        </div>
    );
}


Button.propTypes = {
    onClick: Proptypes.func.isRequired,
    children: Proptypes.isRequired
}
