import { useSelector, useDispatch } from "react-redux";
import { StyledButton } from "../Buttons/styled";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { StyledContent, StyledList, StyledTask } from "./styled";

const TasksList = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
    <StyledList>
        {tasks.map(task => (
            <StyledTask
                key={task.id}
                hidden={task.done && hideDone}
            >
                <StyledButton
                    onClick={() => dispatch(toggleTaskDone(task.id))}
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
                    onClick={() => dispatch(removeTask())}
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
};

export default TasksList;