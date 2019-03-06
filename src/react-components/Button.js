import React from 'react';
import Proptypes from 'prop-types';

export const Button = (props) => (
    <button onClick={props.onClick}>Button</button>
);

Button.propTypes = {
    onClick: Proptypes.func.isRequired,
}
