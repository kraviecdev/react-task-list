import Form from "./Form";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Section from "../../common/Section";
import Container from "../../common/Container";
import TasksList from "./TasksList";
import Buttons from "./Buttons";

const Tasks = () => {
  return (
    <Container>
      <Header title="Task List" />
      <Section
        title="Add task"
        body={<Form />}
      />
      <Section
        title="List of tasks"
        body={<TasksList />}
        additionalContent={<Buttons />}
      />
      <Footer name="Patryk Krawczyk" year="2021" />
    </Container>
  );
};

export default Tasks;
