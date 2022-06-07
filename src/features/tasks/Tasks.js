import { useState } from "react";
import { useTasks } from "../../useTasks";

import Form from "./Form";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Section from "../../common/Section";
import Container from "../../common/Container";
import TasksList from "./TasksList";
import Buttons from "./Buttons";


const Tasks = () => {
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
          <TasksList
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

export default Tasks;
