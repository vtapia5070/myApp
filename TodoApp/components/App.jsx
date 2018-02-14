import React from 'react';
// import TodoList from './TodoList';
import AddTodo from '../containers/AddTodo'
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';

/**
 * Presentational Component for TodoApp
 */

class App extends React.Component {

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
                <AddTodo />
                {/* <TodoList todos={this.state.todos} /> */}
                <VisibleTodoList />
                <Footer option={'show all'} />
            </div>
        );
    }

}

export default App;