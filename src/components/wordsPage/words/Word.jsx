import s from "./Word.module.css";


const Word = (props) => {
    return (
        <div>
          <tr>
              {props.id}. {props.cz} - {props.eng}
          </tr>
        </div>
    );
}

export default Word;