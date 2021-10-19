import { StyledButton } from "../Buttons/styled";
import { StyledContent, StyledList, StyledTask } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleDoneTask }) => (
    <StyledList>
        {tasks.map(task => (
            <StyledTask
                key={task.id}
                hidden={task.done && hideDoneTasks}
            >
                <StyledButton
                    onClick={() => toggleDoneTask(task.id)}
                    done={task.done}
                    complete
                >
                    <i
                        className="material-icons md-24"
                    >
                        task_alt
                    </i>
                </StyledButton>
                <StyledContent
                    done={task.done}>
                    {task.content}
                </StyledContent>
                <StyledButton
                    onClick={() => removeTask(task.id)}
                    remove
                >
                    <i
                        className="material-icons md-24"
                    >
                        delete
                    </i>
                </StyledButton>
            </StyledTask>
        ))}
    </StyledList >
);

export default Tasks;