import s from "./LessonPreview.module.css";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as props from "../../../redux/state";
import LessonPage from "../lessonPage/LessonPage";

const LessonPreview = (props) => {

    let lessonPath = `lesson/${props.id}`;

    let navigate = useNavigate();

    const routeChange = () => {
        let path = lessonPath;
        navigate(path);
    };

    return (
        <Card sx={{minWidth: 250}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Lesson: {props.id}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={routeChange}>start</Button>
            </CardActions>
        </Card>
    );

    /* return (
         <div className={s.lessonPreview}>
             <NavLink to={path}> Lesson {props.id} : {props.title}</NavLink>

         </div>
     );*/
}

export default LessonPreview;