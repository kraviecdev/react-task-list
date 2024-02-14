import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { filterTasksByTitle, removeTask, selectHideDone, toggleTaskDone } from "../../features/tasks/tasksSlice";
import { Button, CheckIcon, DeleteIcon } from "../Button";
import { StyledNavLink } from "../Link";
import { List, ListItem } from "./styled";

const TasksList = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get("search");

  const hideDone = useSelector(selectHideDone);
  const tasks = useSelector(state => filterTasksByTitle(state, query));

  return (
    <List>
      {tasks.map(task => (
        <ListItem
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
            done={task.done}
            complete
          >
            <CheckIcon />
          </Button>
          <StyledNavLink task done={task.done} to={`/task/${task.id}`}>{task.title}</StyledNavLink>
          <Button
            onClick={() => dispatch(removeTask(task.id))}
            remove
          >
            <DeleteIcon />
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TasksList;