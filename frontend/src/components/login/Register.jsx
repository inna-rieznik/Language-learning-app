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


const Register = (props) => {


    const [usernameReg, setUsernameReg] = useState(""); //name + surname
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");

    const navigate = useNavigate();

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault();
        event.target.reset();
    };

    const register = () => {
        Axios.post('http://localhost:3011/register', {
            username: usernameReg,
            email: emailReg,
            password: passwordReg
        }).then((response) => {
            if (response.data.message) {
                setRegisterStatus(response.data.message);
            } else {
                navigate('/user');
            }
            console.log(response.data);
        });
    };


    return (
        <div>
            <div className={s.login}>
                <div>
                    <img src={Location} alt="search" width="809" height="706"/>
                </div>
                <form className={s.form} onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <Box mt={3} width="100%">
                        <TextField id="outlined-basic"
                                   label="Name"
                                   onChange={(e) => {
                                       setUsernameReg(e.target.value);
                                   }}
                                   variant="outlined"/>
                    </Box>
                    <Box mt={3} width="100%">
                        <TextField id="outlined-basic"
                                   label="Email"
                                   onChange={(e) => {
                                       setEmailReg(e.target.value);
                                   }}
                                   variant="outlined"/>
                    </Box>
                    <Box mt={3} width="100%">
                        <TextField id="outlined-basic"
                                   label="Password"
                                   onChange={(e) => {
                                       setPasswordReg(e.target.value);
                                   }}
                                   variant="outlined"/>
                        <p style={{color: "red"}}>
                            {registerStatus}
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
                        <Button variant="contained" onClick={register}>Register</Button>
                    </Box>
                </form>
            </div>
        </div>
    );
}

export default Register;
