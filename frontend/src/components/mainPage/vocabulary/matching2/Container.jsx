import update from 'immutability-helper'
import { memo, useCallback, useState } from 'react'
import { Box } from './Box'
import { Dustbin } from './Dustbin'
import {useEffect} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import * as React from "react";

export const Container = memo(function Container() {

    const [words2, setWords2] = useState([]);
    const [droppedWords, setDroppedWords] = useState([]);
    const [dustbins, setDustbins] = useState([]);
    const [error, changeError] = useState({});
    const [lastDroppedItem, setLastDroppedItem] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3011/words/random/6").then((response) => {

            setWords2(response.data.map((wordItem, index) => {
                return {
                    id: `${index}-${Date.now()}`,
                    source: wordItem.source
                }
            }))

            setDustbins(response.data.map((wordItemTarget, index) => {
                return {
                    id: `${index}-${Date.now()}`,
                    target: wordItemTarget.target,
                    lastDroppedItem: null
                }
            }))
            console.log(response.data);
        });
    }, []);


    console.log("words2: ", words2);
    console.log("dustbin: ", dustbins);



    function isDropped(boxName) {
        return droppedWords.indexOf(boxName) > -1
    }

    const handleDrop = useCallback(
        (index, item) => {
            const { name } = item
            setDroppedWords(
                update(droppedWords, name ? { $push: [name] } : { $push: [] }),
            )

            setDustbins(
                update(dustbins, {
                    [index]: {
                        lastDroppedItem: {
                            $set: item,
                        },
                    },
                }),
            )
        },
        [droppedWords, dustbins],
    )

    return (
        <div>
            <div style={{overflow: 'hidden', clear: 'both' }}>
                {words2.map((word, index) => (
                    <Box
                        source={word.source}
                        target={word.target}
                        isDropped={isDropped(word.source)}
                        key={index}
                    />
                ))}
            </div>

            <div style={{  display: 'grid',
                           alignItems: 'center',
                           gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
                           gap: '1rem', overflow: 'hidden', clear: 'both' }}>
                {dustbins.map(({source, target, lastDroppedItem }, index) => (
                    <Dustbin
                        error={error[index]}
                        target={target}
                        lastDroppedItem={lastDroppedItem}
                        onDrop={(item) => handleDrop(index, item)}
                        key={index}
                    />
                ))}
            </div>

            <Button onClick={() => {
                const newErrorState = {};
                console.log("error ",newErrorState)
                for (let i=0; i < dustbins.length; i++){
                    if(dustbins[i].lastDroppedItem === null || dustbins[i].lastDroppedItem.source !== words2[i].source){
                        newErrorState[i] = true;
                    }

                    changeError(newErrorState);
                }

            }} variant="contained">check</Button>
        </div>
    )
})
