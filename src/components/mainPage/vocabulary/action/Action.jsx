import s from "./Action.module.css";


const Action = (props) => {
    return (
        <div className={s.action}>
            {props.actionType}
        </div>
    );
}

export default Action;