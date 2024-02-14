import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../features/tasks/tasksSlice";
import { Main } from "../common/Main";
import { Section } from "../common/Section";
import { Subheading } from "../common/Heading";
import { Paragraph } from "../common/Paragraph";


const Task = () => {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Main>
      <Section about>
        <Subheading>{task ? task.title : "There is no task with that ID"}</Subheading>
        <Paragraph>{task.content}</Paragraph>
        <Paragraph>{`Done: ${task.done ? "Yes" : "No"}`}</Paragraph>
      </Section>
    </Main>
  );

};

export default Task;