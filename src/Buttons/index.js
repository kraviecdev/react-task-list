import "./style.css";


const Buttons = ({ tasks, hideDoneTasks }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="section__buttons">
            <button disabled={(tasks.every(({ done }) => done))} className="button button--selectAll">Select all</button>
            <button disabled={(tasks.some(({ done }) => done)) && hideDoneTasks} className="button button--hideDone">{hideDoneTasks ? "Show" : "Hide"} done</button>
        </div>
    );
};

export default Buttons;