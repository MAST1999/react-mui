import { TodoListShowState } from "../../types/types";
import types, {
  ShowActiveTodos,
  ShowAllTodos,
  ShowCompletedTodos,
} from "./types";

export type showActiveTodosAction = ReturnType<typeof changeShowState>;

export type appStateActions = showActiveTodosAction;

export const changeShowState = (
  showState: TodoListShowState
):
  | { type: ShowActiveTodos }
  | { type: ShowCompletedTodos }
  | { type: ShowAllTodos } => {
  switch (showState) {
    case TodoListShowState.Active:
      return { type: types.SHOW_ACTIVE_TODOS };
    case TodoListShowState.Completed:
      return { type: types.SHOW_COMPLETED_TODOS };
    case TodoListShowState.All:
      return { type: types.SHOW_ALL_TODOS };
    default:
      return { type: types.SHOW_ALL_TODOS };
  }
};
