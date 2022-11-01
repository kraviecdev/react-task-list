import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { CheckIcon, DeleteIcon, StyledButton } from "../../../common/Buttons/styled";
import { StyledNavLink } from "../../../common/Menu/styled";
import {
    toggleTaskDone,
    removeTask,
    selectHideDone,
    filterTasksByTitle
} from "../tasksSlice";
import { StyledContent, StyledList, StyledTask } from "./styled";

const TasksList = () => {  
    const dispatch = useDispatch();

    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("search");

    const hideDone = useSelector(selectHideDone)
    const tasks = useSelector(state => filterTasksByTitle(state, query))

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