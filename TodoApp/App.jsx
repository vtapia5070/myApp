import React from 'react';
import TodoList from './TodoList';
import Footer from './Footer';

class TodoApp extends React.Component {

    constructor () {
        super();

        const tempTodos = [
            { 
                id: 1,
                text: 'practice toy problem'
            }, 
            {
                id: 2,
                text: 'build react app'
            },
            {
                id: 3,
                text: 'implement redux'
            }
        ];

        this.state = {
            todos: tempTodos
        };
    }

    render() {
        return (
            <div>
                <h1>Todos:</h1>
                <TodoList todos={this.state.todos} />
                <Footer option={'show all'} />
            </div>
        );
    }

}

export default TodoApp;