import AddIcon from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreState } from "../store/store";
import { createTodo, deleteList } from "../store/todoList/actions";
import { ITodoList, TodoListShowState } from "../types/types";
import TodoComponent from "./TodoComponent";

type Props = {
  list: ITodoList;
};

const TodoList = ({ list }: Props) => {
  const [newTodoDesc, setNewTodoDesc] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const showState = useSelector<StoreState, TodoListShowState>(
    (state) => state.appState.showState
  );

  return (
    <Box>
      <Stack>
        <Typography>{list.title}</Typography>
        <Stack direction="row" alignItems={"center"} spacing={2}>
          <Button onClick={() => dispatch(deleteList(list.id))}>
            <Delete />
          </Button>
          <TextField
            placeholder="New to do"
            label="Add to do"
            fullWidth
            value={newTodoDesc}
            onChange={(e) => setNewTodoDesc(e.target.value)}
          />
          <Button
            sx={{ width: "64px", height: "64px" }}
            onClick={() => {
              if (newTodoDesc !== "") {
                dispatch(createTodo(list.id, newTodoDesc));
                setNewTodoDesc("");
              }
            }}
            variant="contained"
          >
            <AddIcon sx={{ color: "#fff" }} />
          </Button>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        {list.todos
          .filter((todo) => {
            if (showState === TodoListShowState.Completed) {
              return todo.completed;
            }

            if (showState === TodoListShowState.Active) {
              return !todo.completed;
            }

            // showState === TodoListShowState.All and the default result
            return true;
          })
          .map((todo) => (
            <Box key={todo.id}>
              <TodoComponent todo={todo} listId={list.id} />
            </Box>
          ))}
      </Stack>
    </Box>
  );
};

export default TodoList;
