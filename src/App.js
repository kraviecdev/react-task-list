import { useState } from "react";
import { useTasks } from "./useTasks";

import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";


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
