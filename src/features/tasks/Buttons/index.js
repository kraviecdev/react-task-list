import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleHideDone, markAllTaskDone } from "../tasksSlice";
import { StyledButton, StyledButtonSection } from "./styled";

const Buttons = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (tasks.length === 0) {
        return null;
    }
    return (
        <StyledButtonSection>
            <StyledButton
                onClick={() => dispatch(markAllTaskDone())}
                disabled={(tasks.every(({ done }) => done))}
                selectAll
            >
                Mark all as done
            </StyledButton>
            <StyledButton
                onClick={() => dispatch(toggleHideDone())}
                hideDone
            >
                {tasks.some(({done}) => done) && hideDone ? "Show" : "Hide"} done
            </StyledButton>
        </StyledButtonSection>
    );
};

export default Buttons;