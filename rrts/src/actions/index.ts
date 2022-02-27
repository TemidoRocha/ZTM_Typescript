import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FecthTodosAction {
  type: ActionTypes.fecthTodos;
  payload: Todo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    // passing the type into the dispatch is not required but it is helpfull because we can
    // end up with alot of logic and in the end we would miss this info
    dispatch<FecthTodosAction>({
      // teh enum is really important to avoid type errors
      type: ActionTypes.fecthTodos,
      payload: response.data,
    });
  };
};
