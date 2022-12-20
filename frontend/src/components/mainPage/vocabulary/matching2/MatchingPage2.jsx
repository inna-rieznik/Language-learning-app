import React from 'react';
import Matching2 from "./Matching2";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";



const MatchingPage2 = (props) => {

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
            <Typography color="text.primary">Matching</Typography>
        </Breadcrumbs>
            <h1  style={{marginTop: "20px", marginBottom: "20px"}}>Matching</h1>
            <div>

            </div>

            <div>
                <Matching2 />

            </div>
        </div>
    );
}

export default MatchingPage2;