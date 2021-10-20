import { useRef, useState } from "react";
import { StyledButton } from "../Buttons/styled";
import { StyledForm, StyledInput } from "./styled";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    const inputRef = useRef(null);

    const focusInput = () => {
      inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                value={newTaskContent}
                type="text"
                placeholder="What is to do?"
                onChange={(event) => setNewTaskContent(event.target.value)}
                ref={inputRef}
            />
            <StyledButton
                form
                type="submit"
                onClick={focusInput}
            >
                Add Task
            </StyledButton>
        </StyledForm>
    );
};

export default Form;

