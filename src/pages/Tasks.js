import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExampleTasks,
  markAllTaskDone,
  selectAreAllTasksDone,
  selectHideDone,
  selectIsAnyTaskDone,
  selectIsListEmpty,
  toggleHideDone
} from "../features/tasks/tasksSlice";
import { Main } from "../common/Main";
import { Section } from "../common/Section";
import { StyledHeader } from "../common/Header/styled";
import { Wrapper } from "../common/Wrapper";
import { Subheading } from "../common/Heading";
import { Button } from "../common/Button";
import Search from "../common/Search";
import TasksList from "../common/TasksList";
import NewTask from "../common/NewTask";


const Tasks = () => {
  const dispatch = useDispatch();
  const hideDone = useSelector(selectHideDone);
  const isListEmpty = useSelector(selectIsListEmpty);
  const areEveryTasksDone = useSelector(selectAreAllTasksDone);
  const isAnyTaskDone = useSelector(selectIsAnyTaskDone);
  const [isLoading, setIsLoading] = useState(false);

  const loadingTasks = () => {
    setIsLoading(true);

    setTimeout(() => {
      dispatch(fetchExampleTasks());
      setIsLoading(false);
    }, 1500);
  };


  return (
    <Main>
      <Section>
        <StyledHeader inner>
          <Subheading>Add task</Subheading>
          <Button
            onClick={() => loadingTasks()}
            disabled={isLoading}
          >{isLoading ? "Loading..." : "Example Tasks"}</Button>
        </StyledHeader>
        <NewTask />
      </Section>

      <Section>
        <StyledHeader inner>
          <Subheading>Search</Subheading>
        </StyledHeader>
        <Search />
      </Section>

      <Section>
        <StyledHeader inner>
          <Subheading>List of tasks</Subheading>
          {!isListEmpty && (
            <Wrapper inner>
              <Button
                onClick={() => dispatch(markAllTaskDone())}
                disabled={areEveryTasksDone}
              >
                Mark all as done
              </Button>
              <Button
                onClick={() => dispatch(toggleHideDone())}
                disabled={!isAnyTaskDone}
              >
                {isAnyTaskDone && hideDone ? "Show" : "Hide"} done
              </Button>
            </Wrapper>
          )}
        </StyledHeader>
        <TasksList />
      </Section>
    </Main>);
};

export default Tasks;