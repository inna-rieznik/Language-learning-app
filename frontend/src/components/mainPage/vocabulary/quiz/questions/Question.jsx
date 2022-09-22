import s from "../Quiz.module.css";
import {NavLink} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";

const Question = (props) => {

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
                    <Typography color="text.primary">Questions</Typography>
                </Breadcrumbs>

            <h1>Questions</h1>
            <Box>
                <Typography variant="4">This is a question </Typography>
                <Box mt={2}>
                    <Button variant="contained">Answer 1</Button>
                </Box>
                <Box mt={2}>
                    <Button variant="contained">Answer 2</Button>
                </Box>
                <Box mt={2}>
                    Score 2/6
                </Box>
            </Box>
        </div>
    );
}

export default Question;