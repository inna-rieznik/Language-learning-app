import s from "./VocabularyPage.module.css";
import {NavLink} from "react-router-dom";
import TableWords from "./table/TableWords";

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
            <h1>My Words</h1>
            <div>
                <TableWords/>
            </div>
        </div>
    );
}

export default VocabularyPage;