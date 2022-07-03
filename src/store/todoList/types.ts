// list
export type CreateList = "app/todoList/create";
export type DeleteList = "app/todoList/delete";
export type UpdateList = "app/todoList/update";

const CREATE_LIST: CreateList = "app/todoList/create";
const DELETE_LIST: DeleteList = "app/todoList/delete";
const UPDATE_LIST: UpdateList = "app/todoList/update";

// the todos
export type CreateTodo = "app/todoList/todo/create";
export type DeleteTodo = "app/todoList/todo/delete";
export type UpdateTodo = "app/todoList/todo/update";
export type ToggleTodo = "app/todoList/todo/toggle";

const CREATE_TODO: CreateTodo = "app/todoList/todo/create";
const DELETE_TODO: DeleteTodo = "app/todoList/todo/delete";
const UPDATE_TODO: UpdateTodo = "app/todoList/todo/update";
const TOGGLE_TODO: ToggleTodo = "app/todoList/todo/toggle";

export default {
  CREATE_LIST,
  DELETE_LIST,
  UPDATE_LIST,
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
};
