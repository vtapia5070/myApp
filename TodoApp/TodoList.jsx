import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

    render () {
        const todos = this.props.todos.map((todo) => {
            return (
                <Todo data={todo} key={todo.id} />
            );
        });

        return (
            <ul>
                {todos}
            </ul>
        );
    }
}

export default TodoList;