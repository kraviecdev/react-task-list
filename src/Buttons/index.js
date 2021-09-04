import "./style.css";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, markAllTaskDone }) => {

    if (tasks.length === 0) {
        return null;
    }
    return (
        <div className="section__buttons">
            <button
                onClick={markAllTaskDone}
                disabled={(tasks.every(({ done }) => done))}
                className="button button--selectAll"
            >
                Mark all as done
            </button>
            <button
                onClick={toggleHideDone}
                className="button button--hideDone"
            >
                {hideDoneTasks ? "Show" : "Hide"} done
            </button>
        </div>
    );
};

export default Buttons;