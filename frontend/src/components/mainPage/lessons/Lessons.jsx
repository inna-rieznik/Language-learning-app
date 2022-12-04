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
import {useAuth} from "../../login/Auth";


let reqInstance = axios.create({
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
);


const Lessons = (props) => {
    const [listOfLessons, setListOfLessons] = useState();
    const [user, setUser] = useState({})
    const {userId} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        reqInstance.get("http://localhost:3011/lessons").then((response) => {
            setListOfLessons(response.data);
        });
    }, []);


    useEffect(() => {
        reqInstance.get(`http://localhost:3011/user/${userId}`).then((response) => {
            setUser(response.data[0]);
            console.log("user data", response.data[0]);
        });
    }, [userId]);

    return (
        <div className={s.lessons}>
            <h1>Lessons</h1>
            {(user.role === 'student') ? null :
                <Button style={{backgroundColor: "#FF777B", width: "400px", height: "50px", marginBottom: 20}}
                        variant="contained" href='create_lesson'>create new lesson</Button>
            }
            <Button style={{backgroundColor: "#FF777B", width: "400px", height: "50px", marginBottom: 20}}
                    variant="contained" href='review_grammar'>Review grammar</Button>

            {listOfLessons?.map((value, key) => (
                <div>
                    <Card style={{marginBottom: 20, backgroundColor: "rgba(255, 194, 194, 0.4)" , color: "#003066", borderRadius: "15px"}} >

                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Lesson: {value.id_lesson}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {value.title}
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <Button size="small" onClick={() => {
                                navigate(`lessons/id/${value.id_lesson}`)
                            }}>start</Button>
                        </CardActions>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default Lessons;