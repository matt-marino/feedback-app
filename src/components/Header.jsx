import PropTypes from 'prop-types';
import { NavLink} from 'react-router-dom';

function Header({ bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
    };

    const linkStyles = {
        color: textColor,
        padding: '10px',
        textDecoration: 'none'
    }


        return (
            <header style={headerStyles}>
                <div className='container'>
                <NavLink to="/" style={linkStyles}>
                    Home
                </NavLink>
                <NavLink to="/about" style={linkStyles}>
                    About
                </NavLink>
                </div>
            </header>
        );
    }

Header.defaultProps = {
    bgColor: 'rgba(0, 0, 0, 0.5)',
    textColor: '#ff6a95'
};

Header.propTypes = {
    bgColor: PropTypes.string,
    textColor: PropTypes.string
};

export default Header;
