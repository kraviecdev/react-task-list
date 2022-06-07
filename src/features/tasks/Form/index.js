import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { StyledButton } from "../Buttons/styled";
import { addTasks } from "../tasksSlice";
import { StyledForm, StyledInput } from "./styled";

const Form = () => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return;
        };
        dispatch(addTasks({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                autoFocus
                value={newTaskContent}
                type="text"
                placeholder="What is to do?"
                onChange={(event) => setNewTaskContent(event.target.value)}
                ref={inputRef}
            />
            <StyledButton form type="submit">
                Add Task
            </StyledButton>
        </StyledForm>
    );
};

export default Form;

