import s from "./Login.module.css";
import Search from "../../images/Search.png";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import SelectField from "../mainPage/vocabulary/quiz/SelectField";
import TextFieldComp from "../mainPage/vocabulary/quiz/TextFieldComp";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import Button from "@mui/material/Button";


const Register = (props) => {

    return (
        <div className={s.login}>
            <img src={Search} alt="search" width="809" height="706"/>

            <form className={s.form}>
                <h1>Register</h1>
                <Box mt={3} width="100%">
                    <TextField id="outlined-basic" label="Name" variant="outlined"/>
                </Box>
                <Box mt={3} width="100%">
                    <TextField id="outlined-basic" label="Email" variant="outlined"/>
                </Box>
                <Box mt={3} width="100%">
                    <TextField id="outlined-basic" label="Password" variant="outlined"/>
                </Box>
                <Box mt={3} width="100%">
                    <TextField id="outlined-basic" label="Password confirm" variant="outlined"/>
                </Box>
                <Box mt={3} width="100%">
                    <Button variant="contained">Register</Button>
                </Box>
            </form>
        </div>
    )
        ;
}

export default Register;