import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, handleNewTaskContent, selectNewTaskContent } from "../../features/tasks/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Form, Input } from "../Form";
import { Button } from "../Button";


const NewTask = () => {
  const dispatch = useDispatch();
  const newTaskContent = useSelector(selectNewTaskContent);
  const trimmedNewTaskContent = newTaskContent.trim();
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (trimmedNewTaskContent !== "") {
      dispatch(addTask({
        title: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
        content: ""
      }));
    }
    dispatch(handleNewTaskContent(""));
    inputRef.current.focus();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        autoFocus
        type="text"
        placeholder="What needs to be done?"
        value={newTaskContent}
        ref={inputRef}
        onChange={({ target }) => dispatch(handleNewTaskContent(target.value))}
      />
      <Button form type="submit">Add task</Button>
    </Form>
  );
};

export default NewTask;