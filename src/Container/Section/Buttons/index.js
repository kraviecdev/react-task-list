import { StyledButton, StyledButtonSection } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, markAllTaskDone }) => {

    if (tasks.length === 0) {
        return null;
    }
    return (
        <StyledButtonSection>
            <StyledButton
                onClick={markAllTaskDone}
                disabled={(tasks.every(({ done }) => done))}
                selectAll
            >
                Mark all as done
            </StyledButton>
            <StyledButton
                onClick={toggleHideDone}
                hideDone
            >
                {tasks.some(({done}) => done) && hideDoneTasks ? "Show" : "Hide"} done
            </StyledButton>
        </StyledButtonSection>
    );
};

export default Buttons;