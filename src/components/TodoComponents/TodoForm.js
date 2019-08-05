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


    render() {
        return (
            <>
                <p>placeholder Todo component</p>
                <form>
                    <input onChange={this.changeInputHandler}/>
                    <button>Add Todo</button>
                    <button>Clear Completed</button>
                </form>
            </>
        )
    }
}

export default TodoForm