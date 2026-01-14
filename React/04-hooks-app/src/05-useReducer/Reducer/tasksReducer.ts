import * as z from "zod";

// --- Interfaces y Tipos ---
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

// --- Schemas de Zod ---
const todoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const taskStateSchema = z.object({
  todos: z.array(todoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

// --- Estado Inicial ---
export const getTaskInitialState = (): TaskState => {
  const defaultState: TaskState = {
    todos: [],
    length: 0,
    completed: 0,
    pending: 0,
  };

  // 1.typo: localStorageState
  const localStorageState = localStorage.getItem("tasks-state");

  // 2.: Quitamos el return inalcanzable
  if (!localStorageState) {
    return defaultState;
  }

  try {
    // 3.: Parseamos el JSON antes de validarlo con Zod
    const parsedState = JSON.parse(localStorageState);
    const result = taskStateSchema.safeParse(parsedState);

    // 4.: Lógica invertida. Si NO es exitoso, retornamos default.
    if (!result.success) {
      console.error("Error validando estado:", result.error);
      return defaultState;
    }

    // Si es exitoso, retornamos los datos validados
    return result.data;
  } catch (error) {
    console.error("Error parseando JSON:", error);
    return defaultState;
  }
};

// --- Reducer ---
export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1,
      };
    }

    case "DELETE_TODO": {
      // 5.: !== para mantener los que NO son el ID a borrar
      const currentTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
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
  }
};
