import * as React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend';
import Example from './Example'





const Matching2 = (props) => {

    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <Example />
            </div>
        </DndProvider>

    );
}

export default Matching2;