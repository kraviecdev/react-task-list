import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import "./style.css"
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";

let tasks = [
  { id: 1, content: "przenieść listę do reacta", done: true, },
  { id: 2, content: "przespać się z tym", done: false, },
  { id: 3, content: "test", done: true, },
];

let hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Task List"/>
      <Section title="Add task" body={<Form />} /> 
      <Section title="List of tasks" body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />} extraButtons={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
      <Footer name="Patryk Krawczyk" year="2021" />
    </Container>
  );
}

export default App;
