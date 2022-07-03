import { TodoListShowState } from "../../types/types";
import { appStateActions } from "./actions";
import types from "./types";

const appStateReducer = (
  state: { showState: TodoListShowState } = {
    showState: TodoListShowState.All,
  },
  action: appStateActions
): { showState: TodoListShowState } => {
  switch (action.type) {
    case types.SHOW_ACTIVE_TODOS:
      return { showState: TodoListShowState.Active };
    case types.SHOW_COMPLETED_TODOS:
      return { showState: TodoListShowState.Completed };
    case types.SHOW_ALL_TODOS:
      return { showState: TodoListShowState.All };
    default:
      return state;
  }
};

export default appStateReducer;
