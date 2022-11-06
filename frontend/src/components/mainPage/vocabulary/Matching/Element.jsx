import s from "./Matching.module.css";
import React from "react";
import {useDrag} from "react-dnd";

const Element = ({source, target}) => {
        const [{isDragging}, drag] = useDrag(() => ({
            type: "div",
            item: {source: source},
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging()
            })
        }))

    return (
        <div className={s.element} ref={drag} style={{border: isDragging ? "5px solid red" : "5px solid #003066"}}>
            <h2>{source}</h2>
        </div>
    );
}

export default Element;