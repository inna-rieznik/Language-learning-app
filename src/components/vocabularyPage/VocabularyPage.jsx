import s from "./VocabularyPage.module.css";
import {NavLink} from "react-router-dom";

const VocabularyPage = () => {
    return (
        <div className={s.content}>

            <div>
                <p>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                     /My words
                </p>
            </div>


            <p>bla bla bla</p>


        </div>
    );
}

export default VocabularyPage;