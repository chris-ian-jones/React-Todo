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
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <>
                {/* <p>placeholder Todo component</p> */}
                <form onSubmit={this.addTodoHandler}>
                    <input 
                        onChange={this.changeInputHandler}
                        value={this.state.input}
                    />
                    <button>Add Todo</button>
                </form>
                <button onClick={this.props.removeCompleted}>Clear Completed</button>
            </>
        )
    }
}

export default TodoForm