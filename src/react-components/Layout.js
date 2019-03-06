import React from 'react';

export const Layout = (props) => (
    <React.Fragment>
        <div style={{ border: '1px solid red'}}>
            {props.children}
        </div>
    </React.Fragment>
);
