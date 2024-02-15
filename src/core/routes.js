import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/HomeLayout";
import About from "../pages/About";
import Tasks from "../pages/Tasks";
import Task from "../pages/Task";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Tasks />
      },
      {
        path: "/tasks",
        element: <Tasks />
      },
      {
        path: "task/:id",
        element: <Task />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
], {
  basename: "/react-task-list"
});
