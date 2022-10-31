import { nanoid } from "@reduxjs/toolkit";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../../../common/Buttons/styled";
import { addQucikTask, selectNewTaskContent, handleNewTaskContent } from "../tasksSlice";
import { StyledForm, StyledInput } from "./styled";

const Form = () => {

    const newTaskContent = useSelector(selectNewTaskContent);
    const inputRef = useRef(null);
    const trimmedNewTaskConent = newTaskContent.trim();

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (trimmedNewTaskConent === "") {
            return;
        };
        dispatch(addQucikTask({
            title: trimmedNewTaskConent,
            done: false,
            id: nanoid(),
            content: "",
        }));
        dispatch(handleNewTaskContent(""));
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                autoFocus
                value={newTaskContent}
                type="text"
                placeholder="What is to do?"
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

