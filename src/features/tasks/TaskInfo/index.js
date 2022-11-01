import Container from "../../../common/Container";
import Section from "../../../common/Section";
import Paragraph from "../../../common/Paragraph";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

const TaskInfo = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Section
                title={task ? task.title : "There is no task with that ID"}
                body={
                    task &&
                    (<>
                        <Paragraph description={task.content} />
                        <Paragraph description={`Done: ${task.done ? "Yes" : "No"}`} />
                    </>)
                }
            />
        </Container>
    );

};

export default TaskInfo;