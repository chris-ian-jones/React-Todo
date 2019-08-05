import React from 'react'

const Todo = props => {

    return (
        <div
            // className={`task${props.completed ? ' completed' : ''}`}
            onClick={() => props.toggleCompleted(props.id)}
        >
            <p>{props.task}</p>
            {/* <p>{props.completed.toString()}</p> */}
        </div>
    )
}

export default Todo