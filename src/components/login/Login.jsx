import s from "./Login.module.css";
import Search from "../../images/Search.png";
import Button from "../mainPage/vocabulary/action/Button";


const Login = (props) => {

    return (
        <div className={s.login}>
            <div className={s.image}>
                <img src={Search} alt="search" width="809" height="607"/>
            </div>
            <div className={s.form}>
                <h1>Log In</h1>
                <div className={s.info}>
                <form>
                    <label className={s.label}>Full Name
                        <input className={s.item} type="text" name="name"/><br/>
                    </label>
                    <label className={s.label}>Email
                        <input className={s.item} type="text" name="email"/><br/>
                    </label>
                    <label className={s.label}>Password
                        <input className={s.item} type="password" name="password"/><br/>
                    </label>
                </form>
                </div>
                <Button buttonType='submit'/>
                <p>You don't have an Account? REGISTER</p>
            </div>
        </div>
    );
}

export default Login;