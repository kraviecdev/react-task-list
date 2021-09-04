import { useState } from "react/cjs/react.development";
import "./style.css"

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                type="text"
                className="form__input"
                placeholder="What is to do?"
                onChange={(event) => setNewTaskContent(event.target.value)}
                autoFocus
            />
            <button
                className="form__button"
                type="submit"
            >
                Add Task
            </button>
        </form>
    );
};

export default Form;

