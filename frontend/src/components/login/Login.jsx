import s from "./Login.module.css";
import Search from "../../images/Search.png";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import SelectField from "../mainPage/vocabulary/quiz/SelectField";
import TextFieldComp from "../mainPage/vocabulary/quiz/TextFieldComp";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import Button from "@mui/material/Button";
import {useState} from "react";
import Axios from "axios";
import Link from "@mui/material/Link";


const Login = (props) => {


          //this variable is used in index.js in req.body.variable
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const [loginStatus, setLoginStatus] = useState("");

    const login = () => {
        Axios.post('http://localhost:3011/login', {
            email: email,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].name);
            }
            console.log(response.data);
        });
    };


    return (
        /*   <div className={s.login}>
               <div className={s.image}>
                   <img src={Search} alt="search" width="809" height="607"/>
               </div>
               <div className={s.form}>
                   <h1>Log In</h1>
                   <div className={s.info}>
                   <form>
                       <label className={s.label}>Full Name
                           <input className={s.item} type="text" name="name"/><br/>
                       </label>
                       <label className={s.label}>Your email
                           <input className={s.item} type="text" name="name"/><br/>
                       </label>
                       <label className={s.label}>Password
                           <input className={s.item} type="password" name="password"/><br/>
                       </label>
                   </form>
                   </div>
                   <Button buttonType='submit'/>
                   <p>You don't have an Account? REGISTER</p>
               </div>
           </div>*/
        <div>
            <div className={s.login}>
            <Box>
                <img src={Search} alt="search" width="809" height="607"/>
            </Box>
            <form className={s.form}>
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
                    <h1>
                        {loginStatus}
                    </h1>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Login;