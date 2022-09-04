import s from "../mainPage/MainPage.module.css";
import {NavLink} from "react-router-dom";

const UserPage = (props) => {

    return (
        <div className={s.content}>
            <p>
                <NavLink to='/'>
                    Home
                </NavLink>
                /User Page
            </p>
            <h1>User Page</h1>
        </div>
    );
}

export default UserPage;