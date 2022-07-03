export type TodoId = string & As<"todo-id">;
export type ListId = string & As<"list-id">;

export interface Todo {
  id: TodoId;
  completed: boolean;
  description: string;
}

export interface ITodoList {
  id: ListId;
  title: string;
  todos: Todo[];
}

export const enum TodoListShowState {
  Active,
  Completed,
  All,
}
