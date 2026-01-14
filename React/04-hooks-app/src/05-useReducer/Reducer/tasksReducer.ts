interface todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: todo[];
  length: number;
  completed: number;
  pending: number;
}

export type taskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

export const getTaskInitialState = (): TaskState => {
  return {
    todos: [],
    length: 0,
    completed: 0,
    pending: 0,
  };
};

export const taskReducer = (
  state: TaskState,
  action: taskAction
): TaskState => {
  // tratar de regresar el nuevo estado segun la accion, sino va el return
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      //!NO SE DEBE HACER ESTO:
      //state.todos.push(newTodo); NO SE DEBE MODIFICAR EL ESTADO DIRECTAMENTE, porqeu se muta y react no lo reconoce
      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1,
      };
    }
    case "DELETE_TODO": {
      const currentTodos = state.todos.filter(
        (todo) => todo.id === action.payload
      );

      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completed: currentTodos.filter((todo) => todo.completed).length,
        pending: currentTodos.filter((todo) => !todo.completed).length,
      };
    }

    case "TOGGLE_TODO": {
      const updateTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        ...state,
        todos: updateTodos,
        completed: updateTodos.filter((todo) => todo.completed).length,
        pending: updateTodos.filter((todo) => !todo.completed).length,
      };
    }

    default:
      return state;
    // siempre se pone un DEFAULT para que regrese un objeto si no entra en ningun case
  }
};
