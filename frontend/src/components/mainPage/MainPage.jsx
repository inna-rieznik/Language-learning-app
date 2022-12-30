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
              {/*  <img src={ProductLaunchImg} alt="Product Launch Img" width="981" height="736"/>*/}

            </div>
        </div>
    );
}
export default MainPage;


/*const OnlyAdmin = ({children}) => {
    const {authTokens, userId} = useAuth();
    const user = {}

    if (user.role === 'admin') {
        return <>{children}</>
    }

    return null

}*/