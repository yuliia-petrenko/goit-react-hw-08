import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from './Navigation.module.css';

const makeLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
};

 const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav>
            <NavLink className={makeLinkClass} to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={makeLinkClass} to="/contacts">
                    Contacts
                </NavLink>
            )}
        </nav>
    );
}
export default Navigation;