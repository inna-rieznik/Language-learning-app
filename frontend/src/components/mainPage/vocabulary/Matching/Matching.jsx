import s from './Matching.module.css'
import Button from "@mui/material/Button";
import * as React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend';
import DragAndDrop from "./DragAndDrop";




const Matching = (props) => {

    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <DragAndDrop/>
            </div>
        </DndProvider>

    );
}

export default Matching;