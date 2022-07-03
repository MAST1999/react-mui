import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { createList } from "../store/todoList/actions";

const AddList = () => {
  const [newList, setNewList] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignContent="center"
      spacing={3}
    >
      <TextField
        type="text"
        key="newList"
        name="what"
        placeholder="New list title"
        label="New List"
        sx={{ width: "60%" }}
        value={newList}
        onChange={(e) => setNewList(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          dispatch(createList(newList));
          setNewList("");
        }}
      >
        Add new list
      </Button>
    </Stack>
  );
};

export default AddList;
