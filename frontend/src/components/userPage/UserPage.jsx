import s from "../mainPage/MainPage.module.css";
import {NavLink} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {setLoginStatus} from "../login/Login";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const UserPage = (props) => {


    return (
        <div className={s.content}>
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                    >
                        Home
                    </Link>
                    <Typography color="text.primary">User Page</Typography>
                </Breadcrumbs>
            </div>
            <h1>User Page</h1>
            <h2>Name</h2>
            <h2>Username</h2>
        </div>
    );
}

export default UserPage;