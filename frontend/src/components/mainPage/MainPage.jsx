import ProductLaunchImg from "../../images/Product Launch.png";
import s from './MainPage.module.css'
import Lessons from "./lessons/Lessons";
import Vocabulary from "./vocabulary/Vocabulary";


const MainPage = (props) => {
    return (
        <div className={s.content}>
            <div className={s.subContent} style={{marginTop: "20px", marginBottom: "20px"}}>
                <Lessons/>
                <Vocabulary/>
            </div>
            <div className={s.image}>
            </div>
        </div>
    );
}
export default MainPage;

