import ProductLaunchImg from "../../images/Product Launch.png";
import s from './MainPage.module.css'
import Lessons from "./lessons/Lessons";
import Vocabulary from "./vocabulary/Vocabulary";
import {NavLink} from "react-router-dom";

const MainPage = (props) => {

    return (
        <div className={s.content}>
            <div className={s.subContent}>
                <Lessons lessonsData={props.lessonsData}/>
                <Vocabulary/>
            </div>
            <div className={s.image}>
                <img src={ProductLaunchImg} alt="Product Launch Img" width="981" height="736"/>
            </div>
        </div>
    );
}

export default MainPage;