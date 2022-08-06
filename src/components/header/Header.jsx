import Logo from '../../images/rocket-ship-svgrepo-com.svg'
import UserIcon from '../../images/user-svgrepo-com.svg'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (

        <header className={s.header}>
            <NavLink to='/'>
            <img className={s.logo} src={Logo} alt="Logo" width="44" height="44"/>
            </NavLink>
            <a className={s.levelIndicator} href='#s'>Level 1 </a>
            <img className={s.userIcon} src={UserIcon} alt="User icon" width="32" height="32"/>
        </header>
    );
}

export default Header;