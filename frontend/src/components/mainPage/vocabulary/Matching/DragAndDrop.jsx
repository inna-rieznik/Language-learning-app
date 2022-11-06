import React, {useState} from 'react';
import s from './Matching.module.css'
import Element from "./Element";
import {useDrop} from "react-dnd";

const brands = [
    {
        iconName: "adobe",
        brandName: "Adobe"
    },
    {
        iconName: "airbnb",
        brandName: "Airbnb"
    },
    {
        iconName: "amazon",
        brandName: "Amazon"
    },
    {
        iconName: "android",
        brandName: "Android"
    },
    {
        iconName: "angellist",
        brandName: "AngelList"
    },
    {
        iconName: "angular",
        brandName: "Angular"
    }
]

const DragAndDrop = (props) => {
    const [board, setBoard] = useState([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => addToBoard(item.iconName),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const addToBoard = (iconName) => {
        console.log(iconName);
    }
    return (
        <div>
            <>
                <div className={s.draggableItems}>
                    {brands.map(b => {
                        return (
                            <div>
                                <Element brandName={b.brandName} iconName={b.iconName}/>
                            </div>


                        )
                    })}
                </div>
                <div>

                    <div className={s.board} ref={drop}></div>
                </div>
            </>
        </div>
    );
}

export default DragAndDrop;