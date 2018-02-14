import React from 'react';
// import TodoList from './TodoList';
import AddTodo from '../containers/AddTodo'
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';

/**
 * Presentational Component for TodoApp
 */

class App extends React.Component {

    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer option={'show all'} />
            </div>
        );
    }

}

export default App;