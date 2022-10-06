import s from "./Login.module.css";
import Search from "../../images/Search.png";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import {useState} from "react";
import Axios from "axios";
import Link from "@mui/material/Link";
import {useNavigate} from 'react-router-dom';


const Login = (props) => {


    //this variable is used in index.js in req.body.variable
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault();
        event.target.reset();
    };

    const login = () => {
        Axios.post('http://localhost:3011/login', {
            email: email,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].name);
                setUserId(response.data[0]?.id_user);
                navigate(`/user/${userId}`);
            }
            console.log(response.data);

        });
    };


    return (
        <div>
            <div className={s.login}>
                <Box>
                    <img src={Search} alt="search" width="809" height="607"/>
                </Box>
                <form className={s.form} onSubmit={handleSubmit}>
                    <h1>Log In</h1>
                    <Box mt={3} width="100%">
                        <TextField id="outlined-basic"
                                   label="Email"
                                   onChange={(e) => {
                                       setEmail(e.target.value);
                                   }}
                                   variant="outlined"/>
                    </Box>
                    <Box mt={3} width="100%">
                        <TextField id="outlined-basic"
                                   label="Password"
                                   onChange={(e) => {
                                       setPassword(e.target.value);
                                   }}
                                   variant="outlined"/>
                        <p style={{color: "red"}}>
                            {loginStatus}, {userId}
                        </p>
                    </Box>
                    <Box mt={3} width="100%">
                        <Link underline="hover"
                              color="inherit"
                              href="/register">
                            You don't have an account? REGISTER
                        </Link>
                    </Box>
                    <Box mt={3} width="100%">
                        <Button onClick={login} variant="contained">Log in</Button>
                    </Box>
                    <div>

                    </div>
                </form>


            </div>
        </div>
    );
}

export default Login;