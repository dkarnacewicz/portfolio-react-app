import {
    FETCH_TODO_LIST_BEGIN,
    FETCH_TODO_LIST_SUCCESS,
    FETCH_TODO_LIST_FAILURE
} from 'actions/todoListActions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function todoListReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_TODO_LIST_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_TODO_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.data
        };
  
      case FETCH_TODO_LIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        return state;
    }
}