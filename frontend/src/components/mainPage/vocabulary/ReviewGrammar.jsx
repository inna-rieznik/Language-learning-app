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
        <div >
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
            <Action urlName='select_form' title='Select the correct form of the word'/>
            <Action urlName='write_word' title='Write the correct word'/>
            <Action urlName='review_words/matching_sentence' title='Connect parts of the sentence'/>
            <Action urlName='review_words/complete_sentences' title='Complete the sentence'/>
            <Action urlName='review_words/fill_the_gap' title='Fill the gap'/>

        </div>
    );
}

export default ReviewGrammar;