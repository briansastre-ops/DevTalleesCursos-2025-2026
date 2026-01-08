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
  return state;
};
