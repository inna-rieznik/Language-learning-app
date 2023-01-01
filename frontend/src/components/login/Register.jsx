import s from "./Login.module.css";
import Location from "../../images/Location.png";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import Axios from "axios";
import {useState} from "react";
import Link from "@mui/material/Link";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./Auth";
import {API_URL} from "../../utils/url";
import ProductLaunchImg from "../../images/Product Launch.png";


const Register = (props) => {

    const [isRegisteredIn, setRegisteredIn] = useState(false);
    const [usernameReg, setUsernameReg] = useState(""); //name + surname
    const [roleReg, setRoleReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    const [errorStatus, setErrorStatus] = useState("");
    const { setAuthTokens, userId } =  useAuth();

    const navigate = useNavigate();

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault();
        event.target.reset();
    };


    const register = () => {
        Axios.post(`${API_URL}/auth/register`, {
            username: usernameReg,
            email: emailReg,
            password: passwordReg,
            role : roleReg
        }).then((response) => {
            if (response.data.message) {
                setRegisterStatus(response.data.message);
            } else {
                const token  =  response.data.token;
                localStorage.setItem("token", token);
                window.location.href = '/'
            }
            console.log(response.data);
        });
    };




    return (
        <div>
            <div className={s.login}>
                <div>
                    <img className={s.image} src={Location} alt="search" width="809" height="680"/>
                </div>

                <form className={s.form} onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <Box mt={3} width="100%">
                        <TextField style={{width: "400px" }} required id="outlined-basic"
                                   label="Name"
                                   onChange={(e) => {
                                       setUsernameReg(e.target.value);
                                   }}
                                   variant="standard"/>
                    </Box>
                    <Box mt={3} width="100%">
                        <TextField style={{width: "400px" }} required id="outlined-basic"
                                   label="Email"
                                   onChange={(e) => {
                                       setEmailReg(e.target.value);
                                   }}
                                   variant="standard"/>
                    </Box>
                    <Box mt={3} width="100%">
                        <TextField style={{width: "400px" }} required id="outlined-basic"
                                   type="password"
                                   label="Password"
                                   onChange={(e) => {
                                       setPasswordReg(e.target.value);
                                   }}
                                   variant="standard"/>
                        <p style={{color: "red"}}>
                            {registerStatus}
                            {errorStatus}
                        </p>
                    </Box>


                    <Box mt={3} width="100%">
                        <Link underline="hover"
                              color="inherit"
                              href="/login">
                            You already have an account? LOGIN
                        </Link>
                    </Box>
                    <Box mt={3} width="100%">
                        <Button style={{backgroundColor: "#FF777B", width: "400px" }} type="submit" variant="contained" onClick={register}>Register</Button>
                    </Box>
                </form>
            </div>
        </div>
    );
}

export default Register;
