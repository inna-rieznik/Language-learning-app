import s from "../Quiz.module.css";
import {NavLink} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

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

        </div>
    );
}

export default Question;