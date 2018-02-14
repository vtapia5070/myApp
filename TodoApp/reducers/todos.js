/**
 * Reducer composition
 * - different reducers affect different parts of the state.
 */

 /**
  * TODO:
  * research why/how action.type changes are detected in store.dispatch()
  */

 
/**
 * Todo Reducer
 * @param {*} state 
 * @param {*} action 
 */
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: action.completed
            };

        case 'TOGGLE_TODO':
            if (state.id === action.id) {
                return state;
            }

            return Object.assign({}, state, {
                    completed: !state.completed
                });
            }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [todo(undefined, action)].concat(state);

        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state

    }
};

export default todos;
