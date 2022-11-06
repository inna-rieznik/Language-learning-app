import React, {useState} from 'react';
import s from './Matching.module.css'
import Element from "./Element";
import {useDrop} from "react-dnd";
import {useEffect} from "react";
import axios from "axios";


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
    const [words, setWords] = useState([]);
    const [board, setBoard] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3011/words").then((response) => {

            setWords(response.data.map((wordItem, index) => {
                return {
                    id: `${index}-${Date.now()}`,
                    source: wordItem.source,
                    target: wordItem.target
                }
            }))
            console.log(response.data);
        });
    }, []);

    console.log("words", words);



    const [{isOver}, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => addToBoard(item.source),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const addToBoard = (source) => {
        console.log(source);
        const wordsList = words.filter((item) => source === item.source);
        setBoard([wordsList[0]]);
    }
    return (
        <div>
            <>
                <div className={s.draggableItems}>
                    {words.map(word => {
                        return (
                            <div>
                                <Element source={word.source} target={word.target}/>
                            </div>
                        )
                    })}
                </div>
                <div>

                    <div className={s.board} ref={drop}>
                        {board.map((word) => {
                            return(
                            <div>
                                <Element source={word.source} target={word.source}/>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </>
        </div>
    );
}

export default DragAndDrop;