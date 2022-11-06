import update from 'immutability-helper'
import { memo, useCallback, useState } from 'react'
import { Box } from './Box'
import { Dustbin } from './Dustbin'
import {useEffect} from "react";
import axios from "axios";

export const Container = memo(function Container() {

    const [words2, setWords2] = useState([]);
    const [droppedWords, setDroppedWords] = useState([]);
    const [dustbins, setDustbins] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3011/words").then((response) => {

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
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                {words2.map((word, index) => (
                    <Box
                        source={word.source}
                        target={word.target}
                        isDropped={isDropped(word.source)}
                        key={index}
                    />
                ))}
            </div>

            <div style={{ overflow: 'hidden', clear: 'both' }}>
                {dustbins.map(({ target, lastDroppedItem }, index) => (
                    <Dustbin
                        target={target}
                        lastDroppedItem={lastDroppedItem}
                        onDrop={(item) => handleDrop(index, item)}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
})
