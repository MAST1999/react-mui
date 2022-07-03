import { ListId, TodoId, ITodoList } from "./../../types/types";
import { TodoActions, TodoListActions } from "./actions";
import selectors from "./selectors";
import types from "./types";

const todoListReducer = (
  state: ITodoList[] = [],
  action: TodoListActions | TodoActions
): ITodoList[] => {
  switch (action.type) {
    case types.UPDATE_LIST: {
      const list = selectors.getListById(state, action.payload.listId);
      if (list === null) return state;

      const newList = { ...list, ...action.payload };
      return state.map((list) => (list.id === newList.id ? newList : list));
    }
    case types.CREATE_LIST:
      return [
        ...state,
        {
          id: action.payload.listTitle as ListId,
          title: action.payload.listTitle,
          todos: [],
        },
      ];
    case types.DELETE_LIST:
      return state.filter((list) => list.id !== action.payload.listId);
    case types.CREATE_TODO: {
      const selectedList = selectors.getListById(state, action.payload.listId);

      if (selectedList === null) return state;
      selectedList.todos = [
        ...selectedList.todos,
        {
          completed: false,
          description: action.payload.todoText,
          id: action.payload.todoText as TodoId,
        },
      ];

      return state.map((list) =>
        list.id === selectedList.id ? selectedList : list
      );
    }
    case types.DELETE_TODO: {
      const selectedList = selectors.getListById(state, action.payload.listId);
      if (selectedList === null) return state;

      selectedList.todos = selectedList.todos.filter(
        (todo) => todo.id !== action.payload.todoId
      );

      return state.map((list) =>
        list.id === selectedList.id ? selectedList : list
      );
    }
    case types.UPDATE_TODO: {
      const { listId, todoId } = action.payload;
      const selectedList = selectors.getListById(state, listId);
      if (selectedList === null) return state;

      const selectedTodo = selectors.getTodoById(state, listId, todoId);
      if (selectedTodo === null) return state;

      selectedTodo.description = action.payload.todoText;

      selectedList.todos = selectedList.todos.map((todo) =>
        todo.id === todoId ? selectedTodo : todo
      );

      return state.map((list) => (list.id === listId ? selectedList : list));
    }
    case types.TOGGLE_TODO: {
      const { listId, todoId } = action.payload;
      const selectedList = selectors.getListById(state, listId);
      if (selectedList === null) return state;

      const selectedTodo = selectors.getTodoById(state, listId, todoId);
      if (selectedTodo === null) return state;

      selectedTodo.completed = !selectedTodo.completed;

      selectedList.todos = selectedList.todos.map((todo) =>
        todo.id === selectedTodo.id ? selectedTodo : todo
      );

      return state.map((list) => (list.id === listId ? selectedList : list));
    }
    default:
      return state;
  }
};

export default todoListReducer;
