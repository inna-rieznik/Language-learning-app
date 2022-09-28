import * as React from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";


const CreateLesson = (props) => {

    return (
        <div>
            <h1>Create New Lesson</h1>
            <Box
                sx={{
                    maxWidth: '100%',
                }}
            >
                <h2>Title</h2>
                <TextField sx={{ paddingBottom: 2 }} fullWidth id="fullWidth" />
                <h2>Some intro text</h2>
                <TextField sx={{ paddingBottom: 2 }}fullWidth id="fullWidth" />
                <h2>Grammar rule title</h2>
                <TextField sx={{ paddingBottom: 2 }} fullWidth id="fullWidth" />
                <h2>Grammar rule</h2>
                <TextField sx={{ paddingBottom: 2 }} fullWidth id="fullWidth" />
            </Box>
        </div>
    );
}
export default CreateLesson;