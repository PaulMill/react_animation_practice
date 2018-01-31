import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClasses = ["Backdrop", props.show ? "BackgropOpen" : "BackgropClosed"];

    return <div className={cssClasses.join(" ")} />;
};

export default backdrop;