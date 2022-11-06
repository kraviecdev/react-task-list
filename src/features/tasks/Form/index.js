import { nanoid } from "@reduxjs/toolkit";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../../../common/Buttons/styled";
import { addTask, selectNewTaskContent, handleNewTaskContent } from "../tasksSlice";
import { StyledForm, StyledInput } from "./styled";

const Form = () => {

    const newTaskContent = useSelector(selectNewTaskContent);
    const inputRef = useRef(null);
    const trimmedNewTaskConent = newTaskContent.trim();

    const dispatch = useDispatch();

    const quickTask = () => {
        dispatch(addTask({
            title: trimmedNewTaskConent,
            done: false,
            id: nanoid(),
            content: "",
        }));
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (trimmedNewTaskConent === "") {
            return;
        };
        quickTask();
        dispatch(handleNewTaskContent(""));
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                autoFocus
                value={newTaskContent}
                type="text"
                placeholder="What needs to be done?"
                onChange={({ target }) => dispatch(handleNewTaskContent(target.value))}
                ref={inputRef}
            />
            <StyledButton form type="submit">
                Add Task
            </StyledButton>
        </StyledForm>
    );
};

export default Form;

