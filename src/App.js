import { useState } from "react";

import Form from "./Container/Form";
import Header from "./Container/Header";
import Footer from "./Container/Footer";
import Section from "./Container/Section";
import Tasks from "./Container/Tasks";
import Buttons from "./Container/Buttons";
import Container from "./Container";
import { useTasks } from "./useTasks";

function App() {
  let [hideDoneTasks, setHideDoneTask] = useState(false);

  const toggleHideDone = () => {
    setHideDoneTask(hideDoneTasks = !hideDoneTasks);
  };

  const {
    tasks,
    addNewTask,
    removeTask,
    markAllTaskDone,
    toggleDoneTask
  } = useTasks();

  return (
    <Container>
      <Header title="Task List" />
      <Section
        title="Add task"
        body=
        {<Form
          addNewTask={addNewTask}
        />}
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
        additionalContent={
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
