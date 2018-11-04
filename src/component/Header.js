import React from 'react';
import PropTypes from 'prop-types'

const Header = (props) => {
    const {title} = props;
    return (
        <div>
            <h1>{title}</h1>
            <h2></h2>
        </div>
    )
}
//just in case we didnt pass title
Header.defaultProps = {
    title: 'My App'
}
//check type
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;