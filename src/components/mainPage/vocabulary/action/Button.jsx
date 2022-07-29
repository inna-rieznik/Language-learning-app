import s from "./Button.module.css";

const Button = (props) => {
    return (
        <div>
            <button className={`${s.primary} ${s.button}`}>
                {props.buttonType}
            </button>
        </div>
    );
}

export default Button;