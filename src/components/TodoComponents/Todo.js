import React from 'react'

const Todo = props => {

    return (
        <div>
            <p>{props.id}</p>
            <p>{props.task}</p>
            <p>{props.completed.toString()}</p>
        </div>
    )
}

export default Todo