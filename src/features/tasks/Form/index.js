import { useRef, useState } from "react";
import { StyledButton } from "../Buttons/styled";
import { StyledForm, StyledInput } from "./styled";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
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

