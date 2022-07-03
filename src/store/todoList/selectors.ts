import { ListId, Todo, TodoId, ITodoList } from "./../../types/types";

const getListById = (state: ITodoList[], id: ListId): ITodoList | null => {
  const list = state.find((list) => list.id === id);
  return list ?? null;
};

const getTodoById = (
  state: ITodoList[],
  listId: ListId,
  todoId: TodoId
): Todo | null => {
  const list = getListById(state, listId);
  if (list) {
    const todo = list.todos.find((todo) => todo.id === todoId);
    if (todo === undefined) return null;
    return todo;
  }
  return null;
};

export default { getListById, getTodoById };
