import s from "../mainPage/MainPage.module.css";
import {NavLink, useParams} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import axios from "axios";
import {useAuth} from "../login/Auth";
 

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const UserPage = (props) => {

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
            <h2>Name: {userObject[0]?.name}</h2>
            <h2>Username: {userObject[0]?.username} </h2>
            <h2>Role: {userObject[0]?.role} </h2>
            <h2>Level: {userObject[0]?.level}</h2>
            <h2>Points: {userObject[0]?.score}</h2>
        </div>
    );
}

export default UserPage;