import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShowState } from "../store/appState/actions";
import { AppDispatch, StoreState } from "../store/store";
import { TodoListShowState } from "../types/types";
import AddList from "./AddList";

const StyledHeader = styled("header")(
  ({ theme }) => `
      display: grid;
      grid-template-columns: .5fr 1fr .5fr;
      grid-template-rows: 1fr;
      height: 90px;
      justify-content: center;
      align-items: center;
      padding: ${theme.spacing(2)};
      background-color: ${theme.palette.grey[300]};
    `
);

const Header = () => {
  const todoListShowState = useSelector<StoreState, TodoListShowState>(
    (state) => state.appState.showState
  );
  const dispatch = useDispatch<AppDispatch>();

  const [showState, setTodoListShowState] = useState(todoListShowState);

  return (
    <StyledHeader>
      <Box>
        <Typography variant="body1">Simple to do app</Typography>
      </Box>
      <AddList />
      <FormControl>
        <InputLabel id="show-todo-state">To do state</InputLabel>
        <Select
          labelId="show-todo-state"
          label="To do state"
          value={showState}
          onChange={(e) => {
            setTodoListShowState(e.target.value as TodoListShowState);
            dispatch(changeShowState(e.target.value as TodoListShowState));
          }}
        >
          <MenuItem value={TodoListShowState.All}>All</MenuItem>
          <MenuItem value={TodoListShowState.Active}>Active</MenuItem>
          <MenuItem value={TodoListShowState.Completed}>Completed</MenuItem>
        </Select>
      </FormControl>
    </StyledHeader>
  );
};

export default Header;
