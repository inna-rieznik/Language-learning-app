import * as React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend';
import Example from './Example'
import {useState} from "react";
import {useParams} from "react-router-dom";


const Matching2 = (props) => {


    const {fetchDataEndpoint} = props;

    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                {/*<Parent data={[1, 2, 3]}/>*/}
                <Example fetchDataEndpoint={fetchDataEndpoint}/>
            </div>
        </DndProvider>

    );
}

export default Matching2;

/*
const sumObject = (obj) => {
    let sum = 0;

    for (const key of Object.keys(obj)) {
        sum += obj[key]
    }

    return sum
}


const Parent = ({data}) => {
    const [val, changeVal] = useState({})
    const [error, changeError] = useState({})

    return (
        <div>
            {data.map((v, index) => <Children error={error[index]} value={val[index] ?? 0} onClick={(childValue) => {
                const newState = {...val};
                newState[index] = childValue;
                changeVal(newState);
            }
            }/>)}

            <button onClick={() => {
                const newErrorState = {}
                for (let i = 0; i < data.length; i++) {
                    if (!val[i]) {
                        newErrorState[i] = true;
                    }
                }
                changeError(newErrorState)
            }}>Check
            </button>
        </div>)
}

const Children = ({onClick, value, error}) => {
    return <div>
        {value}
        {error ? <div>CHYBA</div> : null}
        <button onClick={() => onClick(value + 1)}>Click me</button>
    </div>
}*/
