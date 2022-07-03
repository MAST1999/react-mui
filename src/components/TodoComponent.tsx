import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox, IconButton, Stack, Typography } from "@mui/material";
import { Todo } from "../types/types";

type Props = {
  todo: Todo;
};

const TodoComponent = ({ todo }: Props) => {
  return (
    <Stack direction={"row"} spacing={2} alignItems="center">
      <Checkbox />
      <Typography>{todo.description}</Typography>
      <IconButton>
        <DeleteIcon />
      </IconButton>
      <IconButton>
        <EditIcon />
      </IconButton>
    </Stack>
  );
};

export default TodoComponent;
