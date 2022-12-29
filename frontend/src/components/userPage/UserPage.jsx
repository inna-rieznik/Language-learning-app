import s from "./UserPage.module.css";
import {useParams} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import axios from "axios";
import User from '../../images/user-svgrepo-com.svg'
import {API_URL} from "../../utils/url";



let reqInstance = axios.create({
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
);

const UserPage = (props) => {

    let {userId} = useParams();
    const [userObject, setUserObject] = useState([]);


    useEffect(() => {
        reqInstance.get(`${API_URL}/user/${userId}`).then((response) => {
            setUserObject(response.data);
            console.log(response.data);
        });
    }, [])

    return (
        <div className={s.content}>
            <div style={{width: "800px", margin: "20px auto 20px auto"}}>
                <div role="presentation">
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

                <h1 style={{marginTop: "20px"}}>User Page</h1>
                <div className={s.modal}>
                    <div className={s.modalInside}>
                        <div className={s.user}>
                            <img src={User} alt="UserIcon" width="100" height="100"/>
                        </div>
                        <div style={{ display: "flex",justifyContent: "center"}}>
                            <h1>{userObject[0]?.username} </h1>
                        </div>
                        <div style={{ display: "flex",justifyContent: "center"}}>
                            <h2>{userObject[0]?.role} </h2>
                        </div>
                    </div>
                    <div className={s.modalInside}>
                        <div className={s.level}>
                            <h3>Level: {userObject[0]?.level}</h3>
                            <h3>Points: {userObject[0]?.score}</h3>
                        </div>
                        <h3>Email: {userObject[0]?.email}</h3>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default UserPage;