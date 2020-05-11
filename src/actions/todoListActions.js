export function fetchTodoList() {
    return dispatch => {
        dispatch(fetchTodoListBegin());
        return fetch(
                'https://api-nodejs-todolist.herokuapp.com/task',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY'
                    },
                }
            )
            .then(response => response.json())
            .then(json => {
                dispatch(fetchTodoListSuccess(json.data));
                return json.data;
            })
            .catch(error => dispatch(fetchTodoListFailure(error)));
    };
}

export const FETCH_TODO_LIST_BEGIN   = 'FETCH_TODO_LIST_BEGIN';
export const FETCH_TODO_LIST_SUCCESS = 'FETCH_TODO_LIST_SUCCESS';
export const FETCH_TODO_LIST_FAILURE = 'FETCH_TODO_LIST_FAILURE';
  
export const fetchTodoListBegin = () => ({
    type: FETCH_TODO_LIST_BEGIN
});

export const fetchTodoListSuccess = data => ({
    type: FETCH_TODO_LIST_SUCCESS,
    payload: { data }
});

export const fetchTodoListFailure = error => ({
    type: FETCH_TODO_LIST_FAILURE,
    payload: { error }
});