import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const tasks = [{}
  // {
  //   task: 'Organize Garage',
  //   id: 1528817077286,
  //   completed: false
  // },
  // {
  //   task: 'Bake Cookies',
  //   id: 1528817084358,
  //   completed: false
  // }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
        tasks
      }
    }

    addTodo = newTask => {
      const newTodo = {
        task: newTask,
        id: Date.now(),
        completed: false
      }

      this.setState({
        tasks: [...this.state.tasks, newTodo]
      })
    }

    toggleCompleted = id => {
      this.setState({
        tasks: this.state.tasks.map(task => {
          if (task.id === id) {
            return {
              ...task,
              completed: !task.completed
            }
          } else {
            return task
          }
        })
      })
    }

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList 
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
