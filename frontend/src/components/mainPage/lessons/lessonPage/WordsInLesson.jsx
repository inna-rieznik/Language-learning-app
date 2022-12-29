import {reqInstance} from '../../../../utils/auth'
import {useEffect, useState} from "react";
import {useAuth} from "../../../login/Auth";
import {useParams} from "react-router-dom";
import {API_URL} from "../../../../utils/url";


const WordsInLesson = (props) => {

    const [listOfWords, setListOfWords] = useState();
    const [user, setUser] = useState({})
    const {userId} = useAuth();
    let {lessonId} = useParams();

    useEffect(() => {
        reqInstance.get(`${API_URL}/user/${userId}`)
            .then((response) => {
                setUser(response.data[0]);
                // console.log("user data", response.data[0]);
            });
    }, [userId]);

    useEffect(() => {
        {
            (user.role === 'student') ?
                reqInstance.get(`${API_URL}/words/forStudent/${lessonId}`)
                    .then((response) => {
                        setListOfWords(response.data);
                        // console.log(response.data);
                    })
                :
                reqInstance.get(`${API_URL}/words/all/${lessonId}`)
                    .then((response) => {
                        setListOfWords(response.data);
                        // console.log(response.data);
                    })
        }

    }, [user.role]);


    return (
        <div>
            {listOfWords?.map((row) => (
                <li style={{marginBottom: "5px", fontSize: '20px'}}>{row.source} - {row.target}</li>
            ))}
        </div>

    );

}



export default WordsInLesson;