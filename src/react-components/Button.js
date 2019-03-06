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
        <div
            className={buttonClassName}
            onClick={props.onClick}
            onKeyDown={props.onClick}
            role="button"
            tabIndex="0"
        >
            Button
        </div>
    );
}


Button.propTypes = {
    onClick: Proptypes.func.isRequired,
}
