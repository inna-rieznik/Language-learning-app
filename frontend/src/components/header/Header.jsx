import Logo from '../../images/rocket-ship-svgrepo-com.svg'
import s from './Header.module.css'
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {IconButton} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import {useContext, useState} from "react";
import {AuthContext, useAuth} from "../login/Auth";
import {useEffect} from "react";
import axios from "axios";

let reqInstance = axios.create({
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
);

const Header = (props) => {
    const {authTokens, userId, handleLogout} = useAuth();
    const [user, setUser] = useState([]);
    const [userScore, setUserScore] = useState([]);
    const [userLevel, setUserLevel] = useState([]);

    //console.log("userId_header", userId);


    useEffect(() => {
        reqInstance.get(`http://localhost:3011/user/${userId}`).then((response) => {
            setUser(response.data[0]);
            setUserScore(response.data[0].score);
            setUserLevel(response.data[0].level);
            console.log(response.data);
        });
    }, [userId])


    return (

        <header className={s.header}>

            <NavLink to='/'>
                <img className={s.logo} src={Logo} alt="Logo" width="44" height="44"/>
            </NavLink>
            <nav className={s.menu}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <p className={s.level}>Level {userLevel}</p>
                    </li>
                    <li className={s.item}>
                        <p className={s.levelIndicator}>{userScore}/100</p>
                    </li>
                    <li className={s.item}>
                        <p className={s.levelIndicator}>{user.name}</p>
                    </li>
                    <li className={s.item}>
                        <p className={s.levelIndicator}>({user.role})</p>
                    </li>
                    <li className={s.item}>
                        <IconButton aria-label="person" href={`/user/${userId}`}>
                            <PersonIcon/>
                        </IconButton>
                    </li>
                    <li className={s.item}>
                        <IconButton onClick={handleLogout} aria-label="logout" href="/login">
                            < LogoutIcon/>
                        </IconButton>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;