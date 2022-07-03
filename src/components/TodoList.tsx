import { Box, Stack, Typography } from "@mui/material";
import { ITodoList } from "../types/types";
import TodoComponent from "./TodoComponent";

type Props = {
  list: ITodoList;
};

const TodoList = ({ list }: Props) => {
  return (
    <Box>
      <Typography>{list.title}</Typography>
      <Stack spacing={2}>
        {list.todos.map((todo) => (
          <Box key={todo.id}>
            <TodoComponent todo={todo} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default TodoList;
