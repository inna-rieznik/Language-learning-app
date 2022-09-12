import s from "../Quiz.module.css";
import {NavLink} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

const FinalScreen = (props) => {

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
                    <Typography color="text.primary">Final Screen</Typography>
                </Breadcrumbs>
            <h1>Final Screen</h1>
        </div>
    );
}

export default FinalScreen;