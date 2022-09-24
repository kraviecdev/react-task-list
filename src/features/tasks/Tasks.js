import Form from "./Form";
import Section from "../../common/Section";
import Container from "../../common/Container";
import TasksList from "./TasksList";
import Buttons from "../../common/Buttons";

const Tasks = () => {
  return (
    <Container>
      <Section
        title="Add task"
        body={<Form />}
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
