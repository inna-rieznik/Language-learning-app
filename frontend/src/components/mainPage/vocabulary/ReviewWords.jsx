import s from "./ReviewWords.module.css";
import {NavLink} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

import Action from "./action/Action";

const ReviewWords = (props) => {

    //Settings component
    return (
        <div className={s.content}>
            <div style={{ width: "800px", margin: "20px auto 0 auto"}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                    >
                        Home
                    </Link>
                    <Typography color="text.primary">ReviewWords</Typography>
                </Breadcrumbs>
            <h1 style={{marginTop: "20px"}}>ReviewWords</h1>
            <Action urlName='quiz' title='Quiz'/>
            <Action urlName='flashcards' title='Flashcards'/>
            <Action urlName='matching_translation' title='Matching: connect word with translation'/>
            <Action urlName='matching_sentences' title='Complete the sentence'/>
            <Action urlName='fill_the_gap' title='Fill the gap'/>
            </div>
        </div>
    );
}

export default ReviewWords;