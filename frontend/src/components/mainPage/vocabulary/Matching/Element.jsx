import s from "./Matching.module.css";
import React from "react";
import {useDrag} from "react-dnd";

const Element = ({iconName, brandName}) => {
        const [{isDragging}, drag] = useDrag(() => ({
            type: "div",
            item: {iconName: iconName},
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging()
            })
        }))

    return (
        <div className={s.element} ref={drag} style={{border: isDragging ? "5px solid red" : "5px solid #003066"}}>
            <h2>{brandName}</h2>
        </div>
    );
}

export default Element;