import s from "./ReviewWords.module.css";
import {NavLink} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

import Card from "./action/Card";

const ReviewGrammar = (props) => {

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
                    <Typography color="text.primary">Review Grammar</Typography>
                </Breadcrumbs>
                <h1  style={{marginTop: "20px"}}>Review Grammar</h1>
                <Card urlName='select_form' title='Select the correct form of the word'/>
                <Card urlName='write_word' title='Write the correct word'/>
                <Card urlName='review_words/matching_sentence' title='Connect parts of the sentence'/>
                <Card urlName='review_words/complete_sentences' title='Complete the sentence'/>
                <Card urlName='review_words/fill_the_gap' title='Fill the gap'/>
            </div>
        </div>
    );
}

export default ReviewGrammar;