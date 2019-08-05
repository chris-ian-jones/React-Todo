import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    changeInputHandler = event => {
        this.setState({
            input: event.target.value
        })
    }

    addTodoHandler = event => {
        event.preventDefault()
        this.props.addTodo(this.state.input)
    }


    render() {
        return (
            <>
                <p>placeholder Todo component</p>
                <form onSubmit={this.addTodoHandler}>
                    <input onChange={this.changeInputHandler}/>
                    <button>Add Todo</button>
                    <button>Clear Completed</button>
                </form>
            </>
        )
    }
}

export default TodoForm