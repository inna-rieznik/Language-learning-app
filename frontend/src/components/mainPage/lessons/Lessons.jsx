import s from "../lessons/Lessons.module.css";
import Action from "../vocabulary/action/Action";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Axios from "axios";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import * as React from "react";


const Lessons = (props) => {


    const [title, setTitle] = useState("");
    const [id, setId] = useState("");

    const [listOfLessons, setListOfLessons] = useState();

    useEffect(() => {
        axios.get("http://localhost:3011/lessons").then((response) => {
            setListOfLessons(response.data);
            console.log(response.data);
        });
    }, []);

    const addLesson = () => {
        Axios.post('http://localhost:3011/words', {
            title: title,
            id: id
        }).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <div className={s.lessons}>
            <h1>Lessons</h1>

             <Action urlName='review_grammar' title='review grammar'/>
            <Action urlName='create_lesson' title='create new lesson'/>

            {listOfLessons?.map((row) => (
                <div>
                    <Card sx={{minWidth: 250}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Lesson: {row.id_lesson}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {row.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" >start</Button>
                        </CardActions>
                    </Card>
                </div>

                ))}
        </div>
    );
}

export default Lessons;