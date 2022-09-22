import s from "./AddNewWord.module.css";


const AddNewWord = (props) => {

    return (
        <div className={s.content}>
            <h1>Add new word</h1>
            <div>
                <button>+Add</button>
            </div>

        </div>
    );
}

export default AddNewWord;