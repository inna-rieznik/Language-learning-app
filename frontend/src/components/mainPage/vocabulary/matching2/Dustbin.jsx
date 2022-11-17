import {memo} from "react";
import {useDrop} from "react-dnd";
import Button from "@mui/material/Button";
import * as React from "react";
import {useState} from "react";

const style = {
    height: "50px",
    width: "12rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    color: "#003066",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "normal"
};
export const Dustbin = memo(function Dustbin({ error, target, lastDroppedItem, onDrop }) {
    const [{isOver, canDrop}, drop] = useDrop({
        accept: "div",
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });
    const isActive = isOver && canDrop;

    let backgroundColor = "#FDA3A2";

    if (isActive) {
        backgroundColor = "#FFC2C2";
    } else if (canDrop) {
        backgroundColor = "#ff777b";
    }


    return (
        <div>
            <h2>{target}</h2>
            <div>{error ? <div style={{ backgroundColor: 'red', height: "20px", width: "12rem", color: 'white'}} >BAD</div> : null }</div>
            <div ref={drop} style={{...style, backgroundColor}} data-testid="dustbin">
                {lastDroppedItem && (
                    <p>{JSON.stringify(lastDroppedItem.source)}</p>
                )}
            </div>

        </div>
    );
});
