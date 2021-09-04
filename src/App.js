import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import { useState } from "react";

function App() {
  let [hideDoneTasks, setHideDoneTask] = useState(false);
  let [tasks, setTasks] = useState([
    { id: 1, content: "Transfer project to React", done: true, },
    { id: 2, content: "Add functions to project", done: false, },
  ]);

  const toggleHideDone = () => {
    setHideDoneTask(hideDoneTasks = !hideDoneTasks);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleDoneTask = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }; 
      }

      return task;
    }));
  };

  const markAllTaskDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  return (
    <Container>
      <Header title="Task List" />
      <Section
        title="Add task"
        body={<Form />}
      />
      <Section
        title="List of tasks"
        body={
          <Tasks
            toggleDoneTask={toggleDoneTask}
            removeTask={removeTask}
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
          />}
        extraButtons={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            toggleHideDone={toggleHideDone}
            markAllTaskDone={markAllTaskDone}
          />}
      />
      <Footer name="Patryk Krawczyk" year="2021" />
    </Container>
  );
}

export default App;
