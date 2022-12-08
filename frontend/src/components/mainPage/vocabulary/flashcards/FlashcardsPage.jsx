import React from 'react';
import s from "./Flashcards.module.css";
import Flashcards from "./Flashcards";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const FlashcardsPage = (props) => {



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
                <Typography color="text.primary">Flashcards</Typography>
            </Breadcrumbs>
            <h1>Flashcards</h1>
                <div>
                    <Flashcards/>
                </div>
        </div>
    );
}

export default FlashcardsPage;