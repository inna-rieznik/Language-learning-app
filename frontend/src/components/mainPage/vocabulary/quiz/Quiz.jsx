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
import TextFieldComp from "./TextFieldComp";

const Quiz = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = e => {
        e.preventDefault();
    }

    const categoryOptions = [
        {id: 0, name: "Basic words"},
        {id: 2, name: "Food"},
        {id: 3, name: "Colors"},
        {id: 4, name: "Animals"},
        {id: 5, name: "Sports"},
        {id: 6, name: "Art"},

    ]

    const difficultyOptions = [
        {id: "easy", name: "Easy"},
        {id: "medium", name: "Medium"},
        {id: "hard", name: "Hard"}
    ]

    const typeOptions = [
        {id: "multiple", name: "Multiple Choice"},
        {id: "boolean", name: "True/False"}
    ]


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
                <form onSubmit={handleSubmit}>
                    <SelectField options={categoryOptions} label="Category"/>
                    <SelectField options={difficultyOptions} label="Difficulty"/>
                    <SelectField options={typeOptions} label="Type"/>
                    <TextFieldComp />
                    <Box mt={3} width="100%">
                        <Button onClick={handleOpen} type="submit" variant="contained" type="submit" startIcon={<AddIcon/>}>Get Started</Button>
                    </Box>
                </form>
            </div>


        </div>
    );
}

export default Quiz;