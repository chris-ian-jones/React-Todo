import React from 'react'
import { Input, Button } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledForm = styled.form`
    margin: 50px auto 20px auto;
    display: flex;
`

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

    // add handler using function passed in via props to add new task to array of task objects
    addTodoHandler = event => {
        event.preventDefault()
        this.props.addTodo(this.state.input)
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <StyledContainer>
                <StyledForm onSubmit={this.addTodoHandler}>
                    <Input 
                        size='huge'
                        onChange={this.changeInputHandler}
                        value={this.state.input}
                        placeholder='Enter task...'
                    />
                    <Button 
                        positive 
                        size='huge'
                    >
                    Add Todo
                    </Button>
                </StyledForm>
                <Button 
                    negative 
                    size='huge'
                    onClick={this.props.removeCompleted}
                >
                Clear Completed
                </Button>
            </StyledContainer>
        )
    }
}

export default TodoForm