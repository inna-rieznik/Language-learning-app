import s from "./Quiz.module.css";
import {NavLink} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Box from "@mui/material/Box";
import {useState} from "react";
import SelectField from "./SelectField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const Quiz = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //Settings component
    return (
        <div className={s.content}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                    >
                        Home
                    </Link>
                    <Typography color="text.primary">Quiz</Typography>
                </Breadcrumbs>
            <h1>Quiz</h1>
            <div>
                <form>
                    <SelectField  label="Category"/>
                    <SelectField label="Difficulty"/>
                    <SelectField label="Type"/>
                    <Box>
                        <Button onClick={handleOpen} type="submit" variant="contained" startIcon={<AddIcon/>}>Get Started</Button>
                    </Box>
                </form>
            </div>


        </div>
    );
}

export default Quiz;