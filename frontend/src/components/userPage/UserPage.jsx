import s from "../mainPage/MainPage.module.css";
import {NavLink, useParams} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import axios from "axios";
 

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const UserPage = (props) => {

    let userPoints = 0;
    let level = 1;
    let {userId} = useParams();
    const [userObject, setUserObject] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3011/user/${userId}`).then((response) => {
            setUserObject(response.data);
            console.log(response.data);
        });
    }, [])

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
            <h2>Name: {userObject[0]?.name}  </h2>
            <h2>Username</h2>
            <h2>Level: {level}</h2>
            <h2>Points: {userPoints}</h2>
        </div>
    );
}

export default UserPage;