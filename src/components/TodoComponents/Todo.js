import React from 'react'

const Todo = props => {

    return (
        <div
            className={`task${props.completed ? ' completed' : ''}`}
            onClick={() => props.toggleCompleted(props.id)}
        >
            {props.task}
            {/* <p>{props.completed.toString()}</p> */}
        </div>
    )
}

export default Todo