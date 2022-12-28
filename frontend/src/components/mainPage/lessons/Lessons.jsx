import s from "../lessons/Lessons.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import * as React from "react";
import {useNavigate} from 'react-router-dom';
import {useAuth} from "../../login/Auth";
import Card from "../vocabulary/action/Card";
import Check from '../../../images/check.svg'
import {reqInstance} from "../../../utils/auth";


const Lessons = (props) => {
    const navigate = useNavigate();
    const [listOfLessons, setListOfLessons] = useState();
    const [user, setUser] = useState({})
    const {userId} = useAuth();

    useEffect(() => {
        reqInstance.get("http://localhost:3011/lessons").then((response) => {
            setListOfLessons(response.data);
        });
    }, []);


    useEffect(() => {
        reqInstance.get(`http://localhost:3011/user/${userId}`).then((response) => {
            setUser(response.data[0]);
            //console.log("user data", response.data[0]);
        });
    }, [userId]);

    return (
        <div className={s.lessons}>
            <h1>Lessons</h1>
            {user && user.role === 'admin' ?

            <Button style={{backgroundColor: "#FF777B", width: "600px", height: "50px", marginBottom: '40px'}} variant="contained" href='create_lesson'>create new lesson</Button> : null}
            <Button style={{backgroundColor: "#FF777B", width: "600px", height: "50px", marginBottom: '40px'}} variant="contained" href='review_grammar'>Review grammar</Button>

            {listOfLessons?.map((value) => (
                <div key={value.id_lesson}>
                    <Card to={`lessons/id/${value.id_lesson}`} disabled={value.id_state === 4 ? true : false} bgColor={value.id_state === 4 ? '#e1e1e1' : undefined} color={value.id_state === 4 ? 'gray' : undefined}>
                        <div className={s.cardContent}>
                            <img className={s.image} src={Check} alt='check' width={49} height={49}
                                 style={{marginRight: '16px', opacity: value.id_state === 1 ? 1 : 0}}/>
                            <div>
                                Lesson {value.id_lesson}:
                            </div>
                            <div>
                                {value.title}
                            </div>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default Lessons;