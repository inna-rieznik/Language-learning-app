import s from "./ReviewWords.module.css";
import {NavLink} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

import Action from "./action/Action";

const ReviewGrammar = (props) => {

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
                <Typography color="text.primary">Review Grammar</Typography>
            </Breadcrumbs>
            <h1>Review Grammar</h1>
            <Action urlName='quiz' title='Quiz'/>
            <Action urlName='flashcards' title='Flashcards'/>
            <Action urlName='review_words/matching_translation' title='Matching: connect word with translation'/>
            <Action urlName='review_words/matching_sentences' title='Complete the sentence'/>
            <Action urlName='review_words/fill_the_gap' title='Fill the gap'/>

        </div>
    );
}

export default ReviewGrammar;