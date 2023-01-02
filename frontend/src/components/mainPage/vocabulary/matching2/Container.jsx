import update from 'immutability-helper'
import { memo, useCallback, useState } from 'react'
import { Box } from './Box'
import { Dustbin } from './Dustbin'
import {useEffect} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import * as React from "react";
import {useParams} from "react-router-dom";
import {reqInstance} from "../../../../utils/auth";


export const Container = memo(function Container(props) {

    const {fetchDataEndpoint} = props;

    const [words2, setWords2] = useState([]);
    const [droppedWords, setDroppedWords] = useState([]);
    const [dustbins, setDustbins] = useState([]);
    const [error, changeError] = useState({});
    const [correct, changeCorrect] = useState({});
    const [countCorrect, setCountCorrect] = React.useState(0);
    const [lastDroppedItem, setLastDroppedItem] = useState([]);


    useEffect(() => {
        reqInstance.get(fetchDataEndpoint).then((response) => {

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
          //  console.log(response.data);
        });
    }, []);


    //console.log("words2: ", words2);
   // console.log("dustbin: ", dustbins);



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


    let shuffled = words2
        .map(word => ({word, sort : Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .map(({word}) => word);

    return (
        <div>
            <div style={{overflow: 'hidden', clear: 'both' }}>
                {}

                {shuffled.map((word, index) => (
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
                        correct={correct[index]}
                        countCorrect={countCorrect}
                        target={target}
                        lastDroppedItem={lastDroppedItem}
                        onDrop={(item) => handleDrop(index, item)}
                        key={index}
                    />
                ))}
            </div>

            <Button onClick={() => {
                const newErrorState = {};
                const newCorrectState = {};
               // console.log("error ",newErrorState)

                for (let i=0; i < dustbins.length; i++){
                    if(dustbins[i].lastDroppedItem === null || dustbins[i].lastDroppedItem.source !== words2[i].source){
                        newErrorState[i] = true;
                    }else{
                        newCorrectState[i] = true;

                    }
                    changeError(newErrorState);
                    changeCorrect(newCorrectState);
                }


            }} variant="contained">check</Button>
        </div>
    )
})
