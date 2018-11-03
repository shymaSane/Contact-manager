import React from 'react';

const Header = (props) => {
    const {title} = props;
    return (
        <div>
            <h1>{title}</h1>
            <h2></h2>
        </div>
    )
}

export default Header;