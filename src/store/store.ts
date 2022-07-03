import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ListId, TodoId, TodoListShowState } from "../types/types";
import appStateReducer from "./appState";
import todoListReducer from "./todoList";

const storeReducer = combineReducers({
  appState: appStateReducer,
  todoList: todoListReducer,
});

const store = createStore(
  storeReducer,
  {
    appState: { showState: TodoListShowState.Active },
    todoList: [
      {
        id: "hello" as ListId,
        title: "hello",
        todos: [
          {
            completed: false,
            description: "Hello, World!",
            id: "hello-world" as TodoId,
          },
        ],
      },
    ],
  },
  composeWithDevTools()
);

export type AppDispatch = typeof store.dispatch;

export type StoreState = ReturnType<typeof store.getState>;

export default store;
