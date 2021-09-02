import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="list">
        {tasks.map(task => (
            <li className={`${task.done && hideDoneTasks ? "list__item--hidden" : ""} list__item`}>
                <button className={`${task.done ? "button--done" : ""} button button--complete`}><i className="material-icons md-24">task_alt</i></button>
                <span className={`${task.done ? "list__text--done" : ""} list__text`}>{task.content}</span>
                <button className="button button--delete"><i className="material-icons md-24">delete</i></button> 
            </li>
        ))}
    </ul >
);

export default Tasks;