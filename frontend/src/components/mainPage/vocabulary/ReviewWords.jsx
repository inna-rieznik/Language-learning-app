import s from "./ReviewWords.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

import Card from "./action/Card";

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
                    <Typography color="text.primary">Review Words</Typography>
                </Breadcrumbs>
            <h1 style={{marginTop: "20px"}}>Review Words</h1>
                <Card to='quiz'>Quiz Words</Card>
            {/*<Card urlName='flashcards' title='Flashcards'/>*/}
                <Card to='translate'>Word - Translation (CZ-ENG)</Card>
               {/* <Card to='translate'>Translation - Word (ENG-CZ)</Card>*/}
                <Card to='matching_translation'>Matching: connect word with translation</Card>
            {/*<Card urlName='matching_sentences' title='Complete the sentence'/>
            <Card urlName='fill_the_gap' title='Fill the gap'/>*/}
            </div>
        </div>
    );
}

export default ReviewWords;