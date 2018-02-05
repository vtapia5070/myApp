import React from 'react';

class Todo extends React.Component {
    render () {
        return (
            <li>{this.props.data.text}</li>
        );
    }
}

export default Todo;