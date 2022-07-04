import { ListId, TodoId } from "../../types/types";
import types, {
  CreateList,
  CreateTodo,
  DeleteList,
  DeleteTodo,
  ToggleTodo,
  UpdateList,
  UpdateTodo,
} from "./types";

// lists
export type UpdateListAction = ReturnType<typeof updateList>;
export type CreateListAction = ReturnType<typeof createList>;
export type DeleteListAction = ReturnType<typeof deleteList>;

export type TodoListActions =
  | UpdateListAction
  | CreateListAction
  | DeleteListAction;

export const createList = (
  listTitle: string
): { type: CreateList; payload: { listTitle: string } } => ({
  type: types.CREATE_LIST,
  payload: { listTitle },
});

export const deleteList = (
  listId: ListId
): { type: DeleteList; payload: { listId: ListId } } => ({
  type: types.DELETE_LIST,
  payload: { listId },
});

export const updateList = (
  listId: ListId,
  listTitle: string
): { type: UpdateList; payload: { listId: ListId; listTitle: string } } => ({
  type: types.UPDATE_LIST,
  payload: { listId, listTitle },
});

// the todos
export type CreateTodoAction = ReturnType<typeof createTodo>;
export type DeleteTodoAction = ReturnType<typeof deleteTodo>;
export type UpdateTodoAction = ReturnType<typeof updateTodo>;
export type CompleteTodoAction = ReturnType<typeof toggleTodo>;

export type TodoActions =
  | CreateTodoAction
  | DeleteTodoAction
  | UpdateTodoAction
  | CompleteTodoAction;

export const createTodo = (
  listId: ListId,
  todoText: string
): { type: CreateTodo; payload: { listId: ListId; todoText: string } } => ({
  type: types.CREATE_TODO,
  payload: { listId, todoText },
});

export const deleteTodo = (
  listId: ListId,
  todoId: TodoId
): { type: DeleteTodo; payload: { listId: ListId; todoId: TodoId } } => ({
  type: types.DELETE_TODO,
  payload: { listId, todoId },
});

export const updateTodo = (
  listId: ListId,
  todoId: TodoId,
  todoText: string
): {
  type: UpdateTodo;
  payload: { listId: ListId; todoId: TodoId; todoText: string };
} => ({
  type: types.UPDATE_TODO,
  payload: { listId, todoId, todoText },
});

export const toggleTodo = (
  listId: ListId,
  todoId: TodoId
): { type: ToggleTodo; payload: { listId: ListId; todoId: TodoId } } => ({
  type: types.TOGGLE_TODO,
  payload: { listId, todoId },
});
