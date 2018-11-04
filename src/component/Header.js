import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
    const {title} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{title}</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                </ul>
            </div>
        </nav>
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