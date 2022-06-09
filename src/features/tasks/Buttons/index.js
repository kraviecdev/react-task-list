import { useDispatch, useSelector } from "react-redux";
import { selectHideDone, toggleHideDone, markAllTaskDone, selectIsListEmpty, selectAreAllTasksDone, selectAreSomeTasksDone, selectIsAnyTaskDone } from "../tasksSlice";
import { StyledButton, StyledButtonSection } from "./styled";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isListEmpty = useSelector(selectIsListEmpty);
    const areEveryTasksDone = useSelector(selectAreAllTasksDone);
    const areSomeTasksDone = useSelector(selectAreSomeTasksDone);
    const isAnyTaskDone = useSelector(selectIsAnyTaskDone);

    const dispatch = useDispatch();

    return (!isListEmpty &&
        <StyledButtonSection>
            <StyledButton
                onClick={() => dispatch(markAllTaskDone())}
                disabled={areEveryTasksDone}
                selectAll
            >
                Mark all as done
            </StyledButton>
            <StyledButton
                onClick={() => dispatch(toggleHideDone())}
                hideDone
                disabled={!isAnyTaskDone}
            >
                {areSomeTasksDone && hideDone ? "Show" : "Hide"} done
            </StyledButton>
        </StyledButtonSection>
    );
};

export default Buttons;