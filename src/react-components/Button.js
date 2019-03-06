import React from 'react';
import Proptypes from 'prop-types';
import classnames from 'classnames';

export const Button = (props) => {

    const buttonClassName = classnames({
        button: true,
        'is-active': false,
        [props.className]: props.className
    });

    return (
        <button
            className={buttonClassName}
            onClick={props.onClick}
        >
            Button
        </button>
    );
}


Button.propTypes = {
    onClick: Proptypes.func.isRequired,
}
