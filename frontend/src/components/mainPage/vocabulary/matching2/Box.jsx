import { memo } from 'react'
import { useDrag } from 'react-dnd'
const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
}
export const Box = memo(function Box({ source, target, isDropped }) {
    const [{ opacity }, drag] = useDrag(
        () => ({
            type: "div",
            item: { source },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.4 : 1,
            }),
        }),
        [source, target],
    )
    return (
        <div ref={drag} style={{ ...style, opacity }} data-testid="box">
            {isDropped ? <s>{source}</s> : source}
        </div>
    )
})
