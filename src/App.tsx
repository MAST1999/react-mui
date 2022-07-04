import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { StoreState } from "./store/store";
import { ITodoList } from "./types/types";

function App() {
  const allLists = useSelector<StoreState, ITodoList[]>(
    (state) => state.todoList
  );

  const todoListJSX = allLists.map((list) => (
    <TodoList key={list.id} list={list} />
  ));

  return (
    <Box minHeight="100vh">
      <Header />
      <Stack
        direction={"row"}
        spacing={3}
        justifyContent="center"
        paddingTop={2}
        sx={{
          height: "90vh",
          background: (theme) => theme.palette.grey[200],
        }}
      >
        {todoListJSX}
      </Stack>
    </Box>
  );
}

export default App;
