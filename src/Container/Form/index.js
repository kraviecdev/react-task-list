import { useState } from "react";
import { StyledButton } from "../Section/Buttons/styled";
import { StyledForm, StyledInput } from "./styled";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                value={newTaskContent}
                type="text"
                placeholder="What is to do?"
                onChange={(event) => setNewTaskContent(event.target.value)}
                autoFocus
            />
            <StyledButton
                form
                type="submit"
            >
                Add Task
            </StyledButton>
        </StyledForm>
    );
};

export default Form;

