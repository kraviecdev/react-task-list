import "./style.css"

const Form = () => (
    <form className="form">
        <input type="text" className="form__input" placeholder="What is to do?" autofocus />
        <button className="form__button" type="submit">Add Task</button>
    </form>
);

export default Form;