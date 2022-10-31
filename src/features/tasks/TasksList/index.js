import { useSelector, useDispatch } from "react-redux";
import { CheckIcon, DeleteIcon, StyledButton } from "../../../common/Buttons/styled";
import { StyledNavLink } from "../../../common/Menu/styled";
import {
    selectTasks,
    toggleTaskDone,
    removeTask,
    selectHideDone
} from "../tasksSlice";
import { StyledContent, StyledList, StyledTask } from "./styled";

const TasksList = () => {
    const tasks = useSelector(selectTasks)
    const hideDone = useSelector(selectHideDone)
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
                        <CheckIcon />
                    </StyledButton>
                    <StyledContent
                        done={task.done}>
                       <StyledNavLink taskLink exact to={`/task/${task.id}`} >{task.title}</StyledNavLink>
                    </StyledContent>
                    <StyledButton
                        onClick={() => dispatch(removeTask(task.id))}
                        remove
                    >
                        <DeleteIcon />
                    </StyledButton>
                </StyledTask>
            ))}
        </StyledList >
    );
};

export default TasksList;