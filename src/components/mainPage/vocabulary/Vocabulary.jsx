import s from "../vocabulary/Vocabulary.module.css";
import Action from "./action/Action";
import Button from "./action/Button";


const Vocabulary = () => {
    return (
        <div className={s.vocabulary}>
            <h1>Vocabulary</h1>

            <Action  urlName='my_words' title='my words'/>
            <Button  urlName='quiz' buttonAction='review words'/>
            <Button  urlName='modal_add_word' buttonAction='+add new word'/>

        </div>
    );
}

export default Vocabulary;