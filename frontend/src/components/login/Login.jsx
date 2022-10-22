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
import {useAuth} from "./Auth";


const Login = (props) => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    //this variable is used in index.js in req.body.variable
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
    const [userLoginId, setUserLoginId] = useState("");
    const navigate = useNavigate();
    const { setAuthTokens } =  useAuth();



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
                setAuthTokens(response.data);
                setLoggedIn(true);
                setLoginStatus(response.data[0].name);
                setUserLoginId(response.data[0]?.id_user);
               /* navigate(`/user/${response.data[0]?.id_user}`);*/

            }
            console.log(response.data);

        });
    };

    if (isLoggedIn) {
        return navigate('/');
    }

    return (
        <div>
            <div className={s.login}>
                <Box>
                    <img className={s.image} src={Search} alt="search" width="809" height="607"/>
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
                            {loginStatus}
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