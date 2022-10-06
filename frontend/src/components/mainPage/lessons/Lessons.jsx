import s from "../lessons/Lessons.module.css";
import Action from "../vocabulary/action/Action";
import {useEffect, useState} from "react";
import axios from "axios";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import * as React from "react";
import {useNavigate} from 'react-router-dom';


const Lessons = (props) => {
    const [listOfLessons, setListOfLessons] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3011/lessons").then((response) => {
            setListOfLessons(response.data);
        });
    }, []);

    return (
        <div className={s.lessons}>
            <h1>Lessons</h1>

            <Action urlName='review_grammar' title='review grammar'/>
            <Action urlName='create_lesson' title='create new lesson'/>

            {listOfLessons?.map((value, key) => (
                <div>
                    <Card sx={{minWidth: 250}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Lesson: {value.id_lesson}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {value.title}
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <Button size="small" onClick={() => {navigate(`lessons/id/${value.id_lesson}`)}}>start</Button>
                        </CardActions>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default Lessons;