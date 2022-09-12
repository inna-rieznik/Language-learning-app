import s from "./Quiz.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import {FormControl, TextField} from "@mui/material";

const TextFieldComp = (props) => {

    const handleChange = () => {};

    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size="small">
                <TextField onChange={handleChange} variant="outlined" label="Amount of Questions" type="number" size="small"/>
            </FormControl>
        </Box>
    );
}

export default TextFieldComp;