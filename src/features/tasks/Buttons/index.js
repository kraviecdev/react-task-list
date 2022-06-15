import { useDispatch, useSelector } from "react-redux";
import {
    selectHideDone,
    toggleHideDone,
    markAllTaskDone,
    selectIsListEmpty,
    selectAreAllTasksDone,
    selectIsAnyTaskDone
} from "../tasksSlice";
import { StyledButton, StyledButtonSection } from "./styled";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isListEmpty = useSelector(selectIsListEmpty);
    const areEveryTasksDone = useSelector(selectAreAllTasksDone);
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
                {isAnyTaskDone && hideDone ? "Show" : "Hide"} done
            </StyledButton>
        </StyledButtonSection>
    );
};

export default Buttons;