import React from 'react';
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import WordTranslationGame from "./WordTranslationGame";
import {API_URL} from "../../../../utils/url";


const OpenQuestionsPage = (props) => {

    return (
        <div style={{ width: "800px", margin: "20px auto 0 auto"}}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                >
                    Home
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/review_words"
                >
                    ReviewWords
                </Link>
                <Typography color="text.primary">Word-Translation</Typography>
            </Breadcrumbs>
            <h1 style={{marginTop: "20px"}}>Word-Translation(CZ-ENG)</h1>

            <div >
                <WordTranslationGame fetchDataEndpoint={`${API_URL}/words/forStudent/random/6`}/>
            </div>
        </div>
    );
}

export default  OpenQuestionsPage;