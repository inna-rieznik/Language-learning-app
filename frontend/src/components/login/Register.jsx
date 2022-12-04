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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Register = (props) => {

    const [isRegisteredIn, setRegisteredIn] = useState(false);
    const [usernameReg, setUsernameReg] = useState(""); //name + surname
    const [roleReg, setRoleReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    const { setAuthTokens, userId } =  useAuth();

    const navigate = useNavigate();

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault();
        event.target.reset();
    };

    const register = () => {
        Axios.post('http://localhost:3011/auth/register', {
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
                setAuthTokens(response.data);
                setRegisteredIn(true);
                window.location.href = '/'
               // setRegisterStatus(response.data[0].name);
            }
            console.log(response.data);
        });
    };

   if (isRegisteredIn) {
        return navigate('/');
    }

   /* if (userId > 0) {
        return navigate('/');
    }*/


    return (
        <div>
            <div className={s.login}>
                <div>
                    <img className={s.image} src={Location} alt="search" width="809" height="706"/>
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
                                   label="Password"
                                   onChange={(e) => {
                                       setPasswordReg(e.target.value);
                                   }}
                                   variant="standard"/>
                        <p style={{color: "red"}}>
                            {registerStatus}
                        </p>
                    </Box>
                    <Box mt={3} width="100%">
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                onChange={(e) => {
                                    setRoleReg(e.target.value);
                                }}
                            >
                                <FormControlLabel value="1" control={<Radio />} label="admin" />
                                <FormControlLabel value="2" control={<Radio />} label="student" />
                            </RadioGroup>
                        </FormControl>
                    </Box>

                    <Box mt={3} width="100%">
                        <Link underline="hover"
                              color="inherit"
                              href="/login">
                            You already have an account? LOGIN
                        </Link>
                    </Box>
                    <Box mt={3} width="100%">
                        <Button style={{backgroundColor: "#FF777B", width: "400px" }} variant="contained" onClick={register}>Register</Button>
                    </Box>
                </form>
            </div>
        </div>
    );
}

export default Register;
