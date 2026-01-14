interface todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: todo[];
  length: number;
  completedNumber: number;
  pendingNumber: number;
}

export type taskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

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
      };
    }
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
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
      };
    }

    default:
      return state;
    // siempre se pone un DEFAULT para que regrese un objeto si no entra en ningun case
  }
};
