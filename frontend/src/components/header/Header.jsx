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
    const [userScore, setUserScore] = useState();
    let [userLevel, setUserLevel] = useState();


    const percentage = Math.round((userScore / 100) * 100);
    //console.log(percentage);
    //console.log("userId_header", userId);


    useEffect(() => {
        reqInstance.get(`http://localhost:3011/user/${userId}`).then((response) => {
            setUser(response.data[0]);
            setUserScore(response.data[0].score);
            setUserLevel(response.data[0].level);
            //console.log(response.data);
        });
    }, [userId])





    function  updateLevel(score){
        if (score >= 100){
            setUserLevel(userLevel + 1);
            setUserScore(0);
        }


    }



  //  console.log("user score : ", userScore)
 //   console.log("user level : ", userLevel);


    return (

        <header className={s.header}>

            <NavLink to='/'>
                <img className={s.logo} src={Logo} alt="Logo" width="44" height="44"/>
            </NavLink>
            <nav className={s.menu}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <p className={s.level} onChange={updateLevel(userScore)}>Level {userLevel}</p>
                    </li>
                    {/*<li className={s.item}>
                        <p className={s.levelIndicator}>{userScore}/100</p>
                    </li>*/}
                    <li className={s.item}>
                        <div className={s.progress}>
                            <div style={{width: `${percentage}%`}} className={s.inner}>
                                <p className={s.points}>{userScore}/100</p>
                            </div>
                        </div>

                    </li>
                   {/* <li>
                         <div className={s.points}> <p className={s.levelIndicator}>{userScore}/100</p></div>
                    </li>*/}
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