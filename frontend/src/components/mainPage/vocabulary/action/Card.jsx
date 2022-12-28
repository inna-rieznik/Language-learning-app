import s from "./Action.module.css";
import {useNavigate} from "react-router-dom";
import * as React from "react";


const Card = ({children, to, color, bgColor, disabled}) => {
    const navigate = useNavigate();

    return (
        <div onClick={disabled ? undefined : () => navigate(to)} className={s.root}
             style={{color, backgroundColor: bgColor}}>{children}</div>
    );
}

export default Card;