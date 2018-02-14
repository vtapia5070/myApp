import React from 'react';

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
    >
        {text}
    </li>
);

// TODO: type check
// Todo.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
// }

export default Todo;