import s from "./wordsPage.module.css";
import {NavLink} from "react-router-dom";
import Word from "./words/Word";
import Button from "../mainPage/vocabulary/action/Button";

const WordsPage = (props) => {
    let wordsElement = props.wordsData.map(word => <Word id={word.id} cz={word.cz} eng={word.eng}/>)

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
            <Button urlName='modal_add_word' buttonAction='+add new word'/>
            <div>
                {wordsElement}
            </div>

        </div>
    );
}

export default WordsPage;