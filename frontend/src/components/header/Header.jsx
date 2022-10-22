import Logo from '../../images/rocket-ship-svgrepo-com.svg'
import UserIcon from '../../images/user-svgrepo-com.svg'

import s from './Header.module.css'
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {IconButton} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import {useContext, useState} from "react";
import {AuthContext} from "../login/Auth";


const Header = (props) => {
    const  authTokens = useContext(AuthContext);



    return (

        <header className={s.header}>

            <NavLink to='/'>
                <img className={s.logo} src={Logo} alt="Logo" width="44" height="44"/>
            </NavLink>
            <nav className={s.menu}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <p className={s.level}>Level </p>
                    </li>
                    <li className={s.item} >
                        <p className={s.levelIndicator}>[********-------------------]</p>
                    </li>
                    <li className={s.item}>
                        <IconButton aria-label="person" href={`/user/${props.userId}`}>
                            <PersonIcon />
                        </IconButton>
                       {/* <button  onClick={navigateToUserInfo}>
                        <img className={s.userIcon} src={UserIcon} alt="User icon" width="32" height="32"/></button>*/}
                    </li>
                    <li className={s.item}>
                        <IconButton onClick={authTokens.handleLogout} aria-label="logout" href="/login">
                            < LogoutIcon />
                        </IconButton>
                       {/* <button  onClick={navigateToLogin}><img className={s.logout} src={Logout} alt="Logout" width="32" height="32"/></button>*/}
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;