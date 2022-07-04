import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox, IconButton, Input, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "tss-react/mui";
import { AppDispatch } from "../store/store";
import { deleteTodo, toggleTodo, updateTodo } from "../store/todoList/actions";
import { ListId, Todo } from "../types/types";

type Props = {
  listId: ListId;
  todo: Todo;
};

const useStyles = makeStyles<{ textDecoration: "line-through" | "none" }>()(
  (theme, { textDecoration }) => ({
    input: {
      textDecoration,
      "&:disabled": {
        color: theme.palette.text.primary,
        WebkitTextFillColor: theme.palette.text.primary,
      },
    },
  })
);

const TodoComponent = ({ todo, listId }: Props) => {
  const [todoDescription, setTodoDescription] = useState(todo.description);
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { classes } = useStyles({
    textDecoration: todo.completed ? "line-through" : "none",
  });

  useEffect(() => {
    if (!editable && todoDescription !== todo.description) {
      dispatch(updateTodo(listId, todo.id, todoDescription));
    }
  }, [editable]);

  return (
    <Stack direction={"row"} spacing={2} alignItems="center">
      <Checkbox
        onChange={() => dispatch(toggleTodo(listId, todo.id))}
        value={todo.completed}
      />
      <Input
        classes={{ input: classes.input }}
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
        disabled={!editable}
      />
      <IconButton onClick={() => dispatch(deleteTodo(listId, todo.id))}>
        <DeleteIcon />
      </IconButton>
      <IconButton onClick={() => setEditable((edit) => !edit)}>
        <EditIcon />
      </IconButton>
    </Stack>
  );
};

export default TodoComponent;
