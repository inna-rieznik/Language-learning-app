import ProductLaunchImg from "../../images/Product Launch.png";
import s from './MainPage.module.css'
import Lessons from "./lessons/Lessons";
import Vocabulary from "./vocabulary/Vocabulary";

const MainPage = (props) => {
    return (
        <div className={s.content}>
            <div className={s.subContent}>
                {/*<OnlyAdmin>*/}
                <Lessons lessonsData={props.lessonsData}/>
                {/*</OnlyAdmin>*/}
                <Vocabulary dispatch={props.dispatch}/>
            </div>
            <div className={s.image}>
                <img src={ProductLaunchImg} alt="Product Launch Img" width="981" height="736"/>
            </div>
        </div>
    );
}

// const OnlyAdmin = ({ children}) => {
//     const {authTokens, userId} = useAuth();
//     const user = {}
//
//     if (user.role === 'admin') {
//         return <>{children}</>
//     }
//
//     return null
//
// }

export default MainPage;