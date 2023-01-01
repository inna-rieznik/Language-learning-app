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
import {API_URL} from "../../utils/url";


const Login = (props) => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    //this variable is used in index.js in req.body.variable
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
   // const [userLoginId, setUserLoginId] = useState("");
    const navigate = useNavigate();
    const { setAuthTokens, userId } =  useAuth();


    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault();
        event.target.reset();
    };


    if (localStorage.getItem("token")) {
        window.location.href = '/'
        return null
    }



    const login = () => {
        Axios.post(`${API_URL}/auth/login`, {
            email: email,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                const token  =  response.data.token;
                //set JWT token to local
                localStorage.setItem("token", token);
                setAuthTokens(response.data);
               // setUserLoginId(response.data[0]?.id_user);
                setLoggedIn(true);
                window.location.href = '/'
                //setLoginStatus(response.data[0].name);
                /* navigate(`/user/${response.data[0]?.id_user}`);*/

            }
            //console.log(response.data);

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
                        <TextField style={{width: "400px" }} required id="outlined-basic"
                                   label="Email"
                                   onChange={(e) => {
                                       setEmail(e.target.value);
                                   }}
                                   variant="standard"/>
                    </Box>
                    <Box mt={3} width="100%">
                        <TextField style={{width: "400px" }} required id="outlined-basic"
                                   label="Password"
                                   type="password"
                                   onChange={(e) => {
                                       setPassword(e.target.value);
                                   }}
                                   variant="standard"/>
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
                        <Button style={{backgroundColor: "#FF777B", width: "400px" }} type="submit" onClick={login} variant="contained">Log in</Button>
                    </Box>
                    <div>

                    </div>
                </form>


            </div>
        </div>
    );
}

export default Login;