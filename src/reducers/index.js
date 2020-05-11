import todoListReducer from 'reducers/todoListReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    todoList: todoListReducer,
});

export default reducers;