import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const TodoApp = combineReducers({
    todos,
    visibilityFilter
});

/**
 * CombineReducers maps multiple reducers to the cooresponding
 * reducer. See implementation below.
 */

// const myCombineReducers = (reducers) => {
//     return (state = {}, action) => {
//         return Object.keys(reducers).reduce(
//             (nextState, key) => {
//                 nextState[key] = reducers[key](
//                     state[key],
//                     action
//                 );
//                 return nextstate;
//             },
//             {}
//         );
//     };
// };

// Manually example of combineReducers
// const TodoApp = (state = {}, action) => {
//     return {
//         todos: todos(
//             state.todos,
//             action
//         ),
//         visibilityFilter: visibilityFilter(
//             state.visibilityFilter,
//             action
//         )
//     };
// };

export default TodoApp;