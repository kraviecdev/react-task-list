import Form from "./Form";
import Section from "../../common/Section";
import Container from "../../common/Container";
import TasksList from "./TasksList";
import Buttons from "../../common/Buttons";
import Search from "../tasks/Search";
import { StyledButton, StyledButtonSection } from "../../common/Buttons/styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "./tasksSlice";

const Tasks = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Section
        title="Add task"
        body={<Form />}
        additionalContent={
          <StyledButtonSection>
            <StyledButton
              standard
              onClick={() => dispatch(fetchExampleTasks())}
            >
              Example Tasks
            </StyledButton>
          </StyledButtonSection>
        }
      />
       <Section
        title="Search"
        body={<Search />}
      />
      <Section
        title="List of tasks"
        body={<TasksList />}
        additionalContent={<Buttons />}
      />
    </Container>
  );
};

export default Tasks;
