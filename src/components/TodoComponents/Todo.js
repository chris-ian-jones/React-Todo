import React from 'react'
import styled from 'styled-components'
import { Divider } from 'semantic-ui-react'

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0 10px 0;
`

const StyledRow = styled.div`
    width: 100vw;
    // border: 1px solid green;
    text-align: center;
`

const StyledTask = styled.p`
    font-size: 2rem;
    color: darkblue;
    font-family: 'IBM Plex Mono', monospace;
    max-width: 100%;
    margin: 0 2.5% 0 2.5%;
`

const Todo = props => {

    return (
        <StyledContainer
            // adding classname depending on tasks props, if competed is truthy
            className={`task${props.completed ? ' completed' : ''}`}
            onClick={() => props.toggleCompleted(props.id)}
        >
            <StyledRow>
                <StyledTask>
                    {props.task}
                </StyledTask>
                <Divider />
            </StyledRow>
        </StyledContainer>
    )
}

export default Todo