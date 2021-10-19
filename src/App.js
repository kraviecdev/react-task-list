import { useState, useEffect } from "react";

import Form from "./Container/Form";
import Header from "./Container/Header";
import Footer from "./Container/Footer";
import Section from "./Container/Section";
import Tasks from "./Container/Tasks";
import Buttons from "./Container/Buttons";
import Container from "./Container";

function App() {
  let [hideDoneTasks, setHideDoneTask] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("storedTasks")) || []);

  useEffect(() => {
    localStorage.setItem("storedTasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const addNewTask = (newTaskContent) => {
    if (newTaskContent === "") {
      return;
    }
    return (
      setTasks(tasks => ([
        ...tasks,
        {
          content: newTaskContent,
          done: false,
          id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        },
      ]))
    );
  };

  return (
    <Container>
      <Header title="Task List" />
      <Section
        title="Add task"
        body={<Form
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
